'use strict';

module.exports = function(Bootcamp) {
    Bootcamp.findByQuestionId = function(questionId, callback){
    	Bootcamp.findOne({
			where: {
				questionId:questionId
			}}, function(err, bootcamp){
				if(err || !bootcamp) return callback(err);
				let bootcampId = bootcamp.id;
				return callback(null,bootcampId);
		});
    };
};
