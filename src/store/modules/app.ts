// import Cookies from 'js-cookie'
import { ActionTree, Commit, MutationTree, GetterTree } from 'vuex'
import { DeviceState, RootState } from '../store'
import { ValidLang } from '@/i18n/i18n' 

const state: DeviceState = {
    device: 'desktop',
    opened: true,
    lang: 'en'
}

const mutations: MutationTree<DeviceState> = {
    TOGGLE_SIDEBAR(state: DeviceState) {
        state.opened = !state.opened
    },
    CHANGE_DEVICE(state: DeviceState, device: string) {
        state.device = device
    },
    CHANGE_LANG(state: DeviceState, lang: ValidLang) {
        state.lang = lang
    }
}

const actions: ActionTree<DeviceState, RootState> = {
    toggleSidebar(context: { commit: Commit }) {
        context.commit('TOGGLE_SIDEBAR')
    },
    changeDevice(context: { commit: Commit }, device: string) {
        context.commit('CHANGE_DEVICE', device)
    },
    changeLang(context: { commit: Commit }, lang: ValidLang) {
        context.commit('CHANGE_LANG', lang)
    }
}

const getters: GetterTree<DeviceState, RootState> = {
    opened: (state: DeviceState): boolean => state.opened,
    lang: (state: DeviceState): ValidLang => state.lang
}

export default {
    state,
    mutations,
    actions,
    getters
}





