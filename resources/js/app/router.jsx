import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ROUTES } from '../constants/routes';

import Interactive from '../templates/interactive';
import Dashboard from '../templates/dashboard';

import Lookup from '../modules/lookup';
import Signup from '../modules/signup';
import Home from '../modules/dashboard/home';
import Analytics from '../modules/dashboard/analytics';
import Discounts from '../modules/dashboard/discounts';
import Marketing from '../modules/dashboard/marketing';
import Customers from '../modules/dashboard/customers';
import Segments from '../modules/dashboard/segments';

const Router = () => {
    return <BrowserRouter>
        <Routes>
            <Route element={<Interactive />}>
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
