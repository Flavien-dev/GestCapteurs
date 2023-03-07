<template>
  <q-page padding>
    <h3>Accueil</h3>
    <p v-if="!user">Veuillez vous connecter afin de pouvoir accèder au site</p>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import { mapState } from 'vuex'

export default defineComponent({
  name: 'IndexPage',
  computed: {
    ...mapState('auth', ['user'])
  }
})
</script>
