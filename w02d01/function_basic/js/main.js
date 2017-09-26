
function addTwo(n1 , n2) {
  return n1 + n2;
}

function addThree(n1, n2, n3) {

	return n1 + n2 + n3;

}


function multiplyTwo(n1,n2) {

	return n1 * n2;

}


function increaseByPercentage(total, percentage) {

	return ((percentage/100) * total) + total;

}


function reverseWord(word) {

	return word.split('').reverse().join('');
	

}

function celciusToFahrenheit(celcius) {

	return celcius * 9 / 5  + 32;

}

function fahrenheitToCelcius(fahr) {

	return (fahr - 32) / 1.8;

}

// BONUS QUESTION
function stripVowels(word) {

	var results = word.replace(/[aeiou]/ig,'');
	return results;

}


// do not delete
runTests();