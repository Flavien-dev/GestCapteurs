<template>
  <q-page padding>
    <h3>Capteurs</h3>
    <q-btn
      @click="afficheFormNewSensor = true"
      label="Ajouter un nouveau capteur"
      color="primary"
      v-close-popup/>
    <p></p>
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
    <q-dialog
      v-model="afficheFormNewSensor">
      <form-new-sensor @close="afficheFormNewSensor = false"/>
    </q-dialog>
  </q-page>
</template>

<script>
import { mapActions } from 'vuex'
import Sensor from 'components/admin/AdminSensors.vue'

export default {
  name: 'ManageSensorsPage.vue',
  components: {
    Sensor,
    'form-new-sensor': require('components/action/capteur/creeCapteur.vue').default
  },
  data () {
    return {
      afficheFormNewSensor: false,
      afficheFormModifSensor: false
    }
  },
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
