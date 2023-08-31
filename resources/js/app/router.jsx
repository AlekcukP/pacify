import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ROUTES } from './routes';

import PublicLayout from '../layouts/Public';
import DashboardLayout from '../layouts/Dashboard';

import LookupCard from '../cards/access/Lookup';
import SignupCard from '../cards/access/Signup';

import HomeCard from '../cards/dashboard/Home';
import AnalyticsCard from '../cards/dashboard/Analytics';
import DiscountsCard from '../cards/dashboard/Discounts';
import MarketingCard from '../cards/dashboard/Marketing';
import CustomersCard from '../cards/dashboard/Customers';
import SegmentsCard from '../cards/dashboard/Home';

const Router = () => {
    return <BrowserRouter>
        <Routes>
            <Route element={<PublicLayout />}>
                <Route path={ROUTES.LOOKUP} element={<LookupCard />} />
                <Route path={ROUTES.SIGNUP} element={<SignupCard />} />
            </Route>

            <Route element={<DashboardLayout />}>
                <Route path={ROUTES.BASE} element={<HomeCard />} />
                <Route path={ROUTES.ANALYTICS} element={<AnalyticsCard />} />
                <Route path={ROUTES.DISCOUNTS} element={<DiscountsCard />} />
                <Route path={ROUTES.MARKETING} element={<MarketingCard />} />
                <Route path={ROUTES.CUSTOMERS} element={<CustomersCard />} />
                <Route path={ROUTES.SEGMENTS} element={<SegmentsCard />} />
            </Route>
        </Routes>
    </BrowserRouter>
};

export default Router;
