<template>
  <q-card class="form-card">
    <q-card-section>
      <div class="text-h6 heading">Modification mot de passe</div>
    </q-card-section>

    <q-card-section>

      <div class="row q-mb-md">
        <q-input
          filled
          v-model="mdp"
          label="Nom (Burger)"
          class="col"
          :rules="[val => val.length > 4 || 'Le mot de passe doit contenir plus de 4 caractères.']"/>
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
export default {
  name: 'changeMDP.vue',
  data () {
    return {
      mdp: ''
    }
  }
}
</script>

<style scoped>

</style>
