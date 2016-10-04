$(document).ready(function() {
    $('#myCarousel').carousel({
    interval: 3000
    })
    
    $('#myCarousel').on('slid.bs.carousel', function() {
        //alert("slid");
    });
    
    
});


