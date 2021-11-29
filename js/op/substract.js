export const doSub = (curVal, prevVal, screen) => {
	let result;
	if (prevVal == 0) {
		screen.viewOperation('-');
	} else {
		result = parseFloat(curVal) - parseFloat(prevVal);
		screen.viewResult(result);
	}
};