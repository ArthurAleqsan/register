import { SELECT_CATEGORY } from './types';

export const selectCategory = e => {

    return {
        type: SELECT_CATEGORY,
        payload : e.currentTarget.textContent
    }

}
