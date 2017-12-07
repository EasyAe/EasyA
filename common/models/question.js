'use strict';
module.exports = function(Question) {

  //Assign points to the questions after it's created
  Question.afterRemote('create', function(ctx,question, next) {
    let pointsIds = [1,7];
    if(question.level11 === true){
      pointsIds = [2,6]
    } 
    for(let i = 0; i<pointsIds.length; i++){
      let id = question.id;
      Question.app.models.QuestionPoints.create({
        questionId: id,
        pointsId: pointsIds[i]
      }, function(err, questionPoints){
        if(err) return next(err);
      });
    }
     //  Question.sharedClass.methods().forEach(function(method) {
     //   console.log(method.name);
     // });
    next();
  });

 //Change points when question is edited 
  Question.afterRemote('upsert', function(ctx,question,next){
    let id = question.id;
    Question.app.models.QuestionPoints.find({
        where:{
          questionId: id
        }
      }, function(err,questionPoints){
        if(err) return next(err);
          let ids = questionPoints.map(function(point){
           return point.id;
          });

          for(let i = 0; i<ids.length; i++){
            let id = ids[i];
            Question.app.models.QuestionPoints.destroyById(id, function(err){
              if(err) return next(err);
            });
          }
        let pointsIds = [1,7];
        if(question.level11 === true){
          pointsIds = [2,6]
        } 
        for(let i = 0; i<pointsIds.length; i++){
          let id = question.id;
          Question.app.models.QuestionPoints.create({
            questionId: id,
            pointsId: pointsIds[i]
          }, function(err, questionPoints){
            if(err) return next(err);
          });
        }
        next();
      });
  });

  //Remove points when question is deleted
  Question.afterRemote('deleteById', function(ctx,question,next){
    //get id of the question
    let id = ctx.req.params.id

    Question.app.models.QuestionPoints.find({
      where:{
        questionId: id
      }
    }, function(err,questionPoints){
      if(err) return next(err);
        let pointsIds = questionPoints.map(function(point){
         return point.id;
        });

        for(let i = 0; i<pointsIds.length; i++){
          let id = pointsIds[i];
          Question.app.models.QuestionPoints.destroyById(id, function(err){
            if(err) return next(err);
          });
        }
    });
    next();
  });

  //Remove ansewers when question is deleted
  Question.afterRemote('deleteById', function(ctx,question,next){
    //get id of the question
    let id = ctx.req.params.id

    Question.app.models.Answer.find({
      where:{
        questionId: id
      }
    }, function(err,answers){
      if(err) return next(err);
        let answerIds = answers.map(function(answer){
         return answer.id;
        });

        for(let i = 0; i<answerIds.length; i++){
          let id = answerIds[i];
          Question.app.models.Answer.destroyById(id, function(err){
            if(err) return next(err);
          });
        }
    });
    next();
  });

  //Delete the bootcamp and BootcampResolved from the user
  Question.afterRemote('deleteById', function(ctx,question,next){
    //get id of the question
    let id = ctx.req.params.id

    Question.app.models.Bootcamp.findOne({
      where:{
        questionId: id
      }
    }, function(err,bootcamp){
      if(err || !bootcamp) return next(err);
      let bootcampId = bootcamp.id;

      Question.app.models.Bootcamp.destroyById(bootcampId, function(err){
        if (err) return next(err);
        Question.app.models.BootcampResolved.find({
          where:{
            bootcampId:bootcampId
          }
        }, function(err, bootcamps){
          let bootcampIds = bootcamps.map(function(bootcamp){
            return bootcamp.id;
          });

          for(let i = 0; i<bootcampIds.length; i++){
            let id = bootcampIds[i];
            Question.app.models.BootcampResolved.destroyById(id, function(err){
              if(err) return next(err);
            });
          }
        });
      });
    });
    next();
  });
  
  Question.findRandomQuestion = function(subCategoryId, callback){
    Question.find({
      where:{
        subCategoryId: subCategoryId,
        active:true,
        level11:false
      }
    }, function(err,questions){
      if(err) return callback(err);
        //get a random question
        var randomQuestion = questions[Math.floor(Math.random()*questions.length)];
        if(randomQuestion === undefined || randomQuestion === null){
          let round = undefined;
          return callback(null,round);
        }
        //get question id
        let questionId = randomQuestion.id;
        //get the answers for this question
        Question.app.models.Answer.getAnswers(questionId, function(err, answers){
          answers = shuffle(answers);
          if(err) return callback(err);
          var round = {};
          round.question = randomQuestion;
          round.answers = answers;
          return callback(null,round);
        })
    });
  };

  Question.remoteMethod(
    'findRandomQuestion',
    {
      description: 'Get a random question',
      http: {path:'/findRandomQuestion', verb: 'get'},
      accepts: {arg: 'subCategoryId',type: 'string'},
      returns: [{arg:"round", type:"array", root:true}]
    }
  );

  Question.findRandomQuestionWithoutDuplicated = function(subCategoryId,questionIds,callback){
    Question.find({
      where:{
        id : {nin: questionIds},
        subCategoryId : subCategoryId,
        active : true,
        level11: false
    }}, function(err,questions){
      if(err) return callback(err);
      //get a random question
      var randomQuestion = questions[Math.floor(Math.random()*questions.length)];
       if(randomQuestion === undefined || randomQuestion === null){
          let round = undefined;
          return callback(null,round);
        }
      //set the questionId
      let questionId = randomQuestion.id;
      //get the answers for this question
      Question.app.models.Answer.getAnswers(questionId, function(err,answers){
        answers = shuffle(answers);
        if(err) return callback(err);
        var round = {};
        round.question = randomQuestion;
        round.answers = answers;
        return callback(null,round);
      });
    });
  };
  Question.remoteMethod(
    'findRandomQuestionWithoutDuplicated',
    {
      description: 'Get a random question without the ones you have already received',
      http: {path:'/findRandomQuestionWithoutDuplicated', verb: 'get'},
      accepts: [{arg: 'subCategoryId',type: 'string'},{arg: 'questionIds',type: 'array'} ],
      returns: [{arg:"round", type:"array", root:true}]
    }
  );

  Question.getRandomQuestion11 = function(subCategoryId, callback){
    Question.find({
      where:{
        subCategoryId: subCategoryId,
        active:true,
        level11:true
      }}, function(err, questions){
        //get a random queston
        var randomQuestion = questions[Math.floor(Math.random()*questions.length)];
        if(randomQuestion === undefined || randomQuestion === null){
          let round = undefined;
          return callback(null,round);
        }
        //set questionId
        let questionId = randomQuestion.id;
        //get the answers for this question
        Question.app.models.Answer.getAnswers(questionId, function(err,answers){
          answers = shuffle(answers);
          if(err) return callback(err);
          var round = {};
          round.question = randomQuestion;
          round.answers = answers;
          return callback(null,round);
        });
      });
  };
  Question.remoteMethod(
    'getRandomQuestion11',
    {
      description: 'Get a random question 11',
      http: {path:'/getRandomQuestion11', verb: 'get'},
      accepts: {arg: 'subCategoryId',type: 'string'},
      returns: [{arg:"round", type:"array", root:true}]
    }
  );

  Question.getRandomQuestion = function(subCategoryId,questionIds,callback){
    Question.find({
      where:{
        id : {nin: questionIds},
        subCategoryId : subCategoryId,
        active : true
    }}, function(err,questions){
      if(err) return callback(err);
      //get a random question
      var randomQuestion = questions[Math.floor(Math.random()*questions.length)];
       if(randomQuestion === undefined || randomQuestion === null){
          let round = undefined;
          return callback(null,round);
        }
      //set the questionId
      let questionId = randomQuestion.id;
      //get the answers for this question
      Question.app.models.Answer.getAnswers(questionId, function(err,answers){
        answers = shuffle(answers);
        if(err) return callback(err);
        var round = {};
        round.question = randomQuestion;
        round.answers = answers;
        return callback(null,round);
      });
    });
  };
  Question.remoteMethod(
    'getRandomQuestion',
    {
      description: 'Get a random question without the ones you have already received. Used for single player mode.',
      http: {verb: 'get'},
      accepts: [
      {arg: 'subCategoryId',type: 'string', required: true, description: "The id of the subcategory the user has selected"},
      {arg: 'questionIds',type: 'array', description: "The ids of the questions the user already had"} 
      ],
      returns: {arg:"round", type:"array"}
    }
  );

  Question.checkQuestionType = function(questionId,callback){
     Question.findOne({
      where:{
        id: questionId
      }
    }, function(err,question){
      if(err) return callback(err);
      let questionTypeId = question.questionTypeId;
      return callback(null,questionTypeId);
  });
};

  Question.verifyAnswer = function(questionId,answer,playerId,gameId,callback){
    Question.checkQuestionType(questionId, function(err, questionTypeId){
      if(questionTypeId === null) return callback(err);
      if(questionTypeId === 1)
      {
        Question.app.models.Answer.checkAnswer(answer,playerId, function(err,result){
          if(err) return callback(err);
          //If answer is true => add points for the answer 
          if(result.answer === true){
            Question.app.models.QuestionPoints.addPoints(questionId,playerId,gameId, function(err,gamePoints){
              result.points = gamePoints;
              return callback(null,result);
            });
            return;
          }
         return callback(null,result);
        });
        return;
      }
      Question.app.models.Answer.checkPuzzleAnswers(answer,questionId,playerId,function(err,result){
        if(err) return callback(err);
        if(result.answer === true){
            Question.app.models.QuestionPoints.addPoints(questionId,playerId,gameId, function(err,gamePoints){
              result.points = gamePoints;
              return callback(null,result);
            });
            return;
          }
        return callback(null,result);
      });
    });
  };


//Shuffleing items in an array
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
};


};