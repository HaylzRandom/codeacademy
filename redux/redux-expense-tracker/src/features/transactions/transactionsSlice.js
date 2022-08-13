import { createSlice } from '@reduxjs/toolkit';

export const CATEGORIES = [
	'housing',
	'food',
	'transportation',
	'utilities',
	'clothing',
	'healthcare',
	'personal',
	'education',
	'entertainment',
];
const initialState = Object.fromEntries(
	CATEGORIES.map((category) => [category, []])
);

const transactionsSlice = createSlice({
	name: 'transactions',
	initialState: initialState,
	reducers: {
		addTransaction: (state, action) => {
			// Add new transaction to the category it is selected for
			const category = action.payload.category;
			state[category].push(action.payload);
		},
		deleteTransaction: (state, action) => {
			// Find transaction by ID in the category and delete from object
			const id = action.payload.id;
			const category = action.payload.category;

			state[category] = state[category].filter(
				(transaction) => transaction.id !== id
			);
		},
	},
});

// Old Redux code
/* export const selectTransactions = (state) => state.transactions;
export const selectFlattenedTransactions = (state) => Object.values(state.transactions).reduce((a,b) => [...a, ...b], []);

const transactionsReducer = (state = initialState, action) => {
  let newTransactionsForCategory;
  switch (action.type) {
    case 'transactions/addTransaction':
      newTransactionsForCategory = [...state[action.payload.category].slice(), action.payload]
      return { ...state, [action.payload.category]: newTransactionsForCategory}
    case 'transactions/deleteTransaction':
      const deletedIndex = state[action.payload.category].findIndex(transaction => transaction.id === action.payload.id);
      newTransactionsForCategory = state[action.payload.category].filter((item, index) => index !== deletedIndex)
      return { ...state, [action.payload.category]: newTransactionsForCategory}
    default:
      return state;
  }
}

export default transactionsReducer;  */

export const selectTransactions = (state) => state.transactions;
export const selectFlattenedTransactions = (state) =>
	Object.values(state.transactions).reduce((a, b) => [...a, ...b], []);

export const { addTransaction, deleteTransaction } = transactionsSlice.actions;
export default transactionsSlice.reducer;
