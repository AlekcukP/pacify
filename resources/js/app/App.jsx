import React from 'react';
import { Provider } from 'react-redux';
import { store, persistor } from '../redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import Router from './router';
import Container from '../layouts/Container';

const App = () => {
    return <PersistGate loading={null} persistor={persistor}>
        <Provider store={store}>
            <Container>
                <Router />
            </Container>
        </Provider>
    </PersistGate>
}

export default App;
