import ToastPlug from "./ToastPlug";
const obj = {}
// Vue.use(toast)
obj.install = function (Vue) {
  // 1.创建组件构造器
  const toastConstructor = Vue.extend(ToastPlug)
  // 2.new的方式,根据组件构造器,创建组件对象
  const toast = new toastConstructor()
  // 3.将组件对象手动挂载到某个元素上
  toast.$mount(document.createElement('div'))
  // 4.toast.$el应用的就是div
  document.body.appendChild(toast.$el)

  Vue.prototype.$toast = toast
}

export default obj
