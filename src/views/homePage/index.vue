<template>
    <a-layout style="width: 100%; height: 100%">
        <a-layout-sider
            breakpoint="lg"
            @collapse="onCollapse"
            @breakpoint="onBreakpoint"
            v-model:collapsed="collapsed"
            co
            :trigger="null"
        >
            <div class="logo" />

            <!-- <a-menu
                v-model:selectedKeys="selectedKeys"
                theme="dark"
                mode="inline"
            >
                <a-menu-item key="1">
                    <user-outlined />
                    <span class="nav-text">nav 1</span>
                </a-menu-item>
                <a-menu-item key="2">
                    <video-camera-outlined />
                    <span class="nav-text">nav 2</span>
                </a-menu-item>
                <a-menu-item key="3">
                    <upload-outlined />
                    <span class="nav-text">nav 3</span>
                </a-menu-item>
                <a-menu-item key="4">
                    <user-outlined />
                    <span class="nav-text">nav 4</span>
                </a-menu-item>
            </a-menu> -->
            <a-menu
                v-model:openKeys="state.openKeys"
                v-model:selectedKeys="state.selectedKeys"
                :mode="state.mode"
                :items="items"
                theme="dark"
            ></a-menu>
        </a-layout-sider>
        <a-layout>
            <a-layout-header :style="{ background: '#fff', padding: 0 }">
                <menu-unfold-outlined
                    v-if="collapsed"
                    class="trigger"
                    @click="() => (collapsed = !collapsed)"
                />
                <menu-fold-outlined
                    v-else
                    class="trigger"
                    @click="() => (collapsed = !collapsed)"
                />
            </a-layout-header>
            <a-layout-content :style="{ margin: '24px 16px 0' }">
                <div :style="{ padding: '24px', background: '#fff', minHeight: '360px', height: '100%' }">content</div>
            </a-layout-content>
            <a-layout-footer style="text-align: center"> Ant Design ©2018 Created by Ant UED </a-layout-footer>
        </a-layout>
    </a-layout>
</template>
<script setup lang="ts">
import { h, ref, reactive } from 'vue'
import {  MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons-vue'

const onCollapse = (collapsed: any, type: any) => {
    console.log(collapsed, type)
}
const onBreakpoint = (broken: any) => {
    console.log(broken)
}
// const selectedKeys = ref(['4'])
const collapsed = ref<boolean>(false)

import { MailOutlined, CalendarOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons-vue'
import type { MenuMode, MenuTheme } from 'ant-design-vue';
import { ItemType } from 'ant-design-vue'

const state = reactive({
  mode: 'inline' as MenuMode,
  theme: 'light' as MenuTheme,
  selectedKeys: ['1'],
  openKeys: ['sub1'],
});

function getItem(label: string, key: string, icon?: any, children?: ItemType[], type?: 'group'): ItemType {
    return {
        key,
        icon,
        children,
        label,
        type,
    } as ItemType
}

const items: ItemType[] = reactive([
    getItem('Navigation One', '1', h(MailOutlined)),
    getItem('Navigation Two', '2', h(CalendarOutlined)),
    getItem('Navigation Two', 'sub1', h(AppstoreOutlined), [
        getItem('Option 3', '3'),
        getItem('Option 4', '4'),
        getItem('Submenu', 'sub1-2', null, [getItem('Option 5', '5'), getItem('Option 6', '6')]),
    ]),
    getItem('Navigation Three', 'sub2', h(SettingOutlined), [
        getItem('Option 7', '7'),
        getItem('Option 8', '8'),
        getItem('Option 9', '9'),
        getItem('Option 10', '10'),
    ]),
])
</script>
<style scoped>
.logo {
    height: 32px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px;
}

.trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 12px;
    cursor: pointer;
    transition: color 0.3s;
}

.trigger:hover {
    color: #1890ff;
}

.site-layout-sub-header-background {
    background: #fff;
}

.site-layout-background {
    background: #fff;
}

[data-theme='dark'] .site-layout-sub-header-background {
    background: #141414;
}
</style>
