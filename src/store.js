import {createStore, combineReducers, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import testReducer from './reducers/testReducer';
import generalAppReducer from './reducers/generalAppReducer';

export default createStore(
    combineReducers({testReducer, generalAppReducer}),
    {},
    applyMiddleware(logger)
);