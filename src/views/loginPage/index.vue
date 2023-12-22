<template>
    <div class="main-layout">
        <a-card
            style="width: 350px"
            class="card-login-form"
        >
            <a-form
                name="basic"
                autocomplete="off"
                :model="loginModel"
            >
                <a-form-item
                    name="username"
                    :rules="[{ required: true, message: 'Please input your username!' }]"
                >
                    <u-text-field
                        v-model="loginModel.username"
                        placeholder="Username"
                    >
                    </u-text-field>
                </a-form-item>

                <a-form-item
                    name="password"
                    :rules="[{ required: true, message: 'Please input your password!' }]"
                >
                    <u-text-field
                        v-model="loginModel.password"
                        placeholder="Password"
                    >
                    </u-text-field>
                </a-form-item>

                <a-form-item>
                    <a-form-item
                        name="remember"
                        no-style
                    >
                        <a-checkbox>Remember me</a-checkbox>
                    </a-form-item>

                    <a
                        class="login-form-forgot"
                        href=""
                    >
                        Forgot password
                    </a>
                </a-form-item>

                <a-form-item>
                    <u-btn
                        color="green"
                        @click="onClikSignIn"
                        block
                        :disabled="disabled"
                    >
                        Login
                    </u-btn>
                </a-form-item>
            </a-form>
        </a-card>
    </div>
</template>

<script setup lang="ts">
import { ref, computed, inject } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import uBtn from '@/components/Button/index.vue'
import uTextField from '@/components/Textfield/index.vue'
import { loginModel as LoginModel } from '@/models/loginModels'

import { userSrv } from '@/services/user'
const useUserSrv = inject('$userSrv') as userSrv

const router = useRouter()
const route = useRoute()
console.log(route)

// NOTE สร้างตัวแปรแบบ side effect ด้วย Interface
const loginModel = ref<LoginModel>({
    username: '',
    password: '',
})

async function onClikSignIn() {
    const x = await useUserSrv.SignIn(loginModel.value)
    if (x) router.push({ name: 'homePage' })
    else console.error('SignIn Fail')
}

const disabled = computed(() => {
    return !(loginModel.value.username && loginModel.value.password)
})
</script>

<style scoped>
.main-layout {
    width: 100%;
    height: 100%;
    overflow: hiddent;
    /* background-color: red; */
    position: relative;
}

.card-login-form {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

#components-form-demo-normal-login .login-form {
    max-width: 300px;
}
#components-form-demo-normal-login .login-form-forgot {
    float: right;
}
#components-form-demo-normal-login .login-form-button {
    width: 100%;
}
</style>
