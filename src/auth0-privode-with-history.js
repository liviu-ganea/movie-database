import React from 'react'
import { useHistory } from 'react-router-dom'
import { Auth0Provider } from '@auth0/auth0-react'

const Auth0ProviderWithHistory = ({ children }) => {
    const history = useHistory();
    const domain = 'dev-8jt2py1l.eu.auth0.com';
    const clientId = 'iBotkRVCm6vZjSnxD9WrVwc8qU742Z7a';
    const uri='https://127.0.0.1:3000';

    const onRedirectCallback = (appState) => {
        history.push(appState?.returnTo || window.location.pathname);
    };

    return (
        <Auth0Provider
            domain={domain}
            clientId={clientId}
            redirectUri={uri}
            onRedirectCallback={onRedirectCallback}
        >
            {children}
        </Auth0Provider>
    )
}

export default Auth0ProviderWithHistory;