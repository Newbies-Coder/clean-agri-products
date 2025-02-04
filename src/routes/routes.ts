import { RouteObject } from 'react-router';
import React, { lazy } from 'react';

// Layouts
const MainLayout = lazy(() => import('@/layouts/Main/MainLayout'));
const AuthLayout = lazy(() => import('@/layouts/Auth/AuthLayout'));

// Pages
const ProductListPage = lazy(() => import('@/pages/ProductList/ProductList'));
const ProductDetailPage = lazy(() => import('@/pages/ProductDetail/ProductDetails'));
const HomePage = lazy(() => import('@/pages/Home/Home'));
const CartPage = lazy(() => import('@/pages/Cart/Cart'));
const CheckoutPage = lazy(() => import('@/pages/Checkout/Checkout'));
const LoginPage = lazy(() => import('@/pages/Login'));
const RegisterPage = lazy(() => import('@/pages/Register'));
const OTPVerification = lazy(() => import('@/pages/OTPVerification'));

// Routes
export const routes: RouteObject[] = [
    {
        path: '/',
        element: React.createElement(MainLayout),
        children: [
            { path: '', element: React.createElement(HomePage) },
            { path: 'products', element: React.createElement(ProductListPage) },
            { path: 'products/:id', element: React.createElement(ProductDetailPage) },
            { path: 'cart', element: React.createElement(CartPage) },
            { path: 'checkout', element: React.createElement(CheckoutPage) },
        ],
    },
    {
        path: '/auth/',
        element: React.createElement(AuthLayout),
        children: [
            { path: 'login', element: React.createElement(LoginPage) },
            { path: 'register', element: React.createElement(RegisterPage) },
            { path: 'otp-verification', element: React.createElement(OTPVerification) },
        ],
    },
];
