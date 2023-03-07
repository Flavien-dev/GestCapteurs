<template>
  <q-card class="form-card">
    <q-card-section>
      <div class="text-h6 heading">Modification mot de passe</div>
    </q-card-section>

    <q-card-section>

      <div class="row q-mb-md">
        <q-input
          type="password"
          filled
          v-model="compte.mdp"
          label="Nouveau mot de passe"
          class="col"
          :rules="[val => val.length > 8 || 'Le mot de passe doit contenir plus de 8 caractères.']"/>
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
  name: 'changeMDP.vue',
  data () {
    return {
      compte: {
        mdp: ''
      }
    }
  },
  props: {
    mdpAChanger: {
      type: Object
    }
  },
  // appel des méthodes
  methods: {
    // appel des actions qui seront utilisées
    ...mapActions('account', ['modifierMDP']),
    /**
     * permet de gérer l'envoi du formulaire
     */
    formSubmit () {
      const payload = {
        updates: this.account
      }
      // change les données du plat
      this.modifierMDP(payload)
      // ferme le formulaire
      this.$emit('close')
    }
  },
  mounted () {
    // vérifie si l'action voulue de l'utilisateur est de modifier un plat
    if (this.mdpAChanger) {
      // Copie les propriétés de platAModifier dans un nouvel objet vide
      this.account = Object.assign({}, this.mdpAChanger)
    }
  }
}
</script>

<style scoped>

</style>
