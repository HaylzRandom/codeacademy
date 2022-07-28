// Write your function here:
const tipCalculator = (quality, cost) => {
	switch (quality.toLowerCase()) {
		case 'bad':
			return cost * 0.05;
		case 'ok':
			return cost * 0.15;
		case 'good':
			return cost * 0.2;
		case 'excellent':
			return cost * 0.3;
		default:
			return cost * 0.18;
	}
};
// Uncomment the line below when you're ready to try out your function
// console.log(tipCalculator('good', 100)) //should return 20

// We encourage you to add more function calls of your own to test your code!
console.log(tipCalculator('good', 100));
console.log(tipCalculator('Good', 100));
console.log(tipCalculator('bad', 75));
