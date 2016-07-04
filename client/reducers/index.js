
import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import headlines from './headlines';

export default combineReducers({
    routing,
    headlines
});
