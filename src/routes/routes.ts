import { RouteObject } from 'react-router';
import React, { lazy } from 'react';

// Layouts
const MainLayout = lazy(() => import('@/layouts/Main/MainLayout'));
const AuthLayout = lazy(() => import('@/layouts/Auth/AuthLayout'));
const AccountLayout = lazy(() => import('@/layouts/Account/AccountLayout'));
const AdminLayout = lazy(() => import('@/layouts/Admin/AdminLayout'));

// User Pages
const ProductListPage = lazy(() => import('@/pages/ProductList/ProductList'));
const ProductDetailPage = lazy(() => import('@/pages/ProductDetail/ProductDetails'));
const HomePage = lazy(() => import('@/pages/Home'));
const CartPage = lazy(() => import('@/pages/Cart/Cart'));
const CheckoutPage = lazy(() => import('@/pages/Checkout/Checkout'));
const LoginPage = lazy(() => import('@/pages/Login'));
const RegisterPage = lazy(() => import('@/pages/Register'));
const OTPVerificationPage = lazy(() => import('@/pages/OTPVerification'));
const ProfilePage = lazy(() => import('@/pages/Profile/Profile'));

// Admin Pages
const DashboardPage = lazy(() => import('@/pages/Admin/Dashboard'));

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
            { path: 'otp-verification', element: React.createElement(OTPVerificationPage) },
        ],
    },
    {
        path: '/account/',
        element: React.createElement(AccountLayout),
        children: [
            { path: 'profile', element: React.createElement(ProfilePage) },
        ],
    },
    {
        path: '/admin/',
        element: React.createElement(AdminLayout),
        children: [
            { path: '', element: React.createElement(DashboardPage) },
        ],
    },
];
