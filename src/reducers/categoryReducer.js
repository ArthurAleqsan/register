import { SELECT_CATEGORY } from '../actions/types';


const initialState = {
    selectedCategory : ''
};

export default (state = initialState, action) => {
    switch(action.type) {
        case SELECT_CATEGORY :
            return {
                selectedCategory : action.payload
            }
        default : 
            return state;
    }
};