import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ROUTES } from './routes';

import AccessPanel from '../layouts/access-panel';
import Dashboard from '../layouts/dashboard';

import Lookup from '../components/access-panel/lookup/page';
import Signup from '../components/access-panel/signup/page';

import Home from '../components/dashboard/home';
import Analytics from '../components/dashboard/home';
import Discounts from '../components/dashboard/discounts';
import Marketing from '../components/dashboard/marketing';
import Customers from '../components/dashboard/customers';
import Segments from '../components/dashboard/segments';

const Router = () => {
    return <BrowserRouter>
        <Routes>
            <Route element={<AccessPanel />}>
                <Route path={ROUTES.LOOKUP} element={<Lookup />} />
                <Route path={ROUTES.SIGNUP} element={<Signup />} />
            </Route>

            <Route element={<Dashboard />}>
                <Route path={ROUTES.BASE} element={<Home />} />
                <Route path={ROUTES.ANALYTICS} element={<Analytics />} />
                <Route path={ROUTES.DISCOUNTS} element={<Discounts />} />
                <Route path={ROUTES.MARKETING} element={<Marketing />} />
                <Route path={ROUTES.CUSTOMERS} element={<Customers />} />
                <Route path={ROUTES.SEGMENTS} element={<Segments />} />
            </Route>
        </Routes>
    </BrowserRouter>
};

export default Router;
