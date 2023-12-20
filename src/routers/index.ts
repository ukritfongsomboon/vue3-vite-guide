import { createRouter, createWebHistory } from 'vue-router'

// 1. Define route components.
// These can be imported from other files
import homePageIndex from '@/views/homePage/index.vue'
import loginPage from '@/views/loginPage/index.vue'
import landingPage from '@/views/landinfPage/index.vue'

// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
    { path: '/', name: 'landingPage', component: landingPage, meta: { requiresAuth: false } },
    { path: '/login', name: 'loginPage', component: loginPage, meta: { requiresAuth: false } },
    { path: '/home', name: 'homePage', component: homePageIndex, meta: { requiresAuth: true } },
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHistory(),
    routes, // short for `routes: routes`
})

export default router
