<template>
  <q-page padding>
    <h3>Salles</h3>
    <q-list
      v-if="rooms.length"
      class="rounded-borders"
      bordered
      separator
    >
      <room
        v-for="room of rooms"
        :key="room.id"
        :room="room"
      />
    </q-list>
    <p v-else>Pas de salles...</p>
  </q-page>
</template>

<script>
// importation des actions et des composants
import { mapActions } from 'vuex'
import Room from 'components/Room.vue'

export default {
  // nom de la page
  name: 'RoomsPage.vue',
  // composant de la page
  components: { Room },
  computed: {
    /**
     * renvoie les salles
     * @returns la liste des salles
     */
    rooms () {
      return this.$store.getters['rooms/getRooms']
    }
  },
  // appel des méthodes
  methods: {
    // appel de l'action qui renvoie toutes les salles de l'API
    ...mapActions('rooms', ['getRoomsApi'])
  },
  mounted () {
    // renvoie les salles contenues dans l'API
    this.getRoomsApi()
  }
}
</script>

<style scoped>

</style>
