'use strict';

module.exports = function(Institution) {

	Institution.getInstituionsInRegion = function(regionId, callback) {
		Institution.find({
			where:{
				regionId: regionId
			}
		}, function(err,institutions) {
			if(err) return callback(err);

			let institutionIds = institutions.map(function(institution){
				return institution.id;
			});
			return callback(null, institutionIds);
		});
	};
};
