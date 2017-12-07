'use strict';

module.exports = function(Userdetails) {

 //update username in users model 
  Userdetails.afterRemote('*', function(context, userdetails, next) {

    if(userdetails.username === null || userdetails.username === undefined) return next();

    let userId = userdetails.usersId;
    Userdetails.app.models.users.findById(userId, function(err,user){
      if(err || !user) return next(err);
      let newUsername = userdetails.username;
       
      user.updateAttributes({username:newUsername}, function(err,updatedUser){
        if(err) return next(err);
        next();
      });
    });
  });

	Userdetails.findUser = function(playerId,callback){
		Userdetails.findOne({
			where:{
				usersId: playerId
			}
		}, function(err,userDetails){
			if(err) return callback(err);
			return callback(null,userDetails);
		});
	};

	Userdetails.addPoints = function(userId,points, callback) {
		Userdetails.findOne({
			where:{
				usersId: userId
			}
		}, function(err,userProfile){
			if(err) return callback(err);
			let playerPoints = userProfile.points;
			playerPoints += points;
			userProfile.updateAttributes({points: playerPoints}, function(err, profile){
				return callback(null,profile);
			});
		});
	};

/**
   * Return National Ranking
   * @param id
   * @param callback
   */
   //ToDo 
  //gettign error if user id doesn't exist that callback was already fixed - look into the issue
  Userdetails.getNationalRanking = function(callback) {
    Userdetails.app.models.users.find({where:{
      emailVerified:true
    }}, function(err,users){
      let usersIds = users.map(function(user){
        return user.id;
      });
        Userdetails.find({where:{
          usersId: {inq: usersIds }
        },order: 'points DESC', include: ['occupation','institution', 'city']}, function(err, profiles){
          if(err) return callback(err);
          return callback(null,profiles);
        });
      });
  };

  Userdetails.remoteMethod(
      'getNationalRanking',
      {
         description: 'Get National Ranking',
         http: {path: '/getNationalRanking', verb: 'get'},
         returns: [{arg:"profiles",type:"array", root:true}]
      }
  );


  /**
   * Returns Regional Ranking by regionId
   * @param regionId
   * @param callback
   */
   //ToDo 
  //gettign error if user id doesn't exist that callback was already fixed - look into the issue
  Userdetails.getRegionalRanking = function(regionId, callback) {
    Userdetails.app.models.users.find({
      where:{
        emailVerified:true,
        banned:false
      }
    }, function(err,users){
      if(err || !users) return callback(err);
      let usersIds = users.map(function(user){
        return user.id;
      });
      Userdetails.find({
        where:{
          usersId:{inq:usersIds},
          regionId: regionId
        }, order: 'points DESC', include: ['occupation','institution','region']
      }, function(err, profiles){
        if(err || !profiles) return callback(err);
        return callback(null,profiles);
      });
    });
    // Userdetails.app.models.users.find({where:{
    //   emailVerified:true
    // }}, function(err,users){
    //   let usersIds = users.map(function(user){
    //     return user.id;
    //   });
    //   Userdetails.app.models.Institution.getInstituionsInRegion(regionId, function(err, institutionIds){
    //   	Userdetails.find({where:{
    //       usersId: {inq: usersIds},
    //   		institutionId : {inq : institutionIds}

    //   	}, order: 'points DESC', include: ['occupation','institution', 'region'] }, function(err, profiles){
  	 //  		if(err) return callback(err);
  	 //  		return callback(null,profiles);
  	 //  	});
    //   });
    // });
  };

  Userdetails.remoteMethod(
      'getRegionalRanking',
      {
         description: 'Get Regional Ranking by Region Id',
         http: {path: '/getRegionalRanking', verb: 'get'},
         accepts: {arg: 'regionId', type: 'string', http: { source: 'query' } },
         returns: [{arg:"profiles",type:"array", root:true}]
      }
  );

  /**
   * Returns School Ranking by institutionId
   * @param institutionId
   * @param callback
   */
   //ToDo 
  //gettign error if user id doesn't exist that callback was already fixed - look into the issue
  Userdetails.getSchoolRanking = function(institutionId, callback) {
    Userdetails.app.models.users.find({where:{
      emailVerified:true
    }}, function(err,users){
      let usersIds = users.map(function(user){
        return user.id;
      });
    	Userdetails.find({where:{
        usersId : {inq: usersIds},
    		institutionId : institutionId
    	}, order: 'points DESC', include: ['occupation','institution', 'city']}, function(err, profiles){
	  		if(err) return callback(err);
	  		return callback(null,profiles);
	  	});
    });  
  };

  Userdetails.remoteMethod(
      'getSchoolRanking',
      {
         description: 'Get School Ranking by Institution Id',
         http: {path: '/getSchoolRanking', verb: 'get'},
         accepts: {arg: 'institutionId', type: 'string', http: { source: 'query' } },
         returns: [{arg:"profiles",type:"array", root:true}]
      }
  );

};
