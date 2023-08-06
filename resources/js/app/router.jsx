import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ROUTES } from '../constants/routes';

import Interactive from '../templates/interactive';
import Dashboard from '../templates/dashboard';

import Lookup from '../pages/lookup';
import Signup from '../pages/signup';
import Home from '../pages/dashboard/home';
import Analytics from '../pages/dashboard/analytics';
import Discounts from '../pages/dashboard/discounts';
import Marketing from '../pages/dashboard/marketing';
import Customers from '../pages/dashboard/customers';
import Segments from '../pages/dashboard/segments';

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
