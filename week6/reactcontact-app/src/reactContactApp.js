import React from 'react'
import { Provider } from 'react-redux'
import store from './Redux/store.js'
import Contact from './Contact.js'

function  ReactContactApp () {
    return (
        <div>
            <Provider store ={store}>
                <div>
                    <Contact />
                </div>
            </Provider>
        </div>
    )
};

export default ReactContactApp