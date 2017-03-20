const Vue = require('vue'),
    VueRouter = require('vue-router');

Vue.use(VueRouter);

const Foo = require('./pages/index.js'),
    Bar = { template: '<div>bar</div>' },
    routes = [
        {
            path: '/foo',
            component: Foo
        },
        {
            path: '/bar',
            component: Bar
        }
    ],
    app = (route) => {
        const router = new VueRouter({
            routes,
            mode: 'history'
        });

        if (route) {
            router.push(route);
        }

        return new Vue({
            template: `<div id="app">
                <h1>Hello App!</h1>
                <p>
                    <router-link to="/foo">Go to Foo</router-link>
                    <router-link to="/bar">Go to Bar</router-link>
                </p>
                <router-view></router-view>
            </div>`,
            data: {
                counter: 0
            },
            created: function() {
                // setInterval(() => {
                this.counter += 1;
                // }, 1000);
            },
            router
        });
    };

if (typeof window !== 'undefined') {
    window.addEventListener('load', () => {
        app().$mount('#app');
    });
}

module.exports = app;
