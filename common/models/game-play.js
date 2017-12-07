'use strict';

module.exports = function(Gameplay) {

	Gameplay.findGamePlayers = function(gameId, callback){
		Gameplay.find({where:{
				gameId : gameId
			}
		}, function(err, players){
		   if(err){
		   	return callback(err);

		   }
           return callback(null,players);
		});
	};
    
    //find the other player id
	Gameplay.findPlayerId = function(gameId, playerId, callback){
		Gameplay.findOne({
			where:{
				gameId:gameId,
				usersId: { neq : playerId}
			}
		}, function(err,gameplay){
			if(err || !gameplay){
			return callback(err);
			}

			var otherPlayerId = gameplay.usersId;
			return callback(null,otherPlayerId);
		})
	};
    
    //check if a player is in the game
	Gameplay.InGame = function(userId, callback){
		Gameplay.find({
			where:{
				usersId : userId
				}
			}, function(err, gameplays){
				var gamesIds = gameplays.map(function(gameplay){
				return gameplay.gameId;
			    });

			    Gameplay.app.models.Game.findOne({
			    	where:
			    	{
			    	id: {inq: gamesIds},
			    	active : true
			        }
			    }, function(err, game){
                    if(err) return callback(err);
			    	return callback(null,game);
			    });
			}
		);
	};

    //Player joins a game
    Gameplay.joinGame = function(gameId, playerId, callback){
    	//DB transactions: limit to 1 creation at a time
    	Gameplay.beginTransaction({
    		isolationLevel: Gameplay.Transaction.READ_COMMITTED,
    		timeout: 30000 // 30000ms = 30s
    	}, function(err, tx) { 

		  //Now we have a transaction (tx)
		  	Gameplay.create({
		  		gameId:gameId,
		  		usersId:playerId
		  	},{transaction: tx}, function(err, gameplay){
		  		if(err || !gameplay){
		  			tx.rollback(function(err){});
		  			return callback(err);
		  		}

		  		Gameplay.app.models.Game.maxPlayers(gameId,function(err,game){
		  			if(err){
			  			tx.rollback(function(err){});
			  			return callback(null,err);
		  		    }
		  		    tx.commit(function(err){});
		  		    return callback(null,game);
		  		})

		  	});
		});
    };
    //mark the winner of the game
    Gameplay.markLoser = function(gameId,playerId, callback){
    	Gameplay.findOne({
    		where: {
    			gameId:gameId,
    			usersId:playerId
    		}
    	}, function(err,gameplay){
    		gameplay.updateAttributes({lost:true}, function(err,lostGame){
    			if(err) return callback(err);
    			return callback(null,lostGame);
    		});
    	});
    };
    //mark the winner of the game
    Gameplay.markWinner = function(gameId,playerId, callback){
    	Gameplay.findOne({
    		where: {
    			gameId:gameId,
    			usersId:playerId
    		}
    	}, function(err,gameplay){
    		gameplay.updateAttributes({won:true}, function(err,wonGame){
    			if(err) return callback(err);
    			return callback(null,wonGame);
    		});
    	});
    };

    //Add points for a gamePlay
    Gameplay.addGamePoints = function(playerId, gameId,pointsValue, callback){
    	Gameplay.findOne({
    		where:{
    			usersId : playerId,
    			gameId : gameId
    		}
    	}, function(err, gameplay){
    		if(err) return callback(err);
    		//get the game points
            let gamePoints = gameplay.points;
            //update them with new round points
            gamePoints += pointsValue;

            gameplay.updateAttributes({points:gamePoints}, function(err,updatedGamePlay){
            	if(err) return callback(err);
            	return callback(null,updatedGamePlay);
            });
    	});
    };
    
    //See what's the game result
    Gameplay.findGameResult = function(gameId,callback){
    	Gameplay.find({
    		where:{
    			gameId: gameId
    		}
    	}, function(err, gameplays){

    		if(err) return callback(err);
        
            var highestIndex = 0;
            var highestScore = gameplays[0].points;
            for(var i=1; i<gameplays.length; i++){
            	if(gameplays[i].points > highestScore){
            		//mark winner and looser 
            		gameplays[0].updateAttributes({lost:true},function(err, looser){});
            		gameplays[i].updateAttributes({won:true}, function(err, winner){
            			let gameResult = winner;
            			return callback(null,gameResult);
            		});
            		return;
            	}
            	if(gameplays[i].points === highestScore){
            		let gameResult = "Tie";
            		return callback(null,gameResult);
            	}            	//let gameResult = gameplays[0];
            	gameplays[i].updateAttributes({lost:true},function(err, looser){});
            	gameplays[0].updateAttributes({won:true}, function(err, winner){
            			let gameResult = winner;
            			return callback(null,gameResult);
            	});
            	return;
            }
    	});
    };
    //On game end -> add the points from the game to the user's total points
    Gameplay.addPointsToUser = function(gameId,playerId,callback){
    	Gameplay.findOne({
    		where:{
    			gameId: gameId,
    			usersId: playerId
    		}
    	}, function(err,gameplay){
    		if(err) return callback(err);
    		//points for the whole game
    		let gamePoints = gameplay.points;
    		//find the user
    		Gameplay.app.models.UserDetails.findOne({
    			where:{
    				usersId: playerId
    			}
    		}, function(err,userDetails){
    			if(err || !userDetails) return callback(err);
    			let userPoints = userDetails.points;
    			userPoints += gamePoints;
    			//update user Total points
    			userDetails.updateAttributes({points:userPoints}, function(err, userUpdated){
    				return callback(null,userUpdated);
    			});
    		});
    	});
    };

    Gameplay.onGameLeave = function(gameId,playerId,callback){
        Gameplay.findOne({
            where:{
                gameId:gameId,
                usersId: playerId
            }
        }, function(err, leaver){
            if(err) return callback(err);
            //remove points from the leaver
            Gameplay.app.models.Points.findOne({
                where:{
                    id: 3
                }
            }, function(err,leaverPoints){
                if(err) return callback(err);

                let playerPoints = leaver.points;
                playerPoints += leaverPoints.value;
                leaver.updateAttributes({points:playerPoints}, function(err, loserMatch){});

                //give points to the other player
                Gameplay.findOne({
                where:{
                    gameId : gameId,
                    usersId : { neq : playerId }
                }
                }, function(err, nonleaver){
                     if(err) return callback(err);
                     // find the points for the non-leaver
                    Gameplay.app.models.Points.findOne({
                        where:{
                            id:4,
                            multiPlayer:true,
                        }
                    }, function(err, foundPoints){
                        if(err) return callback(err);

                        let winnerPoints = nonleaver.points;
                        winnerPoints += foundPoints.value;
                        nonleaver.updateAttributes({points : winnerPoints}, function(err, winnerMatch){
                            //emit to player how many points he's winning
                            let points = foundPoints.value;
                            return callback(null,points);
                        });
                    });
                });
            });
        });
    };

   /**
   * Returns total battles for player
   * @param userId
   */
    Gameplay.getTotalBattles = function(userId,callback) {

        Gameplay.find({where:{
            usersId: userId
        }}, function(err,gameplays){
            if(err || !gameplays) return callback(err);
            let gamesIds = gameplays.map(function(gameplay){
                return gameplay.gameId;
            }); 
            Gameplay.app.models.Game.find({where:{
                id: { inq: gamesIds}, 
                active: false
            }}, function(err,foundGames){
                let games = foundGames.length;
                return callback(null,games);
            });
        });
    };

    Gameplay.remoteMethod(
        'getTotalBattles',
        {
          description: 'Get total battles by id for user',
          http: {path: '/getTotalBattles', verb: 'get'},
          accepts: {arg: 'userId', type: 'string', http: { source: 'query' } },
          returns: [{arg:"games",type:"array", root:true}]
        }
    );

   /**
   * Returns total won battles for player
   * @param userId
   */
    Gameplay.getWonBattles = function(userId,callback) {

        Gameplay.find({where:{
            usersId: userId,
            won: true
        }}, function(err,gameplays){
            if(err || !gameplays) return callback(err);
            let gamesIds = gameplays.map(function(gameplay){
                return gameplay.gameId;
            }); 
            Gameplay.app.models.Game.find({where:{
                id: { inq: gamesIds}, 
                active: false
            }}, function(err,foundGames){
                let games = foundGames.length;
                return callback(null,games);
            });
        });
    };

    Gameplay.remoteMethod(
        'getWonBattles',
        {
          description: 'Get won battles by id for user',
          http: {path: '/getWonBattles', verb: 'get'},
          accepts: {arg: 'userId', type: 'string', http: { source: 'query' } },
          returns: [{arg:"games",type:"array", root:true}]
        }
    );

   /**
   * Returns total won battles for player
   * @param userId
   */
    Gameplay.getLostBattles = function(userId,callback) {

        Gameplay.find({where:{
            usersId: userId,
            lost: true
        }}, function(err,gameplays){
            if(err || !gameplays) return callback(err);
            let gamesIds = gameplays.map(function(gameplay){
                return gameplay.gameId;
            }); 
            Gameplay.app.models.Game.find({where:{
                id: { inq: gamesIds}, 
                active: false
            }}, function(err,foundGames){
                let games = foundGames.length;
                return callback(null,games);
            });
        });
    };

    Gameplay.remoteMethod(
        'getLostBattles',
        {
          description: 'Get lost battles by id for user',
          http: {path: '/getLostBattles', verb: 'get'},
          accepts: {arg: 'userId', type: 'string', http: { source: 'query' } },
          returns: [{arg:"games",type:"array", root:true}]
        }
    );
   
   /**
   * Returns total won battles for player
   * @param userId
   */
    Gameplay.getTieBattles = function(userId,callback) {

        Gameplay.find({where:{
            usersId: userId,
            lost: false,
            won: false
        }}, function(err,gameplays){
            if(err || !gameplays) return callback(err);
            let gamesIds = gameplays.map(function(gameplay){
                return gameplay.gameId;
            }); 
            Gameplay.app.models.Game.find({where:{
                id: { inq: gamesIds}, 
                active: false
            }}, function(err,foundGames){
                let games = foundGames.length;
                return callback(null,games);
            });
        });
    };

    Gameplay.remoteMethod(
        'getTieBattles',
        {
          description: 'Get tie battles by id for user',
          http: {path: '/getTieBattles', verb: 'get'},
          accepts: {arg: 'userId', type: 'string', http: { source: 'query' } },
          returns: [{arg:"games",type:"array", root:true}]
        }
    );

};
