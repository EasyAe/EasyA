// 'use strict';
// module.exports = function(app) {

//   createDefaultPoints();

//   function createDefaultPoints() {

//     console.log('Creating countries');

//     var Country = app.models.Country;

//     var countries = [{
//     name: "Danmark"
//   }];

//     countries.forEach(function(country) {
//       Country.findOrCreate(
//         {
//           name: country.name
//         },
//         function(err, country, created) {
//           if (err) {
//             console.error('error running findOrCreate('+ country.name+')', err);
//           }
//           (created) ? console.log('created country', country.name)
//                     : console.log('found country', country.name);
//         });
//     });
//     return countries;
//   }
// };




