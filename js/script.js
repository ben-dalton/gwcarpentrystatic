$(document).ready(function(){
	rotatePics(0);
});

function rotatePics(currentPhoto) {
  var numberOfPhotos = $('.gallery img').length;
  currentPhoto = currentPhoto % numberOfPhotos;
	
	$('.gallery img').eq(currentPhoto).fadeOut(function() {
		// re-order the z-index
		$('.gallery img').each(function(i) {
      		$(this).css(
        		'zIndex', ((numberOfPhotos - i) + currentPhoto) % numberOfPhotos
      		);
    	});

		$(this).show();
  		setTimeout(function() {rotatePics(++currentPhoto);}, 4500);
	});
}


