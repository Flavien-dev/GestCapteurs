// importation du LocalStorage
import { LocalStorage } from 'quasar'

// State : données du magasin
const state = {
  // Tableau des clients
  favorites: []
}

/*
Mutations : méthode qui manipulent les données
Les mutations ne peuvent pas être asynchrones !!!
 */
const mutations = {
  /**
   * set la liste des favoris
   * @param state magasin
   * @param newFavorites nouvelle liste des favoris
   * @constructor
   */
  SET_FAVORITES (state, newFavorites) {
    state.favorites = newFavorites
  },
  /**
   * ajoute quelque chose aux favoris
   * @param state magasin
   * @param favori chose à ajouter
   * @constructor
   */
  AJOUTER_FAVORI (state, favori) {
    state.favorites.push(favori)
  },
  /**
   * supprime quelque chose des favoris
   * @param state magasin
   * @param id identifiant de la chose à retirer
   * @constructor
   */
  SUPPRIMER_FAVORI: (state, id) => {
    state.favorites = state.favorites.filter(el => el.id !== id)
  }
}
/*
Actions : méthodes du magasin qui font appel aux mutations
Elles peuvent être asynchrones !
 */
const actions = {
  /**
   * ajoute quelque chose aux favoris
   * @param commit valide l'ajout
   * @param dispatch sépare les données
   * @param state magasin
   * @param data données à ajouter
   */
  ajouterFavorites ({ commit, dispatch, state }, data) {
    // Sauvegarde, commite, les données dans le magasin
    commit('AJOUTER_FAVORI', data.favorites)
    // Sauvegarde les données de l'utilisateur dans le localStorage
    LocalStorage.set('AJOUTER_FAVORI', state.favorites)
    console.log(LocalStorage.getItem('favorites'))
  },
  /**
   * supprime quelque chose des favoris
   * @param commit valide la suppression
   * @param state magasin
   * @param data données à supprimer
   */
  supprimerFavorites ({ commit, state }, data) {
    // Sauvegarde, commite, les données dans le magasin
    commit('SUPPRIMER_FAVORI', data)
    // Supprime les données de l'utilisateur dans le localStorage
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
  /**
   * renvoie tous les favoris
   * @param state magasin
   * @returns {[]} liste des favoris
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
