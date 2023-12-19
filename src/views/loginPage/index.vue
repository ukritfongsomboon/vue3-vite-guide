<template>
    <div>Login Page {{ title }}</div>
    <u-text-field v-model="loginModel.username"></u-text-field>
    <u-text-field v-model="loginModel.password"></u-text-field>
    <u-btn
        color="green"
        @click="onClikSignIn"
    >
        Login
    </u-btn>
</template>

<script lang="ts">
import uBtn from '@/components/Button/index.vue'
import uTextField from '@/components/Textfield/index.vue'
import { loginModel } from '@/models/loginModels'
import { SignIn } from '@/Services/userSrv'
import { ref } from 'vue'

export default {
    components: {
        uBtn,
        uTextField,
    },
    setup() {
        const title = ref('Hello world')

        // NOTE สร้างตัวแปรแบบ side effect ด้วย Interface
        const loginModel = ref<loginModel>({
            username: '',
            password: '',
        })

        function onClikSignIn() {
            const x = SignIn(loginModel.value)
            console.log(x)
        }
        return { onClikSignIn, title, loginModel }
    },
}
</script>

<style scoped></style>
