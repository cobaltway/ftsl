const Vue = require('vue'),
    VueRouter = require('vue-router');

Vue.use(VueRouter);

module.exports = function(route) {
    const router = new VueRouter({
        mode: 'history',
        routes: [
            {
                path: '/',
                component: require('../components/timeline/PostsList.js'),
                props: {
                    resource: 'lastPosts',
                    withAbstract: true
                }
            }
        ]
    });

    if (route) {
        router.push(route);
    }

    return router;
};
