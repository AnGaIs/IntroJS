    
//         $( "#goBack" ).click(function() {
//           // $("#text").slideToggle("slow");
//           // $("#bg-colors").slideToggle("slow");
//           $("#text").animate({
//               backgroundColor: "white"
//           });
//           $("#bg-colors").animate({
//               backgroundColor: "rgb(109, 204, 122)"
//           });
//         });
    
//         $( "#text" ).click(function() {
//           // $("#text").slideToggle("slow");
//           // $("#bg-colors").slideToggle("slow");
//           $("#text").animate({
//   backgroundColor: "transparent"
//           });
//           $("#bg-colors").animate({
//               backgroundColor: "transparent"
//           });

//         });

 $( ".text" ).click(function() {
$(".text").fadeToggle("fast");
$("#bg-colors").fadeToggle("fast");
 });

 $( "#bg-video" ).click(function() {
$(".text").fadeToggle("fast");
$("#bg-colors").fadeToggle("fast");
 });

// $(document).on('mousemove', function(e){
//     $('#circle').css({
//        left:  e.pageX,
//        top:   e.pageY
//     });
// });