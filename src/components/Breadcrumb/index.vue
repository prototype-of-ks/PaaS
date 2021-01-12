<template>
    <el-breadcrumb separator="/" class="app-breadcrumb">
        <transition-group name="breadcrumb">
            <el-breadcrumb-item v-for="item in breadcrumbList" :key="item.path">
                <router-link :to="item.path">{{ item.name }}</router-link>
            </el-breadcrumb-item>
        </transition-group>
    </el-breadcrumb>
</template>

<script lang="ts">
import { 
    defineComponent, 
    onMounted, 
    reactive, 
    watch, 
    watchEffect 
} from 'vue'
import { RouteLocationMatched, useRouter } from 'vue-router'

export default defineComponent({
    name: 'Breadcrumb',
    setup() {
        const router = useRouter()
        const breadcrumbList = reactive<Array<RouteLocationMatched>>([])
        watchEffect(() => {
            const matched: Array<RouteLocationMatched> = router.currentRoute.value.matched.filter(matched => matched.name)
            breadcrumbList.splice(0)    
            matched.forEach(item => { breadcrumbList.push(item) })
        })
        return {
            breadcrumbList
        }
    }
})
</script>

<style scoped lang="scss">
    .app-breadcrumb {
        line-height: 32px;
        font-size: 14px;
        padding-left: 12px;
        border-bottom: 1px solid #d8dce5;
        // box-shadow: 0 1px 1px 0 rgb(0 0 0 / 12%), 0 0 3px 0 rgb(0 0 0 / 4%);
    }
</style>