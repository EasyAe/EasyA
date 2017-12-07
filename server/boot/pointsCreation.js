// 'use strict';
// module.exports = function(app) {

//   createDefaultPoints();

//   function createDefaultPoints() {

//     console.log('Creating points');

//     var Points = app.models.Points;

//     var points = [{
//     name: "Correct",
//     value: 20,
//     multiPlayer: true,
//     singlePlayer: false,
//     id:1
//   },
//   {
//     name: "Level11",
//     value: 40,
//     multiPlayer: true,
//     singlePlayer: false,
//     id:2
//   },
//   {
//     name: "Leaver",
//     value: -25,
//     multiPlayer: true,
//     singlePlayer: false,
//     id:3
//   },
//   {
//     name: "Non-leaver",
//     value: 25,
//     multiPlayer: true,
//     singlePlayer: false,
//     id:4
//   },
//   {
//     name: "Leaver",
//     value: -25,
//     multiPlayer: false,
//     singlePlayer: true,
//     id:5
//   },
//   {
//     name: "Level11",
//     value: 20,
//     multiPlayer: false,
//     singlePlayer: true,
//     id:6
//   },
//   {
//     name: "Correct",
//     value: 10,
//     multiPlayer: false,
//     singlePlayer: true,
//     id:7
//   }];

//     points.forEach(function(point) {
//       Points.findOrCreate(
//         {
//           name: point.name,
//           value: point.value,
//           multiPlayer: point.multiPlayer,
//           singlePlayer: point.singlePlayer
//         },
//         function(err, points, created) {
//           if (err) {
//             console.error('error running findOrCreate('+point.name+')', err);
//           }
//           (created) ? console.log('created points', points.name)
//                     : console.log('found points', points.name);
//         });
//     });
//     return points;
//   }

// };




