;(function(){
'use strict';

module.exports = {
    props: ['title', 'abstract', 'creationDate', 'authors', 'name', 'category'],
    filters: {
        formatDate: require('../../libs/formatDate.js')
    }
};
})()
if (module.exports.__esModule) module.exports = module.exports.default
var __vue__options__ = (typeof module.exports === "function"? module.exports.options: module.exports)
__vue__options__.render = function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('article',[_c('h2',[_vm._v(" "+_vm._s(_vm.title)+" ")]),_vm._v(" "),_c('div',{staticClass:"post-content"},[(_vm.abstract)?_c('div',{staticClass:"abstract",domProps:{"innerHTML":_vm._s(_vm.abstract)}}):_vm._e(),_vm._v(" "),_c('div',{staticClass:"meta"},[_c('span',{staticClass:"date"},[_vm._v("\n                publié le "+_vm._s(_vm._f("formatDate")(_vm.creationDate))+"\n            ")]),_vm._v(" "),(_vm.authors)?_c('span',{staticClass:"authors"},[_vm._v("\n                — par "),_vm._l((_vm.authors),function(author){return _c('a',{attrs:{"href":""}},[_vm._v(" "+_vm._s(author.name)+" ")])})],2):_vm._e(),_vm._v(" "),(_vm.category)?_c('span',{staticClass:"category"},[_vm._v("\n                — dans "),_c('a',{attrs:{"href":""}},[_vm._v(" "+_vm._s(_vm.category.name)+" ")])]):_vm._e()])])])}
__vue__options__.staticRenderFns = []
__vue__options__._scopeId = "data-v-3b9afd39"
