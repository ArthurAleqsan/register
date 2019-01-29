import { combineReducers } from 'redux';
import categoryReducer from './categoryReducer';
import errorReducer from './errorReducer';

export default  combineReducers ({
    selectCategory : categoryReducer,
    errors : errorReducer,
});