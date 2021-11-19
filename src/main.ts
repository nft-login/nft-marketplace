import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'
import Account from './components/Account.vue'
import About from './components/About.vue'

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
app.use(router)
app.mount('#app')
