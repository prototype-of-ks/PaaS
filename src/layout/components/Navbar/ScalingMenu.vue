<template>
    <div>
        <el-menu 
            class="scaling-menu"
            mode="horizontal"
            :class="{ 'is-hide': isHide }"
            :unique-opened="false"
            :collapse-transition="false"
            :default-active="defaultActive"
        >
            <el-menu-item style="display: none"></el-menu-item>
            <el-menu-item
                v-for="item in navList"
                :key="item.index"
                :index="item.index"
                @click="activate(item)"
            >{{ item.data }}</el-menu-item>
        </el-menu>
    </div>
</template>

<script lang="ts">
import { defineComponent, computed, ComputedRef } from 'vue'
import { useStore } from 'vuex' 
import { NavList } from '@/store/store'

export default defineComponent({
    name: 'ScalingMenu',
    props: {
        isHide: {
            type: Boolean,
            default: () => false
        }
    },
    setup() {
        const store = useStore()
        const navList: ComputedRef<Array<NavList>> = computed(() => store.getters['permission/navList'])
        const defaultActive: ComputedRef<string> = computed(() => navList.value[0] ? navList.value[0].index : '')       
        const activate = (item: NavList): void => {
            store.dispatch('permission/setActiveKey', item.key)
        }
        
        return {
            navList,
            activate,
            defaultActive
        }
    }
})
</script>

<style scoped lang="scss">
    .scaling-menu {
        display: inline-block;
        height: 50px;
        overflow: hidden;

        .el-menu.el-menu--horizontal {
            border-bottom: 0;
        }

        .el-menu-item {
            height: 50px;
            line-height: 50px;
        }
    }

    .is-hide {
        .el-menu-item {
            display: none;
        }
    }


</style>