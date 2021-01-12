<template>
    <div class="navbar"> 
        <scale class="scale-container" @click="toggleScalingMenu" />
        <scaling-menu class="scaling-menu-container" :isHide="isHide" />
        <h4 class="title">PaaS平台</h4>
        <user-panel class="user-panel-container" />
    </div>
</template>

<script lang="ts">
import { defineComponent, Ref, ref } from 'vue'

import UserPanel from './UserPanel.vue'
import ScalingMenu from './ScalingMenu.vue'
import Scale from '@/components/Scale/index.vue'

interface ScalingMenu {
    isHide: Ref<boolean>;
    toggleScalingMenu: () => void;
}

function useToggleScalingMenu(): ScalingMenu {
    const isHide: Ref<boolean> = ref(false)
    const toggleScalingMenu = (): void => {
        isHide.value = !isHide.value
    }
    return {
        isHide,
        toggleScalingMenu
    }
}

export default defineComponent({
    name: 'Navbar',
    components: {
        UserPanel,
        ScalingMenu,
        Scale
    },
    setup() {
        const { isHide, toggleScalingMenu } = useToggleScalingMenu()

        return {
            isHide,
            toggleScalingMenu,
        }
    }
})
</script>

