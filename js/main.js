document.addEventListener("DOMContentLoaded", function() {


    window.addEventListener('scroll', function(event){
        //console.log('scrolling now')
        var topDistance = window.pageYOffset;
        // console.log(topDistance);
        var layers = $("div[data-type='parallax']");
        // console.log(layers);

        layers.each(function(i, element){
            var depth = $(element).attr('data-depth');
            var movement = -(topDistance * Number(depth));
            var translate3d = 'translate3d(0, ' + movement + 'px, 0)'
            //console.log(i);
            // console.log(Number(depth));
            // console.log(translate3d);
            $(element).css('transform', translate3d);
            $(element).css('-webkit-transform', translate3d);
            $(element).css('-moz-transform', translate3d);
            $(element).css('-ms-transform', translate3d);
            $(element).css('-o-transform', translate3d);

        });
    });

});
