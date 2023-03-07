<template>
  <q-item>
    <q-item-section>
      <q-icon name="sensors" />
    </q-item-section>
    <q-item-section>
      <q-item-label lines="1">
        {{ sensor.nom }}
      </q-item-label>
    </q-item-section>
    <q-item-section>
      <q-item-label>
        Salle : {{ sensor.salle.nom }}
      </q-item-label>
    </q-item-section>
    <q-item-label>
      <q-btn
        dense
        flat
        round
        color="primary"
        icon="edit" />
      <q-btn
        dense
        flat
        round
        color="negative"
        icon="delete" />
    </q-item-label>
  </q-item>
</template>

<script>
export default {
  name: 'AdminSensor.vue',
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
