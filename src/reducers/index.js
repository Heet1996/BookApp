import { combineReducers } from 'redux';
import BookReducer from './reducers_book';
import ActiveBook from './reducer_active_books';
const rootReducer = combineReducers({
  books: BookReducer ,
  activeBook:ActiveBook
});

export default rootReducer;
