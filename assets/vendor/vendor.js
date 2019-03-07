var jquery 		= require('jquery');
var mdl 		= require('material-design-lite');
var highlight	= require('highlight.js');
var bootstrap	= require('bootstrap');
var popper 		= require('popper.js');
const WOW 		= require('wowjs');

window.wow = new WOW.WOW({
    live: false
});

global.$ 	= global.jQuery = jquery;
global.hljs = highlight;