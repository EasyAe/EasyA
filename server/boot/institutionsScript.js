// 'use strict';
// module.exports = function(app) {

//   createInstitutions();

//   function createInstitutions() {

//     console.log('Creating institution');

//     var Institution = app.models.Institution;

//     var institutions = [    
//     //region 1
// 	    {
// 	    	name:"Akademisk Studenterkursus",
//         cityId: 1,
//         regionId: 1,
//         educationTypeId: 1
// 	    },
//       {
//         name:"Allerød Gymnasium",
//         cityId: 2,
//         regionId: 1,
//         educationTypeId: 1
//       },
//       {
//         name:"Aurehøj Gymnasium",
//         cityId: 3,
//         regionId: 1,
//         educationTypeId: 1
//       },
//       {
//         name:"Birkerød Gymnasium/STX",
//         cityId: 4,
//         regionId: 1,
//         educationTypeId: 1
//       },
//       {
//         name:"Birkerød Gymnasium/HF",
//         cityId: 4,
//         regionId: 1,
//         educationTypeId: 2
//       },
//       {
//         name:"Borupgaard Gymnasium",
//         cityId: 5,
//         regionId: 1,
//         educationTypeId: 1
//       },
//       {
//         name:"Brøndby Gymnasium",
//         cityId: 6,
//         regionId: 1,
//         educationTypeId: 1
//       },
//       {
//         name:"Campus Bornholm Gymnasium/STX",
//         cityId: 7,
//         regionId: 1,
//         educationTypeId: 1
//       },
//       {
//         name:"Campus Bornholm Gymnasium/HF",
//         cityId: 7,
//         regionId: 1,
//         educationTypeId: 2
//       },
//       {
//         name:"Christianshavns Gymnasium",
//         cityId: 1,
//         regionId: 1,
//         educationTypeId: 1
//       },
//       {
//         name:"Det frie Gymnasium",
//         cityId: 1,
//         regionId: 1,
//         educationTypeId: 1
//       },
//       {
//         name:"Egedal Gymnasium/STX",
//         cityId: 8,
//         regionId: 1,
//         educationTypeId: 1
//       },
//       {
//         name:"Egedal Gymnasium/HF",
//         cityId: 8,
//         regionId: 1,
//         educationTypeId: 2
//       },
//       {
//         name:"Espergærde Gymnasium/STX",
//         cityId: 9,
//         regionId: 1,
//         educationTypeId: 1
//       },
//       {
//         name:"Espergærde Gymnasium/HF",
//         cityId: 9,
//         regionId: 1,
//         educationTypeId: 2
//       },
//       {
//         name:"Falkonergårdens Gymnasium/STX",
//         cityId: 10,
//         regionId: 1,
//         educationTypeId: 1
//       },
//       {
//         name:"Falkonergårdens Gymnasium/HF",
//         cityId: 10,
//         regionId: 1,
//         educationTypeId: 2
//       },
//       {
//         name:"Frederiksberg Gymnasium",
//         cityId: 10,
//         regionId: 1,
//         educationTypeId: 1
//       },
//       {
//         name:"Frederiksberg/STX",
//         cityId: 10,
//         regionId: 1,
//         educationTypeId: 1
//       },
//       {
//         name:"Frederiksberg/HF",
//         cityId: 10,
//         regionId: 1,
//         educationTypeId: 2
//       },
//       {
//         name:"Frederiksborg Gymnasium/STX",
//         cityId: 11,
//         regionId: 1,
//         educationTypeId: 1
//       },
//       {
//         name:"Frederiksborg Gymnasium/HF",
//         cityId: 11,
//         regionId: 1,
//         educationTypeId: 2
//       },
//       {
//         name:"Frederikssund Gymnasium",
//         cityId: 12,
//         regionId: 1,
//         educationTypeId: 1
//       },
//       {
//         name:"Frederiksværk Gymnasium/STX",
//         cityId: 13,
//         regionId: 1,
//         educationTypeId: 1
//       },
//       {
//         name:"Frederiksværk Gymnasium/HF",
//         cityId: 13,
//         regionId: 1,
//         educationTypeId: 2
//       },
//       {
//         name:"Gefion Gymnasium",
//         cityId: 1,
//         regionId: 1,
//         educationTypeId: 1
//       },
//       {
//         name:"Gentofte Studenterkursus",
//         cityId: 3,
//         regionId: 1,
//         educationTypeId: 1
//       },
//       {
//         name:"Gentofte HF",
//         cityId: 3,
//         regionId: 1,
//         educationTypeId: 2
//       },
//       {
//         name:"Gl. Hellerup Gymnasium",
//         cityId: 14,
//         regionId: 1,
//         educationTypeId: 1
//       },
//       {
//         name:"Gladsaxe Gymnasium",
//         cityId: 15,
//         regionId: 1,
//         educationTypeId: 1
//       },
//       {
//         name:"Gribskov Gymnasium",
//         cityId: 16,
//         regionId: 1,
//         educationTypeId: 1
//       },
//       {
//         name:"Handelsskolen København Nord",
//         cityId: 11,
//         regionId: 1,
//         educationTypeId: 3
//       },
//       {
//         name:"Handelsskolen København Nord",
//         cityId: 12,
//         regionId: 1,
//         educationTypeId: 3
//       },
//       {
//         name:"Helsingør Gymnasium",
//         cityId: 17,
//         regionId: 1,
//         educationTypeId: 1
//       },
//       {
//         name:"Herlev Gymnasium/STX",
//         cityId: 18,
//         regionId: 1,
//         educationTypeId: 1
//       },
//       {
//         name:"Herlev Gymnasium/HF",
//         cityId: 18,
//         regionId: 1,
//         educationTypeId: 2
//       },
//       {
//         name:"HF & VUC Nordsjælland",
//         cityId: 11,
//         regionId: 1,
//         educationTypeId: 2
//       },
//       {
//         name:"HF-centret Efterslægten",
//         cityId: 1,
//         regionId: 1,
//         educationTypeId: 2
//       },
//       {
//         name:"HF & VUC Vestegnen",
//         cityId: 19,
//         regionId: 1,
//         educationTypeId: 2
//       },
//       {
//         name:"Hotel og Restaurentskolen Forberedende til gymnasie/STX",
//         cityId: 20,
//         regionId: 1,
//         educationTypeId: 1
//       },
//       {
//         name:"Hotel og Restaurentskolen Forberedende til gymnasie/HF",
//         cityId: 20,
//         regionId: 1,
//         educationTypeId: 2
//       },
//       {
//         name:"Hvidovre Gymnasium/STX",
//         cityId: 21,
//         regionId: 1,
//         educationTypeId: 1
//       },
//       {
//         name:"Hvidovre Gymnasium/HF",
//         cityId: 21,
//         regionId: 1,
//         educationTypeId: 2
//       },
//       {
//         name:"Høje-Taastrup Gymnasium",
//         cityId: 22,
//         regionId: 1,
//         educationTypeId: 1
//       },
//       {
//         name:"Ingrid Jespersens Gymnasieskole",
//         cityId: 1,
//         regionId: 1,
//         educationTypeId: 1
//       },
//       {
//         name:"Johannesskolen Gymnasium",
//         cityId: 10,
//         regionId: 1,
//         educationTypeId: 1
//       },
//       {
//         name:"København Nord Gymnasium",
//         cityId: 23,
//         regionId: 1,
//         educationTypeId: 1
//       },
//       {
//         name:"Københavns Tekniske Skole",
//         cityId: 20,
//         regionId: 1,
//         educationTypeId: 3
//       },
//       {
//         name:"Københavns åbne Gymnasium",
//         cityId: 20,
//         regionId: 1,
//         educationTypeId: 1
//       },
//       {
//         name:"Københavns VUC",
//         cityId: 1,
//         regionId: 1,
//         educationTypeId: 2
//       },
//       {
//         name:"Marie Kruses Skole Gymnasium",
//         cityId: 24,
//         regionId: 1,
//         educationTypeId: 1
//       },
//       {
//         name:"N. Zahles Gymnasieskole",
//         cityId: 1,
//         regionId: 1,
//         educationTypeId: 1
//       },
//       {
//         name:"NEXT - Uddannelse København Gymnasium",
//         cityId: 25,
//         regionId: 1,
//         educationTypeId: 1
//       },
//       {
//         name:"Niels Steensens Gymnasium",
//         cityId: 1,
//         regionId: 1,
//         educationTypeId: 1
//       },
//       {
//         name:"Nærum Gymnasium",
//         cityId: 26,
//         regionId: 1,
//         educationTypeId: 1
//       },
//       {
//         name:"Nørre Gymnasium",
//         cityId: 27,
//         regionId: 1,
//         educationTypeId: 1
//       },
//       {
//         name:"Ordrup Gymnasium",
//         cityId: 28,
//         regionId: 1,
//         educationTypeId: 1
//       },
//       {
//         name:"Rungsted Gymnasium",
//         cityId: 29,
//         regionId: 1,
//         educationTypeId: 1
//       },
//       {
//         name:"Rysensteen Gymnasium",
//         cityId: 1,
//         regionId: 1,
//         educationTypeId: 1
//       },
//       {
//         name:"Rødovre Gymnasium",
//         cityId: 30,
//         regionId: 1,
//         educationTypeId: 1
//       },
//       {
//         name:"Sankt Annæ Gymnasium",
//         cityId: 20,
//         regionId: 1,
//         educationTypeId: 1
//       },
//       {
//         name:"Sankt Petri Skole - Gymnasium",
//         cityId: 1,
//         regionId: 1,
//         educationTypeId: 1
//       },
//       {
//         name:"Skoleprojektet Basen Gymnasium/STX",
//         cityId: 1,
//         regionId: 1,
//         educationTypeId: 1
//       },
//       {
//         name:"Skoleprojektet Basen Gymnasium/HF",
//         cityId: 1,
//         regionId: 1,
//         educationTypeId: 2
//       },
//       {
//         name:"Tårnby Gymnasium",
//         cityId: 31,
//         regionId: 1,
//         educationTypeId: 1
//       },
//       {
//         name:"TEC Frederiksberg Teknisk Gymnasium",
//         cityId: 10,
//         regionId: 1,
//         educationTypeId: 4
//       },
//       {
//         name:"TEC Ballerup Teknisk Gymnasium",
//         cityId: 5,
//         regionId: 1,
//         educationTypeId: 4
//       },
//       {
//         name:"TEC Lyngby Teknisk Gymnasium",
//         cityId: 23,
//         regionId: 1,
//         educationTypeId: 4
//       },
//       {
//         name:"Virum Gymnasium",
//         cityId: 32,
//         regionId: 1,
//         educationTypeId: 1
//       },
//       {
//         name:"VoksenUddannelsescenter Frederiksberg/STX",
//         cityId: 10,
//         regionId: 1,
//         educationTypeId: 1
//       },
//       {
//         name:"VoksenUddannelsescenter Frederiksberg/HF",
//         cityId: 10,
//         regionId: 1,
//         educationTypeId: 2
//       },
//        {
//         name:"VUC & HF Hvidovre-Amager/STX",
//         cityId: 21,
//         regionId: 1,
//         educationTypeId: 1
//       },
//       {
//         name:"VUC & HF Hvidovre-Amager/HF",
//         cityId: 21,
//         regionId: 1,
//         educationTypeId: 2
//       },
//       {
//         name:"Øregård Gymnasium",
//         cityId: 14,
//         regionId: 1,
//         educationTypeId: 1
//       },
//       {
//         name:"Ørestad Gymnasium",
//         cityId: 1,
//         regionId: 1,
//         educationTypeId: 1
//       },
//       {
//         name:"CPH West Gymnasium",
//         cityId: 25,
//         regionId: 1,
//         educationTypeId: 1
//       },
//       {
//         name:"Niels Brocks Handelsgymnasium",
//         cityId: 10,
//         regionId: 1,
//         educationTypeId: 3
//       },
//       {
//         name:"VUC Lyngby",
//         cityId: 23,
//         regionId: 1,
//         educationTypeId: 2
//       },
//       {
//         name:"Aahus Katedralskole Gymnasium",
//         cityId: 33,
//         regionId: 2,
//         educationTypeId: 1
//       },
//       {
//         name:"Århus Akademi Gymnasium/STX",
//         cityId: 33,
//         regionId: 2,
//         educationTypeId: 1
//       },
//       {
//         name:"Århus Akademi Gymnasium/HF",
//         cityId: 33,
//         regionId: 2,
//         educationTypeId: 2
//       },
//       {
//         name:"Århus Statsgymnasium",
//         cityId: 33,
//         regionId: 2,
//         educationTypeId: 1
//       },
//       {
//         name:"Århus Købmandsskole Handelsgymnasium",
//         cityId: 34,
//         regionId: 2,
//         educationTypeId: 3
//       },
//       {
//         name:"Bjerringbro Gymnasium",
//         cityId: 35,
//         regionId: 2,
//         educationTypeId: 1
//       },
//       {
//         name:"Egaa Gymnasium",
//         cityId: 36,
//         regionId: 2,
//         educationTypeId: 1
//       },
//       {
//         name:"Favrskov Gymnasium",
//         cityId: 38,
//         regionId: 2,
//         educationTypeId: 1
//       },
//       {
//         name:"Grenaa Gymnasium/STX",
//         cityId: 39,
//         regionId: 2,
//         educationTypeId: 1
//       },
//       {
//         name:"Grenaa Gymnasium/HF",
//         cityId: 39,
//         regionId: 2,
//         educationTypeId: 2
//       },
//       {
//         name:"Herning Gymnasium",
//         cityId: 40,
//         regionId: 2,
//         educationTypeId: 1
//       },
//       {
//         name:"Herningsholm Erhvervsgymnasium",
//         cityId: 40,
//         regionId: 2,
//         educationTypeId: 1
//       },
//       {
//         name:"Herning HF & VUC / STX",
//         cityId: 40,
//         regionId: 2,
//         educationTypeId: 1
//       },
//       {
//         name:"Herning HF & VUC / HF",
//         cityId: 40,
//         regionId: 2,
//         educationTypeId: 2
//       },
//       {
//         name:"Holstebro Gymnasium/STX",
//         cityId: 41,
//         regionId: 2,
//         educationTypeId: 1
//       },
//       {
//         name:"Holstebro Gymnasium/HF",
//         cityId: 41,
//         regionId: 2,
//         educationTypeId: 2
//       },
//       {
//         name:"Holstebro Uddannelsescenter Gymnasium",
//         cityId: 41,
//         regionId: 2,
//         educationTypeId: 1
//       },
//       {
//         name:"Horsens Gymnasium",
//         cityId: 42,
//         regionId: 2,
//         educationTypeId: 1
//       },
//       {
//         name:"Horsens HF & VUC/STX",
//         cityId: 42,
//         regionId: 2,
//         educationTypeId: 1
//       },
//       {
//         name:"Horsens HF & VUC/HF",
//         cityId: 42,
//         regionId: 2,
//         educationTypeId: 2
//       },
//       {
//         name:"Horsens Statsskole Gymnasium",
//         cityId: 42,
//         regionId: 2,
//         educationTypeId: 1
//       },
//       {
//         name:"Ikast-Brande Gymnasium",
//         cityId: 43,
//         regionId: 2,
//         educationTypeId: 1
//       },
//       {
//         name:"Langkær Gymnasium/STX",
//         cityId: 44,
//         regionId: 2,
//         educationTypeId: 1
//       },
//       {
//         name:"Langkær Gymnasium/HF",
//         cityId: 44,
//         regionId: 2,
//         educationTypeId: 2
//       },
//       {
//         name:"Learnmark Horsens Gymnasium",
//         cityId: 42,
//         regionId: 2,
//         educationTypeId: 1
//       },
//       {
//         name:"Lemvig Gymnasium",
//         cityId: 45,
//         regionId: 2,
//         educationTypeId: 1
//       },   
//       {
//         name:"Marselisborg Gymnasium",
//         cityId: 33,
//         regionId: 2,
//         educationTypeId: 1
//       },   
//       {
//         name:"Mercantec Gymnasium",
//         cityId: 47,
//         regionId: 2,
//         educationTypeId: 1
//       },        
//       {
//         name:"Odder Gymnasium",
//         cityId: 48,
//         regionId: 2,
//         educationTypeId: 1
//       },
//       {
//         name:"Paderup Gymnasium",
//         cityId: 49,
//         regionId: 2,
//         educationTypeId: 1
//       },
//       {
//         name:"Randers HF & VUC/STX",
//         cityId: 49,
//         regionId: 2,
//         educationTypeId: 1
//       },
//       {
//         name:"Randers HF & VUC/HF",
//         cityId: 49,
//         regionId: 2,
//         educationTypeId: 2
//       },
//       {
//         name:"Randers Statsskole Gymnasium",
//         cityId: 49,
//         regionId: 2,
//         educationTypeId: 1
//       },
//       {
//         name:"Ringkjøbing Gymnasium",
//         cityId: 50,
//         regionId: 2,
//         educationTypeId: 1
//       },
//       {
//         name:"Risskov Gymnasium",
//         cityId: 51,
//         regionId: 2,
//         educationTypeId: 1
//       },
//       {
//         name:"Rønde Gymnasium",
//         cityId: 52,
//         regionId: 2,
//         educationTypeId: 1
//       },
//       {
//         name:"Silkeborg Gymnasium",
//         cityId: 53,
//         regionId: 2,
//         educationTypeId: 1
//       },
//       {
//         name:"Silkeborg Business College Handelsgymnasium",
//         cityId: 53,
//         regionId: 2,
//         educationTypeId:3
//       },
//       {
//         name:"Silkeborg Tekniske Skole Teknisk Gymnasium",
//         cityId: 53,
//         regionId: 2,
//         educationTypeId:3
//       },
//       {
//         name:"Skanderborg - Odder Center for Uddannelse",
//         cityId: 54,
//         regionId: 2,
//         educationTypeId: 1
//       },
//       {
//         name:"Skanderborg Gymnasium",
//         cityId: 54,
//         regionId: 2,
//         educationTypeId: 1
//       }, 
//       {
//         name:"Skive Gymnasium & HF / STX",
//         cityId: 55,
//         regionId: 2,
//         educationTypeId: 1
//       }, 
//       {
//         name:"Skive Gymnasium & HF / HF",
//         cityId: 55,
//         regionId: 2,
//         educationTypeId: 2
//       }, 
//       {
//         name:"Skive Handelsskole",
//         cityId: 55,
//         regionId: 2,
//         educationTypeId:3
//       },
//       {
//         name:"Struer Statsgymnasium ",
//         cityId: 56,
//         regionId: 2,
//         educationTypeId: 1
//       }, 
//       {
//         name:"Th. Langs HF-kursus & VUC",
//         cityId: 53,
//         regionId: 2,
//         educationTypeId: 2
//       }, 
//       {
//         name:"Vejlefjordskolen Gymnasium",
//         cityId: 58,
//         regionId: 2,
//         educationTypeId: 1
//       }, 
//       {
//         name:"Vestjysk Gymnasium Tarm",
//         cityId: 59,
//         regionId: 2,
//         educationTypeId: 1
//       }, 
//       {
//         name:"Viborg Gymnasium & HF / STX",
//         cityId: 47,
//         regionId: 2,
//         educationTypeId: 1
//       },   
//       {
//         name:"Viborg Gymnasium & HF / HF",
//         cityId: 47,
//         regionId: 2,
//         educationTypeId: 2
//       },   
//       {
//         name:"Viborg Katedralskole Gymnasium",
//         cityId: 47,
//         regionId: 2,
//         educationTypeId: 1
//       },   
//       {
//         name:"Viby Gymnasium & HF / STX",
//         cityId: 34,
//         regionId: 2,
//         educationTypeId: 1
//       },
//       {
//         name:"Viby Gymnasium & HF / HF",
//         cityId: 34,
//         regionId: 2,
//         educationTypeId: 2
//       },
//       {
//         name:"VID Gymnasier & HHX Rønde / STX",
//         cityId: 52,
//         regionId: 2,
//         educationTypeId: 1
//       },
//       {
//         name:"VID Gymnasier & HHX Rønde / HHX",
//         cityId: 52,
//         regionId: 2,
//         educationTypeId: 3
//       },
//       {
//         name:"Viden Djurs Gymnasium",
//         cityId: 39,
//         regionId: 2,
//         educationTypeId: 1
//       },
//       {
//         name:"VUC Aarhus HF og Gymnasial supplering/STX",
//         cityId: 33,
//         regionId: 2,
//         educationTypeId: 1
//       },
//       {
//         name:"VUC Aarhus HF og Gymnasial supplering/HF",
//         cityId: 33,
//         regionId: 2,
//         educationTypeId: 2
//       },
//       {
//         name:"Aalborg Katedralskole Gymnasium/STX",
//         cityId: 60,
//         regionId: 3,
//         educationTypeId: 1
//       },
//       {
//         name:"Aalborg Katedralskole Gymnasium/HF",
//         cityId: 60,
//         regionId: 3,
//         educationTypeId: 2
//       },        
//       {
//         name:"Aalborg Studenterkursus",
//         cityId: 60,
//         regionId: 3,
//         educationTypeId: 1
//       },
//       {
//         name:"Aalborg Tekniske Gymnasium",
//         cityId: 60,
//         regionId: 3,
//         educationTypeId: 4
//       },
//       {
//         name:"Aalborghus Gymnasium",
//         cityId: 60,
//         regionId: 3,
//         educationTypeId: 1
//       },
//       {
//         name:"Brønderslev Gymnasium",
//         cityId: 61,
//         regionId: 3,
//         educationTypeId: 1
//       },     
//       {
//         name:"Dronninglund Gymnasium",
//         cityId: 62,
//         regionId: 3,
//         educationTypeId: 1
//       },  
//       {
//         name:"Erhvervsskolerne Aars Gymnasium",
//         cityId: 63,
//         regionId: 3,
//         educationTypeId: 1
//       }, 
//       {
//         name:"EUC Nordvest Teknisk Gymnasium",
//         cityId: 64,
//         regionId: 3,
//         educationTypeId: 4
//       },       
//       {
//         name:"EUC Nordvest Teknisk Gymnasium",
//         cityId: 65,
//         regionId: 3,
//         educationTypeId: 4
//       },   
//       {
//         name:"EUC Nord Teknisk Gymnasium",
//         cityId: 66,
//         regionId: 3,
//         educationTypeId: 4
//       },  
//       {
//         name:"EUC Nord Teknisk Gymnasium",
//         cityId: 67,
//         regionId: 3,
//         educationTypeId: 4
//       },
//       {
//         name:"Fjerritslev Gymnasium",
//         cityId: 68,
//         regionId: 3,
//         educationTypeId: 1
//       },
//       {
//         name:"Frederikshavn Gymnasium/STX",
//         cityId: 67,
//         regionId: 3,
//         educationTypeId: 1
//       },
//       {
//         name:"Frederikshavn Gymnasium/HF",
//         cityId: 67,
//         regionId: 3,
//         educationTypeId: 2
//       },
//       {
//         name:"Frederikshavn Handelsskole",
//         cityId: 67,
//         regionId: 3,
//         educationTypeId: 3
//       },
//       {
//         name:"Hasseris Gymnasium & IB/STX",
//         cityId: 60,
//         regionId: 3,
//         educationTypeId: 1
//       },
//       {
//         name:"Hasseris Gymnasium & IB/HF",
//         cityId: 60,
//         regionId: 3,
//         educationTypeId: 2
//       },  
//       {
//         name:"Hjørring Gymnasium/STX",
//         cityId: 66,
//         regionId: 3,
//         educationTypeId: 1
//       }, 
//       {
//         name:"Hjørring Gymnasium/HF",
//         cityId: 66,
//         regionId: 3,
//         educationTypeId: 2
//       }, 
//       {
//         name:"Morsø Gymnasium",
//         cityId: 64,
//         regionId: 3,
//         educationTypeId: 1
//       },        
//       {
//         name:"Nørresundby Gymnasium/STX",
//         cityId: 69,
//         regionId: 3,
//         educationTypeId: 1
//       }, 
//       {
//         name:"Nørresundby Gymnasium/HF",
//         cityId: 69,
//         regionId: 3,
//         educationTypeId: 2
//       }, 
//       {
//         name:"Støvring Gymnasium",
//         cityId: 70,
//         regionId: 3,
//         educationTypeId: 1
//       }, 
//       {
//         name:"Thisted Gymnasium/STX",
//         cityId: 65,
//         regionId: 3,
//         educationTypeId: 1
//       }, 
//       {
//         name:"Thisted Gymnasium/HF",
//         cityId: 65,
//         regionId: 3,
//         educationTypeId: 2
//       }, 
//       {
//         name:"Thy-Mors HF & VUC/STX",
//         cityId: 65,
//         regionId: 3,
//         educationTypeId: 1
//       }, 
//       {
//         name:"Thy-Mors HF & VUC/HF",
//         cityId: 65,
//         regionId: 3,
//         educationTypeId: 2
//       }, 
//       {
//         name:"Vesthimmerlands Gymnasium/STX",
//         cityId: 63,
//         regionId: 3,
//         educationTypeId: 1
//       }, 
//       {
//         name:"Vesthimmerlands Gymnasium/HF",
//         cityId: 63,
//         regionId: 3,
//         educationTypeId: 2
//       }, 
//       {
//         name:"VUC & HF Nordjylland/STX",
//         cityId: 60,
//         regionId: 3,
//         educationTypeId: 1
//       },
//       {
//         name:"VUC & HF Nordjylland/HF",
//         cityId: 60,
//         regionId: 3,
//         educationTypeId: 2
//       }, 
//       {
//         name:"Mariagerfjord Gymnasium",
//         cityId: 46,
//         regionId: 3,
//         educationTypeId: 1
//       }, 
//       {
//         name:"TECH College Hobro Teknisk Gymnasium",
//         cityId: 46,
//         regionId: 3,
//         educationTypeId: 4
//       }, 
//       {
//         name:"Allikelund Gymnasium",
//         cityId: 71,
//         regionId: 4,
//         educationTypeId: 1
//       }, 
//       {
//         name:"ACELF Nakskov Handels Gymnasium",
//         cityId: 72,
//         regionId: 4,
//         educationTypeId: 1
//       }, 
//       {
//         name:"EUC Nordvestsjælland Gymnasium",
//         cityId: 73,
//         regionId: 4,
//         educationTypeId: 1
//       }, 
//       {
//         name:"EUC Sjælland Gymnasium",
//         cityId: 74,
//         regionId: 4,
//         educationTypeId: 1
//       }, 
//       {
//         name:"Greve Gymnasium",
//         cityId: 75,
//         regionId: 4,
//         educationTypeId: 1
//       }, 
//       {
//         name:"Herlufsholm Gymnasium",
//         cityId: 74,
//         regionId: 4,
//         educationTypeId: 1
//       }, 
//       {
//         name:"Himmelev Gymnasium",
//         cityId: 76,
//         regionId: 4,
//         educationTypeId: 1
//       }, 
//       {
//         name:"Høng Gymnasium/STX",
//         cityId: 77,
//         regionId: 4,
//         educationTypeId: 1
//       }, 
//       {
//         name:"Høng Gymnasium/HF",
//         cityId: 77,
//         regionId: 4,
//         educationTypeId: 2
//       },
//       {
//         name:"Kalundborg Gymnasium/STX",
//         cityId: 71,
//         regionId: 4,
//         educationTypeId: 1
//       }, 
//       {
//         name:"Kalundborg Gymnasium/HF",
//         cityId: 71,
//         regionId: 4,
//         educationTypeId: 2
//       },
//       {
//         name:"Køge Gymnasium",
//         cityId: 78,
//         regionId: 4,
//         educationTypeId: 1
//       }, 
//       {
//         name:"Køge Handelsskole",
//         cityId: 78,
//         regionId: 4,
//         educationTypeId: 3
//       }, 
//       {
//         name:"Maribo Gymnasium",
//         cityId: 79,
//         regionId: 4,
//         educationTypeId: 1
//       }, 
//       {
//         name:"Midtsjællands Gymnasieskoler",
//         cityId: 80,
//         regionId: 4,
//         educationTypeId: 1
//       }, 
//       {
//         name:"Nakskov Gymnasium",
//         cityId: 72,
//         regionId: 4,
//         educationTypeId: 1
//       }, 
//       {
//         name:"Nordvestsjællands HF&VUC / STX",
//         cityId: 73,
//         regionId: 4,
//         educationTypeId: 1
//       }, 
//       {
//         name:"Nordvestsjællands HF&VUC / HF",
//         cityId: 73,
//         regionId: 4,
//         educationTypeId: 2
//       },
//       {
//         name:"Nykøbing Katedralskole Gymnasium / STX",
//         cityId: 81,
//         regionId: 4,
//         educationTypeId: 1
//       }, 
//       {
//         name:"Nykøbing Katedralskole Gymnasium / HF",
//         cityId: 81,
//         regionId: 4,
//         educationTypeId: 2
//       },
//       {
//         name:"Næstved Gymnasium / STX",
//         cityId: 74,
//         regionId: 4,
//         educationTypeId: 1
//       }, 
//       {
//         name:"Næstved Gymnasium / HF",
//         cityId: 74,
//         regionId: 4,
//         educationTypeId: 2
//       },
//       {
//         name:"Odsherred Gymnasium",
//         cityId: 82,
//         regionId: 4,
//         educationTypeId: 1
//       }, 
//       {
//         name:"Roskilde Gymnasium",
//         cityId: 76,
//         regionId: 4,
//         educationTypeId: 1
//       },
//       {
//         name:"Roskilde Tekniske Gymnasium",
//         cityId: 76,
//         regionId: 4,
//         educationTypeId: 4
//       },
//       {
//         name:"Roskilde Katedralskole Gymnasium",
//         cityId: 76,
//         regionId: 4,
//         educationTypeId: 1
//       },
//       {
//         name:"Selandia – Erhvervsrettede Uddannelser / HHX",
//         cityId: 83,
//         regionId: 4,
//         educationTypeId: 3
//       },
//       {
//         name:"Selandia – Erhvervsrettede Uddannelser / TSF",
//         cityId: 83,
//         regionId: 4,
//         educationTypeId: 4
//       },
//       {
//         name:"Slagelse Gymnasium / STX",
//         cityId: 83,
//         regionId: 4,
//         educationTypeId: 1
//       }, 
//       {
//         name:"Slagelse Gymnasium / HF",
//         cityId: 83,
//         regionId: 4,
//         educationTypeId: 2
//       },    
//       {
//         name:"Slotshaven Gymnasium",
//         cityId: 73,
//         regionId: 4,
//         educationTypeId: 1
//       }, 
//       {
//         name:"Solrød Gymnasium",
//         cityId: 84,
//         regionId: 4,
//         educationTypeId: 1
//       }, 
//       {
//         name:"Sorø Akademis Skole Gymnasium",
//         cityId: 85,
//         regionId: 4,
//         educationTypeId: 1
//       }, 
//       {
//         name:"Stenhus Gymnasium / STX",
//         cityId: 73,
//         regionId: 4,
//         educationTypeId: 1
//       }, 
//       {
//         name:"Stenhus Gymnasium / HF",
//         cityId: 73,
//         regionId: 4,
//         educationTypeId: 2
//       },
//       {
//         name:"Vordingborg Gymnasium / STX",
//         cityId: 86,
//         regionId: 4,
//         educationTypeId: 1
//       }, 
//       {
//         name:"Vordingborg Gymnasium / HF",
//         cityId: 86,
//         regionId: 4,
//         educationTypeId: 2
//       },
//       {
//         name:"VUC Roskilde / STX",
//         cityId: 76,
//         regionId: 4,
//         educationTypeId: 1
//       }, 
//       {
//         name:"VUC Roskilde / HF",
//         cityId: 76,
//         regionId: 4,
//         educationTypeId: 2
//       },
//       {
//         name:"VUC Storstrøm",
//         cityId: 87,
//         regionId: 4,
//         educationTypeId: 2
//       },
//       {
//         name:"Zealand Business College Gymnasium",
//         cityId: 88,
//         regionId: 4,
//         educationTypeId: 1
//       }, 
//       {
//         name:"Zealand Business College Gymnasium",
//         cityId: 86,
//         regionId: 4,
//         educationTypeId: 1
//       }, 
//       {
//         name:"Zealand Business College Gymnasium",
//         cityId: 74,
//         regionId: 4,
//         educationTypeId: 1
//       }, 
//       {
//         name:"Kalundborg / HHX",
//         cityId: 71,
//         regionId: 4,
//         educationTypeId: 3
//       }, 
//       {
//         name:"Kalundborg / HTX",
//         cityId: 71,
//         regionId: 4,
//         educationTypeId: 6
//       }, 
//       {
//         name:"Kalundborg / HG",
//         cityId: 71,
//         regionId: 4,
//         educationTypeId: 5
//       }, 
//       {
//         name:"Aabenraa Statsskole Gymnasium",
//         cityId: 89,
//         regionId: 5,
//         educationTypeId: 1
//       }, 
//       {
//         name:"Alssundgymnasiet Sønderborg",
//         cityId: 90,
//         regionId: 5,
//         educationTypeId: 1
//       }, 
//       {
//         name:"Business College Syd Handelsgymnasium",
//         cityId: 90,
//         regionId: 5,
//         educationTypeId: 3
//       }, 
//       {
//         name:"Esbjerg Gymnasium/STX",
//         cityId: 91,
//         regionId: 5,
//         educationTypeId: 1
//       }, 
//       {
//         name:"Esbjerg Gymnasium/HF",
//         cityId: 91,
//         regionId: 5,
//         educationTypeId: 2
//       }, 
//       {
//         name:"EUC Syd Gymnasium",
//         cityId: 90,
//         regionId: 5,
//         educationTypeId: 1
//       }, 
//       {
//         name:"Faaborg Gymnasium",
//         cityId: 92,
//         regionId: 5,
//         educationTypeId: 1
//       }, 
//       {
//         name:"Fredericia Gymnasium",
//         cityId: 93,
//         regionId: 5,
//         educationTypeId: 1
//       }, 
//       {
//         name:"Grindsted Gymnasium/STX",
//         cityId: 37,
//         regionId: 5,
//         educationTypeId: 1
//       },
//       {
//         name:"Grindsted Gymnasium/HF",
//         cityId: 37,
//         regionId: 5,
//         educationTypeId: 2
//       },
//       {
//         name:"Haderslev Katedralskole Gymnasium",
//         cityId: 94,
//         regionId: 5,
//         educationTypeId: 1
//       },
//       {
//         name:"Handelsgymnasiet Vestfyn",
//         cityId: 95,
//         regionId: 5,
//         educationTypeId: 3
//       },
//       {
//         name:"Hansenberg Gymnasium",
//         cityId: 96,
//         regionId: 5,
//         educationTypeId: 1
//       },
//       {
//         name:"HF & VUC FYN",
//         cityId: 97,
//         regionId: 5,
//         educationTypeId: 2
//       },
//       {
//         name:"Kolding Gymnasium & HF & IB World School/STX",
//         cityId: 96,
//         regionId: 5,
//         educationTypeId: 1
//       },
//       {
//         name:"Kolding Gymnasium & HF & IB World School/HF",
//         cityId: 96,
//         regionId: 5,
//         educationTypeId: 2
//       },
//       {
//         name:"Kold College Teknisk Gymnasium",
//         cityId: 97,
//         regionId: 5,
//         educationTypeId: 4
//       },
//       {
//         name:"Middelfart Gymnasium/STX",
//         cityId: 98,
//         regionId: 5,
//         educationTypeId: 1
//       },
//       {
//         name:"Middelfart Gymnasium/HF",
//         cityId: 98,
//         regionId: 5,
//         educationTypeId: 2
//       },
//       {
//         name:"Midtfyns Gymnasium",
//         cityId: 99,
//         regionId: 5,
//         educationTypeId: 1
//       },
//       {
//         name:"Mulernes Legatskole Gymnasium",
//         cityId: 97,
//         regionId: 5,
//         educationTypeId: 1
//       },
//       {
//         name:"Munkensdam Gymnasium",
//         cityId: 96,
//         regionId: 5,
//         educationTypeId: 1
//       },
//       {
//         name:"Nordfyns Gymnasium",
//         cityId: 100,
//         regionId: 5,
//         educationTypeId: 1
//       },
//       {
//         name:"Nyborg Gymnasium",
//         cityId: 101,
//         regionId: 5,
//         educationTypeId: 1
//       },
//       {
//         name:"Odense Katedralskole Gymnasium/STX",
//         cityId: 97,
//         regionId: 5,
//         educationTypeId: 1
//       },
//       {
//         name:"Odense Katedralskole Gymnasium/HF",
//         cityId: 97,
//         regionId: 5,
//         educationTypeId: 2
//       },
//       {
//         name:"Oure Kostgymnasium",
//         cityId: 102,
//         regionId: 5,
//         educationTypeId: 1
//       },
//       {
//         name:"Ribe Katedralskole Gymnasium",
//         cityId: 103,
//         regionId: 5,
//         educationTypeId: 1
//       },
//       {
//         name:"Rosborg Gymnasium/STX",
//         cityId: 57,
//         regionId: 2,
//         educationTypeId:1
//       },
//       {
//         name:"Rosborg Gymnasium/HF",
//         cityId: 57,
//         regionId: 2,
//         educationTypeId:2
//       },
//       {
//         name:"Rybners Gymansium",
//         cityId: 91,
//         regionId: 5,
//         educationTypeId: 1
//       },
//       {
//         name:"Rødkilde Gymnasium",
//         cityId: 57,
//         regionId: 2,
//         educationTypeId:1
//       },
//       {
//         name:"Sct. Knuds Gymnasium",
//         cityId: 97,
//         regionId: 5,
//         educationTypeId:1
//       },
//       {
//         name:"Svendborg Erhvervsskole Handels",
//         cityId: 104,
//         regionId: 5,
//         educationTypeId:4
//       },
//       {
//         name:"Svendborg Gymnasium",
//         cityId: 104,
//         regionId: 5,
//         educationTypeId:1
//       },
//       {
//         name:"Sønderborg Statsskole Gymnasium",
//         cityId: 104,
//         regionId: 5,
//         educationTypeId:1
//       },
//       {
//         name:"Thornbjerg Gymnasium",
//         cityId: 97,
//         regionId: 5,
//         educationTypeId:1
//       },
//       {
//         name:"Tietgen Handelsgymnasium",
//         cityId: 97,
//         regionId: 5,
//         educationTypeId:3
//       },
//       {
//         name:"Tønder Gymnasium/STX",
//         cityId: 105,
//         regionId: 5,
//         educationTypeId:1
//       },
//       {
//         name:"Tønder Gymnasium/HF",
//         cityId: 105,
//         regionId: 5,
//         educationTypeId:2
//       },
//       {
//         name:"Tønder Halndelsgymnasium & Handelsskole",
//         cityId: 105,
//         regionId: 5,
//         educationTypeId:3
//       },
//       {
//         name:"Tørring Gymnasium",
//         cityId: 106,
//         regionId: 5,
//         educationTypeId:1
//       },
//       {
//         name:"Varde Gymnasium /STX",
//         cityId: 107,
//         regionId: 5,
//         educationTypeId:1
//       },
//       {
//         name:"Varde Gymnasium /HF",
//         cityId: 107,
//         regionId: 5,
//         educationTypeId:2
//       },
//       {
//         name:"Varde Handelsskole og Handelsgymnasium",
//         cityId: 107,
//         regionId: 5,
//         educationTypeId:3
//       },
//       {
//         name:"Vejen Gymnasium/STX",
//         cityId: 108,
//         regionId: 5,
//         educationTypeId:1
//       },
//       {
//         name:"Vejen Gymnasium/HF",
//         cityId: 108,
//         regionId: 5,
//         educationTypeId:2
//       },
//       {
//         name:"Vejen Business College Handelsgymnasium",
//         cityId: 108,
//         regionId: 5,
//         educationTypeId:3
//       },
//       {
//         name:"Vestfyns Gymnasium",
//         cityId: 95,
//         regionId: 5,
//         educationTypeId:1
//       },
//       {
//         name:"VUC Vest",
//         cityId: 91,
//         regionId: 5,
//         educationTypeId:2
//       },
//       {
//         name:"VUC Syd",
//         cityId: 94,
//         regionId: 5,
//         educationTypeId:2
//       },
//       {
//         name:"Erhvervsgymnasiet Grindsted",
//         cityId: 37,
//         regionId: 5,
//         educationTypeId: 1
//       },
//       {
//         name:"Syddansk Erhvervsskole",
//         cityId: 57,
//         regionId: 5,
//         educationTypeId:3
//       },
//       {
//         name:"A.P. Møller Skolen Gymnasium",
//         cityId: 109,
//         regionId: 6,
//         educationTypeId:1
//       },
//       {
//         name:"Duborg-Skolen Gymnasium",
//         cityId: 110,
//         regionId: 6,
//         educationTypeId:1
//       },      
//       {
//         name:"Campus Kujalleq Gymnasium",
//         cityId: 111,
//         regionId: 7,
//         educationTypeId:1
//       },      
//       {
//         name:"GUX Aasiaat Gymnasium",
//         cityId: 112,
//         regionId: 7,
//         educationTypeId:1
//       },
//       {
//         name:"Qeqqani Ilinniarnertuunngorniarfik Gymnasium",
//         cityId: 113,
//         regionId: 7,
//         educationTypeId:1
//       },
//       {
//         name:"Teknikimik Ilinniarfik, GUX-Sisimiut Gymnasium",
//         cityId: 114,
//         regionId: 7,
//         educationTypeId:1
//       },
//       {
//         name:"Føroya Studentaskúli/STX",
//         cityId: 115,
//         regionId: 8,
//         educationTypeId:1
//       },
//       {
//         name:"Føroya Studentaskúli/HF",
//         cityId: 115,
//         regionId: 8,
//         educationTypeId:2
//       },
//       {
//         name:"Føroya Midnámsskúlin á Kambsdali Handelsgymnasium/STX",
//         cityId: 116,
//         regionId: 8,
//         educationTypeId:1
//       },
//       {
//         name:"FMidnámsskúlin á Kambsdali Handelsgymnasium/HHX",
//         cityId: 116,
//         regionId: 8,
//         educationTypeId:3
//       }
//     ];



//     institutions.forEach(function(institution) {
//       Institution.findOrCreate({
//         name:institution.name,
//         cityId: institution.cityId,
//         regionId: institution.regionId,
//         educationTypeId: institution.educationTypeId
//       },
//         function(err, createdRole, created) {
//           if (err) {
//             console.error('error running findOrCreate('+ institution.name+')', err);
//           }
//           (created) ? console.log('created institution', institution.name)
//                     : console.log('found institution', institution.name);
//         });
//     });
//     return institutions;
//   }

// };




