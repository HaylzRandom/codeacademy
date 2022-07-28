// Human age
const myAge = 32;

// Dog years in early years
let earlyYears = 2;

earlyYears *= 10.5;

// later years
let laterYears = myAge - 2;

// Dog Years in Later Years
laterYears *= 4;

console.log(earlyYears);
console.log(laterYears);

// My age in dog years
const myAgeInDogYears = earlyYears + laterYears;

// My name
const myName = 'Hayley'.toLowerCase();

console.log(
	`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`
);
