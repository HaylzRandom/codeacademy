const veggies = ['broccoli', 'spinach', 'cauliflower', 'broccoflower'];

const politelyDecline = (veg) => {
	console.log('No ' + veg + ' please. I will have pizza with extra cheese.');
};

// Write your code here:
const declineEverything = (vegArray) => {
	vegArray.forEach(politelyDecline);
};

declineEverything(veggies);

const acceptEverything = (vegArray) => {
	vegArray.forEach((veggie) => {
		console.log(`Ok, I guess I will eat some ${veggie}.`);
	});
};

acceptEverything(veggies);
