<script setup lang="ts">

</script>

<template>
    <Suspense>
        <div class="main-layout">
            <router-view></router-view>
        </div>
    </Suspense>
</template>

<style scoped>
.main-layout {
    width: 100%;
    height: 100%;
}
</style>
