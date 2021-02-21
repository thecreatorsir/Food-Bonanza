import {createStore, combineReducers, applyMiddleware } from 'redux';
import { Dishes } from './dishes';
import { Comments } from './comments';
import { Promotions } from './promotions';
import { Leaders } from './leaders';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const Reducer = combineReducers({
    dishes:Dishes,
    comments:Comments,
    leaders:Leaders,
    promotions:Promotions
})

export const ConfigureStore = () => {
    const store = createStore(
        Reducer, // reducer
        applyMiddleware(thunk, logger)
    );

    return store;
}