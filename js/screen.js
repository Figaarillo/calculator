export default class Screen {
	constructor() {
		this.currentValue = document.getElementById('current-value');
		this.firstPrevValue = document.getElementById('firts-previous-value');
		this.secondPrevValue = document.getElementById('second-previous-value');
		this.operator = document.getElementById('operator');
		this.state = 0;
	}

	setOperation(operations) {
		this.operations = operations;
	}

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
		if (this.currentValue.textContent.indexOf('.') === -1)
			this.currentValue.textContent += '.';
	}

	clearAll() {
		[
			this.currentValue.textContent,
			this.firstPrevValue.textContent,
			this.secondPrevValue.textContent,
			this.operator.textContent,
		] = [0, 0, '', ''];
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
		if (this.state === 0) {
			this.operator.textContent = this.operations.getOperator(operator);
			this.switch(this.currentValue, this.firstPrevValue);
			this.setState(1);
		} else if (this.state === 1) {
			this.operator.textContent = this.operations.getOperator(operator);
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
}
