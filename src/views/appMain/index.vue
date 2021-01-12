<template>
    <div style="padding: 12px">
        Active view is appmain.
        <router-view v-slot="{ Component }">
            <transition name="fade-transform" mode="out-in">
                <component :is="Component"></component>
            </transition>
        </router-view>
    </div>
</template>