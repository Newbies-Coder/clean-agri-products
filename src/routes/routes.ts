import { RouteObject } from 'react-router';
import React, { lazy } from 'react';

// Layouts
const MainLayout = lazy(() => import('@/layouts/Main/MainLayout'));

// Pages
const ProductListPage = lazy(() => import('@/pages/ProductList/ProductList'));
const ProductDetailPage = lazy(() => import('@/pages/ProductDetail/ProductDetails'));
const HomePage = lazy(() => import('@/pages/Home/Home'));

// Routes
export const routes: RouteObject[] = [
    {
        path: '/',
        element: React.createElement(MainLayout),
        children: [
            { path: '', element: React.createElement(HomePage) },
            { path: 'products', element: React.createElement(ProductListPage) },
            { path: 'products/:id', element: React.createElement(ProductDetailPage) },
        ],
    },
];
