/* eslint-disable quote-props,quotes */
// Importation d'Axios sous le nom api
import { api } from 'boot/axios'

// State : données du magasin
const state = {
  // Tableau des capteurs + favoris
  sensors: [],
  favorites: []
}

/*
Mutations : méthode qui manipulent les données
Les mutations ne peuvent pas être asynchrones !!!
 */
const mutations = {
  /**
   * Remplace la liste des capteurs par le nouveau tableau newSensors en paramètres
   * @param state liste des capteurs actuels
   * @param newSensors nouvelle liste des capteurs
   */
  SET_SENSORS (state, newSensors) {
    state.sensors = newSensors
  },
  /**
   * Remplace la liste des favoris par un nouveau tableau newFavorites
   * @param state vieille liste de capteurs
   * @param newFavorites nouvelles liste
   * @constructor
   */
  SET_FAVORITES (state, newFavorites) {
    state.favorites = newFavorites
  }
}
/*
Actions : méthodes du magasin qui font appel aux mutations
Elles peuvent être asynchrones !
 */
const actions = {
  /**
   * retourne tous les capteurs de l'API
   * @param commit valide les données
   * @param rootState données d'authentification de l'utilisateur
   */
  getSensorsApi ({ commit, rootState }) {
    const config = {
      headers: { Authorization: 'Bearer ' + rootState.auth.token }
    }
    // GET
    api.get('/capteurs', config)
      // En cas de succès met à jour le tableau des capteurs du magasin
      .then(function (response) {
        commit('SET_SENSORS', response.data)
      })
      // En cas d'erreur, stoppe le script et affiche le message dans la console
      .catch(function (error) {
        throw error
      })
  },
  /**
   * supprime tous les capteurs
   * @param commit valide la suppression
   */
  viderSensors ({ commit }) {
    commit('SET_SENSORS', [])
  },
  /**
   * ajoute un capteur à l'API
   * @param commit valide l'ajout du capteur
   * @param rootState données d'authentification de l'utilisateur
   * @param sensor capteur à ajouter
   */
  ajouterCapteur ({ commit, rootState }, sensor) {
    const config = {
      headers: { Authorization: 'Bearer ' + rootState.auth.token }
    }

    // ajoute le capteur dans l'API
    api.post('/capteurs', sensor, config)
      .then(function (response) {
        // Ajoute la tache retournée par l'API au magasin
        console.log('CREATION DE CAPTEUR OK', response)
        location.reload()
      })
      .catch(function (error) {
        console.log(error)
        throw error
      })
    location.reload()
  },
  /**
   * modifie un capteur dans l'API
   * @param commit valide la modification
   * @param rootState données d'authentification de l'utilisateur
   * @param payload données modifiées de l'utilisateur
   */
  modifierCapteur ({ commit, rootState }, payload) {
    // Configuration du header avec token
    const config = {
      headers: { Authorization: 'Bearer ' + rootState.auth.token }
    }

    // modifie un capteur dans l'API
    api.put('/capteurs/' + payload.id, payload.updates, config)
      .then(function (response) {
        console.log('MODIFICATION DE CAPTEUR OK', response)
        location.reload()
      })
      .catch(function (error) {
        throw error
      })
  },
  /**
   * supprime un capteur dans l'API
   * @param commit valide la suppression
   * @param rootState données d'authentification de l'utilisateur
   * @param id identifiant de l'utilisateur à supprimer
   */
  supprimerCapteur ({ commit, rootState }, id) {
    // Configuration du header avec token
    const config = {
      headers: { Authorization: 'Bearer ' + rootState.auth.token }
    }
    // supprime le capteur de l'API
    api.delete('/capteurs/' + id, config)
      .then(function (response) {
        console.log('SUPPRESSION DE CAPTEUR OK', response)
        location.reload()
      })
      .catch(function (error) {
        throw error
      })
  },
  /**
   * ajoute un capteur au favoris
   * @param commit valide l'ajout du capteur
   * @param favori capteur à ajouter
   */
  ajouterAuxFavoris ({ commit }, favori) {
    let uId = 1
    // Si le tableau contient des éléments
    if (state.favorites.length) {
      // Récupère l'id MAX et lui ajoute 1
      uId = Math.max(...state.favorites.map(favori => favori.id)) + 1
    }
    // Ajoute le nouvel id au favori
    favori.id = uId
    // Commite l'ajout
    commit('AJOUTER_FAVORI', favori)
  },
  /**
   * supprime le capteur des favoris
   * @param commit valide la suppression
   * @param id identifiant du capteur
   */
  supprimerDesFavoris ({ commit }, id) {
    commit('SUPPRIMER_FAVORI', id)
  }
}

/*
Getters : retourne les données du magasin
Fonctionne comme les propriétés calculées
Sert à calculer, trier, filtrer ou formater les donneés
 */
const getters = {

  // Retourne le tableau des capteurs du magasin
  getSensors: function (state) {
    return state.sensors

    /* Tableau trié par nom et prénom
    return state.clients.sort(
      (a, b) => (a.name.last + a.name.first)
        .localeCompare((b.name.last + b.name.first), 'fr')
    )
    */
  },

  /**
   * retourne tous les capteurs ajouter aux favoris
   * @param state liste des favoris
   * @returns {[]} la liste des favoris
   */
  getFavorites: function (state) {
    return state.favorites
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
