"use strict"
let notes = [];

loadList()
function addItem() {
	let textbook = document.getElementById('item');
	let itemText = textbook.value;
	textbook.value = '';
	textbook.focus();
	let newItem = {title: itemText, quantity: 1};
	notes.push(newItem);
	saveList()
	displayList();
}

function displayList() {
	let table = document.getElementById('list');
	table.innerHTML = '';
	for (let i = 0; i<notes.length; i++) {
		let note = notes[i];
		let node = document.createElement('tr');
		node.innerHTML = '<td>' + note.title + '</td><td>' + note.quantity + '</td><td><a href="#" onClick="deleteIndex(' + i + ')">delete</td>';
		table.appendChild(node);

	}
}
function saveList() {
	localStorage.notes = JSON.stringify(notes);
}

function loadList() {
	console.log('loadList');
	if (localStorage.notes) {
		notes = JSON.parse(localStorage.notes);
		displayList();
	}
}

function deleteIndex(i) {
	notes.splice(i, 1);
	saveList()
	displayList();
}

let button;
button = document.getElementById('add');
button.onclick = addItem;
