import { createStore } from 'vuex'

// const modulesFiles: __WebpackModuleApi.RequireContext = require.context('./modules', true, /\.ts$/)
// // eslint-disable-next-line
// const modules = modulesFiles.keys().reduce((modules: any, modulePath: string) => {
//     const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
//     const value = modulesFiles(modulePath)
//     modules[moduleName] = value.default
//     return modules
// }, {})

import app from './modules/app'
import permission from './modules/permission'

export default createStore({
    modules: {
        app,
        permission
    }
})
