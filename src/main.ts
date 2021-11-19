import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'
import Account from './components/Account.vue'
import About from './components/About.vue'
import { store, key } from './store'

const routes = [
    {
        path: '/', component: Account,
        props: route => ({ account: route.query.account })
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
