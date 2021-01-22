import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers/rootReducer'
import App from './App'
import { Auth0Provider } from "@auth0/auth0-react";

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()); 
const uri='https://127.0.0.1:3000';

ReactDOM.render(
    <Auth0Provider
        domain='dev-8jt2py1l.eu.auth0.com'
        clientId='iBotkRVCm6vZjSnxD9WrVwc8qU742Z7a'
        redirectUri={uri}
        >
        <Provider store={store}>
            <App />
        </Provider>
    </Auth0Provider>,
    document.getElementById('root')
)