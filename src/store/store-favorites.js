
// State : données du magasin

import { LocalStorage } from 'quasar'

const state = {
  // Tableau des clients
  favorites: []
}

/*
Mutations : méthode qui manipulent les données
Les mutations ne peuvent pas être asynchrones !!!
 */
const mutations = {
  SET_FAVORITES (state, newFavorites) {
    state.favorites = newFavorites
  },
  AJOUTER_FAVORI (state, favori) {
    state.favorites.push(favori)
  },
  SUPPRIMER_FAVORI: (state, id) => {
    state.favorites = state.favorites.filter(el => el.id !== id)
  }
}
/*
Actions : méthodes du magasin qui font appel aux mutations
Elles peuvent être asynchrones !
 */
const actions = {
  ajouterFavorites ({ commit, dispatch, state }, data) {
    // Sauvegarde, commite, les données dans le magasin
    commit('AJOUTER_FAVORI', data.favorites)
    // Sauvegarde les données de l'utilisateur dans le localStorage
    LocalStorage.set('AJOUTER_FAVORI', state.favorites)
    console.log(LocalStorage.getItem('favorites'))
  },
  supprimerFavorites ({ commit, state }, data) {
    // Sauvegarde, commite, les données dans le magasin
    commit('SUPPRIMER_FAVORI', data)
    // Sauvegarde les données de l'utilisateur dans le localStorage
    LocalStorage.set('SUPPRIMER_FAVORI', state.favorites)
    console.log(LocalStorage.getItem('favorites'))
  }
}

/*
Getters : retourne les données du magasin
Fonctionne comme les propriétés calculées
Sert à calculer, trier, filtrer ou formater les donneés
 */
const getters = {

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
