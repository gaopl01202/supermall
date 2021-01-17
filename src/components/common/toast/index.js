import Toast from "@/components/common/toast/ToastCmp";
const ToastObj = {}

ToastObj.install = function (Vue){
  // 创建组件构造器
  const toastConstructor = Vue.extend(Toast)
  // 根据组件构造器，创建组件对象
  const instance = new toastConstructor();
  // 将组件对象，手动挂载到一个对象
  instance.$mount(document.createElement('div'))
  // instance.$el对应的就是div
  document.body.appendChild(instance.$el)

  console.log(111111)
  Vue.prototype.$toast = (msg, duration = 2000) => {
    instance.message = msg;
    instance.isShow = true;

    setTimeout(() => {
      instance.isShow = false;
    }, duration);
  }
}
export default ToastObj
