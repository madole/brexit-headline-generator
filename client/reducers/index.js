
import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import todos from './todos';
import headlines from './headlines';

export default combineReducers({
    routing,
    todos,
    headlines
});
