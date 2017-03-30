;(function(){
'use strict';

var resources = require('../libs/resources.js');

module.exports = {
    props: ['name'],
    data: function data() {
        return {
            category: null,
            error: null,
            loading: true
        };
    },
    created: function created() {
        this.fetchData();
    },

    methods: {
        fetchData: function fetchData() {
            var _this = this;

            resources('lastPostCategory', {
                name: this.name
            }).then(function (category) {
                _this.category = category;
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
__vue__options__.render = function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"category"},[(_vm.loading)?_c('loader'):_vm._e(),_vm._v(" "),(_vm.category)?_c('div',[_c('h1',[_vm._v("\n            "+_vm._s(_vm.category.name)+"\n        ")]),_vm._v(" "),_c('p',{domProps:{"innerHTML":_vm._s(_vm.category.description.html)}})]):_vm._e()],1)}
__vue__options__.staticRenderFns = []
__vue__options__._scopeId = "data-v-59dbd16a"
