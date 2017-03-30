const Vue = require('vue');

let res;

if (typeof window !== 'undefined') {
    const VueResource = require('vue-resource');
    Vue.use(VueResource);

    res = (resource, parameters) => {
        return new Promise((resolve, reject) => {
            Vue.http.get('/api/' + resource, {
                params: parameters
            }).then(({body}) => {
                resolve(body);
            }, reject);
        });
    };
}
else {
    res = (resource, parameters) => {
        // No server side rendering of async resources for now
        return Promise.resolve({});
    };
}

module.exports = res;
