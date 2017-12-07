'use strict';

module.exports = function(BootcampResolved) {

	BootcampResolved.createUserBootcamp = function(playerId,answerId,questionId,callback){
    BootcampResolved.app.models.Bootcamp.findByQuestionId(questionId, function(err, bootcampId){
      BootcampResolved.findOne({
          where:{
            usersId:playerId,
            bootcampId:bootcampId,
            resolved:false
          }
      }, function(err,bootcamp){
      if(err) return callback(err);
      if(!bootcamp){
        console.log(answerId);
        BootcampResolved.create({
            playerAnswer : answerId,
            usersId : playerId,
            bootcampId : bootcampId
        }, function(err, userBootcamp){
          if(err) return callback(err);
          return callback(null,userBootcamp);
        });
        return;
      }
      return callback(null);
      });
    });
	};

	BootcampResolved.createPuzzleBootcamp = function(playerId,answer,questionId,callback){
		BootcampResolved.app.models.Bootcamp.findByQuestionId(questionId, function(err, bootcampId){
      BootcampResolved.findOne({
          where:{
            usersId:playerId,
            bootcampId:bootcampId,
            resolved:false
          }
      }, function(err,bootcamp){
      if(err) return callback(err);
      if(!bootcamp){
				BootcampResolved.create({
						puzzleAnswer : answer,
						usersId : playerId,
						bootcampId : bootcampId
				}, function(err, userBootcamp){
					if(err) return callback(err);
					return callback(null,userBootcamp);
				});
        return;
      }
      return callback(null);
      });
		});
	};


	/**
   * Mark bootcamp resolved and give the user points 
   * @param userId, bootcampResolvedId, questionId
   * @param callback
   */
  BootcampResolved.markResolved = function(userId, bootcampResolvedId, questionId, callback) {
     BootcampResolved.findOne({
     	where:{
     		usersId: userId,
     		id: bootcampResolvedId
     	}
     }, function(err, userBootcamp){
     	if(err) return callback(err);
     	userBootcamp.updateAttributes({resolved:true}, function(err, resolvedBootcamp){

     		// BootcampResolved.app.models.QuestionPoints.findPointsForQuestion(questionId, function(err, points){
     		// 	BootcampResolved.app.models.UserDetails.addPoints(userId,points, function(err, profile){
     		// 		return callback(null,points);
     		// 	});
     		// });
        if(err) return callback(err);
        return callback(null,resolvedBootcamp);
     	});
     });  
  };

  BootcampResolved.remoteMethod(
      'markResolved',
      {
         description: 'Mark the bootcamp as resolved by id for user, id for bootcampResolved and id for question',
         http: {path: '/markResolved', verb: 'post'},
         accepts: [{arg: 'userId',type: 'string'},{arg: 'bootcampResolvedId',type: 'string'},{arg: 'questionId',type: 'string'} ],
         returns: [{arg:"points",type:"number", root:true}]
      }
  );
};
