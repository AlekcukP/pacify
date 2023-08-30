import React from 'react';
import { Provider } from 'react-redux';
import { store } from './shared/redux/store';
import Router from './app/router';

const App = () => {
    return <Provider store={store}>
            <div className='h-screen w-screen'>
                <Router />
            </div>
    </Provider>
}

export default App;
