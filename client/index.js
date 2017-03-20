const Vue = require('vue'),
    router = require('./router.js'),
    Container = require('./pages/Container.vue');

const app = (route) => {
    return new Vue({
        template: `
            <div id="app">
                <container>
                    <router-view></router-view>
                </container>
            </div>`,
        components: {
            Container
        },
        router: router(route)
    });
};

if (typeof window !== 'undefined') {
    window.addEventListener('load', () => {
        app().$mount('#app');
    });
}

module.exports = app;
