import Vue from 'Vue'
import VueRouter from 'vue-router'

import HomePage from './components/pages/HomePage';
import AboutPage from './components/pages/AboutPage';
import ContactsPage from './components/pages/ContactsPage';

Vue.use(VueRouter)

const routes = new VueRouter({
    mode: 'history',
    routes: [
        {path: '/', component: HomePage },
        {path: '/about', component: AboutPage },
        {path: '/contacts', component: ContactsPage },
    ]
});

export default routes;
