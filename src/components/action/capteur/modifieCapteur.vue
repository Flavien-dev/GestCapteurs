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
import { mapActions } from 'vuex'

export default {
  name: 'modifieCapteur.vue',
  props: ['capteurAModifier'],
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
    ...mapActions('sensors', ['modifierCapteur']),
    formSubmit () {
      const payload = {
        id: this.sensor.id,
        updates: this.sensor
      }
      this.modifierCapteur(payload)
    }
  },
  mounted () {
    // vérifie si l'action voulue de l'utilisateur est de modifier un plat
    if (this.capteurAModifier) {
      // Copie les propriétés de platAModifier dans un nouvel objet vide
      this.sensor = Object.assign({}, this.capteurAModifier)
    }
  }
}
</script>

<style scoped>

</style>
