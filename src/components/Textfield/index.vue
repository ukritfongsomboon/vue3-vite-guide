<template>
    <a-input
        :value="props.modelValue"
        @input="onInput"
        :placeholder="props.placeholder"
    />
</template>

<script setup lang="ts">
// NOTE Model สำหรับค่า Props สำหรับ Component
interface PropsModel {
    modelValue?: string
    placeholder?: string
}
// NOTE ค่า Props เริ่มต้น
const props = withDefaults(defineProps<PropsModel>(), {
    modelValue: '',
})

// NOTE กำหนด Event ที่สามารถ Emit กลับไปยัง Parent ได้
const emit = defineEmits(['update:modelValue'])

// NOTE เป็น Function เมื่อมีการ Input ข้อมูลไปยัง Input Field
function onInput(e: any) {
    emit('update:modelValue', e.target.value)
}
</script>

<style scoped></style>
