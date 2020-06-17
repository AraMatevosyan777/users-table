import { reducer as formReducer } from 'redux-form';
import { reducer  } from './reducer';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

const reducers = combineReducers({
    reducer,
    form: formReducer,
})
const store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;
export default store;