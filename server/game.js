'use strict';
var io = require('socket.io');
const uuidV4 = require('uuid/v4');
//*******socket properties********
//socket.player
//socket.game
//socket.currentRoom
//socket.rematch
//socket.answerChecked
//socket.gameLeave
//onDisconnect: mark player as inactive and notify opponent 
exports.onDisconnect = function(app,socket,sockets){
  if(socket.player === undefined) return;
    let active = false;
    app.models.users.changeActivity(active,socket.player.userId,function(err,user){
      if(err) return socket.emit("ErrorOnDisconnect",err);
      let room = socket.currentRoom;
      app.io.sockets.in(room).emit("disconnected", user);
      console.log(""+(new Date()) + ": player disconnected: %j ", user.id);
      if(user.id != undefined || user.id != null){
        let userId = user.id;
        app.models.GamePlay.InGame(userId, function(err,game){
          if(game != undefined || game != null) {
            let gameId = game.id;
            app.models.Game.EndGame(gameId, function(err,inactiveGame){
            });
          }
        });
      }
      socket.player = null;
      socket.game = null;
      return;
    });
  };
//map the player to the socket 
exports.registerPlayer = function(app,socket, player){
    if(player === undefined || player === null || player.userId === null || player.id === null || player.id === undefined || player.userId === undefined){
      let message = "Please add the user id and the token id";
      socket.emit("MissingPlayerData",message);
      return;
    } 
    socket.player = player;
    socket.player.userId = player.userId;
    socket.emit("registeredPlayer", socket.player);
    return;
};
exports.createGame = function(app,socket,player){
  //playerId
  let playerId = player.userId;
  //check if player is registered or in a game
  preGameCheck(app,player,socket,function(err,result){
    if(result === true){
      //the subCategoryId requested from the user
      let subCategoryId = player.subCategoryId;
      //check if there are any games matching the user requested game
      app.models.Game.Matchmaking(subCategoryId,playerId, function(err,gameId){
        if(gameId != undefined){
          app.models.GamePlay.joinGame(gameId,playerId, function(err,game){
            if(err || !game){
              let message = "Failed joining game";
              socket.emit("FailedJoiningGame", message);
              return;
            }
            //emit to player he joined the game
            socket.emit("GameJoinedSuccessfully",game);
            //find the other player and join them in room
            startGame(app,game,playerId,subCategoryId,socket,function(err,result){});
          });
          return;
        }
        //create new game object if no mathing games
        createGame(app,subCategoryId,playerId,socket, function(err,game){}); 
        socket.game = true;
      }); 
    }
    return;
  });
};
//check if the answer is correct 
exports.checkAnswer = function(app,socket,roundData){
  //set that the player with this socket has answered for this round
  socket.answerChecked = true;
  let questionId = roundData.questionId;
  let answer = roundData.answer;
  let playerId = socket.player.userId;
  let gameId = roundData.gameId;

  //find question type and check answers
  app.models.Question.verifyAnswer(questionId,answer,playerId,gameId, function(err,result){
    let message = "Error while checking the answer";
    if(err) socket.emit('ErrorCheckingAnswer',message);
      if(result.points !== undefined){
         socket.points = result.points;
      }
    //emit to the socket the answer result
    socket.emit('answerChecked',result);
    //find the other player socket
    findOtherPlayer(app,gameId,playerId, function(err,otherSocket){
 
      //if the other player didn't answered his question, emit waiting
      if(otherSocket.answerChecked === undefined || otherSocket.answerChecked === false){
        let message = "Waiting for other player to answer";
        socket.emit('waitingForOtherPlayer', message);
        return;
      }
      if(otherSocket.points !== undefined ){
        var otherPlayerPoints = otherSocket.points
        socket.emit('otherPlayerPoints',otherPlayerPoints);
      }
      if(socket.points !== undefined){
        otherPlayerPoints = socket.points;
        otherSocket.emit('otherPlayerPoints',otherPlayerPoints);
      }
      //set the socket answered property to false for both
      socket.answerChecked = false;
      otherSocket.answerChecked = false;
      //find random question avoiding the ones that have already been sent
      getQuestion(app,socket,otherSocket,roundData);
    });  
  });  
};
//when timer ends and player didn't answer
exports.onTimerEnd = function(app,socket,roundData) {
  let message = "Answer is already checked";
  if(socket.answerChecked === true) return socket.emit('ErrorCheckingAnswer', message);
  let gameId = roundData.gameId;
  let playerId = socket.player.userId;
  let subCategoryId = roundData.subCategoryId;
  socket.answerChecked = true;
  let answerId = null;
  let questionId = roundData.questionId;
  app.models.BootcampResolved.createUserBootcamp(playerId,answerId,questionId, function(err, userBootcamp){
    findOtherPlayer(app,gameId,playerId, function(err,otherSocket){
      //if the other player didn't answered his question, emit waiting
      if(otherSocket.answerChecked === undefined || otherSocket.answerChecked === false){
        let message = "Waiting for other player to answer";
        socket.emit('waitingForOtherPlayer', message);
        return;
      }
      //set the socket answered property to false for both
      socket.answerChecked = false;
      otherSocket.answerChecked = false;
      getQuestion(app,socket,otherSocket,roundData);
    });
  });
};
//send request for battle to friend
exports.battleFriend = function(app,socket,sockets,battleData){
  //battleData => otherPlayer => userDetails -> take users id
  //battleData.player -> same as normal game
  //battleData.otherPlayer = holds usersId
  //check game requirements
  let player = battleData.player;
  preGameCheck(app,player,socket,function(err,result){
    if(result === true){findSocketWithPlayer
      //find other player
      let otherPlayerId = battleData.otherPlayer;
      let playerId = player.userId;
      findSocketWithPlayer(app,otherPlayerId,function(err,otherSocket){
         //if he's not connected - notify player
          if(otherSocket === null){
            let message = "Other player is offline.";
            socket.emit("ErrorFindingPlayer",message);
            return;
          }
        //if other player is connected //create new game
        let subCategoryId = player.subCategoryId;
        createPrivateGame(app,subCategoryId,playerId,socket, function(err,game){
          socket.game = true;
          let gameId = game.id;
          //find player user details
          app.models.UserDetails.findUser(playerId, function(err, userDetails){
            if(err || !userDetails) return otherSocket.emit("ErrorGettingPlayerDetails", err);
            let gameData = {};
            gameData.gameId = game.id;
            gameData.playerDetails = userDetails;
            //send request to friend
            otherSocket.emit("BattleRequest",gameData);
          });
        }); 
      });
    }
  });
};
//when players quits the game
exports.leaveGame = function(app,socket,gameId,sockets){
  socket.gameLeave = true;
  //loser id
  let playerId = socket.player.userId;
  //find the other player and tell him the player resigned
  findOtherPlayer(app,gameId,playerId, function(err,otherSocket){
    if(otherSocket.gameLeave === true){
      let message = "Other player left the game."
      return socket.emit("ErrLeavingGame", message);
    }
    let winnerPlayerId = otherSocket.player.userId;
    //add 25points to the other player and emit these points to him
    //just for testing while I add the points system
    app.models.GamePlay.onGameLeave(gameId,playerId, function(err, points){
      otherSocket.emit("OtherPlayerQuitGame", points);
      //mark the game as inactive
      app.models.Game.EndGame(gameId, function(err,inactiveGame){});
      //mark winner
      app.models.GamePlay.markLoser(gameId,playerId, function(err,lostGame){});
      //mark looser
      app.models.GamePlay.markWinner(gameId,winnerPlayerId,function(err, wonGame){});
      //update users total points
      app.models.GamePlay.addPointsToUser(gameId,playerId, function(err,user){});
      app.models.GamePlay.addPointsToUser(gameId,winnerPlayerId, function(err,user){});
      //remove the game property from sockets
      socket.game = false;
      otherSocket.game = false;
      socket.gameLeave = false;
      otherSocket.gameLeave = false;
      socket.points = undefined;
      otherSocket.points = undefined;
      let room = socket.currentRoom;
      leaveRoom(app,room);
      socket.currentRoom = "";
      otherSocket.currentRoom = "";
    });
  }); 
};
//when player requests rematch 
exports.onRematch = function(app,socket,rematch){
  socket.rematch = true; 
  let playerId = socket.player.userId;
  let oldGameId = rematch.oldGameId;
  let subCategoryId = rematch.subCategoryId;
  findOtherPlayer(app,oldGameId,playerId, function(err,otherSocket){
    if(otherSocket.rematch === true){
      let message = "Rematch already requested from other player. Accept rematch";
      socket.emit('ErrRequestingRematch', message);
      return;
    }
    createPrivateGame(app,subCategoryId,playerId,socket, function(err,game){
      if(err || !game){
        let message = "Failed joining game";
        socket.emit("FailedJoiningGame", message);
        return;
      }
      let gameId = game.id;
      otherSocket.emit("rematchRequested", gameId);
    }); 
    //set socket game property to true;
    socket.game=true;
  });
};
//when player accepts the rematch
exports.rematchAccepted = function(app,socket,gameId){
  let playerId = socket.player.userId;
  socket.game = true;
  //create GamePlay for the player
  app.models.GamePlay.joinGame(gameId,playerId, function(err,game){
    if(err || !game){
      let message = "Failed joining game";
      socket.emit("FailedJoiningGame", message);
      return;
    }
    //let room = socket.currentRoom;
    findOtherPlayer(app,gameId,playerId, function(err,otherSocket){
      let errMsg = "Other player left game room";
      if(err || !otherSocket) return socket.emit("ErrFindingPlayer", errMsg);
      //emit match is accepted
      let message = "Other player accepted match";
      otherSocket.emit("PlayerAcceptedMatch",message);
      //create game room
      joinRoom(socket,otherSocket,function(err,room){
        app.io.sockets.in(room).emit("GameStarting",game);
        //get a random question to emit
        let subCategoryId = game.subCategoryId;
        app.models.Question.findRandomQuestion(subCategoryId,function(err,round){
          if(round === undefined){ 
            let message = "No questions matching this criteria found";
            app.io.sockets.in(room).emit('NoQuestionFound',message);
            return;
          }
          //emit first question to the room
          let message = "Please disconnect from the game and try one more time";
          if(err) return app.io.sockets.in(room).emit('ErrorSendingQuestion',message);
          app.io.sockets.in(room).emit("Round",round);
        });
      })
    });
  });
};
//when player rejects the rematch
exports.rematchDeclined = function(app,socket,gameId){
  let playerId = socket.player.userId;
  //let the other player now the match is declined
  findOtherPlayer(app,gameId,playerId, function(err,otherSocket){
    let message = "Other player declined the game!"
    otherSocket.emit('PlayerDeclinedMatch',message);
    //let room = otherSocket.currentRoom;
    // otherSocket.leave(room);
    playerId = otherSocket.player.userId;
    //mark the game as inactive
    let otherPlayerId = otherSocket.player.userId;
    app.models.Game.deleteGame(gameId,playerId, function(err,result){
      if(result === false){
        let message = "Error deleting game. The game id seems to be incorrect!"
        socket.emit("ErrorDeletingGame", message);
        return;
      }
      socket.rematch = false;
      otherSocket.rematch = false;
      socket.game = false;
      otherSocket.game = false;
    });
  });
};
//when user decides to cancel looking for an opponent 
exports.cancelGame = function(app,socket,gameId){
  let playerId = socket.player.userId;
  app.models.Game.deleteGame(gameId,playerId,function(err,result){
    if(result === false){
      let message = "Error deleting game. The game id seems to be incorrect!"
      socket.emit("ErrorDeletingGame", message);
      return;
    }
    let message = "Game succesfully deleted!";
    socket.emit("GameCanceled",message);
    socket.game=false;
    return;
  });
};
//////////////////////////
// OBJECT FINDERS //
//////////////////////////
function preGameCheck(app,player,socket,callback){
   //check if player is registered 
    if(socket.player === undefined) {
      console.log(""+(new Date()) + ": ERROR: player not bound to socket!");
      let message = "Internal server error. Please sign out and sign in again."
      socket.emit("newGameCreationFailed", message);
      return callback(null,false);
    }
    //playerId
    let playerId = player.userId;
    //mark the player as active so he cannot join/create other games
    markPlayerAsActive(app,playerId,socket,function(err,result){
        //if cannot mark user as active
        if(result === false){
          let message = "Error while registering the user";
          socket.emit("userRegistrationFailed",message);
          return callback(null,false);
        } 
      //user marked as active
      //socket.emit("registeredPlayer", player);
      //check whether player is already in game
      app.models.GamePlay.InGame(playerId, function(err,game){
        if(game != undefined || game != null) {
          console.log(""+(new Date()) + ": ERROR: player already in game");
          let message = "You already registered in game";
          socket.emit("newGameCreationFailed", message);
          return callback(null,false);
        }
      return callback(null,true);
      });
    });
}
function startGame(app,game,playerId,subCategoryId,socket,callback){
  let gameId = game.id;
  findOtherPlayer(app,gameId,playerId, function(err,otherSocket){
    //put sockets in room
    joinRoom(socket,otherSocket,function(err,room){
      if(err || !room){
        let message = "Error creating game room";
        socket.emit("ErrJoiningRoom",message);
        otherSocket.emit("ErrJoiningRoom",message);
        return;
      }
      //emit to both player the user details
      app.models.UserDetails.findUser(playerId, function(err, userDetails){
        if(err) return otherSocket.emit("ErrorGettingPlayerDetails", err);
        //emit user details

        otherSocket.emit("otherPlayerDetails", userDetails);

        //get the other playerId
        let otherPlayerId = otherSocket.player.userId;
        app.models.UserDetails.findUser(otherPlayerId, function(err, userDetails){
          if(err) return otherSocket.emit("ErrorGettingPlayerDetails", err);
          //emit player details
          socket.emit("otherPlayerDetails", userDetails);

          //emit to players in room the game can start;
          app.io.sockets.in(room).emit("GameStarting",game);
          //get a random question to emit
          app.models.Question.findRandomQuestion(subCategoryId,function(err,round){
            if(err || round === undefined){ 
              let message = "No questions matching this criteria found";
              app.io.sockets.in(room).emit('NoQuestionFound',message);
              //set the socket answered property to false for both
              socket.answerChecked = false;
              otherSocket.answerChecked = false;
              return callback(null,false);
            }
          //emit first round to the room
          socket.answerChecked = false;
          otherSocket.answerChecked = false;

          app.io.sockets.in(room).emit("Round",round);
          return callback(null,true)
          });
        });
      });
    })
  });
}
//used for creating of battle game
function createGame(app,subCategoryId,playerId,socket,callback){
   if(socket.game === true){
     let message = "You are already registered in game";
          socket.emit("newGameCreationFailed", message);
          return;
   }
   app.models.Game.create({
          subCategoryId : subCategoryId
        }, function(err, game){
          if(err || !game){
            let message = "Error creating new game";
            socket.emit("newGameCreationFailed", message);
            return;
          }
          //assign the player to the game
          app.models.GamePlay.create({
            gameId: game.id,
            usersId: playerId
          }, function(err, gameplay){
            if(err || !gameplay){
              socket.emit("AssigningGameToPlayerFailed", playerId);
              return;
            }
            console.log(""+(new Date()) + ": new game created: " + game.id);
            socket.emit("gameCreated", game);
            return callback(null,game);
          });
      });
   return;
}
//used to create game for rematch and battle friend
function createPrivateGame(app,subCategoryId,playerId,socket,callback){
   if(socket.game === true){
     let message = "You are already registered in game";
          socket.emit("newGameCreationFailed", message);
          return;
   }
   app.models.Game.create({
          subCategoryId : subCategoryId,
          maxPlayers:true
        }, function(err, game){
          if(err || !game){
            let message = "Error creating new game";
            socket.emit("newGameCreationFailed", message);
            return;
          }
          //assign the player to the game
          app.models.GamePlay.create({
            gameId: game.id,
            usersId: playerId
          }, function(err, gameplay){
            if(err || !gameplay){
              socket.emit("AssigningGameToPlayerFailed", playerId);
              return;
            }
            console.log(""+(new Date()) + ": new game created: " + game.id);
            socket.emit("gameCreated", game);
            return callback(null,game);
          });
      });
}
function getQuestion(app,socket,otherSocket,roundData){
  let room = socket.currentRoom;
  let subCategoryId = roundData.subCategoryId;
  let gameId = roundData.gameId;
  let questionIds = roundData.questionIds;
  let playerId = socket.player.userId;
  if(roundData.round >= 11){
       app.models.Game.EndGame(gameId,function(err,inactiveGame){
        //find the game result: emitting winner/tie
        app.models.GamePlay.findGameResult(gameId, function(err, gameResult){
            //emit the game result
            app.io.sockets.in(room).emit('GameOver',gameResult);
            //update users total points
            app.models.GamePlay.addPointsToUser(gameId,playerId, function(err,user){});
            app.models.GamePlay.addPointsToUser(gameId,otherSocket.player.userId, function(err,user){
            //set the socket game property to false
            socket.game=false;
            otherSocket.game=false;
            socket.rematch=false;
            otherSocket.rematch=false;
            socket.points=0;
            otherSocket.points=0;
            socket.answerChecked=false;
            otherSocket.answerChecked=false;
            let room = socket.currentRoom;
            leaveRoom(app,room);
            socket.currentRoom = "";
            otherSocket.currentRoom = "";
            });
            return;
        });
      });
      return;
    }
      if(roundData.round === 10){
        app.models.Question.getRandomQuestion11(subCategoryId, function(err,round){
          if(round === undefined){ 
              let message = "No questions matching this criteria found";
              app.io.sockets.in(room).emit('NoQuestionFound',message);
              return;
            }
          //emit the next round
          app.io.sockets.in(room).emit('Round',round);
        });
        return;
       }
      app.models.Question.findRandomQuestionWithoutDuplicated(subCategoryId,questionIds, function(err,round){
        if(round === undefined){ 
          let message = "No questions matching this criteria found";
          app.io.sockets.in(room).emit('NoQuestionFound',message);
          return;
        }
        app.io.sockets.in(room).emit('Round',round);
      });
}
function joinGame(app,socket,gameId,playerId,callback){
  app.models.GamePlay.joinGame(gameId,playerId, function(err,game){
    if(err || !game){
      socket.emit("FailedJoiningGame", "Failed joining game");
      return callback(err);
    }
    //emit to player he joined the game
    socket.emit("GameJoinedSuccessfully",game);
    return callback(null,game)
  });
}
function findOtherPlayer(app,gameId,playerId, callback){
  var sockets = Object.keys(app.io.sockets.sockets);  
  //findOtherPlayerId
  app.models.GamePlay.findPlayerId(gameId,playerId, function(err,otherPlayerId){
    if(otherPlayerId !== undefined){
    //find the socket with this playerId
    findSocketWithPlayer(app,otherPlayerId,function(err,otherPlayerSocket){
        if(err) return callback(err);       
        return callback(null,otherPlayerSocket);
     });
    }
  });
}
function findSocketWithPlayer(app,playerId, callback){
  var sockets = Object.keys(app.io.sockets.sockets);  
  for(var s=0; s<sockets.length; s++){
    var socketId = sockets[s];
    var otherSocket = app.io.sockets.connected[socketId];
    if(otherSocket === undefined){
      let otherSocket = null;
      return callback(null,otherSocket)
    }
    if(otherSocket.player === undefined){
      let otherSocket = null;
      return callback(null,otherSocket);
    }
    if(otherSocket.player.userId === playerId){
      return callback(null,otherSocket);
    }
  }
  otherSocket = null;
  return callback(null,otherSocket); 
}
function markPlayerAsActive(app,playerId,socket,callback){
  let active = true;
  app.models.users.changeActivity(active,playerId,function(err,player){
      if(err) return callback(null,false);
      return callback(null,true);
  });
}
function deleteGame(app,gameId, callback){
  app.models.Game.destroyById(gameId, function(err){
    if(err) return callback(err);
    return callback(null);
  });
}
function joinRoom(socket,otherSocket,callback){
  let room = uuidV4();
  socket.join(room);
  otherSocket.join(room);
  socket.currentRoom = room;
  otherSocket.currentRoom = room;
  return callback(null,room);
}
function leaveRoom(app,room, namespace = '/'){
    let roomObj = app.io.nsps[namespace].adapter.rooms[room];
    if (roomObj) {
        // now kick everyone out of this room
        Object.keys(roomObj.sockets).forEach(function(id) {
            app.io.sockets.connected[id].leave(room);
        })
    }
}
//changed to UUID
// function randomString(bits) {
//   var chars,rand,i,ret;
//     chars='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-';
//     ret='';
//     // in v8, Math.random() yields 32 pseudo-random bits (in spidermonkey it gives 53)
//   while(bits > 0){
//         rand=Math.floor(Math.random()*0x100000000) // 32-bit integer
//         // base 64 means 6 bits per character, so we use the top 30 bits from rand to give 30/6=5 characters.
//         for(i=26; i>0 && bits>0; i-=6, bits-=6) ret+=chars[0x3F & rand >>> i]
//   }
//     return ret;
// };