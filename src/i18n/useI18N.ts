import { ValidLang, I18N } from './i18n'
import { useStore } from 'vuex'
import { computed, ComputedRef } from 'vue'
import language from './login/lang.json'

export function useI18N(): I18N {
    const store = useStore()
    const lang: ComputedRef<ValidLang> = computed(() => store.getters['lang'])

    const getLangSet = (): unknown => {
        const record: Record<string, unknown> = JSON.parse(JSON.stringify(language))
        return record[lang.value]
    }

    const getLang = (): ComputedRef<ValidLang> => lang

    const changeLang = (): void => {
        const newLang: ValidLang = lang.value === 'en' ? 'zh' : 'en'
        store.dispatch('changeLang', newLang)
    }
    
    return {
        getLangSet,
        getLang,
        changeLang
    }
}
