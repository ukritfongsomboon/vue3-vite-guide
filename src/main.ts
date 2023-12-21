import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import Antd from 'ant-design-vue'
import router from '@/routers'
const pinia = createPinia()

import UserRepo from '@/repositories/userAPI'
import UserSrv from '@/services/userSrv'
import Storage from '@/utils/storage/storageLS'
import Request from '@/utils/request/requestAxios'

const storage = new Storage()
const request = new Request()
const userRepo = new UserRepo()

const userSrv = new UserSrv(userRepo, request, storage)

const app = createApp(App)

app.provide('$userSrv', userSrv)

app.use(pinia)
app.use(Antd)
app.use(router)
app.mount('#app')
