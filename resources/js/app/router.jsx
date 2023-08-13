import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ROUTES } from './routes';

import AccessPanel from '../layouts/access-panel';
import Dashboard from '../layouts/dashboard';

import LookupPage from '../components/access-panel/lookup/page';
import SignupPage from '../components/access-panel/signup/page';

import HomePage from '../components/dashboard/home';
import AnalyticsPage from '../components/dashboard/home';
import DiscountsPage from '../components/dashboard/discounts';
import MarketingPage from '../components/dashboard/marketing';
import CustomersPage from '../components/dashboard/customers';
import SegmentsPage from '../components/dashboard/segments';

const Router = () => {
    return <BrowserRouter>
        <Routes>
            <Route element={<AccessPanel />}>
                <Route path={ROUTES.LOOKUP} element={<LookupPage />} />
                <Route path={ROUTES.SIGNUP} element={<SignupPage />} />
            </Route>

            <Route element={<Dashboard />}>
                <Route path={ROUTES.BASE} element={<HomePage />} />
                <Route path={ROUTES.ANALYTICS} element={<AnalyticsPage />} />
                <Route path={ROUTES.DISCOUNTS} element={<DiscountsPage />} />
                <Route path={ROUTES.MARKETING} element={<MarketingPage />} />
                <Route path={ROUTES.CUSTOMERS} element={<CustomersPage />} />
                <Route path={ROUTES.SEGMENTS} element={<SegmentsPage />} />
            </Route>
        </Routes>
    </BrowserRouter>
};

export default Router;
