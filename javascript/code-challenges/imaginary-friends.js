// Number of imaginary friends are always 25% of their total friends
// Write your function here:
const numImaginaryFriends = (numOfFriends) => {
	return Math.ceil(numOfFriends * 0.25);
};

// Uncomment the lines below when you're ready to try out your function
// console.log(numImaginaryFriends(20)) // Should print 5
// console.log(numImaginaryFriends(10)) // Should print 3 (2.5 rounded up!)

// We encourage you to add more function calls of your own to test your code!
console.log(numImaginaryFriends(20));
console.log(numImaginaryFriends(10));
