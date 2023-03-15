<template>
  <q-page padding>
    <h3>Accueil</h3>
    <p v-if="!user">Veuillez vous connecter afin de pouvoir accèder au site</p>
  </q-page>
</template>

<script>
// importation des différents éléments du magasin
import { defineComponent } from 'vue'
import { mapState } from 'vuex'

export default defineComponent({
  // nom de la page
  name: 'IndexPage',
  computed: {
    // données concernant l'utilisateur
    ...mapState('auth', ['user'])
  }
})
</script>
