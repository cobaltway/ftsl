;(function(){
'use strict';

var resources = require('../../libs/resources.js');

module.exports = {
    props: ['resource', 'name', 'withAbstract'],
    data: function data() {
        return {
            posts: null,
            error: null,
            loading: true
        };
    },
    created: function created() {
        this.fetchData();
    },

    watch: {
        $route: 'fetchData'
    },
    methods: {
        fetchData: function fetchData() {
            var _this = this;

            resources(this.resource, {
                page: 1,
                categoryName: this.name,
                withAbstract: this.withAbstract
            }).then(function (_ref) {
                var posts = _ref.posts;

                _this.posts = posts;
            }, function (err) {
                _this.error = String(err);
            }).then(function () {
                _this.loading = false;
            });
        }
    }
};
})()
if (module.exports.__esModule) module.exports = module.exports.default
var __vue__options__ = (typeof module.exports === "function"? module.exports.options: module.exports)
__vue__options__.render = function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('h1',[_vm._v("Derniers articles")]),_vm._v(" "),(_vm.loading)?_c('loader'):_vm._e(),_vm._v(" "),(_vm.error)?_c('div',[_vm._v(" "+_vm._s(_vm.error)+" ")]):_vm._e(),_vm._v(" "),_vm._l((_vm.posts),function(post){return _c('small-post',_vm._b({},'small-post',post))})],2)}
__vue__options__.staticRenderFns = []
