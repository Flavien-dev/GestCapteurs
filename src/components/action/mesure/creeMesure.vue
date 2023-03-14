<template>
  <q-card class="form-card">
    <q-card-section>
      <div class="text-h6 heading">Ajouter mesure</div>
    </q-card-section>

    <q-card-section>
      <div class="row q-mb-md">
        <q-input
          type="date"
          filled
          v-model="mesure.capteur_id"
          label="Date"
          class="col"/>
      </div>
    </q-card-section>

    <q-card-section>
      <div class="row q-mb-md">
        <q-input
          type="date"
          filled
          v-model="mesure.date"
          label="Date"
          class="col"/>
      </div>
    </q-card-section>

    <q-card-section>
      <div class="row q-mb-md">
        <q-input
          filled
          v-model="mesure.sequence"
          label="Sequence"
          class="col"/>
      </div>
    </q-card-section>

    <q-card-section>
      <div class="row q-mb-md">
        <q-input
          type="number"
          filled
          v-model="mesure.temperature"
          label="Temperature"
          class="col"/>
      </div>
    </q-card-section>

    <q-card-section>
      <div class="row q-mb-md">
        <q-input
          type="number"
          filled
          v-model="mesure.humidite"
          label="Humidite"
          class="col"/>
      </div>
    </q-card-section>

    <q-card-section>
      <div class="row q-mb-md">
        <q-input
          type="number"
          filled
          v-model="mesure.salle_id"
          label="ID du capteur"
          class="col"/>
      </div>
    </q-card-section>

    <q-card-section>
      <div class="row q-mb-md">
        <q-input
          type="password"
          filled
          v-model="mesure.password"
          label="Mot de passe"
          class="col"/>
      </div>
    </q-card-section>

    <q-card-actions align="right">
      <q-btn
        label="Annuler"
        color="grey"
        v-close-popup />
      <q-btn
        @click="formSubmit"
        label="Sauver"
        color="primary"
        v-close-popup/>
    </q-card-actions>
  </q-card>
</template>

<script>
// importation des actions du magasin
import { mapActions } from 'vuex'

export default {
  // nom de la fenêtre
  name: 'creeMesure.vue',
  // donnée qui permet de créer une nouvelle mesure
  data () {
    return {
      mesure: {
        date: '',
        sequence: 0,
        temperature: 0.0,
        humidite: 0,
        capteur_id: 0,
        password: ''
      }
    }
  },
  // appel des méthodes
  methods: {
    // appel de l'action d'ajout de mesure
    ...mapActions('measures', ['ajouterMesure']),
    /**
     * permet de gérer l'envoi du formulaire
     */
    formSubmit () {
      // ajoute une mesure à l'API
      this.ajouterMesure(this.mesure)

      this.$emit('fermer')
    }
  }
}
</script>

<style scoped>

</style>
