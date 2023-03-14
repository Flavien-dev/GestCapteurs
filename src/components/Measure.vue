<template>
  <q-item clickable exact to="/">
    <q-item-section>
      <q-icon name="thermostat" />
    </q-item-section>
    <q-item-section>
      <q-item-label lines="1">
        {{ measure.id }}
      </q-item-label>
    </q-item-section>
  </q-item>
</template>

<script>
export default {
  // nom de la page
  name: 'Measure.vue',
  // donnée d'une mesure
  props: {
    // La propriété measure est obligatoire et doit être de type Object
    measure: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
