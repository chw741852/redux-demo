/**
 * Created by caihongwei on 23/04/2017.
 */
import { combineReducers } from 'redux';
import todos from './todos';
import visibilityFilter from './visibilityFilter';

const todoApp = combineReducers({
    todos, visibilityFilter
});

export default todoApp