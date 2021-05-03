import {combineReducers} from "redux";
import musicReducer from "./musicReducer";
import authenticate from './authenticate';

const reducers = combineReducers({
    auth: authenticate,
    musicReducer,
});

export default reducers;