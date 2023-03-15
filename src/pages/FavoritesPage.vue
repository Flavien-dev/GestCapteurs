<template>
  <q-page padding>
    <h3>Favoris</h3>
    <q-list
      v-if="favoris.length"
      class="rounded-borders"
      bordered
      separator
    >
      <sensor
        v-for="favorite of favoris"
        :key="favorite.id"
        :favorite="favorite"
      />
    </q-list>
    <p>Pas de favoris</p>
    <q-btn
      @click="afficherFavori"
      type="submit"
      color="primary"
      label="favoris"
    />
  </q-page>
</template>

<script>
// importation des capteurs favoris
import Sensor from 'components/favoritesSensors.vue'

export default {
  // nom de la page
  name: 'FavoritesPage.vue',
  // importation du capteur utilisé dans cette page
  components: { Sensor },
  // appel des méthodes utilisées
  methods: {
    /**
     * affiche les capteurs favoris de l'utilisateur connecté
     */
    afficherFavori () {
      console.log(this.$q.localStorage.getItem('favorites'))
    }
  },
  computed: {
    /**
     * retourne tous les capteurs favoris de l'utilisateur
     */
    favoris () {
      return this.$store.getters['favorites/getFavorites']
    }
  }
}
</script>

<style scoped>

</style>
