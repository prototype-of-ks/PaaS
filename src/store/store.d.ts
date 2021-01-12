import { ValidLang } from '@/i18n/i18n' 

export interface RootState {
    version?: string;
}

export interface DeviceState {
    device: string;
    opened: boolean;
    lang: ValidLang
}
// 侧边栏数据接口
export interface PermissionList {
    key?: string;
    index: string;
    icon?: string;
    data: string;
    children?: Array<PermissionList> 
}
// 头部导航栏数据接口
export interface NavList {
    index: string;
    icon: string;
    data: string;
    key: string;
    permissionList: Array<PermissionList>
}
// 键值映射
export interface NavListRecord {
    key: string;
    value: NavList
}

export interface PermissionState {
    navList: Map<string, NavList>;
    activeKey: string;
}



