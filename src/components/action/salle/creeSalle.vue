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
// importation des actions du magasin
import { mapActions } from 'vuex'

export default {
  // nom de la fenêtre
  name: 'creeSalle.vue',
  // donnée de création de salle
  data () {
    return {
      salle: {
        nom: ''
      }
    }
  },
  // appel des méthodes
  methods: {
    // appel de l'actions qui permet d'ajouter une salle
    ...mapActions('rooms', ['ajouterSalle']),
    /**
     * permet de gérer l'envoi du formulaire
     */
    formSubmit () {
      // ajoute une salle à l'API
      this.ajouterSalle(this.salle)
      this.$emit('fermer')
    }
  },
  mounted () {}
}
</script>

<style scoped>

</style>
