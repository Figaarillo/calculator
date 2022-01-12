export default class Screen {
	constructor() {
		this.currentValue = document.getElementById('current-value');
		this.firstPrevValue = document.getElementById('firts-previous-value');
		// this.secondPrevValue = document.getElementById('second-previous-value');
		this.operator = document.getElementById('operator');
		this.state = 0;
		this.currentOperator = '';
	}

	setOperation(operations) {
		this.operations = operations;
	}

	/* State: determina el estado de la pantalla
			0: No existe ningun valor en alguna de las pantallas
			1: Existe un valor en la pantalla principal
			2: En la pantalla principal no hay ningun valor pero si en la segunda
	*/
	setState(state) {
		this.state = state;
	}

	addNumber(number) {
		if (this.state === 0 || this.state === 2) {
			this.currentValue.textContent == 0
				? (this.currentValue.textContent = number)
				: (this.currentValue.textContent += number);
		} else if (this.state === 1) {
			this.currentValue.textContent = number;
			this.setState(2);
		}
	}

	addPoint() {
		if (this.currentValue.textContent.indexOf('.') === -1) {
			this.currentValue.textContent += '.';
		}
	}

	clearAll() {
		this.currentValue.textContent = 0;
		this.firstPrevValue.textContent = 0;
		// this.secondPrevValue.textContent = '';
		this.operator.textContent = '';
	}

	del() {
		this.currentValue.textContent =
			this.currentValue.textContent.length != 1
				? this.currentValue.textContent.substring(
						0,
						this.currentValue.textContent.length - 1
				  )
				: (this.currentValue.textContent = 0);
	}

	calculateValue(operator) {
		this.currentOperator = operator;
		if (this.state === 0) {
			this.operator.textContent = this.operations.getResult(operator);
			this.switch(this.currentValue, this.firstPrevValue);
			this.setState(1);
		} else if (this.state === 1) {
			this.operator.textContent = this.operations.getResult(operator);
		} else if (this.state === 2) {
			this.currentValue.textContent = this.operations.calculate(
				this.firstPrevValue.textContent,
				this.currentValue.textContent
			);
			this.firstPrevValue.textContent = this.currentValue.textContent;
			this.setState(1);
		}
	}

	switch(num1, num2) {
		num2.textContent = num1.textContent;
	}

	getEqual() {
		this.calculateValue(this.currentOperator);
	}
}
