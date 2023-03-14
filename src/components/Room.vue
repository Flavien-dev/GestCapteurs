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
  // nom de la fenêtre
  name: 'Room.vue',
  // données de la propriété room
  props: {
    // La propriété room est obligatoire et doit être de type Object
    room: {
      type: Object,
      required: true
    }
  },
  // appel des méthodes
  methods: {
    // appel de l'action de modification des salles
    ...mapActions('rooms', ['modifierSalle']),
    /**
     * modifie une salle
     */
    modifierSalle () {
      // modifications apportées à la salle
      const payload = {
        id: this.salle.id,
        updates: this.salle
      }
      // modification de la salle
      this.modifierSalle(payload)
    }
  }
}
</script>

<style scoped>

</style>
