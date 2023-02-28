<template>
  <q-page padding>
    <h3>Capteurs</h3>
    <q-list
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
  </q-page>
</template>

<script>
import { mapActions } from 'vuex'
import Sensor from 'components/Sensor.vue'

export default {
  name: 'SensorsPage.vue',
  components: { Sensor },
  computed: {
    sensors () {
      return this.$store.getters['sensors/getSensors']
    }
  },
  methods: {
    // Donne accès à l'action getClientsApi() du magasin Clients
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
