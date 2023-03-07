<template>
  <q-page padding>
    <h3>Salles</h3>
    <q-btn
      @click="afficheFormNewRoom = true"
      label="Ajouter une nouvelle salle"
      color="primary"
      v-close-popup/>
    <p></p>
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
    <q-dialog
      v-model="afficheFormNewRoom">
      <form-new-room @close="afficheFormNewRoom = false"/>
    </q-dialog>
  </q-page>
</template>

<script>
import { mapActions } from 'vuex'
import Room from 'components/admin/AdminRooms.vue'

export default {
  name: 'ManageRoomsPage.vue',
  components: {
    Room,
    'form-new-room': require('components/action/creeSalle.vue').default
  },
  data () {
    return {
      afficheFormNewRoom: false
    }
  },
  computed: {
    rooms () {
      return this.$store.getters['rooms/getRooms']
    }
  },
  methods: {
    ...mapActions('rooms', ['getRoomsApi'])
  },
  mounted () {
    this.getRoomsApi()
  }
}
</script>

<style scoped>

</style>
