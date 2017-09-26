document.addEventListener('DOMContentLoaded', function (event){

	var myButton = document.getElementById('myButton');

	myButton.addEventListener('click', clickTriggered);


	function clickTriggered(event){
		console.log('event');
	
	}

// form events

	var myForm = document.getElementById('myForm');

	myForm.addEventListener('submit', function (event){
		event.preventDefault(); //only use on form
		console.log('I have been submitted');

	});

	myForm.addEventListener('submit',function (event){
		event.preventDefault();

// add text into the input box
	var firstNameInput = document.getElementById('firstname');
	console.log(firstNameInput.value);
	firstNameInput.value = '';

	});





// in the event listener - have the console log out the buttons value.

	var myButtons = document.getElementsByClassName('myButtons');
	console.log(myButton);

	for (var i = 0; i < myButtons.length; i++){
		myButtons[i].addEventListener('click', function (event){
		this.style.color = "pink";

		console.log(this.value);//gets value for button to print out in console log

		});


	};

	myButtons[i].addEventListener('mouseover', function (event) {
			this.style.backgroundcolor = "green";

		// console.log(this.value);//gets value for button to print out in console log

	});


});


 
                       
