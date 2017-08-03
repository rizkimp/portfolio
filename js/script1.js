$(document).ready(function() {

  $("#form").hide(function() {
  });

  $("#muncul").click(function() {
    $("#form").toggle("fast");
  });

  $('.owl-carousel').owlCarousel({
    loop:true,
    autoplay:true,
    margin:10,
    responsive:{
        0:{
            items:1
        }
    }
  });

});
