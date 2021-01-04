import {loadingReducer} from "./loadingReducer";
import {applyMiddleware, combineReducers, createStore} from 'redux';
import {themeReducer} from '../../hw12/bll/themeReducer';
import {requestReducer} from '../../hw13/bll/requestReducer';
import thunk from 'redux-thunk';

const reducers = combineReducers({
    loading: loadingReducer,
    theme: themeReducer,
    request: requestReducer
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store

export type AppStoreType = ReturnType<typeof reducers>

// @ts-ignore
window.store = store; // for dev