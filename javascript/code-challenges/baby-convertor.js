// Write your code here:
const convertToBaby = (array) => {
	const babyArray = [];
	for (let i = 0; i < array.length; i++) {
		babyArray.push('baby ' + array[i]);
	}
	return babyArray;
};

// When you're ready to test your code, uncomment the below and run:

const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];

console.log(convertToBaby(animals));
