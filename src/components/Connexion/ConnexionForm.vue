<template>
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
</template>

<script>
// importation des actions du magasin
import { mapActions } from 'vuex'
export default {
  // nom de la page
  name: 'ConnexionForm',
  // donnée de la connexion d'un utilisateur
  data () {
    return {
      form: {
        email: '',
        password: ''
      }
    }
  },
  // appel des méthodes
  methods: {
    // appel de l'action de connnexion d'un utilisateur
    ...mapActions('auth', ['connecterUtilisateur']),
    /**
     * permet d'envoyer les données du formulaire
     */
    submitForm () {
      // connecte l'utilisateur
      this.connecterUtilisateur(this.form)
    },
    /**
     * permet de valider un email
     * @param email email écrit par l'utilisateur
     * @returns {boolean} true si l'email est valide, sinon, false
     */
    validateEmail (email) {
      // Source : https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(String(email).toLowerCase())
    }
  }
}
</script>

<style>

</style>
