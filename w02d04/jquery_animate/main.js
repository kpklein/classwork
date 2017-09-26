$(function(){

	var $redBall = $('.small-ball');

	$redBall.click(function(event){

	var randomColor = getRandomColor();

	$(this).css({

		backgroundColor:randomColor
	});

	function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }



	});
});