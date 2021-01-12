<template>
    <section class="app-main">
        <breadcrumb></breadcrumb>
        <router-view v-slot="{ Component }">
            <transition name="fade-transform" mode="out-in">
                <component :is="Component" />
            </transition>
        </router-view>
    </section>
</template>

<script>
import { defineComponent } from 'vue'
import Breadcrumb from '@/components/Breadcrumb/index.vue'

export default defineComponent({
    components: {
        Breadcrumb
    }
})
</script>

<style lang="scss" scoped>
    @import "~@/style/variables.scss";

    .app-main {
        // 注意：calc函数使用scss变量语法
        min-height: calc(100vh - #{$navbarHeight});
        position: relative;
        overflow: hidden;
        padding-top: $navbarHeight;
    }
</style>