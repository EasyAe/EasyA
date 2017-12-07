// 'use strict';
// module.exports = function(app) {

//   createOccupations();

//   function createOccupations() {

//     console.log('Creating occupation');

//     var Occupation = app.models.Occupation;

//     var occupations = [    
  // {
  //   name: "Gymnasielærer"
  // },
  // {
  //   name: "Lærerstuderende"
  // },
  // {
  //   name: "Studerende på videregående uddannelse"
  // },
  // {
  //   name: "Rektor på ungdomsuddannelse"
  // },
  // {
  //   name: "Vicerektor på ungdomsuddannelse"
  // },
  // {
  //   name: "Fuldtidsjob"
  // },
  // {
  //   name: "Deltidsjob"
  // },
  // {
  //   name: "Gymnasieelev"
  // },
  // {
  //   name: "Underviser på videregående uddannelse"
  // }
//     ];

 
//     occupations.forEach(function(occupation) {
//       Occupation.findOrCreate({name:occupation.name},
//         function(err, createdRole, created) {
//           if (err) {
//             console.error('error running findOrCreate('+ occupation.name+')', err);
//           }
//           (created) ? console.log('created occupation', occupation.name)
//                     : console.log('found occupation', occupation.name);
//         });
//     });
//     return occupations;
//   }

// };




