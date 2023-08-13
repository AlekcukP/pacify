import React from 'react';
import Provider from './provider';
import Router from './router';

const App = () => {
    return <React.StrictMode>
        <Provider>
            <div className='h-screen w-screen'>
                <Router />
            </div>
        </Provider>
    </React.StrictMode>
}

export default App;
