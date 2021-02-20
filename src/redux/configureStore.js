import {createStore,combineReducers} from 'redux';
import { Dishes } from './dishes';
import { Comments } from './comments';
import { Promotions } from './promotions';
import { Leaders } from './leaders';

const Reducer = combineReducers({
    dishes:Dishes,
    comments:Comments,
    leaders:Leaders,
    promotions:Promotions
})

export const ConfigureStore = () => {
    const store = createStore(
        Reducer, // reducer
    );

    return store;
}