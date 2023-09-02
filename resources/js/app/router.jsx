import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ROUTES } from './routes';

import PublicLayout from '../layouts/Public';
import DashboardLayout from '../layouts/Dashboard';

import LookupCard from '../cards/access/Lookup';
import SignupCard from '../cards/access/Signup';

import HomeCard from '../cards/dashboard/Home';
import CollectionCard from '../cards/dashboard/Collection';
import InventoryCard from '../cards/dashboard/Inventory';
import ProductsCard from '../cards/dashboard/Products';

const Router = () => {
    return <BrowserRouter>
        <Routes>
            <Route element={<PublicLayout />}>
                <Route path={ROUTES.LOOKUP} element={<LookupCard />} />
                <Route path={ROUTES.SIGNUP} element={<SignupCard />} />
            </Route>

            <Route element={<DashboardLayout />}>
                <Route path={ROUTES.BASE} element={<HomeCard />} />
                <Route path={ROUTES.PRODUCTS} element={<ProductsCard />} />
                <Route path={ROUTES.COLLECTION} element={<CollectionCard />} />
                <Route path={ROUTES.INVENTORY} element={<InventoryCard />} />
                <Route path='*' element={<Navigate to={ROUTES.BASE} />} />
            </Route>
        </Routes>
    </BrowserRouter>
};

export default Router;
