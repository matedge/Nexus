$(document).ready(function(){
var pswpElement = document.querySelectorAll('.pswp')[0];

// build items array
var items = [
    {
        src: 'https://fillmurray.com/600/400',
        w: 600,
        h: 400
    },
    {
        src: 'https://fillmurray.com/1200/900',
        w: 1200,
        h: 900
    },
    {
        src: 'https://fillmurray.com/1200/900',
        w: 500,
        h: 500
    },
    {
        src: 'https://fillmurray.com/1200/900',
        w: 800,
        h: 900
    }
];

// define options (if needed)
var options = {
    // optionName: 'option value'
    // for example:
    index: 0 // start at first slide
};

// Initializes and opens PhotoSwipe
var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
window.gallery = gallery;
// gallery.init();

});
