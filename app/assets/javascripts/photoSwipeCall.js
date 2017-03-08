$(document).ready(function() {

    var callGallery = function(items) {
        var pswpElement = document.querySelectorAll('.pswp')[0];
        var options = {
            index: 0 // start at first slide
        };
        // Initializes and opens PhotoSwipe
        var swipeGallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
        swipeGallery.init();
    }

    $('.gallery-link').on("click", function(event) {
        event.preventDefault();
        $(this).toggleClass('gallery-selected')
        // console.log(event, this);
    });

    $('#create-gallery').on("click", function(event) {
        var items = [];
        var $selected = $('.gallery-selected');
        var selectedCount = $selected.length;
        $selected.each(function() {
            var $img = $(this);
            var url = $(this).data('image');
            var image = new Image();
            image.src = url;

            $(image).load(function() {
                items.push({
                    src: url,
                    w: image.width,
                    h: image.height
                });

                selectedCount--;

                if (selectedCount === 0) {
                    console.log(items);
                    callGallery(items);
                    // THIS IS WHERE TO START THE GALLERY
                }
            });
        });
        // jquery  *. gallery.selecte .each
        // get image url
        // get width
        // get height
        //      items.push({ url: '...', width: '...', height: '...' })

        console.log(this);
      })

      $('.gallery-selected').map(function () {
      return $(this).data('id');
})

}); // end doc ready
////////////////////WORKFLOW?////////////////////////




// $('.preview-gallery')on click {} get all elemenets with .gallery selected and open call Photoswipe with selected items.
//
// $('.create-gallery')onclick . grab all . $('.gallery-selected') ,
//
// RUBY   Store current_user in dom , hidden form .  Jsut need ID
//  create new database with @current_user ID. Generate and show url to new gallery
// // Route to show gallery page of newly created gallery with option to edit.
// // ensure url is on display in gallery page. Option to share/email?
