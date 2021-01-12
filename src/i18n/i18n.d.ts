import { ComputedRef } from 'vue'

export type ValidLang = 'en' | 'zh';

export interface I18N {
    getLang: () => ComputedRef<ValidLang>;
    changeLang: () => void;
    getLangSet: () => unknown;
}