'use strict';
var loopback = require('loopback');
var boot = require('loopback-boot');
var game = require('./game');
var app = module.exports = loopback();
app.start = function() {
  // start the web server
  return app.listen(function() {
    app.emit('started');
    var baseUrl = app.get('url').replace(/\/$/, '');
    console.log('Web server listening at: %s', baseUrl);
    if (app.get('loopback-component-explorer')) {
      var explorerPath = app.get('loopback-component-explorer').mountPath;
      console.log('Browse your REST API at %s%s', baseUrl, explorerPath);
    }
  });
};
// Bootstrap the application, configure models, datasources and middleware.
// Sub-apps like REST API are mounted via boot scripts.
boot(app, __dirname, function(err) {
  if (err) throw err;
  var id;
  // start the server if `$ node server.js`
  if (require.main === module)
    //app.start();
    app.io = require('socket.io')(app.start());
    require('socketio-auth')(app.io, {
      authenticate: function (socket, value, callback) {
          var AccessToken = app.models.AccessToken;
          //get credentials sent by the client
          var token = AccessToken.find({
            where:{
              and: [{ userId: value.userId }, { id: value.id }]
            }
          }, function(err, tokenDetail){
            if (err) throw err;
            if(tokenDetail.length){
              callback(null, true);
            } else {
              callback(null, false);
            }
          }); //find function..
        } //authenticate function..
    });
    app.io.sockets.on('connection', function(socket){
      console.log('a user connected ');
      var sockets = Object.keys(app.io.sockets.sockets);  
      
      socket.on('reconnect', function() {
          console.log('reconnect fired!');
      });
      socket.on('registerPlayer', function(player){
        game.registerPlayer(app,socket,player);
      });
      socket.on('startGame',function(player){
        game.createGame(app,socket,player);
      });
      socket.on('battleFriend',function(battleData){
        game.battleFriend(app,socket,sockets,battleData);
      });
      socket.on('battleAccepted', function(gameId){
        game.rematchAccepted(app,socket,gameId);
      });
      socket.on('battleDeclined', function(gameId){
        game.rematchDeclined(app,socket,gameId);
      });
      socket.on('checkAnswer',function(roundData){
        game.checkAnswer(app,socket,roundData);
      });
      socket.on('timerEnd', function(roundData){
        game.onTimerEnd(app,socket,roundData);
      });
      socket.on('leaveGame', function(gameId){
        game.leaveGame(app,socket,gameId,sockets);
      });
      socket.on('rematch',function(rematch){
        game.onRematch(app,socket,rematch);
      });
      socket.on('rematchAccepted', function(gameId){
        game.rematchAccepted(app,socket,gameId);
      });
      socket.on('rematchDeclined', function(gameId){
        game.rematchDeclined(app,socket,gameId);
      });
      socket.on('cancelGame',function(gameId){
        game.cancelGame(app,socket,gameId);
      });
      socket.on('disconnect', function(){
         setTimeout(function () {
         //to add reconnect
         game.onDisconnect(app,socket,sockets);
          console.log('user disconnected');
          }, 10000);
        
      });
    });
    //var migrate = require('./autoupdate');
    //migrate(app);
});
