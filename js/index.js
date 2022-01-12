import Screen from './screen.js';
import Operations from './operations.js';

document.addEventListener('DOMContentLoaded', () => {
	// # Creacion de objetos
	const screen = new Screen();
	const operations = new Operations();

	screen.setOperation(operations);

	const keyboard = document.querySelector('.keyboard');

	keyboard.addEventListener('click', e => {
		if (e.target.classList[1] === 'number') screen.addNumber(e.target.innerText);
		if (e.target.classList[1] == 'operator') screen.calculateValue(e.target.id);
		if (e.target.id === 'clear-all') screen.clearAll();
		if (e.target.id === 'del') screen.del();
		if (e.target.id === 'addPoint') screen.addPoint();
		if (e.target.id === 'equal') screen.getEqual();
		if (e.target.id === 'changeSign') screen.changeSign();
	});
});
