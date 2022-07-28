// Temperature in Kelvin it is today
const kelvin = 293;

// Convert temp to celsius
const celsius = kelvin - 273;

// Convert temp to fahrenheit
const fahrenheit = Math.floor(celsius * (9 / 5) + 32);

// Convert to Newton
const newton = Math.floor(celsius * (33 / 100));

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
console.log(`The temperature is ${newton} degrees Newton.`);
