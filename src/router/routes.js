// routes menant aux différentes pages du site
const routes = [
  {
    // route par défaut
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      // page index
      { path: '', component: () => import('pages/IndexPage.vue') },
      // page de connexion
      { path: 'connexion', component: () => import('pages/PageConnexion.vue') },

      // page d'info du compte
      { path: 'account', component: () => import('pages/AccountPage.vue') },
      // page des capteurs
      { path: 'sensors', component: () => import('pages/SensorsPage.vue') },
      // page des salles
      { path: 'rooms', component: () => import('pages/RoomsPage.vue') },
      // page des favoris
      { path: 'favorites', component: () => import('pages/FavoritesPage.vue') },
      // page des mesures
      { path: 'measures', component: () => import('pages/MeasuresPage.vue') },

      // page de gestion des utilisateurs
      { path: 'manage-users', component: () => import('pages/admin/ManageUsersPage.vue') },
      // page de gestion des capteurs
      { path: 'manage-sensors', component: () => import('pages/admin/ManageSensorsPage.vue') },
      // page de gestion des salles
      { path: 'manage-rooms', component: () => import('pages/admin/ManageRoomsPage.vue') },

      // page d'ajout d'utilisateur
      { path: 'add-user', component: () => import('pages/AddUsersPage.vue') }
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
