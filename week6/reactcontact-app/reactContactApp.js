import React from 'react';
import { Provider } from 'react-redux';
import store from './Redux/store.js';
import Contact from './contact.js';

function  ReactContactApp () {
    return (
        <div>
            <Provider store = {store}>
                <div>
                    <Contacts />
                </div>
            </Provider>
        </div>
    )
};

export default ReactContactApp;