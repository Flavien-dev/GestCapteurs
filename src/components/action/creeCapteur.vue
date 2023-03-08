<template>
  <q-card class="form-card">
    <q-card-section>
      <div class="text-h6 heading">Ajouter capteur</div>
    </q-card-section>

    <q-card-section>
      <div class="row q-mb-md">
        <q-input
          filled
          v-model="capteur.nom"
          label="Nom"
          class="col"/>
      </div>

    </q-card-section>

    <q-card-section>
      <div class="row q-mb-md">
        <q-input
          filled
          v-model="capteur.code"
          label="Code"
          class="col"/>
      </div>

    </q-card-section>

    <q-card-section>
      <div class="row q-mb-md">
        <q-input
          type="number"
          filled
          v-model="capteur.salle_id"
          label="Code"
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
import { mapActions } from 'vuex'

export default {
  name: 'creeCapteur.vue',
  data () {
    return {
      capteur: {
        nom: '',
        logo: 'null',
        code: '',
        salle_id: 0
      }
    }
  },
  // appel des méthodes
  methods: {
    // appel des actions qui seront utilisées
    ...mapActions('sensors', ['ajouterCapteur']),
    /**
     * permet de gérer l'envoi du formulaire
     */
    formSubmit () {
      this.ajouterCapteur(this.capteur)

      this.$emit('fermer')
    }
  }
}
</script>

<style scoped>

</style>
