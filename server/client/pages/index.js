;(function(){
'use strict';

var resources = require('../libs/resources.js');

module.exports = {
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

            resources('lastPosts', {
                page: 1
            }).then(function (posts) {
                _this.posts = posts;
            }, function (err) {
                _this.error = String(err);
            }).then(function () {
                _this.loading = false;
            });
        }
    },
    filters: {
        formatDate: function formatDate(date) {
            return new Date(date).toLocaleDateString('fr-FR', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
        }
    }
};
})()
if (module.exports.__esModule) module.exports = module.exports.default
var __vue__options__ = (typeof module.exports === "function"? module.exports.options: module.exports)
__vue__options__.render = function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"post"},[_c('h1',[_vm._v("Derniers articles")]),_vm._v(" "),(_vm.loading)?_c('loader'):_vm._e(),_vm._v(" "),(_vm.posts)?_c('div',_vm._l((_vm.posts),function(post){return _c('article',[_c('h2',[_vm._v(_vm._s(post.title))]),_vm._v(" "),_c('div',{staticClass:"post-content"},[_c('div',{staticClass:"abstract",domProps:{"innerHTML":_vm._s(post.abstract.html)}}),_vm._v(" "),_c('div',{staticClass:"meta"},[_c('span',{staticClass:"date"},[_vm._v("\n                        publié le "+_vm._s(_vm._f("formatDate")(post.creationDate))+"\n                    ")]),_vm._v(" "),_c('span',{staticClass:"authors"},[_vm._v("\n                        — par\n                        "),_vm._l((post.authors),function(author){return _c('a',{attrs:{"href":""}},[_vm._v("\n                            "+_vm._s(author.name)+"\n                        ")])})],2),_vm._v(" "),_c('span',{staticClass:"category"},[_vm._v("\n                        — dans\n                        "),_c('a',{attrs:{"href":""}},[_vm._v("\n                            "+_vm._s(post.category.name)+"\n                        ")])])])])])})):_vm._e()],1)}
__vue__options__.staticRenderFns = []
__vue__options__._scopeId = "data-v-4207eec1"
