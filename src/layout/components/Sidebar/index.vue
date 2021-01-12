<template>
    <div>
        <el-scrollbar>
            <el-menu
                mode="vertical"   
                :background-color="variables.menuBg"
                :text-color="variables.menuText"
                :active-text-color="variables.activeTextColor"
                :unique-opened="false"
                :collapse-transition="false"
                :collapse="opened"
                :default-active="activeRoute"
                router
            >
                <el-menu-item>
                    <el-input placeholder="搜索" v-if="!opened"></el-input>
                    <i class="el-icon-search" v-else></i>
                    <template #title><span v-if="opened">搜索</span></template>
                </el-menu-item>
                <sidebar-item v-for="item in permissionList" :item="item" :key="item.index" />
                <el-menu-item v-if="opened" class="unfold-item" @click="useToggleSidebar">
                    <i class="el-icon-s-unfold"></i>
                    <template #title><span>展开</span></template>
                </el-menu-item>
            </el-menu>
       </el-scrollbar>
        <el-button 
            class="fold-item"
            :class="{ 'open-fold-item': !opened }" 
            type="primary"
            @click="useToggleSidebar"
        >
            <i class="el-icon-s-fold"></i>
        </el-button>
    </div>
</template>

<script lang="ts">
import { defineComponent, ComputedRef, computed } from 'vue'
import variables from '@/style/variables.scss'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import { useGetSidebarList, useToggleSidebar } from './hook' 
import { PermissionList } from '@/store/store'
import SidebarItem from './SidebarItem.vue'

export default defineComponent({
    name: 'Sidebar',
    components: {
        SidebarItem
    },
    setup() {
        const store = useStore()
        const route = useRoute()
        // 侧边栏收缩状态
        const opened: ComputedRef<boolean> = computed(() => store.getters.opened)
        // 侧边栏数据
        const permissionList: ComputedRef<PermissionList> = computed(() => store.getters['permission/permissionList'])
        // 获取当前路由
        const activeRoute: ComputedRef<string> = computed(() => route.path)
        console.log(activeRoute.value)
        return {
            variables: variables,
            opened,
            permissionList,
            activeRoute,
            useToggleSidebar
        }
    }
})
</script>

<style scoped lang="scss">
    @import '~@/style/variables.scss';

    .unfold-item {
        position: fixed;
        bottom: 0;
        width: $hidedSidebarWidth;
    }

    .fold-item {
        position: fixed;
        left: 0;
        transition: left .28s;
        bottom: 40px;
        padding: 8px 12px;
        z-index: -1;
    }

    .open-fold-item {
        transition: left .28s;
        left: 170px;
        z-index: 1;
    }
</style>