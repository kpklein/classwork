// dom treversal

//# to target 
var $mainheading = $('#main-heading');
// console.log($mainheading);

var $greenElements = $('.green');
// console.log($greenElements);

var $pTags = $('p');

//selector
// var $lis = $('.likes li').eq(2);
// console.log($lis);


// var $lastPTag = $('p:last');
// console.log($lastPTag);

// get the closest parent given criteria.
// var $parentArticle = $lastPTag.closest('.article-container');
// console.log($parentArticle);

// find all P tags
// var $allPTags = $parentArticle.find('p');
// console.log($allPTags);


// Creating elements

// var $newPTag = $('<p> Hello I am a new P tag </p>');
// $('main').append($newPTag);

//add at the bottom
// $('main').append('<p> Hello I am a new P tag </p>');

//add at the top
// $('main').prepend('<p> Hello I am a new P tag </p>');

// add click me to the list
// $('li').append('<a href="#"> Click ME</a>');

// Remove h2 tags
// $('h2').remove();

// Jquery Dom Manipulation


//	innerHTML

var $mainHeading = $('#main-heading');

console.log ($mainHeading.html());

$mainHeading.html('I am toooootalllly');


// .style

var $header = $('h1');

console.log ($header.css('font-size'))

//change the settings
$header.css('font-size', '100px');


// add multiple css

$header.css({
	'font-size':'100px',
	'color':'yellow',
	'font-weight': '900'

});

// adding css classes

// $('p').addClass('green');

// //remove class
// $('p').removeClass('green');

//remove class if it has it : add class if it does not have it
// $('p').toggleClass('green');

// $('p').hasClass('green');


// Jquery events

// $('h1').on('click',function (event){
// console.log('i have been clicked');


// });


// $('p').on('click', function (event){

// 	$(this).toggleClass('green');
// 	}

// 	$(this).css('background-color', 'pink');
// })

//click event to change colour
// $('p').hover(function (event){
// 	$(this).toggleClass('green');


// })

//one click then end
$('h1').one('click', function (event){
	$(this).toggleClass('green');

})




// get a grid on the screen.


// when you click on each grid tile, make x and then O appear.
	

//after each player has made a move, check to see if someone has won.

//if winner - display winners message.
	//create h1 player wins







