import React from 'react';
import { Provider } from 'react-redux';
import { store, persistor } from '../redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import Router from './router';
import BarLoader from '../components/loaders/Bar';

const App = () => {
    return <PersistGate loading={null} persistor={persistor}>
        <Provider store={store}>
            <div className='full-screen'>
                <BarLoader />
                <Router />
            </div>
        </Provider>
    </PersistGate>
}

export default App;
