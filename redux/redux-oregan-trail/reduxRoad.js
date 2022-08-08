const initialWagonState = {
	supplies: 100,
	distance: 0,
	days: 0,
	cash: 200,
};

const wagonReducer = (state = initialWagonState, action) => {
	switch (action.type) {
		case 'gather': {
			return {
				...state,
				supplies: state.supplies + 15,
				days: state.days + 1,
			};
		}
		case 'travel': {
			if (state.supplies < 0) {
				return state;
			}
			return {
				...state,
				supplies: state.supplies - action.payload * 20,
				distance: state.distance + action.payload * 10,
				days: state.days + action.payload,
			};
		}
		case 'tippedWagon': {
			return {
				...state,
				supplies: state.supplies - 30,
				days: state.days + 1,
			};
		}
		case 'sell': {
			if (state.supplies <= 0) {
				return state;
			}
			return {
				...state,
				supplies: state.supplies - 20,
				cash: state.cash + 5,
			};
		}
		case 'buy': {
			return {
				...state,
				supplies: state.supplies + 25,
				cash: state.cash - 15,
			};
		}
		case 'theft': {
			return {
				...state,
				cash: state.cash / 2,
			};
		}
		default:
			return state;
	}
};

let wagon = wagonReducer(undefined, {});
console.log('Setup', wagon);
wagon = wagonReducer(wagon, { type: 'travel', payload: 1 });
console.log('Travel', wagon);
wagon = wagonReducer(wagon, { type: 'gather' });
console.log('Gather', wagon);
wagon = wagonReducer(wagon, { type: 'sell' });
console.log('Sell', wagon);
wagon = wagonReducer(wagon, { type: 'sell' });
console.log('Sell', wagon);
wagon = wagonReducer(wagon, { type: 'sell' });
console.log('Sell', wagon);
wagon = wagonReducer(wagon, { type: 'sell' });
console.log('Sell', wagon);
wagon = wagonReducer(wagon, { type: 'tippedWagon' });
console.log('Tipped Wagon', wagon);
wagon = wagonReducer(wagon, { type: 'theft' });
console.log('Theft', wagon);
wagon = wagonReducer(wagon, { type: 'buy' });
console.log('Buy', wagon);
wagon = wagonReducer(wagon, { type: 'sell' });
console.log('Sell', wagon);
wagon = wagonReducer(wagon, { type: 'travel', payload: 3 });
console.log('Travel', wagon);
