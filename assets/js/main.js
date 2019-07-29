var anchors = new anchorJS();
anchors.add(".doc-block h1");
anchors.add(".doc-block h2");
anchors.add(".doc-block h3");
anchors.add(".doc-block h4");
anchors.add(".doc-block ul.navigation li:last-child");

$(document).ready(function() {
    $(window).on('activate.bs.scrollspy', function(e) {
        var href = $('.nav-item .active').attr("href");
        var chapter = href;
        var feature = chapter + '-features';
        $('.features').hide();
        $(feature).show();
        history.replaceState({}, "", href);
        window.location.hash = href;
    });

    stickyHeader();

    // Hightlight.js --> for code snippet
    $('pre code').each(function(i, block) {
        hljs.highlightBlock(block);
    });

    // Slider
    $('.slider').slick({
        dots: false,
        infinite: true,
        speed: 400,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [{
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }, {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.slider-dots').slick({
        dots: true,
        infinite: true,
        speed: 400,
        slidesToShow: 2,
        slidesToScroll: 2,
        responsive: [{
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }, {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    // wow.js plugin -- For smooth effect
    new WOW().init();

    // Smooth scroll anchor tag
    $('a[href*="#"]').not('[href="#"]').not('[href="#0"]').on('click', function(event) {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

            if (target.length) {
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000, function() {
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) {
                        return false;
                    } else {
                        $target.attr('tabindex', '-1');
                        $target.focus();
                    };
                });
            }
        }
    });

    // HTML code
    $('code').each(function() {
        if ( $( this ).hasClass( "html" ) ) {
            var that = $(this);
            var html = that.html().trim();
            that.empty();
            that.text(html);
        }
    });
    
    hljs.initHighlightingOnLoad();

    var anchors = new anchorJS();
    anchors.add('.anchored');

    // DATEPICKER
    if ($('.datepicker').length > 0) {
        $('.datepicker').datepicker();
    }

});

// Header sticky
window.onscroll = function() {
    stickyHeader();
};


function stickyHeader() {
    var header = document.getElementById("header");
    var sticky = header.offsetTop;

    if (window.pageYOffset > 0 && window.pageYOffset < 100) {
        header.classList.add("sticky");
    } else {    
        header.classList.remove("sticky");
    } 
}

// Bootstrap popovers
$(function () {
    $('[data-toggle="popover"]').popover()
})

// Bootstrap tooltips

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})