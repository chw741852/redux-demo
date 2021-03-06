/**
 * Created by caihongwei on 23/04/2017.
 */
import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './todos/components/App';
import reducer from './todos/reducers';

const store = createStore(reducer);

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);