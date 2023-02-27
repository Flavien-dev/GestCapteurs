<template>
  <q-page padding>
    <h3>Capteurs</h3>
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

    <q-form @submit.prevent="submitForm">
      <q-input
        outlined
        v-model="form.email"
        label="E-mail"
        class="q-my-md"
        :rules="[val => validateEmail(val) || 'Email invalide']"
        lazy-rules
      />

      <q-input
        type="password"
        outlined
        v-model="form.password"
        label="Mot de passe"
        class="q-my-md"
        :rules="[ val => val.length >= 4 || 'Minimum 4 caractère']"
        lazy-rules
      />

      <q-btn
        type="submit"
        color="primary"
        label="Se connecter"
      />
    </q-form>
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
  data () {
    return {
      form: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    // Donne accès à l'action getClientsApi() du magasin Clients
    ...mapActions('sensors', ['getSensorsApi']),
    ...mapActions('auth', ['connecterUtilisateur']),
    submitForm () {
      this.connecterUtilisateur(this.form)
    },
    validateEmail (email) {
      // Source : https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(String(email).toLowerCase())
    }
  },
  // Après que le composant soit construit
  mounted () {
    // Exécute l'action getClientsApi() du magasin Client
    // qui va récupérer les données de l'API et les ajoute au magasin client
    this.getSensorsApi()
  }
}
</script>

<style scoped>

</style>
