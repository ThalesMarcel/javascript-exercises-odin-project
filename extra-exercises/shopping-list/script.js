const input = document.querySelector('input');
const btnAddItem = document.querySelector('#add-item');
const ul = document.querySelector('ul');
let itemCount = 0; // counts how many list items have been created since the script started running

function getInputValue() {
	return input.value;
}

function clearInput() {
	input.value = '';
}

function focusOnInput() {
	input.focus();
}

function addListItem() {
	const li = document.createElement('li');
	const span = document.createElement('span');
	const btnDelItem = document.createElement('button');

	li.id = 'item-' + (++itemCount);

	span.textContent = getInputValue();
	btnDelItem.id = 'del-item-' + itemCount;
	btnDelItem.textContent = 'Delete';
	btnDelItem.addEventListener('click', function() {
		const listItem = document.getElementById(li.id);
		ul.removeChild(listItem);
	});
	btnDelItem.addEventListener('click', focusOnInput);

	li.appendChild(span);
	li.appendChild(btnDelItem);

	ul.appendChild(li);
}

btnAddItem.addEventListener('click', getInputValue);
btnAddItem.addEventListener('click', addListItem);
btnAddItem.addEventListener('click', clearInput);
btnAddItem.addEventListener('click', focusOnInput);
