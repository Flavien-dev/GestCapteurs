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
import Sensor from 'components/favoritesSensors.vue'

export default {
  name: 'FavoritesPage.vue',
  components: { Sensor },
  methods: {
    afficherFavori () {
      console.log(this.$q.localStorage.getItem('favorites'))
    }
  },
  computed: {
    favoris () {
      return this.$store.getters['favorites/getFavorites']
    }
  }
}
</script>

<style scoped>

</style>
