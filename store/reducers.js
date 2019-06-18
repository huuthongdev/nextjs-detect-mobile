import { combineReducers } from 'redux';
// Reducers
import { mainReducer } from "./main.reducer";

const reducers = combineReducers({
    main: mainReducer
});

export default reducers;