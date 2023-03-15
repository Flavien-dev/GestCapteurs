import { store } from 'quasar/wrappers'
import { createStore } from 'vuex'

import sensors from './store-capteurs'
import rooms from './store-rooms'
import measures from './store-mesures'
import account from './store-account'
import favorites from './store-favorites'
import auth from './store-auth'

// import example from './module-example'

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default store(function (/* { ssrContext } */) {
  // magasin du site
  const Store = createStore({
    modules: {
      sensors, // magasin des capteurs
      rooms, // magasin des salles
      measures, // magasin des mesures
      account, // magasin du compte
      favorites, // magasin du site
      auth // magasin de l'authentification
    },

    // enable strict mode (adds overhead!)
    // for dev mode and --debug builds only
    strict: process.env.DEBUGGING
  })

  return Store
})
