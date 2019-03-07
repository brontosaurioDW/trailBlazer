$(document).ready(function(event) {
    // Hightlight.js --> for code snippet
    $('pre code').each(function(i, block) {
        hljs.highlightBlock(block);
    });

    // wow.js plugin -- For smooth effect
    window.wow.init();
});

// Header sticky
window.onscroll = function() {
    myFunction()
};

var header = document.getElementById("header");

var sticky = header.offsetTop;

function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}