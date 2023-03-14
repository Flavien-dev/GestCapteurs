<template>
  <q-card class="form-card">
    <q-card-section>
      <div class="text-h6 heading">Modifier salle</div>
    </q-card-section>

    <q-card-section>

      <div class="row q-mb-md">
        <q-input
          filled
          v-model="sensor.nom"
          label="Nom"
          class="col"/>
      </div>

    </q-card-section>

    <q-card-section>

      <div class="row q-mb-md">
        <q-input
          filled
          v-model="sensor.code"
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
// importe les actions du magasin
import { mapActions } from 'vuex'

export default {
  // nom de la fenêtre
  name: 'modifieCapteur.vue',
  // permet de récupérer les données du capteur à modifier
  props: ['capteurAModifier'],
  // données que retourne un capteur
  data () {
    return {
      sensor: {
        nom: '',
        code: ''
      }
    }
  },
  // appel des méthodes
  methods: {
    // appel de la métode de modification d'un capteur
    ...mapActions('sensors', ['modifierCapteur']),
    /**
     * permet de gérer l'envoi du formulaire
     */
    formSubmit () {
      // contient la modification des données
      const payload = {
        id: this.sensor.id,
        updates: this.sensor
      }
      // modifie les données du capteur
      this.modifierCapteur(payload)
    }
  },
  mounted () {
    // vérifie si l'action voulue de l'utilisateur est de modifier un capteur
    if (this.capteurAModifier) {
      // Copie les propriétés de capteurAModifier dans un nouvel objet vide
      this.sensor = Object.assign({}, this.capteurAModifier)
    }
  }
}
</script>

<style scoped>

</style>
