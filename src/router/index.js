const routesConfig = [
  {
    path: '/',
    name: 'index',
    component: require('../view/index.vue')
  }, {
    path: '/msg',
    name: 'msg',
    meta: { auth: false },
    component: resolve => require(['../view/msg.vue'], resolve)
  }, {
    path: '/detail/:id',
    name: 'detail',
    component: resolve => require(['../view/detail.vue'], resolve)
  }, {
    path: '/newArticle',
    name: 'article',
    meta: { isLogin: true },
    component: require('../view/new_article.vue')
  }, {
    path: '/user',
    name: 'user',
    component: require('../view/user.vue')
  }, {
    path: '/login',
    name: 'login',
    component: require('../view/login.vue')
  }
]

export default routesConfig

