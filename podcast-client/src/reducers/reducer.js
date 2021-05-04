import {combineReducers} from "redux";
import musicReducer from "./musicReducer";
import authenticate from './authenticate';
import profile from './profile';

const reducers = combineReducers({
    auth: authenticate,
    profile,
    musicReducer,
});

export default reducers;