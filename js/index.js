import Screen from './screen.js';
import Operations from './operations.js';

document.addEventListener('DOMContentLoaded', () => {
	// # Creacion de objetos
	const screen = new Screen();
	const operations = new Operations();

	screen.setOperation(operations);

	const keyboard = document.querySelector('.keyboard');

	keyboard.addEventListener('click', e => {
		if (e.target.classList[1] == 'number')
			screen.addNumber(e.target.innerText);
		else if (e.target.classList[1] == 'operator')
			screen.calculateValue(e.target.id);
		else if (e.target.id == 'clear-all') screen.clearAll();
		else if (e.target.id == 'del') screen.del();
		else if (e.target.id == 'addPoint') screen.addPoint();
	});
});
