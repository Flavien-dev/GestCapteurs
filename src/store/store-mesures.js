/* eslint-disable quote-props,quotes */
// Importation d'Axios sous le nom api
import { api } from 'boot/axios'

// State : données du magasin
const state = {
  // Tableau des clients
  measures: []
}

/*
Mutations : méthode qui manipulent les données
Les mutations ne peuvent pas être asynchrones !!!
 */
const mutations = {
  /**
   * Remplace la liste des mesures par le nouveau tableau newMeasures en paramètres
   * @param state liste des mesures actuelles
   * @param newMeasures nouvelle liste des mesures
   */
  SET_MEASURES (state, newMeasures) {
    state.measures = newMeasures
  }
}
/*
Actions : méthodes du magasin qui font appel aux mutations
Elles peuvent être asynchrones !
 */
const actions = {
  getMeasuresApi ({ commit, rootState }) {
    const config = {
      headers: { Authorization: 'Bearer ' + rootState.auth.token }
    }
    // GET
    api.get('/capteurs', config)
      // En cas de succès met à jour le tableau des clients du magasin
      .then(function (response) {
        commit('SET_MEASURES', response.data)
      })
      // En cas d'erreur, stoppe le script et affiche le message dans la console
      .catch(function (error) {
        throw error
      })
  }
}

/*
Getters : retourne les données du magasin
Fonctionne comme les propriétés calculées
Sert à calculer, trier, filtrer ou formater les donneés
 */
const getters = {

  // Retourne le tableau des clients du magasin trié sur le prénom du client
  getMeasures: function (state) {
    return state.measures

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
