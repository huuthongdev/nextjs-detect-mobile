const mainRoutes = require('next-routes')()

const Routes = {
    home: {
        path: '/',
        dir: '/home/Home'
    }
}

for (const key in Routes) {
    if (Routes.hasOwnProperty(key)) {
        const item = Routes[key];
        mainRoutes.add({ name: item.dir, pattern: item.path });
    }
}

module.exports = { Routes, mainRoutes, Link: mainRoutes.Link, Router: mainRoutes.Router }