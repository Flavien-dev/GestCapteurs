<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { LocalStorage } from 'quasar'

export default {
  name: 'App',
  methods: {
    ...mapActions('auth', ['setUser'])
  },
  mounted () {
    LocalStorage.set('favoris', [])
    // Récupère les données du localStorage
    const user = this.$q.localStorage.getItem('user')
    const token = this.$q.localStorage.getItem('token')
    // Si un utilisateur et un token exisent
    if (user && token) {
      // Construction de l'objet data
      const data = {
        user,
        access_token: token
      }
      // Définit l'utilisateur en cours
      this.setUser(data)
    }
  }
}
</script>
