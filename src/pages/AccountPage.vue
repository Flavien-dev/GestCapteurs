<template>
  <q-page padding>
    <h3>Compte</h3>
    <q-card
      class="card">

      <q-card-section>
        <div>
          <p>Nom : {{ user.nom }}</p>
          <p>Prénom : {{ user.prenom }}</p>
          <p>Email : {{ user.email }}</p>
          <p>Mot de passe : {{ user.password }}</p>
          <q-btn
            @click="afficherFormMDP = true"
            label="Modifier le mot de passe"
            color="primary"
            v-close-popup/>
        </div>
      </q-card-section>

      <q-dialog
        v-model="afficherFormMDP">
        <form-mdp
          :mdpAModifier="user.password"
          @close="afficherFormMDP = false"/>
      </q-dialog>
    </q-card>
  </q-page>
</template>

<script>
// importation des actions et des états du magasin
import { mapActions, mapState } from 'vuex'

export default {
  // nom de la page
  name: 'AccountPage.vue',
  // données utilisées dans la page
  data () {
    return {
      // permet de savoir si l'utilisateur vuet modifier son mot de passe
      afficherFormMDP: false
    }
  },
  // composants utilisés dans la page
  components: {
    // formulaire qui permet de changer le mot de passe
    'form-mdp': require('components/action/changeMDP.vue').default
  },
  computed: {
    // retourne le compte de l'utilisateur connecté
    account () {
      return this.$store.getters['account/getAccount']
    },
    // retourne les données de l'utilisateur connecté
    ...mapState('auth', ['user'])
  },
  // appel des méthodes
  methods: {
    // renvoie l'action qui retourne le compte utilisé
    ...mapActions('account', ['getAccountApi'])
  },
  mounted () {
    // données de l'utilisateur connecté
    this.getAccountApi()
  }
}
</script>

<style scoped>

</style>
