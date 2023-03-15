// State : données du magasin
import { Loading } from 'quasar'
import { api } from 'boot/axios'

// liste des comptes
const state = {
  account: []
}

const getters = {
  /**
   * renvoie les comptes
   * @param state liste des comptes
   * @returns la liste des comptes
   */
  getAccount: function (state) {
    return state.account

    /* Tableau trié par nom et prénom
    return state.clients.sort(
      (a, b) => (a.name.last + a.name.first)
        .localeCompare((b.name.last + b.name.first), 'fr')
    )
    */
  }
}

const mutations = {
  /**
   * modifie un compte
   * @param state liste des comptes
   * @param newAccount nouveau comptes
   * @constructor
   */
  SET_ACCOUNT (state, newAccount) {
    state.account = newAccount
  },
  /**
   * modifie le mot de passe d'un compte
   * @param state liste des comptes
   * @param payload modification apportée au compte
   * @constructor
   */
  MODIFIER_MDP (state, payload) {
    // Recherche le compte et retourne sa position dans le tableau, son index
    const index = state.account.findIndex(el => el.id === payload.id)

    // Si un compte a été trouvée
    if (index !== -1) {
      // Modifie l'objet trouvé avec les nouvelles valeurs
      Object.assign(state.account[index], payload.updates)
    }
  }
}

const actions = {
  /**
   * renvoie le compte connecté
   * @param commit valide les données
   * @param payload données du compte
   */
  getAccountApi ({ commit, payload }) {
    // exécute la requête post
    api.post('/me', payload)
      .then(function (response) {
        // si ça fonctionne, le programme stocke les données de l'utilisateur et du token
        commit('setUser', response.data.user)
        commit('setToken', response.data.access_token)
      })
      .catch(function (error) {
        console.log(error.response)
      })
  },
  /**
   * modifie le mot de passe d'un compte
   * @param commit valide les données
   * @param rootState données d'authentification de l'utilisateur
   * @param payload données de l'utilisateur
   */
  modifierMDP ({ commit, rootState }, payload) {
    Loading.show()
    // Configuration du header avec token
    const config = {
      headers: { Authorization: 'Bearer ' + rootState.auth.token }
    }

    // modifie un compte dans l'API
    api.put('/updateme', payload.updates, config)
      .then(function (response) {
        // Affecte au payload les données retrounée par l'API
        payload.updates = response.data
        commit('MODIFIER_MDP', payload)
      })
      .catch(function (error) {
        throw error
      })
      .finally(Loading.hide())
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
