/* eslint-disable quote-props,quotes */
// Importation d'Axios sous le nom api
import { api } from 'boot/axios'
import { Loading } from "quasar"

// State : données du magasin
const state = {
  // Tableau des clients
  rooms: []
}

/*
Mutations : méthode qui manipulent les données
Les mutations ne peuvent pas être asynchrones !!!
 */
const mutations = {
  /**
   * Remplace la liste des salles par le nouveau tableau newRooms en paramètres
   * @param state liste des salles actuelles
   * @param newRooms nouvelle liste des salles
   */
  SET_ROOMS (state, newRooms) {
    state.rooms = newRooms
  },
  AJOUTER_SALLE (state, salle) {
    // Ajout de la tâche à fin du tableau
    state.rooms.push(salle)
  }
}
/*
Actions : méthodes du magasin qui font appel aux mutations
Elles peuvent être asynchrones !
 */
const actions = {
  ajouterSalle ({ commit, rootState }, room) {
    Loading.show()
    // Configuration du header avec token
    const config = {
      headers: { Authorization: 'Bearer ' + rootState.auth.token }
    }

    // ajoute la tâche dans l'API
    api.post('/salles', room, config)
      .then(function (response) {
        // Ajoute la tache retournée par l'API au magasin
        commit('AJOUTER_SALLE', response.data)
      })
      .catch(function (error) {
        console.log(error)
        throw error
      })
      .finally(Loading.hide())
  },
  getRoomsApi ({ commit, rootState }) {
    const config = {
      headers: { Authorization: 'Bearer ' + rootState.auth.token }
    }
    // GET
    api.get('/salles', config)
      // En cas de succès met à jour le tableau des clients du magasin
      .then(function (response) {
        commit('SET_ROOMS', response.data)
      })
      // En cas d'erreur, stoppe le script et affiche le message dans la console
      .catch(function (error) {
        throw error
      })
  },
  viderRooms ({ commit }) {
    commit('SET_ROOMS', [])
  }
}

/*
Getters : retourne les données du magasin
Fonctionne comme les propriétés calculées
Sert à calculer, trier, filtrer ou formater les donneés
 */
const getters = {

  // Retourne le tableau des clients du magasin trié sur le prénom du client
  getRooms: function (state) {
    return state.rooms

    /* Tableau trié par nom et prénom
    return state.clients.sort(
      (a, b) => (a.name.last + a.name.first)
        .localeCompare((b.name.last + b.name.first), 'fr')
    )
    */
  }
}

/*
Exporte les constantes, variables du fichier
On pourra ainsi les récupérer, les importer dans un autre fichier JS.

namespace: true, ajoute un namespace l'objet retourné.
 */
export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
