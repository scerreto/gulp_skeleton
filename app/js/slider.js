$(document).ready(function() {
    $('#previous').on('click', function(){
        // Change to the previous image
        $('.cl_container > div').removeClass("active");
        $('#im_' + currentImage).stop().fadeOut(1);
        decreaseImage();
        $('#im_' + currentImage).stop().fadeIn(1);
        $('#cl_im_'+currentImage).addClass('active');
    });
    $('#next').on('click', function(){
        // Change to the next image
        $('.cl_container > div').removeClass("active");
        $('#im_' + currentImage).stop().fadeOut(1);
        increaseImage();
        $('#im_' + currentImage).stop().fadeIn(1);
        $('#cl_im_'+currentImage).addClass('active');
    });

    var currentImage = 1;
    var totalImages = 3;

    function increaseImage() {
        /* Increase currentImage by 1.
        * Resets to 1 if larger than totalImages
        */
        ++currentImage;
        if(currentImage > totalImages) {
            currentImage = 1;
        }
    }
    function decreaseImage() {
        /* Decrease currentImage by 1.
        * Resets to totalImages if smaller than 1
        */
        --currentImage;
        if(currentImage < 1) {
            currentImage = totalImages;
        }
    }
        
     $('#cl_im_1').on('click', function(){
        // Change to the previous image
        $('.cl_container > div').removeClass("active");
        $('#im_' + currentImage).stop().fadeOut(1);
        currentImage = 1;
        $('#im_1').stop().fadeIn(1);
        $('#cl_im_1').addClass('active');
    });
    $('#cl_im_2').on('click', function(){
        // Change to the previous image
        $('.cl_container > div').removeClass("active");
        $('#im_' + currentImage).stop().fadeOut(1);
        currentImage = 2;
        $('#im_2').stop().fadeIn(1);
        $('#cl_im_2').addClass('active');
    });
    $('#cl_im_3').on('click', function(){
		$('.cl_container > div').removeClass("active");
        // Change to the previous image
        $('#im_' + currentImage).stop().fadeOut(1);
        currentImage = 3;
        $('#im_3').stop().fadeIn(1);
        $('#cl_im_3').addClass('active');
    });
    
    
});
