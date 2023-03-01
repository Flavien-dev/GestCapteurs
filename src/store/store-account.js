// State : données du magasin
const state = {
  plats: []
}

const getters = {}

const mutations = {
  /**
   * modifie le plat au magasin
   * @param state le magasin
   * @param payload les anciennes données du magasin
   * @constructor
   */
  MODIFIER_PLAT (state, payload) {
    // Recherche le plat et retourne sa position dans le tableau, son index
    const index = state.plats.findIndex(el => el.id === payload.id)

    // Si un plat a été trouvée
    if (index !== -1) {
      // Modifie l'objet trouvé avec les nouvelles valeurs
      Object.assign(state.plats[index], payload.updates)
    }
  }
}

const actions = {
  /**
   * modifie un plat en changeant ses anciennes données
   * @param commit action à effectuer
   * @param payload anciennes données
   */
  modifierPlat ({ commit }, payload) {
    // Valide la mutation et y passe les données
    commit('MODIFIER_PLAT', payload)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
