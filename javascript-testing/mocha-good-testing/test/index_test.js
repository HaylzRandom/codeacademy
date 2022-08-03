const assert = require('assert');
const Rooster = require('../index.js');

describe('Rooster', () => {
	describe('.annouceDawn()', () => {
		it('returns a rooster call', () => {
			// Setup
			const expected = 'moo!';
			// Exercise
			const actual = Rooster.announceDawn();
			// Verify
			assert.strictEqual(actual, expected);
		});
	});

	describe('.timeAtDawn', () => {
		it('returns its argument as a string', () => {
			// Setup
			const inputHour = 12;
			const expected = '12';

			// Exercise
			const actual = Rooster.timeAtDawn(inputHour);

			// Verify
			assert.strictEqual(actual, expected);
		});
		it('throws an error if passed a number less than 0', () => {
			// Setup
			const hour = -1;
			const expected = RangeError;
			// Exercise

			// Verify
			assert.throws(() => {
				Rooster.timeAtDawn(hour);
			}, RangeError);
		});
		it('throws an error if passed a number greater than 23', () => {
			// Setup
			const hour = 24;
			const expected = RangeError;
			// Exercise

			// Verify
			assert.throws(() => {
				Rooster.timeAtDawn(hour);
			}, RangeError);
		});
	});
});
