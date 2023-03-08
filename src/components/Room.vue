<template>
  <q-item clickable exact to="/">
    <q-item-section>
      <q-icon name="room" />
    </q-item-section>
    <q-item-section>
      <q-item-label lines="1">
        {{ room.id }}
      </q-item-label>
    </q-item-section>
    <q-item-section>
      <q-item-label lines="1">
        {{ room.nom }}
      </q-item-label>
    </q-item-section>
  </q-item>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Room.vue',
  props: {
    // La propriété room est obligatoire et doit être de type Object
    room: {
      type: Object,
      required: true
    }
  },
  methods: {
    ...mapActions('rooms', ['modifierSalle']),
    modifierSalle () {
      const payload = {
        id: this.salle.id,
        updates: this.salle
      }
      this.modifierSalle(payload)
    }
  }
}
</script>

<style scoped>

</style>
