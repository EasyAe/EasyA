'use strict';
module.exports = function(Game) {
    
    Game.maxPlayers = function(gameId, callback){
    	Game.findById(gameId, function(err,game){
    		game.updateAttributes({maxPlayers: true}, function(err,updatedGame){
              callback(null, updatedGame);
           }); 
    	});
    };
    //matchmaking function
	Game.Matchmaking = function(subCategoryId,playerId, callback){
		Game.find({
			where:
			{
				subCategoryId : subCategoryId,
				active : true,
				maxPlayers: false
			}}, 
			function(err,games){
            if(err || ! games) return callback(err);
			var gamesIds = games.map(function(game){
				return game.id;
			});
			//get the gameId for the next remote method from the 1st element in the array
			let gameId = gamesIds[0];
			return callback(null,gameId);           
		});
	};
	//mark the game as inactive
	Game.EndGame = function(gameId,callback){
		Game.findOne({
			where:{
				id: gameId
			}},
			function(err,game){
				game.updateAttributes({active:false}, function(err,inactiveGame){
					if(err) return callback(err);
					return callback(null,inactiveGame);
				});
			});
	};

	Game.deleteGame = function(gameId,playerId, callback){
		Game.beginTransaction({
    		isolationLevel: Game.Transaction.READ_COMMITTED,
    		timeout: 30000 // 30000ms = 30s
    	}, function(err, tx) { 

		  	Game.destroyById(gameId,{transaction: tx}, function(err){
		  		if(err){
		  			tx.rollback(function(err){});
		  			return callback(null,false);
		  		}

		  		Game.app.models.GamePlay.findOne({where:{
		  			usersId: playerId,
		  			gameId: gameId
		  		}}, function(err,gameplay){
		  			if(err || !gameplay){
		  				tx.rollback(function(err){});
				  		return callback(null,false);
		  			}
		  			let id = gameplay.id;
		  			Game.app.models.GamePlay.destroyById(id,function(err){
		  				if(err){
				  			tx.rollback(function(err){});
				  			return callback(null,false);
				  		}
				  	tx.commit(function(err){});
		  		    return callback(null,true);
		  			});
		  		})
		  	});
		});
	}
};