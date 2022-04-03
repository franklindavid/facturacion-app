import { createRouter, createWebHistory } from 'vue-router'
const Home = () => import('./components/Home.vue')
const Login = () => import('./components/Login.vue')
const Dashboard = () => import('./components/Dashboard.vue')
const Factura = () => import('./components/factura/Index.vue')
const CreateFactura = () => import('./components/factura/Create.vue')
const EditFactura = () => import('./components/factura/Edit.vue')

const routes = [
    {
        name: 'home',
        path: '/',
        component: Home,
        props: true
    },
    {
        name: 'login',
        path: '/login',
        component: Login
    },
    {
        name: 'dashboard',
        path: '/dashboard',
        component: Dashboard
    },
    {
        name: 'factura',
        path: '/factura',
        component: Factura
    },
    {
        name: 'Create',
        path: '/create',
        component: CreateFactura
    },
    {
        name: 'edit',
        path: '/edit/:id',
        component: EditFactura
    },
]

export const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  })