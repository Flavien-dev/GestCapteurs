<template>
  <q-page padding>
    <h3>Mesures</h3>
    <q-list
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
  </q-page>
</template>

<script>
import Measure from 'components/Measure.vue'
import { mapActions } from 'vuex'

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
