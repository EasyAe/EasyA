'use strict';

module.exports = function(User) {
  var app = require('../../server/server');
  var path = require('path');

  //send verification email after registration
  User.afterRemote('create', function(context, user, next) {

    var options = {
      type: 'email',
      to: user.email,
      from: 'noreply@easyae.dk',
      subject: 'Tak for din registrering.',
      template: path.resolve(__dirname,'../../server/views/verify-email-content.ejs'),
      //dev
      redirect:"http://wd-agency.com/clients/edootech/develop/client/users?uid",
      //prod
      //redirect:"http://easyae.dk",
      user: user
    };

    user.verify(options, function(err, response) {
      if (err) {
                User.deleteById(user.id);
                return next(err);
              }
      else {
      next();
      }
    });
  });

  //sends password reset link when requested
  User.on('resetPasswordRequest', function(info) {
    User.findOne({where:{
      email:info.email
    }},function(err,user){
      if(err) return err;
      let id = user.id;
      //prod
      //var url = 'http://easyae.dk/#/front?reset_password=1';
      //dev
      var url = 'http://wd-agency.com/clients/edootech/develop/client/users/#/front?reset_password=1';
      var html = 'Click <a href="' + url + '&access_token=' +
      info.accessToken.id + '&uid=' + id + '">here</a> to reset your password';

      User.app.models.Email.send({
        to: info.email,
        from: 'noreply@easyae.dk',
        subject: 'Password reset',
        html: html
      }, function(err) {
        if (err) return console.log('> error sending password reset email');
      });

    });
  });

//Create user profile after the user has been registered
  User.afterRemote('create', function(ctx,user, next) {
    var userDetails = app.models.UserDetails;
    
    var newUser = {
      usersId : user.id,
      FirstName: user.FirstName,
      LastName:user.LastName
    }
    userDetails.findOrCreate(
      {where: {usersId:user.id}},newUser, function(err,createdUserProfile,created){
        if(err){
          console.log('error creating user profile');
          return next(err);
        }
        (created) ? console.log('created user profile of', createdUserProfile.FirstName)
                  : console.log('found profile of', createdUserProfile.FirstName);
                  next();
      });
  });

  //Create user profile after the user has been registered
  User.afterRemote('create', function(ctx,user, next) {
    let date = new Date();
    user.updateAttributes({created:date}, function(err,user){
      if(err) return next(err);
      return next();
    });
  });

  //Upon registration, assign user role
  User.afterRemote('create', function(ctx,user, next) {
  console.log('> User third afterRemote triggered');

      var RoleMapping = User.app.models.RoleMapping;
      var role = "user";
      
      RoleMapping.app.models.Role.byName(role, function(err, foundRole){
        foundRole.principals.create({
                  principalType: RoleMapping.USER,
                  principalId: user.id
                }, function(err, rolePrincipal) {
                  if (err) {
                    console.error('error creating rolePrincipal', err);
                  }
                  (rolePrincipal) ? console.log('assigned user role to', user.FirstName)
                  : console.log('eror assigning user role to', user.FirstName);
                  next();
                });;
      });
    });

  //Do not allow user to login if account is banned
  User.beforeRemote('login', function(ctx,user,next){
    //set the user from the body
    user = ctx.req.body;
    let newErrMsg, newErr;
    //check if the user is logging in with email or username
    if(user.email != undefined){
       User.findOne({where:{
        email: user.email
       }}, function(err,foundUser){
        if(err || !foundUser){ 
          return next();
        } 
        if(foundUser.banned === true){
          newErrMsg = "User is banned!";
          newErr = new Error(newErrMsg);
          newErr.statusCode = 403;
          newErr.code = 'LOGIN_FAILED_BANNED';
          return next(newErr);
        } else {
          return next();
        }
       });
    }else if(user.username !=undefined){
      User.findOne({where:{
        username:user.username
      }}, function(err,foundUser){
        if(err || !foundUser) return next();
        if(foundUser.banned === true){
          newErrMsg = "User is banned!";
          newErr = new Error(newErrMsg);
          newErr.statusCode = 403;
          newErr.code = 'LOGIN_FAILED_BANNED';
          return next(newErr);
        }
        return next();
      });
    }
  });

  //Remove points when question is deleted
  User.afterRemote('deleteById', function(ctx,user,next){
    //get id of the question
    let id = ctx.req.params.id

    User.app.models.UserDetails.findOne({
      where:{
        usersId: id
      }
    }, function(err,profile){
      if(err) return next(err);

      let profileId = profile.id;
      User.app.models.UserDetails.destroyById(profileId, next());
    });
  });

  /**
   * Return role by user id
   * @param id
   * @param callback
   */
   //ToDo 
  //gettign error if user id doesn't exist that callback was already fixed - look into the issue
  User.getUserRole = function(id, callback) {

    User.app.models.RoleMapping.roleIdByUserId(id, function(err, role){

      if(err || !role) return callback(err);

      return callback(null,role.name);

    })
  };

  User.remoteMethod(
      'getUserRole',
      {
         description: 'Get user role by id for user',
         http: {path: '/getUserRole', verb: 'get'},
         accepts: {arg: 'id', type: 'string', http: { source: 'query' } },
         returns: [{arg:"name",type:"string", root:true}]
      }
  );

  /**
   * Return users by role
   * @param role
   * @param callback
   */
  User.getUsersByRole = function(role, callback) {

    User.app.models.RoleMapping.usersIDByRole(role, function(err, users) {

      if( err || !users ) return callback(err);

      User.find({
        where : {
          id : {inq : users}
        }
      }, function(err,users){
        if(err) return callback(err);

        callback(null,users)
      });
    });
  };

  User.remoteMethod(
      'getUsersByRole',
      {
         description: 'Get users by id for role',
         http: {path: '/getUsersByRole', verb: 'get'},
         accepts: {arg: 'role', type: 'string', http: { source: 'query' } },
         returns: [{arg:"data",type:"User", root:true}]
      }
  );


   /**
   * Returns active users
   * @param callback
   */
  User.getActiveUsers = function(callback) {

      User.find({where: {active : true}}, function(err,users){
        if(err || !users) return callback(err);

        callback(null,users);
      });
  };

  User.remoteMethod(
      'getActiveUsers',
      {
         description: 'Get active users',
         http: {path: '/getActiveUsers', verb: 'get'},
         returns: [{arg:"data",type:"User", root:true}]
      }
  );

   /**
   * Changes the user password
   * @param user, callback
   */
  User.changePassword = function(ctx,newPassword,confirmation,callback) {
    //verify passwords match
    // if ( !user.confirmation || user.newPassword !== user.confirmation) {
    //   let message = "Passwords do not match";
    //   return callback(null,message)
    // }
    // User.findById(user.id, function(err, foundUser){
    //   if(err || !foundUser) return callback(err);
    //   let newPassword = user.newPassword;

    //   foundUser.updateAttributes({password:newPassword}, function(err, updatedUser){
    //     if(err || !updatedUser) return callback(err);
    //     let message = "Password succesfully updated!"
    //     return callback(null,message);
    //   });
    // });  
    var newErrMsg, newErr;  
    try {
    this.findOne({where: {id: ctx.req.accessToken.userId}}, function (err, user) {
      if (err) {
        callback(err);
      } else if (!user) {
        newErrMsg = "No match between provided current logged user!";
        newErr = new Error(newErrMsg);
        newErr.statusCode = 401;
        newErr.code = 'LOGIN_FAILED_EMAIL';
        return callback(newErr);
      } else if (newPassword !== confirmation){
        newErrMsg = "Passwords don't match";
        newErr = new Error(newErrMsg);
        newErr.statusCode = 401;
        newErr.code = 'LOGIN_FAILED_CONFIRMATION';
        return callback(newErr);
      } else {
            //validate the password: not empty string, has at least 1 number/letter, at least 8 chars
            if(!!newPassword === false || newPassword.length < 8 ||/[a-z]/i.test(newPassword) === false || /\d/.test(newPassword) === false){
                newErrMsg = "Passwords must be 8 characters long and contain at least one number and letter!";
                newErr = new Error(newErrMsg);
                newErr.statusCode = 401;
                newErr.code = 'LOGIN_FAILED_VALIDATION';
                return callback(newErr);
            }
            user.updateAttributes({'password': newPassword}, function (err, instance) {
              if (err) return callback(err);
              let message = "Password succesfully changed!"
              return callback(null, message);
            });
        }
    });
  } catch (err) {
    logger.error(err);
    return callback(err);
  }
  };

  User.remoteMethod(
      'changePassword',
      {
          description: "Allows a user to change his/her forgotten password.",
          http: {verb: 'put'},
          accepts: [
            {arg: 'ctx', type: 'object', http: {source: 'context'}},
            {arg: 'newPassword', type: 'string', required: true, description: "The user NEW password"},
            {arg: 'confirmation', type: 'string', required: true, description: "The user new password confirmed"},
          ],
          returns: {arg: 'passwordChange', type: 'string'}
      }
  );

//change user activity
User.changeActivity = function(active,playerId,callback){

  User.findOne({where: {id : playerId}},function(err,user){
      user.updateAttributes({active: active}, function(err,user){
        if(err) return callback(err);
       return callback(null, user);
      }); 
  });
};

//update user password when logged in
User.updatePassword = function (ctx,oldPassword, newPassword, confirmation, cb) {
  var newErrMsg, newErr;
  try {
    this.findOne({where: {id: ctx.req.accessToken.userId}}, function (err, user) {
      if (err) {
        cb(err);
      } else if (!user) {
        newErrMsg = "No match between provided current logged user!";
        newErr = new Error(newErrMsg);
        newErr.statusCode = 401;
        newErr.code = 'LOGIN_FAILED_EMAIL';
        return cb(newErr);
      } else if (newPassword !== confirmation){
        newErrMsg = "Passwords don't match";
        newErr = new Error(newErrMsg);
        newErr.statusCode = 401;
        newErr.code = 'LOGIN_FAILED_CONFIRMATION';
        return cb(newErr);
      } else {
        user.hasPassword(oldPassword, function (err, isMatch) {
          if (isMatch) {
            //validate the password: not empty string, has at least 1 number/letter, at least 8 chars
            if(!!newPassword === false || newPassword.length < 8 ||/[a-z]/i.test(newPassword) === false || /\d/.test(newPassword) === false){
                newErrMsg = "Passwords must be 8 characters long and contain at least one number and letter!";
                newErr = new Error(newErrMsg);
                newErr.statusCode = 401;
                newErr.code = 'LOGIN_FAILED_VALIDATION';
                return cb(newErr);
            }
            user.updateAttributes({'password': newPassword}, function (err, instance) {
              if (err) {
                return cb(err);
              } else {
                return cb(null, true);
              }
            });
          } else {
            newErrMsg = 'User specified wrong current password!';
            newErr = new Error(newErrMsg);
            newErr.statusCode = 401;
            newErr.code = 'LOGIN_FAILED_PWD';
            return cb(newErr);
          }
        });
      }
    });
  } catch (err) {
    logger.error(err);
    return cb(err);
  }
};

User.remoteMethod(
  'updatePassword',
  {
    description: "Allows a logged user to change his/her password.",
    http: {verb: 'put'},
    accepts: [
      {arg: 'ctx', type: 'object', http: {source: 'context'}},
      {arg: 'oldPassword', type: 'string', required: true, description: "The user old password"},
      {arg: 'newPassword', type: 'string', required: true, description: "The user NEW password"},
      {arg: 'confirmation', type: 'string', required: true, description: "The user new password confirmed"},
    ],
    returns: {arg: 'passwordChange', type: 'boolean'}
  }
);

//update user password when logged in
User.newUsersGraph = function (ctx,startDate,endDate,callback) {
  var newErrMsg, newErr;
  try {
    this.find({where: {
        and: [
          { lastActive: { gte: startDate}},
          { lastActive: { lte: endDate}}
        ]
    }}, function (err, users) {
      if(err || !users) return callback(err);
      return callback(null,users)
    });
  } catch (err) {
    logger.error(err);
    return callback(err);
  }
};

User.remoteMethod(
  'newUsersGraph',
  {
    description: "Get all new users over a certain time period",
    http: {verb: 'get'},
    accepts: [
      {arg: 'ctx', type: 'object', http: {source: 'context'}},
      {arg: 'startDate', type: 'string', required: true, description: "Beginning of time period"},
      {arg: 'endDate', type: 'string', required: true, description: "End of time period"},
    ],
    returns: {arg: 'users', type: 'array'}
  }
);

};
