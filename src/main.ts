import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'
import Home from './components/Home.vue'
import Marketplace from './components/Marketplace.vue';
import About from './components/About.vue'
import { store, key } from './store'

const routes = [
    {
        path: '/', component: Home
    },
    {
        path: '/marketplace', component: Marketplace
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
