const menu = {
	_meal: '',
	_price: 0,
	set meal(mealToCheck) {
		if (typeof mealToCheck === 'string') {
			return (this._meal = mealToCheck);
		} else {
			console.log('Please enter a valid meal string');
		}
	},
	set price(priceToCheck) {
		if (typeof priceToCheck === 'number') {
			return (this._price = priceToCheck);
		} else {
			console.log('Please enter a valid numerical value');
		}
	},
	get todaysSpecial() {
		if (this._meal && this._price) {
			return `Today's Special is ${this._meal} for ${this._price}`;
		} else {
			return 'Meal or price was not set correctly!';
		}
	},
};

menu.meal = 'chicken';
menu.price = 100;

console.log(menu);

console.log(menu.todaysSpecial);
