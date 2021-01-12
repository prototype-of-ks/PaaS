<template>
    <div class="app-wrapper" :class="{ 'hide-sidebar': opened }">
        <!-- 头部导航栏 -->
        <navbar class="navbar-container" />
        <!-- 页面主要内容 -->
        <div class="main-container">
            <!-- 侧边栏 -->
            <sidebar class="sidebar-container" />
            <!-- app页面主要内容 -->
            <app-main />
            <!-- 左侧设置按钮 -->
            <div class="right-panel">
                <div class="setting"></div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { computed, ComputedRef, defineComponent, } from 'vue'
import { useStore } from 'vuex'

import { Sidebar, Navbar, AppMain } from './components'
import { useGetSidebarList } from './components/Sidebar/hook'

export default defineComponent({
    name: 'Layout',
    components: { 
        Sidebar, 
        Navbar,
        AppMain,
    },
    setup() {
        const store = useStore()
        const opened: ComputedRef<boolean> = computed(() => store.getters.opened)
        // 请求数据并缓存
        useGetSidebarList()
        return {
            opened
        }
    }
})
</script>
