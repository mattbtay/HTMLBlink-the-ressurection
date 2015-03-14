'use strict';

function blink(HTMLblinkTimer) {

	setInterval(function(){
		$('blink').toggleClass('HTMLblink');
	}, HTMLblinkTimer);

	$('#HTMLblinkReset').click(function(){
		clearInterval();
	});
	
}

// take field value and move it to new section - placeholder for real js magic
function getText(){
	
	var HTMLblinkTime = $('#HTMLblinkTime').val();
	console.log(HTMLblinkTime);

	var HTMLblinkingText = $('#HTMLblinkText').val();
	console.log(HTMLblinkingText);

	$('.generated-blink').html('<blink>' + HTMLblinkingText + '</blink>');

	$('.panel').fadeIn();

	blink(HTMLblinkTime);
	setTimeout(function(){
		$('#HTMLblinkText', '#HTMLBlinkTime', '#HTMLblinkSubmit').addClass('disabled');
	},500);

	
}

//reset the text field and clear the created text - placeholder
function resetText(){

	$('#HTMLblinkText').val('');
	$('#HTMLblinkTime').val('');
	$('.generated-blink').text('');

	//$('.generated-blink').text('');

	$('.panel').fadeOut();
}



$(document).ready(function(){


	$('#HTMLblinkSubmit').click(function(){
		console.log('clicked');
		getText();
	});

	$('#HTMLblinkReset').click(function(){
		resetText();
		console.log('clicked 3');
	});

});
