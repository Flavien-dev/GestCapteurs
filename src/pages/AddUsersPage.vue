<template>
  <q-page padding>
    <h3>Ajouter des utilisateurs</h3>
    <q-form>
      <q-input
        outlined
        v-model="form.prenom"
        label="Prénom d'utilisateur"
        class="q-my-md"
        :rules="[ val => val.length >= 2 || 'Minimum 2 caractère']"
      />

      <q-input
        outlined
        v-model="form.nom"
        label="Nom d'utilisateur"
        class="q-my-md"
        :rules="[ val => val.length >= 4 || 'Minimum 4 caractère']"
      />

      <q-input
        outlined
        v-model="form.email"
        label="E-mail"
        class="q-my-md"
        :rules="[val => validateEmail(val) || 'Email invalide']"
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
        @click="submitForm"
        type="submit"
        color="primary"
        label="Créer un compte"
      />
    </q-form>
  </q-page>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  // nom de la page
  name: 'AddUsersPage.vue',
  // données utilisées dans la page
  data () {
    return {
      // données de création d'un utilisateur
      form: {
        prenom: '',
        nom: '',
        email: '',
        password: '',
        is_Admin: 0
      }
    }
  },
  // appel des méthodes
  methods: {
    // appel de l'action de l'enregistrement d'un utilisateur
    ...mapActions('auth', ['enregistrerUtilisateur']),
    /**
     * permet d'envoyer le formulaire
     */
    submitForm () {
      // enregistre l'utilisateur à l'aide du formulaire
      this.enregistrerUtilisateur(this.form)
    },
    /**
     * vérifie si l'email est valide ou pas
     * @param email email de la personne qui est enregistrée
     * @returns {boolean} true si l'email est valide, false s'il l'est pas
     */
    validateEmail (email) {
      // Source : https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(String(email).toLowerCase())
    }
  }
}
</script>

<style scoped>

</style>
