import { combineReducers } from 'redux';
import authenticate from './authenticate';


const rootReducer = combineReducers({
    auth: authenticate,
})

export default rootReducer;
