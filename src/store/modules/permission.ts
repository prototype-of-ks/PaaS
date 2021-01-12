import { ActionTree, Commit, GetterTree, MutationTree } from 'vuex'
import { NavList, PermissionState, RootState, NavListRecord } from '../store'

const state: PermissionState = {
    navList: new Map<string, NavList>(),
    activeKey: ''
}

const mutations: MutationTree<PermissionState> = {
    SET_NAV_LIST(state: PermissionState, navListRecord: NavListRecord) {
        state.navList.set(navListRecord.key, navListRecord.value)
    },
    SET_ACTIVE_KEY(state: PermissionState, activeKey: string) {
        state.activeKey = activeKey
    }
} 

const actions: ActionTree<PermissionState, RootState> = {
    setNavList(context: { commit: Commit }, navListRecord: NavListRecord) {
        context.commit('SET_NAV_LIST', navListRecord)
    },
    setActiveKey(context: { commit: Commit }, activeKey: string) {
        context.commit('SET_ACTIVE_KEY', activeKey)
    }
}

const getters: GetterTree<PermissionState, RootState> = {
    navList: (state: PermissionState): Array<NavList> => {
        const navList = [] as Array<NavList>
        state.navList.forEach((nav: NavList) => {
            navList.push(nav)
        })
        return navList
    },
    permissionList: (state: PermissionState) => state.navList.get(state.activeKey)?.permissionList,
} 

// 导出模块注意加上namespaced
export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}
