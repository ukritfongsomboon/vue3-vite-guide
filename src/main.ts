import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import Antd from 'ant-design-vue'
import router from '@/routers'
const pinia = createPinia()

import Storage from '@/utils/storage/storageLS'
import Request from '@/utils/request/requestAxios'

import UserRepo from '@/repositories/userAPI'
import PostRepo from '@/repositories/postAPI'

import UserSrv from '@/services/userSrv'

console.log('--->', import.meta.env.VITE_APP_API)

const storage = new Storage()
const request = new Request()

const userRepo = new UserRepo('https://jsonplaceholder.typicode.com', request)
const postRepo = new PostRepo('https://jsonplaceholder.typicode.com', request)

postRepo.Get().then((e) => console.log(e))

const userSrv = new UserSrv(userRepo, storage)

const app = createApp(App)
app.provide('$userSrv', userSrv)
app.use(pinia)
app.use(Antd)
app.use(router)
app.mount('#app')
