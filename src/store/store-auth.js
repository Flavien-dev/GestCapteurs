// importation de l'API
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
  /**
   * modifie les données d'un utilisateur
   * @param state liste des utilisateurs
   * @param user utilisateur modifié
   */
  setUser (state, user) {
    state.user = user
  },
  /**
   * modifie le token d'un utilisateur
   * @param state liste des tokens
   * @param token token modifié
   */
  setToken (state, token) {
    state.token = token
  }
}

/*
Actions : méthodes du magasin qui font appel aux mutations
Elles peuvent être asynchrones !
 */
const actions = {
  /**
   * enregistre un utilisateur dans l'API
   * @param commit valide les données de l'utilisateur
   * @param rootState données d'authentification de l'utilisateur
   * @param payload données du nouvel utilisateur
   */
  enregistrerUtilisateur ({ commit, rootState }, payload) {
    const config = {
      headers: { Authorization: 'Bearer ' + rootState.auth.token }
    }
    // enregistre le nouvel utilisateur dans l'API
    api.post('/newuser', payload, config)
      .then(function (response) {
        // si l'utilisateur est enregistré, ça envoie un message dans la console
        console.log('CREATION OK', response)
      })
      .catch(function (error) {
        console.log(error.response)
      })
  },
  /**
   * connecte un utilisateur à l'API
   * @param commit valide les données de l'utilisateur
   * @param dispatch envoie les données de l'utilisateur
   * @param payload données de connexion
   */
  connecterUtilisateur ({ commit, dispatch }, payload) {
    api.post('/login', payload)
      .then(function (response) {
        // si l'utilisateur est connecté, ça envoie un message dans la console
        dispatch('setUser', response.data)
        console.log(response)
      })
      .catch(function (error) {
        console.log(error)
      })
  },
  /**
   * sauvegarde l'utilisateur authentifié dans le magsin
   * @param commit valide les données
   * @param dispatch sépare les données
   * @param state liste des utilisateurs authentifiés
   * @param data données de l'utilisateur
   */
  setUser ({ commit, dispatch, state }, data) {
    // Sauvegarde, commite, les données dans le magasin
    commit('setUser', data.user)
    commit('setToken', data.access_token)
    // Sauvegarde les données de l'utilisateur dans le localStorage
    LocalStorage.set('user', state.user)
    LocalStorage.set('token', state.token)
    // Redirige l'utilisateur vers la page d'accueil
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
        // Redirige l'utilisateur vers la page d'accueil
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
