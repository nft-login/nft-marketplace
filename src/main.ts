import { createApp } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import App from './App.vue';
import Home from './pages/Home.vue';
import Marketplace from './pages/Marketplace.vue';
import MyTokens from './pages/MyTokens.vue';
import Mint from './pages/Mint.vue';
import About from './pages/About.vue';
import { store, key } from './store';

const routes = [
    {
        path: '/', component: Home
    },
    {
        path: '/marketplace', component: Marketplace
    },
    {
        path: '/mytokens', component: MyTokens
    },
    {
        path: '/mint', component: Mint
    },
    { path: '/about', component: About },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

const app = createApp(App);
app.use(router);
app.use(store, key);
app.mount('#app');
