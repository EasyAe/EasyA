'use strict';

module.exports = function(Questionpoints) {

	Questionpoints.addPoints = function(questionId, playerId, gameId,callback){
		Questionpoints.find({
			where:{
				questionId: questionId,
			}
		}, function(err,questionPoints){
			if(err) return callback(err);
			//ToDO add err handling for empty questionPoints
			var pointsIds = questionPoints.map(function(questionpoint){
				return questionpoint.pointsId;
			});
			//find the right points and its value
			Questionpoints.app.models.Points.findOne({
				where:{
					id: {inq: pointsIds},
					multiPlayer:true
				}
			}, function(err,points){
				if(err) return callback(err);
                let pointsValue = points.value;
			    Questionpoints.app.models.GamePlay.addGamePoints(playerId,gameId,pointsValue, function(err, updatedGamePlay){
	            	if(err) return callback(err);
	            	let gamePoints = updatedGamePlay.points;
	            	return callback(null,gamePoints);
			    });
			});
		});
	};

	Questionpoints.findPointsForQuestion = function(questionId, callback) {
		Questionpoints.find({
     			where:{
     				questionId: questionId
     			}
     		}, function(err, questionPoints) {
     			if(err) return callback(err);
     			//ToDO add err handling for empty questionPoints
				var pointsIds = questionPoints.map(function(questionpoint){
					return questionpoint.pointsId;
				});
				//find the right points and its value
				Questionpoints.app.models.Points.findOne({
					where:{
						id: {inq: pointsIds},
						singlePlayer:true
					}
				}, function(err,foundPoints){
					if(err) return callback(err);
					let points = foundPoints.value;
     				return callback(null,points);
     			});
     	});	
	};

};