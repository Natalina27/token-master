//Core
import { combineReducers } from 'redux';

// Reducers

import {applicationReducer as application} from '../store/reducer';

export const rootReducer = combineReducers({
    application,
})