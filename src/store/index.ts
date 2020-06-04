import {createStore, combineReducers} from 'redux';

import filter from './Filter/reducer';

const reducers = combineReducers({filter});

const store = createStore(reducers);

export default store;
