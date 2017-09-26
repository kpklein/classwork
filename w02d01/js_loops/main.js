increment

var count = 9;
count++;
count = count + 1;
console.log(count);


decrement

var count = 78;
count--;
console.log(count)

for loop
for (setup; condition; post-action){

}

for (var i = 5; i < 20; i++) {
console.log('hello klein')
console.log(i);

// console.log(i * 6);
}

var people = ['klein', 'joe', 'leo', 'jigz', 'steve', 'tim'];

for (var i = 0; i < people.length; i++){
	// console.log(people[i]);

	people[i] = people[i] + 'is awesome!';

}

console.log(people);


var animal = ['dog', 'cat', 'fish', 'lion', 'tiger'];

for (var i = 0; i < animal.length; i++){
	console.log(animal[i]);

}



while looop

var i = 0;

while (i <5) {
	//some code
	console.log(i);
	i++;

}

var programRunning = true;

while (programRunning) {
	console.log('The program is running');
	var response = prompt('would you like to end the program? y/n');

	if (response === 'y') {
	programRunning = false;

	}
}




















