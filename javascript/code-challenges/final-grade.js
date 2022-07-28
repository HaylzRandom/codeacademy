// Write your function here:
const finalGrade = (grade1, grade2, grade3) => {
	if (
		grade1 < 0 ||
		grade1 > 100 ||
		grade2 < 0 ||
		grade2 > 100 ||
		grade3 < 0 ||
		grade3 > 100
	) {
		return 'You have entered an invalid grade.';
	}
	let average = (grade1 + grade2 + grade3) / 3;
	if (average < 60) {
		return 'F';
	} else if (average < 70) {
		return 'D';
	} else if (average < 80) {
		return 'C';
	} else if (average < 90) {
		return 'B';
	} else {
		return 'A';
	}
};

// Uncomment the line below when you're ready to try out your function
// console.log(finalGrade(99, 92, 95)) // Should print 'A'

// We encourage you to add more function calls of your own to test your code!
console.log(finalGrade(99, 92, 95));
console.log(finalGrade(105, 86, 22));
console.log(finalGrade(1, 2, 3));
