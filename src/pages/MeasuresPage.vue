<template>
  <q-page padding>
    <h3>Mesures</h3>
    <q-list
      v-if="measures.length"
      class="rounded-borders"
      bordered
      separator
    >
      <measure
        v-for="measure of measures"
        :key="measure.id"
        :measure="measure"
      />
    </q-list>
    <p v-else>Pas de mesures...</p>
  </q-page>
</template>

<script>
// importation des actions et des composants
import { mapActions } from 'vuex'
import Measure from 'components/Measure.vue'

export default {
  // nom de la page
  name: 'MeasuresPage.vue',
  // composant de la page
  components: { Measure },
  computed: {
    /**
     * retourne toutes les mesures des capteurs
     * @returns listes des mesures
     */
    measures () {
      return this.$store.getters['measures/getMeasures']
    }
  },
  // appel des actions
  methods: {
    // appel de l'action qui renvoie les mesures stockées dans l'API
    ...mapActions('measures', ['getMeasuresApi'])
  },
  mounted () {
    // renvoie les mesures de l'API
    this.getMeasuresApi()
  }
}
</script>

<style scoped>

</style>
