//get element by id

var myList = document.getElementById('list');

//get element by classsname

var myElement = document.getElementsByClassName('selected');

//get element by tags

var mytag = document.getElementsByTagName('li');

//edit inner html of an element
var header = document.getElementById('header');
header.innerHTML = 'A new title';

//edit element style
header.style.fontSize = '100px';

//change the text color to be blue;
var lis = document.getElementsByTagName('li');

for (var i = 0; i < lis.length; i++) {
	lis[i].style.color = 'blue';
} 

// creating a new element

var list = document.getElementById('list');

var newElement = document.createElement('li');
newElement.innerHTML = 'Im a new li';
list.appendChild(newElement);

//new p tag
var wrapper = document.getElementById('wrapper');

var newPTag = document.createElement('p');
newPTag.innerHTML = 'hello my name is klein';
wrapper.appendChild(newPTag);

//create a function that appends 1 new LI to the LIST element.
//- yout function Must take 1 argument which will be the text that sits inside the new LI (list)


//create a new list
function addItem(text) {

	var newElement = document.createElement('li');
	newElement.innerHTML = text;
	list.appendChild(newElement);
}
addItem('laptop');

//create an array of people names
// for each name, append a new list item.

var people = ['klein', 'dom', 'jack', 'jigz', 'kier'];
	for (var i = 0; i < people.length; i++){
	addItem(people[i]);

}










