<template>
  <q-page padding>
    <h3>Utilisateurs</h3>
    <q-list>
      <user
        v-for="user of users"
        :key="user.id"
        :user="user"
      />
    </q-list>
  </q-page>
</template>

<script>
import User from 'components/User.vue'

export default {
  name: 'UsersPage.vue',
  components: { User },
  users: {
    id: 1,
    nom: 'Didier',
    prenom: 'Charmillot'
  }
}
</script>

<style scoped>

</style>
