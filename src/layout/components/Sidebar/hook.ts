import store from '@/store'
import axios from '@/plugins/axios'
import { NavList, NavListRecord } from '@/store/store'

export function useToggleSidebar(): void {
    store.dispatch('toggleSidebar')
}

export function useGetSidebarList(): void {
        axios.get('/sidebarList').then(_ => {
            // 直接引入store时,注意actions名称带上modules前缀
            // 缓存 权限菜单列表
            // eslint-disable-next-line
            const result: any = _.data.data
            const resultKeys: Array<string> = Object.keys(result)
            const activeKey: string = resultKeys[0]
            
            resultKeys.forEach(key => {
                const value = result[key] as NavList
                value.key = key

                const navListRecord: NavListRecord = {
                    key: key,
                    value: value
                }

                store.dispatch('permission/setNavList', navListRecord)
            })
            store.dispatch('permission/setActiveKey', activeKey)
    })
}









