
// var wrapperElement = document.getElementById('wrapper'); //element
// var selectedElement = document.getElementByClassName('selected');//array
// var liElements = document.querySelectorAll('nav li p');//array
// var navLis = document.querySelectorAll('nav li p'); //array

// //add class to wrapper element
// wrapperElement.classlist.add('bold-text');
// wrapperElement.classlist.remove('bold-text');

// //apply class to selectedElements

// for (var i = 0; i < selectedElements.length; i++){
// 	// var currentElement = selectedElements[i];

// 	// currentElement.classlist.add('bold-text');

// 	selectedElements[i].classlist.add('bold-text');
// }

// //change the innerHTML

// wrapperElement.innerHTML = 'Hello I am new';

// // appending new elements
// var newPTag = document.currentElement('p');
// newPTag.innerHTML = 'Hello I am new';
// wrapperElement.appendChild(newPTag);

// // remove
// newPTag.remove();

// // check all the childern tag
// //newPTag.childern

// //all global function goes in here

document.addEventListener('DOMContentLoaded', function (event) {
	console.log('The DOM is ready!!!');

	var myButton = document.getElementById('my-button');

	myButton.addEventListener('click', function (event){


	
		console.log('help me! ive been clicked')

	});

});