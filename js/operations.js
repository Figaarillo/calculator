export default class Operations {
	constructor() {
		this.operator = undefined;
		this.num1 = undefined;
		this.num2 = undefined;
	}

	setOperator(operator) {
		this.operator = operator;
	}

	getResult(operator) {
		if (operator === 'sum') {
			this.setOperator(1);
			return '+';
		} else if (operator === 'subtract') {
			this.setOperator(2);
			return '-';
		} else if (operator === 'mult') {
			this.setOperator(3);
			return '×';
		} else if (operator === 'divide') {
			this.setOperator(4);
			return '÷';
		} else {
			return;
		}
	}

	calculate(num1, num2) {
		this.num1 = parseFloat(num1);
		this.num2 = parseFloat(num2);
		if (this.operator === 1) return this.num1 + this.num2;
		if (this.operator === 2) return this.num1 - this.num2;
		if (this.operator === 3) return this.num1 * this.num2;
		if (this.operator === 4) return this.num1 / this.num2;
	}
}
