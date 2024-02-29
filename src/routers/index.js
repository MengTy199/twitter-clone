import { createRouter, createWebHistory } from 'vue-router'

// Import your components
import LoginPage from './../views/LoginPage.vue'
import HomePage from './../views/HomePage.vue'
const routes = [
    { path: '/', component: LoginPage },
    {path: '/homePage' , component: HomePage },
    
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router