// How many hours of sleep you got
const getSleepHours = (day) => {
	switch (day.toLowerCase()) {
		case 'monday':
			return 4;
			break;
		case 'tuesday':
			return 7;
			break;
		case 'wednesday':
			return 3;
			break;
		case 'thursday':
			return 7;
			break;
		case 'friday':
			return 6;
			break;
		case 'saturday':
			return 10;
			break;
		case 'sunday':
			return 12;
			break;
	}
};

// Get total number of hours of sleep
const getActualSleepHours = () =>
	getSleepHours('Monday') +
	getSleepHours('Tuesday') +
	getSleepHours('Wednesday') +
	getSleepHours('Thursday') +
	getSleepHours('Friday') +
	getSleepHours('Saturday') +
	getSleepHours('Sunday');

// Calculate the number of ideal hours of sleep
const getIdealSleepHours = () => {
	const idealHours = 8;
	return idealHours * 7;
};

// Calculate how much sleep you have had and if it matches/exceeds or is less than ideal number of hours
const calculateSleepDebt = () => {
	const actualSleepHours = getActualSleepHours();
	const idealSleepHours = getIdealSleepHours();

	if (actualSleepHours === idealSleepHours) {
		console.log(
			`You got the perfect amount of sleep! You slept for ${actualSleepHours} hours`
		);
	} else if (actualSleepHours > idealSleepHours) {
		console.log(
			`You got more sleep than you needed! You got ${
				actualSleepHours - idealSleepHours
			} hour(s) sleep more than you wanted!`
		);
	} else {
		console.log(
			`You got ${
				idealSleepHours - actualSleepHours
			} hour(s) less sleep than you needed this week. Nap time!`
		);
	}
};

calculateSleepDebt();
