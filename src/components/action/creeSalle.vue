<template>
  <q-card class="form-card">
    <q-card-section>
      <div class="text-h6 heading">Ajouter salle</div>
    </q-card-section>

    <q-card-section>

      <div class="row q-mb-md">
        <q-input
          filled
          v-model="salle.nom"
          label="Nom"
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
  name: 'creeSalle.vue',
  data () {
    return {
      salle: {
        nom: '',
        id: null
      }
    }
  },
  // appel des méthodes
  methods: {
    // appel des actions qui seront utilisées
    ...mapActions('rooms', ['ajouterSalle']),
    /**
     * permet de gérer l'envoi du formulaire
     */
    formSubmit () {
      this.ajouterSalle(this.salle)

      this.$emit('fermer')
    }
  },
  mounted () {}
}
</script>

<style scoped>

</style>
