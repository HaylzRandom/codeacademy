const Calculate = {
	factorial(inputNumber) {
		// Check if value is 0
		if (inputNumber === 0) {
			return 1;
		}

		for (let i = inputNumber - 1; i >= 1; i--) {
			inputNumber *= i;
		}
		return inputNumber;
	},
};

module.exports = Calculate;
