<template>
    <el-menu-item v-if="!isSubmenu" :index="item.index">
        <i v-if="item.icon" :class="item.icon"></i>
        <template #title><span>{{ item.data }}</span></template>
    </el-menu-item>
    <el-submenu v-else :index="item.index">
        <template #title>
            <i class="el-icon-location"></i>
            <span>{{ item.data }}</span>
        </template>
        <el-menu-item-group>
            <sidebar-item v-for="child in item.children" :item="child" :key="child.index" />
        </el-menu-item-group>
    </el-submenu>
</template>

<script lang="ts">
import { 
    defineComponent, 
    ref, 
    toRefs, 
    Ref 
} from 'vue'

export default defineComponent({
    name: 'SidebarItem',
    props: {
        item: {
            type: Object,
            default: () => ({})
        }
    },
    setup(props) {
        const isSubmenu: Ref<boolean> = ref(false)
        // props是响应式的，不能直接赋值和解构，因为会消除props的响应性
        // 使用toRefs安全的赋值和解构
        const { item } = toRefs(props)
        // eslint-disable-next-line
        const children: any = item.value.children
        if (Array.isArray(children) && children.length !== 0) {
            isSubmenu.value = true
        }

        return {
            isSubmenu
        }
    }
})
</script>