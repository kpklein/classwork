$(function(){

	var $bigSquare = $('#big-square');


	$('#button').click(function(event){
	// console.log('I have been clicked');


	// $bigSquare
	// 	.fadeOut(3000)
	// 	.delay(1000)
	// 	.fadeIn(300);


//List of effects
	//.fadeIn()
	//.fadeOut()
	//.fadeToggle()
	//.hide()
	//.show()
	//.toggle()
	//.slideup()
	//.slidedown()


	// $bigSquare.toggle();

	$bigSquare.slideToggle(3000);

	});

 var $smallSquare = $('#small-square');

 $smallSquare
		.fadeOut(3000)
		.delay(1000)
		.fadeIn(300);


});