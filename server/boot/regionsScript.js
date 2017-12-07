// 'use strict';
// module.exports = function(app) {

//   createRegions();

//   function createRegions() {

//     console.log('Creating regions');

//     var Region = app.models.Region;

//     var regions = [    
// 	    {
// 	    	name:"Hovedstaden"
// 	    },
// 	    {
// 	    	name:"Midtjylland"
// 	    },
// 	    {
// 	    	name:"Nordjylland"
// 	    },
// 	    {
// 	    	name:"Sjælland"
// 	    },
// 	    {
// 	    	name:"Syddanmark"
// 	    },
// 	    {
// 	    	name:"Tyskland"
// 	    },
// 	    {
// 	    	name: "Grønland"
// 	    },
// 	    {
// 	    	name:"Færøerne"
// 	    }
//     ];



//     regions.forEach(function(region) {
//       Region.findOrCreate({name:region.name},
//         function(err, createdRole, created) {
//           if (err) {
//             console.error('error running findOrCreate('+ region.name+')', err);
//           }
//           (created) ? console.log('created region', region.name)
//                     : console.log('found region', region.name);
//         });
//     });
//     return regions;
//   }

// };




