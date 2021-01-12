<template>
    <div class="user-panel">
        <div class="avatar">
            <el-dropdown>
                <span class="el-dropdown-link">
                    <el-avatar :size="28" src="http://127.0.0.1:8088/static/pandaman.jpg"></el-avatar>
                </span>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item>用户设置</el-dropdown-item>
                        <el-dropdown-item>修改密码</el-dropdown-item>
                        <el-dropdown-item>退出</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </div>
        <div class="inc-name">
            Platform as a Service
        </div>

        <div class="icon-setting-group">
            <i class="el-icon-s-comment sub-icon"></i>
            <i class="el-icon-mobile sub-icon"></i>
        </div>
    </div>
</template>

<script lang="rs">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'RightPanel'
})
</script>

<style scoped lang="scss">
    .user-panel {
        display: inline-flex;
        flex-direction: row;
        align-items: center;

        .inc-name {
            margin-left: 12px;
        }

        .icon-setting-group {
            display: inline-flex;
            margin-left: 80px;
            
            .sub-icon {
                margin: 12px;
                cursor: pointer;
                font-size: 22px;
                color: dodgerblue;
            }
        }
    }
</style>