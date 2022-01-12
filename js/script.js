let firtsNumber = '',
	secondNumber = '',
	result = '',
	currentOperation = 0;
let previousVal = document.getElementById('previous-value');
let currentVal = document.getElementById('current-value');
addNumber = (number) => {
	currentVal.classList.remove('div-0');
	if (previousVal.value == 0) {
		firtsNumber += number;
		currentVal.value = firtsNumber;
	} else if (previousVal.value != 0) {
		secondNumber += number;
		currentVal.value = secondNumber;
	}
};
addPoint = () => {
	currentVal.classList.remove('div-0');
	if (secondNumber == '') {
		if (firtsNumber.indexOf('.') === -1) firtsNumber += '.';
		currentVal.value = firtsNumber;
	} else if (secondNumber != '') {
		if (secondNumber.indexOf('.') === -1) secondNumber += '.';
		currentVal.value = secondNumber;
	}
};
sum = () => {
	currentVal.classList.remove('div-0');
	currentOperation = 1;
	if (currentVal.value != 0 && previousVal.value == 0) {
		firtsNumber = parseFloat(currentVal.value);
		previousVal.value = firtsNumber;
		currentVal.value = 0;
	} else if (currentVal.value != 0 && previousVal.value != 0) {
		firtsNumber = parseFloat(previousVal.value);
		secondNumber = parseFloat(currentVal.value);
		result = firtsNumber + secondNumber;
		previousVal.value = 0;
		currentVal.value = result;
		firtsNumber = '';
		secondNumber = '';
	}
};
subtract = () => {
	currentVal.classList.remove('div-0');
	currentOperation = 2;
	if (currentVal.value != 0 && previousVal.value == 0) {
		firtsNumber = parseFloat(currentVal.value);
		previousVal.value = firtsNumber;
		currentVal.value = 0;
	} else if (currentVal.value != 0 && previousVal.value != 0) {
		firtsNumber = parseFloat(previousVal.value);
		secondNumber = parseFloat(currentVal.value);
		result = firtsNumber - secondNumber;
		previousVal.value = 0;
		currentVal.value = result;
		firtsNumber = '';
		secondNumber = '';
	}
};
multiply = () => {
	currentVal.classList.remove('div-0');
	currentOperation = 3;
	if (currentVal.value != 0 && previousVal.value == 0) {
		firtsNumber = parseFloat(currentVal.value);
		previousVal.value = firtsNumber;
		currentVal.value = 0;
	} else if (currentVal.value != 0 && previousVal.value != 0) {
		firtsNumber = parseFloat(previousVal.value);
		secondNumber = parseFloat(currentVal.value);
		result = firtsNumber * secondNumber;
		previousVal.value = 0;
		currentVal.value = result;
		firtsNumber = '';
		secondNumber = '';
	}
};
divide = () => {
	currentVal.classList.remove('div-0');
	currentOperation = 4;
	if (currentVal.value != 0 && previousVal.value == 0) {
		firtsNumber = parseFloat(currentVal.value);
		previousVal.value = firtsNumber;
		currentVal.value = 0;
	} else if (currentVal.value != 0 && previousVal.value != 0) {
		firtsNumber = parseFloat(previousVal.value);
		secondNumber = parseFloat(currentVal.value);
		result = firtsNumber / secondNumber;
		previousVal.value = 0;
		currentVal.value = result;
		firtsNumber = '';
		secondNumber = '';
	} else if (previousVal.value != 0 && currentVal.value == 0) {
		currentVal.classList.add('div-0');
		previousVal.value = 0;
		currentVal.value = 'No se puede dividir entre 0';
		firtsNumber = '';
		secondNumber = '';
	}
};
viewResult = () => {
	if (currentOperation == 1) sum();
	if (currentOperation == 2) subtract();
	if (currentOperation == 3) multiply();
	if (currentOperation == 4) divide();
};
clearAll = () => {
	firtsNumber = '';
	secondNumber = '';
	previousVal.value = 0;
	currentVal.value = 0;
};
del = () => {
	if (secondNumber == '') {
		firtsNumber = firtsNumber.substring(0, firtsNumber.length - 1);
		currentVal.value = firtsNumber;
		if (firtsNumber == '') currentVal.value = 0;
	} else if (firtsNumber != '' && secondNumber != '') {
		secondNumber = secondNumber.substring(0, secondNumber.length - 1);
		currentVal.value = secondNumber;
		if (secondNumber == '') currentVal.value = 0;
	}
};
changeSign = () => {
	if (secondNumber == '') {
		if (firtsNumber == '') firtsNumber = 0;
		firtsNumber = -1 * parseFloat(firtsNumber);
		currentVal.value = firtsNumber;
	} else if (firtsNumber != '' && secondNumber != '') {
		if (secondNumber == '') secondNumber = 0;
		secondNumber = -1 * parseFloat(secondNumber);
		currentVal.value = secondNumber;
	}
};
