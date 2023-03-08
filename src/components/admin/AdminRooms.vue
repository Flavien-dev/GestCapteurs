<template>
  <q-item>
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
        @click="afficheFormModifRoom = true"
        dense
        flat
        round
        color="primary"
        icon="edit" />
      <q-btn
        @click="confirmerSuppression(room.id)"
        dense
        flat
        round
        color="negative"
        icon="delete" />
    </q-item-label>
    <q-dialog
      v-model="afficheFormModifRoom">
      <form-modif-room
        :salleAModifier="room"
        @close="afficheFormModifRoom = false"/>
    </q-dialog>
  </q-item>
</template>

<script>

import { mapActions } from 'vuex'

export default {
  name: 'AdminRooms.vue',
  data () {
    return {
      afficheFormModifRoom: false
    }
  },
  components: {
    'form-modif-room': require('components/action/salle/modifieSalle.vue').default
  },
  props: {
    // La propriété room est obligatoire et doit être de type Object
    room: {
      type: Object,
      required: true
    }
  },
  computed: {
    rooms () {
      return this.$store.getters['rooms/getRooms']
    }
  },
  methods: {
    ...mapActions('rooms', ['getRoomsApi', 'supprimerSalle']),
    confirmerSuppression (id) {
      this.$q.dialog({
        title: 'Supprimer tâche',
        message: 'Voulez-vous vraiment supprimer cette salle ?',
        cancel: 'Annuler',
        ok: 'Supprimer',
        persistent: true
      }).onOk(() => {
        this.supprimerSalle(id)
      })
    }
  },
  mounted () {
    this.getRoomsApi()
  }
}
</script>

<style scoped>

</style>
