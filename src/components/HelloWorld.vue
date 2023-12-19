<script setup lang="ts">
import { ref, onMounted, onBeforeMount } from 'vue'
import { Users, User } from '@/models/userModels.ts'

// NOTE Props ----------------------------
// [] Default Props
// defineProps<{ msg: string }>()

// [x] Recomment
interface Props {
    msg: string
}
defineProps<Props>()
// NOTE -----------------------------------

function a1(val: string) {
    console.log(val)
}

onMounted(() => {
    a1('onMounted')
})

a1('create')

onBeforeMount(() => {
    a1('onBeforeMount')
})

// NOTE การประกาศ Ref จาก Type ที่เราสร้างขึ้น
const users = ref<Users>([])
// OR
// let users = ref<User[]>([])

let a = 15

let user = ref<User>({
    userId: 1234,
    firstName: 'Ukrit',
    lastname: 'fongsomboon',
    // phone: '0812345678',
})

user.value.phone = '0987654321'

users.value.push(user.value)
// OR
users.value.push({
    userId: 5678,
    firstName: 'Ukrit2',
    lastname: 'Fongsomboon2',
    phone: '0812345678',
})

console.log(users.value)

const count = ref(0)
</script>

<template>
    <div
        v-for="i in users"
        :key="i.userId"
    >
        {{ i.firstName }} {{ i.lastname }} {{ i.phone }}
    </div>
    <h1>{{ msg }}</h1>
    <div class="card">
        <button
            type="button"
            @click="count++"
        >
            count is {{ count }}
        </button>
        <p>
            Edit
            <code>components/HelloWorld.vue</code> to test HMR
        </p>
    </div>

    <p>
        Check out
        <a
            href="https://vuejs.org/guide/quick-start.html#local"
            target="_blank"
            >create-vue</a
        >, the official Vue + Vite starter
    </p>
    <p>
        Install
        <a
            href="https://github.com/vuejs/language-tools"
            target="_blank"
            >Volar</a
        >
        in your IDE for a better DX
    </p>
    <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
    color: #888;
}
</style>
../models/userModels.ts
