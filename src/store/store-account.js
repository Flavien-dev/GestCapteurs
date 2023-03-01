// State : données du magasin
import { Loading } from 'quasar'
import { api } from 'boot/axios'

const state = {
  account: []
}

const getters = {
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
  SET_ACCOUNT (state, newAccount) {
    state.account = newAccount
  },
  MODIFIER_MDP (state, payload) {
    // Recherche la tâche et retourne sa position dans le tableau, son index
    const index = state.account.findIndex(el => el.id === payload.id)

    // Si une tâche a été trouvée
    if (index !== -1) {
      // Modifie l'objet trouvé avec les nouvelles valeurs
      Object.assign(state.account[index], payload.updates)
    }
  }
}

const actions = {
  getAccountApi ({ commit, payload }) {
    api.post('/me', payload)
      .then(function (response) {
        commit('setUser', response.data.user)
        commit('setToken', response.data.access_token)
      })
      .catch(function (error) {
        console.log(error.response)
      })
  },
  viderAccount ({ commit }) {
    commit('SET_ACCOUNT', [])
  },
  modifierMDP ({ commit, rootState }, payload) {
    Loading.show()
    // Configuration du header avec token
    const config = {
      headers: { Authorization: 'Bearer ' + rootState.auth.token }
    }

    // modifie une tâche dans l'API
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
