<template>
    <button
        class="button"
        @click="emit('click')"
        :style="`background-color: ${props.color};`"
    >
        <slot></slot>
    </button>
</template>

<script setup lang="ts">
// NOTE Model สำหรับค่า Props สำหรับ Component
interface PropsModel {
    color?: string
    block?: boolean
}
// NOTE ค่า Props เริ่มต้น
const props = withDefaults(defineProps<PropsModel>(), {
    color: '',
    block: false,
})

// NOTE กำหนด Event ที่สามารถ Emit กลับไปยัง Parent ได้
const emit = defineEmits(['click'])
</script>

<style scoped>
.button {
    /* background-color: #04aa6d; */
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
}
</style>
