import { Ref, ComputedRef } from 'vue'

export type FormRules = Record<string, unknown>

export interface LoginForm {
    phone: string;
    password: string;
    isRemember?: boolean;
}


