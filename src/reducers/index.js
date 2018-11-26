import { combineReducers } from 'redux';
import visitorsReducer from './signin';

export default combineReducers({
    visitors: visitorsReducer
});
