'use strict';

module.exports = function(Answer) {
  // Warn if overriding existing method
  if(Array.prototype.equals)
      console.warn("Overriding existing Array.prototype.equals. Possible causes: New API defines the method, there's a framework conflict or you've got double inclusions in your code.");
  // attach the .equals method to Array's prototype to call it on any array
  Array.prototype.equals = function (array) {
      // if the other array is a falsy value, return
      if (!array)
          return false;

      // compare lengths - can save a lot of time 
      if (this.length != array.length)
          return false;

      for (var i = 0, l=this.length; i < l; i++) {
          // Check if we have nested arrays
          if (this[i] instanceof Array && array[i] instanceof Array) {
              // recurse into the nested arrays
              if (!this[i].equals(array[i]))
                  return false;       
          }           
          else if (this[i] != array[i]) { 
              // Warning - two different object instances will never be equal: {x:20} != {x:20}
              return false;   
          }           
      }       
      return true;
  };
// Hide method from for-in loops
Object.defineProperty(Array.prototype, "equals", {enumerable: false});
  
  Answer.getAnswers = function(questionId, callback){
  	Answer.find({
      where:{
  		  questionId:questionId
  	  },  fields: {correct: false, order:false}}, function(err,answers){
  		if(err) return callback(err);
  		return callback(null,answers);
  	});
  }; 

  Answer.checkAnswer = function(answer,playerId, callback){
    let answerId = answer.id;
    Answer.findById(answerId, function(err,answer){
      if(err) return callback(err);
      //ToDo on correct answer - add points
      let questionId = answer.questionId;
      let result = {};
      if(answer.correct === false){
        result.answer = false;
        Answer.app.models.BootcampResolved.createUserBootcamp(playerId,answerId,questionId, function(err,userBootcamp){
            if(err) return callback(err);
        });
        return callback(null,result);
      }
      result.answer = true; 
      return callback(null,result);
    });
  };

  Answer.checkPuzzleAnswers = function(answer,questionId,playerId,callback){
    Answer.find({
      where: {
       questionId:questionId
      },
      order: 'order ASC'
    }, function(err,answers){
      if (err) return callback(err);
      //get answers ids in the right order
      var answersIds = answers.map(function(answer){
        return answer.id;
      });
      let result = {};
      result.answer = true;
      if (answersIds.equals(answer)) return callback(null,result);
      Answer.app.models.BootcampResolved.createPuzzleBootcamp(playerId,answer,questionId, function(err,userBootcamp){
            if(err) return callback(err);
            result.answer = false;
            return callback(null,result);
        });
    });
  };


 /**
   * Return boolean by answer id
   * @param id
   * @param callback
   */
  Answer.verifyAnswer = function(id,callback){
    Answer.findOne({
      where: {
        id : id
      }
    }, function(err,answer){
     if(err) return callback(err);
     if(answer === null) return callback(null);
     if(answer.correct === false){
        let result = false;
        return callback(null,result);
      }
      let result = true;
      return callback(null,result);
    });
  };

  Answer.remoteMethod(
    'verifyAnswer',
    {
      description: 'Verify answer by id for answer',
      http: {path:'/verifyAnswer', verb: 'get'},
      accepts:{arg:'id', type:'string', http: { source:'query' } },
      returns: [{arg:"result", type:"boolean", root:true}]
    }
  );

   /**
   * Return boolean by array of ids
   * @param array
   * @param callback
   */
  Answer.verifyPuzzleAnswer = function(questionId,answer,callback){
    Answer.find({
      where: {
       questionId:questionId
      },
      order: 'order ASC'
    }, function(err,answers){
      if (err) return callback(err);
      //get answers ids in the right order
      var answersIds = answers.map(function(answer){
        return answer.id;
      });
      let result = true;
      if (answersIds.equals(answer)) return callback(null,result);
      result = false;
      return callback(null,result);
    });
  };

  Answer.remoteMethod(
    'verifyPuzzleAnswer',
    {
      description: 'Verify answer by id for question and array with answer ids',
      http: {path:'/verifyPuzzleAnswer', verb: 'get'},
      accepts: [{arg: 'questionId',type: 'string'},{arg: 'answer',type: 'array'}],
      returns: [{arg:"result", type:"boolean", root:true}]
    }
  );


/**
   * Return boolean by answer id
   * @param id
   * @param callback
   */
  // Answer.answerCheck = function(userId,answerId,callback){
  //   Answer.findOne({
  //     where: {
  //       id : answerId
  //     }
  //   }, function(err,answer){
  //    if(err) return callback(err);
  //    if(answer === null) return callback(null);
  //    let result = {};
  //    if(answer.correct === false){
  //       result.correct = false;
  //       return callback(null,result);
  //     }
  //     result.correct = true;
  //     let questionId = answer.questionId;
  //     Answer.app.models.QuestionPoints.findPointsForQuestion(questionId, function(err, points){
  //       if(err) return callback(err);
  //         Answer.app.models.UserDetails.addPoints(userId,points, function(err, profile){
  //           if(err) return callback(err);
  //           result.points = points;
  //           console.log(result);
  //           return callback(null,result);
  //         });
  //     });
  //   });
  // };

  // Answer.remoteMethod(
  //   'checkAnswer',
  //   {
  //     description: 'Verifies answer by id for answer ids and adds points to the user (Used for BootcampResolved and single player mode)',
  //     http: {path:'/checkAnswer', verb: 'get'},
  //     accepts:[{arg: 'userId',type: 'string'},{arg: 'answerId',type: 'string'}],
  //     returns: [{arg:"result", type:"object", root:true}]
  //   }
  // );

   /**
   * Return boolean by array of ids
   * @param array
   * @param callback
   */
  // Answer.PuzzleAnswerCheck = function(questionId,answer,userId,callback){
  //   Answer.find({
  //     where: {
  //      questionId:questionId
  //     },
  //     order: 'order ASC'
  //   }, function(err,answers){
  //     if (err) return callback(err);
  //     //get answers ids in the right order
  //     var answersIds = answers.map(function(answer){
  //       return answer.id;
  //     });
  //     let result = {};
  //     result.correct = true;
  //     if (answersIds.equals(answer) === true){
  //       Answer.app.models.QuestionPoints.findPointsForQuestion(questionId, function(err, points){
  //         if(err) return callback(err);
  //         Answer.app.models.UserDetails.addPoints(userId,points, function(err, profile){
  //           if(err) return callback(err);
  //           result.points = points;
  //           return callback(null,result);
  //         });
  //       });
  //       return;
  //     }
  //     result.correct = false;
  //     return callback(null,result);
  //   });
  // };

  // Answer.remoteMethod(
  //   'checkPuzzleAnswer',
  //   {
  //     description: 'Verifies answer and adds poitns by question id and array with answer (BootcampResolved and single player mode)',
  //     http: {path:'/checkPuzzleAnswer', verb: 'get'},
  //     accepts: [{arg: 'questionId',type: 'string'},{arg: 'answer',type: 'array'}, {arg: 'userId',type: 'string'}],
  //     returns: [{arg:"result", type:"object", root:true}]
  //   }
  // );

  Answer.answerCheck = function(questionId,answer,userId,callback){
    Answer.app.models.Question.findOne({
      where:{
        id:questionId
      }
    }, function(err,question){
      if(err || !question) return callback(err);
      console.log(question.questionTypeId);
      if(question.questionTypeId === 1){
        let answerId = answer[0];
        console.log(answerId)
        Answer.findById(answerId, function(err,answer){
          if(err || !answer) return callback(err);
 
          let result = {};
          if(answer.correct === false){
            result.answer = false;
            console.log("bootcamp creation")
            Answer.app.models.BootcampResolved.createUserBootcamp(userId,answerId,questionId, function(err,userBootcamp){
                if(err) return callback(err);
            });
            return callback(null,result);
          }
          result.answer = true; 
          //add points to the user
          Answer.app.models.QuestionPoints.findPointsForQuestion(questionId, function(err, points){
            if(err || !points) return callback(err);
              Answer.app.models.UserDetails.addPoints(userId,points,function(err, profile){
                if(err || !profile) return callback(err);
                result.points = points;
                console.log(result);
                return callback(null,result);
              });
          });
        });
        return;
      }
      console.log("in puzzle question")
      Answer.find({
        where: {
         questionId:questionId
        },
        order: 'order ASC'
      }, function(err,answers){
        if (err) return callback(err);
        //get answers ids in the right order
        var answersIds = answers.map(function(answer){
          return answer.id;
        });
        let result = {};
        result.answer = true;
        if (answersIds.equals(answer)){
          Answer.app.models.QuestionPoints.findPointsForQuestion(questionId, function(err, points){
            if(err) return callback(err);
            Answer.app.models.UserDetails.addPoints(userId,points, function(err, profile){
              if(err) return callback(err);
              result.points = points;
              return callback(null,result);
            });
          });
          return;
        }
        Answer.app.models.BootcampResolved.createPuzzleBootcamp(userId,answer,questionId, function(err,userBootcamp){
              if(err) return callback(err);
              result.answer = false;
              return callback(null,result);
        });
      });
    });
  };

  Answer.remoteMethod(
    'answerCheck',
    {
      description: 'Verifies answer. Used for bootcamp and single player mode.',
      http: {path:'/answerCheck', verb: 'get'},
      accepts: [
      {arg: 'questionId',type: 'string',required:true,description:"The id of the question"},
      {arg: 'answer',type: 'array',required:true,description:"The array of answer id(s)"}, 
      {arg: 'userId',type: 'string',required:true,description:"The user id"}
      ],
      returns: {arg:"result", type:"object"}
    }
  );
};
