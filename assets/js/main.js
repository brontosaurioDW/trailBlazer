$(document).ready(function(event) {
    stickyHeader();

    // Hightlight.js --> for code snippet
    $('pre code').each(function(i, block) {
        hljs.highlightBlock(block);
    });

    // wow.js plugin -- For smooth effect
    window.wow.init();

    // Smooth scroll anchor tag
    $('a[href*="#"]').not('[href="#"]').not('[href="#0"]').on('click', function(event) {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

            if (target.length) {
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top - '160'
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
});

// Header sticky
window.onscroll = function() {
    stickyHeader();
};


function stickyHeader() {
    var header = document.getElementById("header");
    var sticky = header.offsetTop;

    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}