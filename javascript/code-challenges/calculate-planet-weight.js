// Write your function here:
const calculateWeight = (earthWeight, planet) => {
	switch (planet.toLowerCase()) {
		case 'mercury':
			return earthWeight * 0.378;
			break;
		case 'venus':
			return earthWeight * 0.907;
			break;
		case 'mars':
			return earthWeight * 0.377;
			break;
		case 'jupiter':
			return earthWeight * 2.36;
			break;
		case 'saturn':
			return earthWeight * 0.916;
			break;
		default:
			return 'Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn.';
	}
};

// Uncomment the line below when you're ready to try out your function
// console.log(calculateWeight(100, 'Jupiter')) // Should print 236

// We encourage you to add more function calls of your own to test your code!

console.log(calculateWeight(100, 'Jupiter'));
console.log(calculateWeight(100, 'venus'));
console.log(calculateWeight(100, 'Jupiter'));
console.log(calculateWeight(100, 'pluto'));
