import MyToast from './index.vue'
let myPlugin = {}
/**
 * 自定义插件
 * @param {*} Vue 
 * @param {*} options 
 */
myPlugin.install = function(Vue, options) {
  Vue.component(MyToast.name, MyToast)
}
export default myPlugin