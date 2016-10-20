$(document).ready(function(){



    var active = false;

    window.onhashchange = function(){
        var sport = $(window.location.hash);

        if(sport.length < 1 || sport.hasClass('actived')){
            return true;
        }

        var detail = sport.parent().nextAll('.row-detail:first');

        var sport_detail = $('.sport_detail', sport).clone();


        var showElement = function(){
            detail.append(sport_detail);
            sport_detail.slideDown();

            // Animation
            for(var i = 1; i <= 3; i++){
                $('.stagger' + i, sport_detail).css({opacity:0, marginLeft: -20}).delay(300 + 200 * i).animate({opacity:1, marginLeft:0})
            }

            active = sport_detail;
        };

        var hideActive = function(){
            var tmp = active;
            tmp.slideUp(500, function(){
                tmp.remove();
            });
        };

        var buildSlideshow = function(){
            $('.sport_slideshow', sport_detail).nivoSlider({
                effect : 'boxRain',
                directionNav: false,
                controlNav: false,
                pauseOnHover: false,
                pauseTime: 3000
            });
        };
        // Traitement
        $('.sport').removeClass('actived');
        sport.addClass('actived');

        if(active){
            hideActive();
        }
        showElement();
        buildSlideshow();

    };



    $('.sport').click(function(e) {
        e.preventDefault();
        window.location.hash = $(this).attr('id');
    });


window.onhashchange();

});

var scrollTo = function(cible){
    $('html,body').animate({
        scrollTop: cible.offset().top
    }, 750);
};
