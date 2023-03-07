<template>
  <q-item clickable exact to="/">
    <q-item-section>
      <q-icon name="room" />
    </q-item-section>
    <q-item-section>
      <q-item-label lines="1">
        {{ room.nom }}
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
  name: 'AdminRooms.vue',
  props: {
    // La propriété room est obligatoire et doit être de type Object
    room: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
