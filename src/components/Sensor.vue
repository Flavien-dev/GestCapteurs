<template>
  <q-item clickable exact to="/">
    <q-item-section>
      <q-item-label lines="1">
        Nom : {{ sensor.nom }}
      </q-item-label>
      <q-item-label lines="1">
      </q-item-label>
      <q-item-label lines="1">
      </q-item-label>
    </q-item-section>
  </q-item>
</template>

<script>
export default {
  name: 'Sensor',
  props: {
    // La propriété client est obligatoire et doit être de type Object
    sensor: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
