// 'use strict';
// module.exports = function(app) {

//   createCities();

//   function createCities() {

//     console.log('Creating city');

//     var City = app.models.City;

//     var cities = [    
// 	    {
// 	    	name:"København"
// 	    },
//       {
//         name:"Allerød"
//       },
//       {
//         name:"Gentofte"
//       },
//       {
//         name:"Birkerød"
//       },
//       {
//         name:"Ballerup"
//       },
//       {
//         name:"Brøndby"
//       },
//       {
//         name:"Rønne"
//       },
//       {
//         name:"Stenløse"
//       },
//       {
//         name:"Espergærde"
//       },
//       {
//         name:"Frederiksberg"
//       },
//       {
//         name:"Hillerød"
//       },
//       {
//         name:"Frederikssund"
//       },
//       {
//         name:"Frederiksværk"
//       },
//       {
//         name:"Hellerup"
//       },
//       {
//         name:"Søborg"
//       },
//       {
//         name:"Helsinge"
//       },
//       {
//         name:"Helsingør"
//       },
//       {
//         name:"Herlev"
//       },
//       {
//         name:"Albertslund"
//       },
//       {
//         name:"Valby"
//       },
//       {
//         name:"Hvidovre"
//       },
//       {
//         name:"Taaastrup"
//       },
//       {
//         name:"Kongens Lyngby"
//       },
//       {
//         name:"Farum"
//       },
//       {
//         name:"Ishøj"
//       },
//       {
//         name:"Nærum"
//       },
//       {
//         name:"Brønshøj"
//       },
//       {
//         name:"Charlottenlund"
//       },
//       {
//         name:"Rungsted Kyst"
//       },
//       {
//         name:"Rødovre"
//       },
//       {
//         name:"Kastrup"
//       },
//       {
//         name:"Virum"
//       },
//       {
//         name:"Århus" 
//       },
//       {
//         name: "Viby J" 
//       },
//       {
//         name:"Bjerringbro" 
//       },
//       {
//         name:" Egå" 
//       },
//       {
//         name:"Grindsted" 
//       },
//       {
//         name:"Hadsten" 
//       },
//       {
//         name:"Grenaa" 
//       },
//       {
//         name:"Herning" 
//       },
//       {
//         name:"Holstebro" 
//       },
//       {
//         name:"Horsens" 
//       },
//       {
//         name:"Ikast" 
//       },
//       {
//         name:"Tilst" 
//       },
//       {
//         name:"Lemvig" 
//       },
//       {
//         name:"Hobro" 
//       },
//       {
//         name:"Viborg" 
//       },
//       {
//         name:"Odder" 
//       },
//       {
//         name:"Randers" 
//       },
//       {
//         name:"Ringkøbing" 
//       },
//       {
//         name:"Risskov" 
//       },
//       {
//         name:"Rønde" 
//       },
//       {
//         name:"Silkeborg" 
//       },
//       {
//         name:"Skanderborg" 
//       },
//       {
//         name:"Skive" 
//       },
//       {
//         name: "Struer" 
//       },
//       {
//         name:"Vejle" 
//       },
//       {
//         name: "Daugård" 
//       },
//       {
//         name:"Tarm" 
//       },
//       {
//         name:"Aalborg" 
//       },
//       {
//         name: "Brønderslev" 
//       },
//       {
//         name: "Dronninglund" 
//       },
//       {
//         name:"Aars" 
//       },
//       {
//         name:"Nykøbing M" 
//       },
//       {
//         name:"Thisted" 
//       },
//       {
//         name: "Hjørring" 
//       },
//       {
//         name:"Frederikshavn" 
//       },
//       {
//         name:"Fjerritslev" 
//       },
//       {
//         name:"Nørresundby" 
//       },
//       {
//         name:"Støvring" 
//       },
//       {
//         name:"Kalundborg" 
//       },
//       {
//         name:"Nakskov" 
//       },
//       {
//         name:"Holbæk" 
//       },
//       {
//         name:"Næstved" 
//       },
//       {
//         name:"Greve" 
//       },
//       {
//         name:"Roskilde" 
//       },
//       {
//         name:"Høng" 
//       },
//       {
//         name:"Køge" 
//       },
//       {
//         name:"Maribo" 
//       },
//       {
//         name:"Haslev" 
//       },
//       {
//         name:"Nykøbing F" 
//       },
//       {
//         name:"Asnæs" 
//       },
//       {
//         name: "Slagelse" 
//       },
//       {
//         name:"Solrød Strand" 
//       },
//       {
//         name:"Sorø"  
//       },
//       {
//         name:"Vordingborg" 
//       },
//       {
//         name:"Faxe" 
//       },
//       {
//         name:"Ringsted" 
//       },
//       {
//         name:"Aabenraa" 
//       },
//       {
//         name:"Sønderborg" 
//       },
//       {
//         name:"Esbjerg Ø" 
//       },
//       {
//         name:"Faaborg" 
//       },
//       {
//         name:"Fredericia" 
//       },
//       {
//         name:"Haderslev" 
//       },
//       {
//         name:"Glamsbjerg" 
//       },
//       {
//         name:"Kolding" 
//       },
//       {
//         name:"Odense" 
//       },
//       {
//         name:"Middelfart" 
//       },
//       {
//         name:"Ringe" 
//       },
//       {
//         name:"Søndersø" 
//       },
//       {
//         name:"Nyborg" 
//       },
//       {
//         name:"Oure" 
//       },
//       {
//         name:"Ribe" 
//       },
//       {
//         name:"Svendborg" 
//       },
//       {
//         name:"Tønder" 
//       },
//       {
//         name:"Tørring" 
//       },
//       {
//         name:"Varde" 
//       },
//       {
//         name:"Vejen" 
//       },
//       {
//         name:"Slesvig" 
//       },
//       {
//         name:"Flensborg" 
//       },
//       {
//         name:"Grønland" 
//       },
//       {
//         name:"Aasiaat" 
//       },
//       {
//         name:"Nuuk" 
//       },
//       {
//         name:"Sisimiut" 
//       },
//       {
//         name:"Hoyvik" 
//       },
//       {
//         name:"Fuglafjødur"
//       }
//     ];



//     cities.forEach(function(city) {
//       City.findOrCreate({name:city.name},
//         function(err, createdRole, created) {
//           if (err) {
//             console.error('error running findOrCreate('+ city.name+')', err);
//           }
//           (created) ? console.log('created city', city.name)
//                     : console.log('found city', city.name);
//         });
//     });
//     return cities;
//   }

// };




