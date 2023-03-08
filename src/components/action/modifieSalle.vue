<template>
  <q-card class="form-card">
    <q-card-section>
      <div class="text-h6 heading">Modifier salle</div>
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
  name: 'modifieSalle.vue',
  props: ['salleAModifier'],
  data () {
    return {
      salle: {
        nom: ''
      }
    }
  },
  // appel des méthodes
  methods: {
    ...mapActions('rooms', ['modifierSalle']),
    formSubmit () {
      const payload = {
        id: this.salle.id,
        updates: this.salle
      }
      this.modifierSalle(payload)
    }
  },
  mounted () {
    // vérifie si l'action voulue de l'utilisateur est de modifier un plat
    if (this.salleAModifier) {
      // Copie les propriétés de platAModifier dans un nouvel objet vide
      this.salle = Object.assign({}, this.salleAModifier)
    }
  }
}
</script>

<style scoped>

</style>
