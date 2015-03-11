'use strict';

// take field value and move it to new section - placeholder for real js magic
function getText(){

	var blinkingText = $('#blinkText').val();

	$('.generated-blink').text(blinkingText);

	$('.panel').fadeIn();

	
}

//reset the text field and clear the created text - placeholder
function resetText(){

	$('#blinkText').val('');


	//$('.generated-blink').text('');

	$('.panel').fadeOut();
}

$(document).ready(function(){


	$('#blinkSubmit').click(function(){
		getText();
	});

	$('#blinkReset').click(function(){
		resetText();
	});

});
