// // Do some stuff when page html page is launched 
// $(document).ready( 
 
//     function showAvaialableVisitDays() { 
 
//         var groupVisit_SalesForce_API = 'https://stthomas.force.com/applicantportal/services/apexrest/usteventfeed?eventId=a3s0a000000Av67&feedType=eventList&viewStart=2019-7-31+00:00:00&viewEnd=2020-5-29+24:59:59'; 
 
//         $.ajax({ 
 
//             type: "GET", 
 
//             url: groupVisit_SalesForce_API, 
 
//             dataType: "jsonP", 
 
//             error: function (e) { 
//                 alert("An error occurred while processing API calls"); 
//                 console.log("API call Failed: ", e); 
//             }, 
 
//             success: function (data) { 
//                 var month; 
//                 var year_spring; 
//                 var year_summer; 
//                 var year_fall; 
//                 console.log(data); 

//                 $.each(data, function (index, value) { 
                    
//                     var date = new Date(value.end); 
//                     month = date.getMonth();  
//                     if (month > 1 && month < 5){ 
//                         year_spring =  date.getFullYear(); 
//                     } 
//                     else if (month > 4 && month < 8){ 
//                         year_summer =  date.getFullYear(); 
//                     } 
//                     else if (month > 7 && month < 12){ 
//                         year_fall =  date.getFullYear(); 
//                     }  
//                 });  
                
//                 if((year_spring > year_fall) || (year_spring > year_summer)) {
                    
//                     $('#GroupVisit').empty();

//                     $('#GroupVisit').append(
                        
//                         '<div id ="summer"></div>' +
//                         '<div id ="fall"></div>' +
//                         '<div id="spring"></div>'
//                     );
//                 } else {

//                     $('#GroupVisit').empty();

//                     $('#GroupVisit').append(

//                         '<div id="spring"></div>' +
//                         '<div id ="summer"></div>' +
//                         '<div id ="fall"></div>'
//                     );
//                 }

//                 $('#spring').append('<h2 id="semsterHeader">'+'Spring '+ year_spring +'</h2>');
//                 $('#summer').append('<h2 id="semsterHeader">'+'Summer '+ year_summer +'</h2>');
//                 $('#fall').append('<h2 id="semsterHeader">Fall '+ year_fall +'</h2>');

//                 $.each(data, function (index, value) { 

//                     var visitDate = new Date(value.end); 
//                     month = visitDate.getMonth();  
                
//                     if (month > 1 && month < 5){ 
//                         year_spring =  visitDate.getFullYear(); 
//                     } 
//                     else if (month > 4 && month < 8){ 
//                         year_summer =  visitDate.getFullYear(); 
//                     } 
//                     else if (month > 7 && month < 12){ 
//                         year_fall =  visitDate.getFullYear(); 
//                     }  
    
//                     var visitDateConversion = visitDate.toLocaleString('en-US',
//                         { 
//                             weekday: 'long',
//                             year: 'numeric',
//                             month: 'long',
//                             day: 'numeric' 
//                         },
//                         {
//                             hour: '2-digit', 
//                             minute: '2-digit' 
//                         }
//                     );
                    
//                     if(month > 1 && month < 5) {

//                         $('#spring').show();

//                         $('#spring').append(
//                             '<div class="row">' + 
//                                 '<div class="left">' +
//                                     '<p id="dateVisit">' + visitDateConversion+'<br>'+'</p>'+
//                                 '</div>'+
//                                 '<div class="right">' +
//                                     '<a href="' + value.eventUrl + '" target="_blank" style="font-weight: bold; color: #9e28b5;">' +
//                                         '<button id="btnRegister"><span>Register </span></button>' +
//                                     '</a>' +
//                                 '</div>'+
//                             '</div>'
//                         ); 

//                     }
//                     else if(month > 4 && month < 8) {

//                         $('#summer').show();

//                         $('#summer').append(
//                             '<div class="row">' + 
//                                 '<div class="left">' +
//                                     '<p id="dateVisit">' +visitDateConversion+'<br>'+'</p>'+
//                                 '</div>'+
//                                 '<div class="right">' +
//                                     '<a href="' + value.eventUrl + '" target="_blank" style="font-weight: bold; color: #9e28b5;">' +
//                                         '<button id="btnRegister"><span>Register </span></button>' +
//                                     '</a>' +
//                                 '</div>'+
//                             '</div>'
//                         ); 
                                
//                     }
//                     else if(month > 7 && month < 12){

//                         $('#fall').show();

//                         $('#fall').append(
//                             '<div class="row">' + 
//                                 '<div class="left">' +
//                                     '<p id="dateVisit">' +visitDateConversion+'<br>'+'</p>'+
//                                 '</div>'+
//                                 '<div class="right">' +
//                                     '<a href="' + value.eventUrl + '" target="_blank" style="font-weight: bold; color: #9e28b5;">' +
//                                         '<button id="btnRegister"><span>Register </span></button>' +
//                                     '</a>' +
//                                 '</div>'+
//                             '</div>'
//                         ); 
//                     }     
                  

                
//                 }); // end: data looping 
        
//             }// end:  Ajax success API call 
 
//         }); // end: of Ajax call 
 
//     } // end: showAvailable date function 
 
// ); // end: document.ready() 