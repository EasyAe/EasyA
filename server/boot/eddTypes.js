// 'use strict';
// module.exports = function(app) {

//   createInstitutions();

//   function createInstitutions() {

//     console.log('Creating education types');

//     var EducationType = app.models.EducationType;

//     var eddTypes = [
// 	    {
// 	    	name:"STX"
// 	    },
// 	    {
// 	    	name:"HF"
// 	    },
// 	    {
// 	    	name:"HHX"
// 	    },
// 	    {
// 	    	name:"TSF"
// 	    },
// 	    {
// 	    	name:"HG"
// 	    },
// 	    {
// 	    	name:"HTX"
// 	    }
//     ];
 

//     eddTypes.forEach(function(eddType) {
//       EducationType.findOrCreate({name:eddType.name},
//         function(err, createdRole, created) {
//           if (err) {
//             console.error('error running findOrCreate('+ eddType.name+')', err);
//           }
//           (created) ? console.log('created education type', eddType.name)
//                     : console.log('found education type', eddType.name);
//         });
//     });
//     return eddTypes;
//   }

// };




