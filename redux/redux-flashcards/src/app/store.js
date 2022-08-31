import { configureStore } from '@reduxjs/toolkit';

import topicsReducer from '../features/topics/topicsSlice';
import cardsReducer from '../features/cards/cardSlice';
import quizzesReducer from '../features/quizzes/quizzesSlice';

export default configureStore({
	reducer: {
		topics: topicsReducer,
		cards: cardsReducer,
		quizzes: quizzesReducer,
	},
});
