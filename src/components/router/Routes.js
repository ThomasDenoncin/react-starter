import Home from "../../pages/home/Home";

export const LAYOUT_PRINCIPAL = 'layoutPrincipal';
export const LAYOUT_USER = 'layoutUser';

export const routes = [
    {
        endpoint: '/',
        title: 'Home',
        component: Home,
        layout: LAYOUT_PRINCIPAL,
    },
    {
        endpoint: '/about',
        title: 'About',
        component: Home,
        layout: LAYOUT_PRINCIPAL,
    },
    {
        endpoint: '/user',
        title: 'User',
        component: Home,
        layout: LAYOUT_PRINCIPAL,
    }
];