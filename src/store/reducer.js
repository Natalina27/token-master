// Types 
import {types} from './types';

const initialState = {
    token: {
        value: null,
    },
    tasks: {
        value: null,
    },
    user: {
        value: null,
    
    },
};

export const applicationReducer = (
    state = initialState,
    {type, payload})=>{
    switch(type) {
        case types.TOKEN_FILL: 
        return {
            ...state, 
            token: payload
        }
        case types.USER_FILL: 
        return {
            ...state, 
            user: payload
        }
        case types.TASKS_FILL: 
        return {
            ...state, 
            tasks: payload
        }

        default: 
         return state;
    }
}