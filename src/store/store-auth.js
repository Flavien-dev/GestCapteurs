import { api } from 'boot/axios'
import { Loading, LocalStorage } from 'quasar'

// State : données du magasin
const state = {
  user: null,
  token: null
}

/*
Mutations : méthode qui manipulent les données
Les mutations ne peuvent pas être asynchrones !!!
 */
const mutations = {
  setUser (state, user) {
    state.user = user
  },
  setToken (state, token) {
    state.token = token
  }
}

/*
Actions : méthodes du magasin qui font appel aux mutations
Elles peuvent être asynchrones !
 */
const actions = {
  enregistrerUtilisateur ({ commit, dispatch }, payload) {
    const that = this
    api.post('/newuser', payload)
      .then(function (response) {
        commit('setUser', response.data.user)
        commit('setToken', response.data.access_token)
        console.log(response)
        that.$router.push('/')
      })
      .catch(function (error) {
        console.log(error.response)
      })
  },
  connecterUtilisateur ({ commit, dispatch }, payload) {
    api.post('/login', payload)
      .then(function (response) {
        dispatch('setUser', response.data)
      })
      .catch(function (error) {
        console.log(error)
      })
  },
  setUser ({ commit, dispatch, state }, data) {
    // Sauvegarde, commite, les données dans le magasin
    commit('setUser', data.user)
    commit('setToken', data.access_token)
    // Sauvegarde les données de l'utilisateur dans le localStorage
    LocalStorage.set('user', state.user)
    LocalStorage.set('token', state.token)
    // Redirige l'utilisateur vers la page des tâches
    this.$router.push('/')
    // Cache la fenêtre de chargement
    Loading.hide()
  },
  deconnecterUtilisateur ({ commit, state, dispatch }) {
    const that = this
    // Configuration du header avec token
    const config = {
      headers: { Authorization: 'Bearer ' + state.token }
    }
    // Déconnexion de l'API
    api.post('/logout', {}, config)
      .catch(function (error) {
        throw error
      })
      .finally(function () {
        // Réinitialise user et token
        commit('setUser', null)
        commit('setToken', null)
        // Vide le locaStorage
        LocalStorage.clear()
        // Vider les listes des différentes pages lors de la déconnexion
        dispatch('sensors/viderSensors', null, { root: true })
        dispatch('rooms/viderRooms', null, { root: true })
        // Redirige l'utilisateur vers la page de connexion
        that.$router.push('/')
        // location.reload() // recharge la page du navigateur
        Loading.hide()
      })
  }
}

/*
Getters : retourne les données du magasin
Fonctionne comme les propriétés calculées
Sert à calculer, trier, filtrer ou formater les donneés
 */
const getters = {

}

/*
Exporte les constantes, variables du fichier
On pourra ainsi les récupérer, les importer dans un autre fichier JS.

namespace: true, ajoute un namespace à notre objet retourné.
 */
export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
