$(function(){

	$('#add-button').click(function(event){
	$('.red-square').append('<div class="little-square"></div>');

	});
//set timer to addd
	var intervalId = setInterval(function(){
		$('.red-square').append('<div class="little-square"></div>');
	}, 5000);
	
	// $('.little-square').on('click', function (event){
	// $(this).addClass('yellow');
	// });

	$('.red-square').on('click','.little-square', function(event){
		var $this =$(this);

	$this.addClass('yellow');

// set timer
	setTimeout(function(){
	$this.remove();
	checkWinner();

	}, 2000);
	

	});


	function checkWinner(){
		if ($('.little-square').length === 0){
			$('h1').html('You have won the game!!');
			clearInterval(intervalId);
			// alert('You have won the game!!!');
		}

	}



});