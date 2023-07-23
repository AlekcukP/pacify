import React from 'react';
import Provider from './provider';
import Router from './router';
import FullScreen from "../templates/full-screen";

const App = () => {
    return <React.StrictMode>
        <Provider>
            <FullScreen>
                <Router />
            </FullScreen>
        </Provider>
    </React.StrictMode>
}

export default App;
