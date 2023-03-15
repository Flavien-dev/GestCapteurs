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
  // nom de la page
  name: 'ManageSensorsPage.vue',
  // composants utilisés dans la page
  components: {
    // capteur
    Sensor,
    // formulaire d'ajout de capteur
    'form-new-sensor': require('components/action/capteur/creeCapteur.vue').default
  },
  // données de la page
  data () {
    return {
      // permet de savoir si l'administrateur veut ajouter un nouveau capteur
      afficheFormNewSensor: false,
      // permet de savoir si l'administrateur veut modifier un capteur
      afficheFormModifSensor: false
    }
  },
  computed: {
    // retourne les capteurs stockés dans l'API
    sensors () {
      return this.$store.getters['sensors/getSensors']
    }
  },
  // appel des méthodes
  methods: {
    // Donne accès à l'action getSensorsApi() du magasin Sensors
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
