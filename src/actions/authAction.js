import axios from 'axios';
import { GET_ERRORS } from './types';

// Register 
export const registerUser = (userData) => dispatch => {
    axios 
    .post('/', userData)
    .then(() => console.log(555))
    .catch(err =>  {
        console.log(userData)
        return dispatch({
                type : GET_ERRORS,
                payload : err.response.data 
            })}
    ); 
};