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
import { mapActions } from 'vuex'
import Room from 'components/admin/AdminRooms.vue'

export default {
  name: 'ManageRoomsPage.vue',
  components: { Room },
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
