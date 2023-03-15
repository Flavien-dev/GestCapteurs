<template>
  <q-page padding>
    <h3>Liste des utilisateurs</h3>
    <q-btn
      to="/add-user"
      icon-right="account_circle"
      label="Ajouter des utilisateurs"
    />
  </q-page>
</template>

<script>
export default {
  // nom de la page
  name: 'ManageUsersPage.vue'
}
</script>

<style scoped>

</style>
