
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'connexion', component: () => import('pages/PageConnexion.vue') },

      { path: 'account', component: () => import('pages/AccountPage.vue') },
      { path: 'sensors', component: () => import('pages/SensorsPage.vue') },
      { path: 'rooms', component: () => import('pages/RoomsPage.vue') },
      { path: 'favorites', component: () => import('pages/FavoritesPage.vue') },
      { path: 'measures', component: () => import('pages/MeasuresPage.vue') },

      { path: 'manage-users', component: () => import('pages/admin/ManageUsersPage.vue') },
      { path: 'manage-sensors', component: () => import('pages/admin/ManageSensorsPage.vue') },
      { path: 'manage-rooms', component: () => import('pages/admin/ManageRoomsPage.vue') },

      { path: 'add-user', component: () => import('pages/AddUsersPage.vue') },
      { path: 'add-room', component: () => import('pages/AddUsersPage.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
