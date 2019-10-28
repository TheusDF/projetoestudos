
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: 'inicio', component: () => import('pages/Home.vue') },
      { path: 'quem-somos', component: () => import('pages/WhoAreWe.vue') },
      { path: 'conversor-de-moedas', component: () => import('pages/CoinConversor.vue') }

    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
