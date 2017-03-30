const Vue = require('vue'),
    router = require('./loaders/router.js');

require('./loaders/components.js');

const app = (route) => {
    return new Promise((resolve, reject) => {
        resolve(new Vue({
            template: `
                <div id="app">
                    <container>
                        <router-view></router-view>
                    </container>
                </div>`,
            router: router(route)
        }));
    });
};

if (typeof window !== 'undefined') {
    window.addEventListener('load', () => {
        app().then((mainView) => {
            mainView.$mount('#app');
        });
    });
}

module.exports = app;
