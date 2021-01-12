const express = require('express')
const app = express()
const path = require('path')

// 解决跨域问题
app.all('*', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    next()
})

app.disable('x-powered-by')
// Mock数据
function createList() {
    const list = []
    for (let i = 0; i < 10; i++) {
        list.push({
            column: i,
            data: `这是第${ i }条测试数据`
        })
    }
    return list
}

app.use('/static', express.static(path.join(__dirname, 'public')))

app.get('/login', (req, res) => {
    res.json({
        list: createList()
    })
})

app.get('/sidebarList', (req, res) => {
    res.json({
        data: {
            enterprise: {
                index: 'enterprise',
                data: '企业中心',
                icon: 'el-icon-menu',
                permissionList: [{
                    index: '/dashboard',
                    data: '企业中心',
                    icon: 'el-icon-location',
                    children: [{
                        index: '/AppMain',
                        data: '企业中心下级'
                    }]
                }]
            },
            cloudy: {
                index: 'cloudy',
                data: '多云中心',
                icon: 'el-icon-location',
                permissionList: [{
                    index: '/cloudy',
                    data: '多云中心',
                    icon: 'el-icon-menu'
                }]
            },
            operation: {
                index: 'operation',
                data: '操作中心',
                icon: 'el-icon-location',
                permissionList: [{
                    index: '/operation',
                    data: '操作中心',
                    icon: 'el-icon-s-fold',
                    children: [{
                        index: '/operation/list',
                        data: '操作中心列表'
                    }]
                }]
            }
        }
    })
})

app.listen(8088, () => {
    console.log('serve start')
})