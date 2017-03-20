const Vue = require('vue'),
    VueRouter = require('vue-router');

Vue.use(VueRouter);

module.exports = function(route) {
    const router = new VueRouter({
        mode: 'history',
        routes: [
            {
                path: '/',
                component: require('./pages/Index.js')
            },
            {
                path: '/foo',
                component: require('./pages/Foo.js')
            }
        ]
    });

    if (route) {
        router.push(route);
    }

    return router;
};
