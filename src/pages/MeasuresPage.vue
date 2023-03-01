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
import { mapActions } from 'vuex'
import Measure from 'components/Measure.vue'

export default {
  name: 'MeasuresPage.vue',
  components: { Measure },
  computed: {
    measures () {
      return this.$store.getters['measures/getMeasures']
    }
  },
  methods: {
    ...mapActions('measures', ['getMeasuresApi'])
  },
  mounted () {
    this.getMeasuresApi()
  }
}
</script>

<style scoped>

</style>
