<template>
    <div class="login-container">
        <div class="bg-layer">
            <el-image :src="bg2" class="bg" fit="cover"></el-image>
        </div>
        <div class="login-main">
            <div class="corner" @click="changeLang">
                <span class="corner-desc">{{ lang === 'zh' ? 'en' : 'zh' }}</span>
            </div>
            <el-image :src="logo" class="logo" fit="contain"></el-image>
            <div class="login-form">
                <el-form :model="loginForm" :rules="formRules" ref="form">
                    <el-form-item>
                        <span style="float: left">{{ langSet.login.welcome }}</span>
                    </el-form-item>
                    <el-form-item prop="phone">
                        <el-input 
                            v-model="loginForm.phone" 
                            :placeholder="langSet.login.phone.placeholder"
                        ></el-input>
                    </el-form-item>
                    <el-form-item prop="password">
                        <el-input 
                            v-model="loginForm.password" 
                            :placeholder="langSet.login.password.placeholder" 
                            type="password"
                        ></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-checkbox 
                            style="float: left" 
                            v-model="loginForm.isRemember"
                        >{{ langSet.login.rememberAccount }}</el-checkbox>
                        <div style="float: right">
                            <router-link 
                                class="external-link" 
                                to="/dashboard"
                            >{{ langSet.login.forgotAccount }}</router-link>
                            <el-divider direction="vertical"></el-divider>
                            <router-link 
                                class="external-link" 
                                to="/dashboard"
                            >{{ langSet.login.signin }}</router-link>
                        </div>
                    </el-form-item>
                    <el-form-item>
                        <el-button 
                            type="primary" 
                            class="login-btn"
                            @click="submit"
                        >{{ langSet.login.loginBtn }}</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { 
    reactive, 
    computed, 
    ComputedRef,
    getCurrentInstance,
    nextTick
} from 'vue'
import { I18N, ValidLang } from '@/i18n/i18n'
import { useI18N } from '@/i18n/useI18N'
import { FormRules, LoginForm } from './index'
import { validateVPhone } from '@/utils/validate'

export default {
    name: 'Login',
    setup() {   
        const { ctx } = getCurrentInstance() as any
        const i18n: I18N = useI18N()
        // 获取当前语言
        const lang: ComputedRef<ValidLang> = i18n.getLang()  
        const { changeLang }: I18N = i18n
        // 获取当前语言文字集
        const langSet: ComputedRef<any> = computed(() => i18n.getLangSet())
        const formRules: ComputedRef<FormRules> = computed(() => ({
            phone: [{ 
                trigger: 'blur',
                validator: (rules: any, value: string, callback: Function) => {
                    if (!validateVPhone(value)) {
                        callback(new Error(langSet.value.login.phone.errorMsg))
                    } else {
                        return true
                    }
                }
            }],
            password: [{ 
                trigger: 'blur', 
                required: true, 
                message: langSet.value.login.password.errorMsg 
            }]
        }))
        // 表单数据初始化
        const loginForm: LoginForm = reactive({
            phone: '',
            password: '',
            isRemember: false,
        })
        const submit = (): void => {
            nextTick(() => {
                ctx.$refs.form.validate((valid: boolean) => {
                    if (!valid) {
                        console.log('error')
                    } else {
                        console.log('success')
                        ctx.$router.push('/dashboard')
                    }
                })
            })
        }
        const logo: ComputedRef<string> = computed(() => {
            return lang.value === 'zh' ? require('@/assets/logo_CN.png') : require('@/assets/logo_EN.png')
        })
        const bg2: ComputedRef<string> = computed(() => {
            return require('@/assets/bg2.png')
        })
        return {
            loginForm,
            lang,
            langSet,
            changeLang,
            formRules,
            logo,
            bg2,
            submit
        }
    }
}
</script>
<style scoped lang="scss">
    .login-container {
        display: flex;
        height: 100%;
        min-height: 700px;
        padding-top: 120px;
        justify-content: center;
        box-sizing: border-box;
        background: rgb(240, 240, 240) url('../../assets/bg.png') no-repeat top right / 40%;

        .bg-layer {
            width: 720px;
            height: 475px;
            background: linear-gradient(135.3deg, #88D7C2 1.95%, #1A66FF 98.83%);
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            border-radius: 12px;

            .bg {
                width: 100%;
                height: 100%;
                border-radius: 12px;
            }
        }

        .login-main {
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
            width: 320px;
            height: 475px;
            background-color: #fff;
            border-radius: 12px;

            .logo {
                // 宽度和高度同时设置，否则切换语言会闪屏
                width: 230px;
                height: 67px;
                padding: 32px 0;
            }

            .corner {
                position: absolute;
                z-index: 9;
                right: 0;
                top: 0;
                width: 50px;
                height: 30px;
                border-radius: 0 12px 0 0;
                background-color: dodgerblue;
                cursor: pointer;
                // clip-path部分浏览器可能不兼容
                // https://developer.mozilla.org/zh-CN/docs/Web/CSS/clip-path#%E6%B5%8F%E8%A7%88%E5%99%A8%E5%85%BC%E5%AE%B9%E6%80%A7
                clip-path: polygon(0 0, 100% 0, 100% 100%);
                color: #fff;
                font-size: 12px;

                .corner-desc {
                    position: absolute;
                    right: 8px;
                    top: 4px;
                }
            }

            .el-form {
                text-align: center;

                .el-form-item {
                    margin-bottom: 0;
                    
                    .el-form-item__content {
                        line-height: 32px;
                    }

                    .el-input {
                        width: 210px;
                        margin: 10px 0;
                    }

                    .login-btn {
                        width: 210px;
                        padding: 8px;
                    }
                }

                .external-link {
                    text-decoration: none;
                    color: rgb(0, 77, 225);

                    &:hover {
                        text-decoration: underline;
                        text-decoration-color: rgb(0, 77, 225);
                    }
                }
            }
        }
    }
</style>