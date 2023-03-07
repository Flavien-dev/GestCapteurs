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
          @close="afficherFormPlat = false"/>
      </q-dialog>
    </q-card>
  </q-page>
</template>

<script>

import { mapActions, mapState } from 'vuex'

export default {
  name: 'AccountPage.vue',
  data () {
    return {
      afficherFormMDP: false
    }
  },
  components: {
    'form-mdp': require('components/action/changeMDP.vue').default
  },
  computed: {
    account () {
      return this.$store.getters['account/getAccount']
    },
    ...mapState('auth', ['user'])
  },
  methods: {
    ...mapActions('account', ['getAccountApi'])
  },
  mounted () {
    this.getAccountApi()
  }
}
</script>

<style scoped>

</style>
