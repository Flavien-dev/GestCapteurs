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
// importation des actions et des états du magasin
import { mapActions, mapState } from 'vuex'

export default {
  // nom de la fenêtre
  name: 'changeMDP.vue',
  // données permettant la modification d'un compte
  data () {
    return {
      compte: {
        nom: '',
        prenom: '',
        email: '',
        mdp: ''
      }
    }
  },
  // donnée qui permet de récupérer le mot de passe
  props: {
    mdpAChanger: {
      type: Object
    }
  },
  // appel des états de l'application concèrnant l'utilisateur connecté
  computed: {
    ...mapState('auth', ['user'])
  },
  // appel des méthodes
  methods: {
    // appel des actions qui seront utilisées
    ...mapActions('account', ['modifierMDP']),
    /**
     * permet de gérer l'envoi du formulaire
     */
    formSubmit () {
      // récupère les modifications attribuées au compte
      const payload = {
        updates: this.account
      }
      // change le mot de passe de l'utilisateur
      this.modifierMDP(payload)
      // ferme le formulaire
      this.$emit('close')
    }
  },
  mounted () {
    // vérifie si l'action voulue de l'utilisateur est de modifier son mot de passe
    if (this.mdpAChanger) {
      // Copie les propriétés de mdpAModifier dans un nouvel objet vide
      this.account = Object.assign({}, this.mdpAChanger)
    }
  }
}
</script>

<style scoped>

</style>
