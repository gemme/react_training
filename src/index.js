import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Parent from './components/Parent';
import { createStore, combineReducers, applyMiddleware } from 'redux';
//import {reducer1, reducer2} from './reducers';
import {reducer} from './reducers';
import {Provider } from 'react-redux';
import thunk from 'redux-thunk';


/* const rootReducer = combineReducers({
    usuarios: reducer1,
    productos: reducer2
}) */

//const store = createStore(rootReducer);
const store = createStore(reducer, applyMiddleware(thunk));


ReactDOM.render(
    <Provider store={store}>
        <Parent/>
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

