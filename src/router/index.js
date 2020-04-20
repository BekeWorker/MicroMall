import Vue from 'vue';
import VueRouter from 'vue-router';
// 路由懒加载写法
const Home = () =>import('../views/home/Home');
const Category = () =>import('../views/category/Category');
const ProFile = () =>import('../views/profile/ProFile');
const ShopCart = () =>import('../views/shopcart/ShopCart');


// 1.使用插件
Vue.use(VueRouter);

// 2.实例化VueRouter

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/profile',
    component: ProFile
  },  {
    path: '/shopcart',
    component: ShopCart
  }
]
const router = new VueRouter({
  routes,
  mode: 'history'
})
// 3.导出router
export default router
