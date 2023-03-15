<template>
  <q-page padding>
    <h3>Salles</h3>
    <q-btn
      @click="afficheFormNewRoom = true"
      label="Ajouter une nouvelle salle"
      color="primary"
      v-close-popup/>
    <p></p>
    <q-pull-to-refresh>
      <q-list
        v-if="rooms.length"
        class="rounded-borders"
        bordered
        separator
      >
        <adminRoom
          v-for="room of rooms"
          :key="room.id"
          :room="room"
        />
      </q-list>
      <p v-else>Pas de salles...</p>
    </q-pull-to-refresh>
    <q-dialog
      v-model="afficheFormNewRoom">
      <form-new-room @close="afficheFormNewRoom = false"/>
    </q-dialog>
  </q-page>
</template>

<script>
import { mapActions } from 'vuex'
import adminRoom from 'components/admin/AdminRooms.vue'

export default {
  // nom de la page
  name: 'ManageRoomsPage.vue',
  // composants à utiliser dans cette page
  components: {
    // page d'administration des salles
    adminRoom,
    // formulaire d'ajout de nouvelles salle
    'form-new-room': require('components/action/salle/creeSalle.vue').default
  },
  // données utilisées dans cette page
  data () {
    return {
      afficheFormNewRoom: false,
      afficheFormModifRoom: false
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
