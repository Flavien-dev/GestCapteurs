<template>
  <q-page padding>
    <h3>Capteurs</h3>
    <p/>
    <q-list
      v-if="sensors.length"
      class="rounded-borders"
      bordered
      separator
    >
      <sensor
        v-for="sensor of sensors"
        :key="sensor.id"
        :sensor="sensor"
      />
    </q-list>
    <p v-else>Pas de capteurs</p>
  </q-page>
</template>

<script>
// importation des actions et des composants
import { mapActions } from 'vuex'
import Sensor from 'components/Sensor.vue'

export default {
  // nom de la page
  name: 'SensorsPage.vue',
  // composant de la page
  components: { Sensor },
  // données de la page
  data () {
    return {
      favoris: []
    }
  },
  computed: {
    // renvoie tous les capteurs
    sensors () {
      return this.$store.getters['sensors/getSensors']
    }
  },
  // appel des méthodes
  methods: {
    // Donne accès à l'action getSensorsApi() du magasin sensors
    ...mapActions('sensors', ['getSensorsApi'])
  },
  // Après que le composant soit construit
  mounted () {
    this.getSensorsApi()
  }
}
</script>

<style scoped>

</style>
