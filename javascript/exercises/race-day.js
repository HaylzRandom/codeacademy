let raceNumber = Math.floor(Math.random() * 1000);

let registerEarly = true;

let runnerAge = 10;

if (runnerAge >= 18 && registerEarly) {
	raceNumber += 1000;
}

if (runnerAge > 18 && registerEarly) {
	console.log(`Race time: 9:30am and your race number is: ${raceNumber}`);
} else if (runnerAge > 18 && !registerEarly) {
	console.log(`Race time: 11:00am and your race number is: ${raceNumber}`);
} else if (runnerAge < 18) {
	console.log(`Race time: 12:30pm and your race number is: ${raceNumber}`);
} else {
	console.log('Please see registration desk');
}
