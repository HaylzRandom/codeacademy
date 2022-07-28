// Confirm if user choice is legal
const getUserChoice = (userInput) => {
	userInput = userInput.toLowerCase();

	if (
		userInput === 'rock' ||
		userInput === 'paper' ||
		userInput === 'scissors' ||
		userInput === 'bomb'
	) {
		return userInput;
	} else {
		console.log('Invalid input!');
	}
};

// Randomly choose what computer will play
const getComputerChoice = () => {
	let randomNumber = Math.floor(Math.random() * 3);

	switch (randomNumber) {
		case 0:
			return 'rock';
			break;
		case 1:
			return 'paper';
			break;
		case 2:
			return 'scissors';
			break;
		default:
			return 'Computer error!';
			break;
	}
};

// Determine the winner of the game
const determineWinner = (userChoice, computerChoice) => {
	if (userChoice === computerChoice) {
		return 'Game is tied';
	}

	if (userChoice === 'rock') {
		if (computerChoice === 'paper') {
			return 'Computer beat you';
		} else {
			return 'You won!';
		}
	}
	if (userChoice === 'paper') {
		if (computerChoice === 'scissors') {
			return 'Computer beat you';
		} else {
			return 'You won!';
		}
	}
	if (userChoice === 'scissors') {
		if (computerChoice === 'rock') {
			return 'Computer beat you';
		} else {
			return 'You won!';
		}
	}
	if (userChoice === 'bomb') {
		return 'You discovered the secret weapon! You blasted the computer!';
	}
};

/*
console.log(determineWinner('paper', 'scissors')); // prints 'Computer beat you'
console.log(determineWinner('paper', 'paper')); // prints something like 'Game is tied'
console.log(determineWinner('paper', 'rock')); // prints something like 'You won!' */

// Play the game
const playGame = () => {
	const userChoice = getUserChoice('bomb');
	const computerChoice = getComputerChoice();
	console.log(`You chose: ${userChoice}`);
	console.log(`Computer chose: ${computerChoice}`);
	console.log(determineWinner(userChoice, computerChoice));
};

playGame();
