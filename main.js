'use strict';

// $( ()=> )

$(function() {

	$('.wobbleButton').click(wobbleButton);

});


function wobbleButton() {

	$(this).addClass('animated wobble');

	setTime(function() {

		// $(this).removeClass('animated wobble');
		$(this).removeClass('animated wobble').addClass('animated wobble');

	}, 500);

	// setTime(() => {

	// })

}