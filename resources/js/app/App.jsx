import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import Router from './router';
import BarLoader from '../components/common/loaders/Bar';

const App = () => {
    return <Provider store={store}>
        <div className='full-screen'>
            <BarLoader />
            <Router />
        </div>
    </Provider>
}

export default App;
