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
// importation des actions du magasin
import { mapActions } from 'vuex'

export default {
  // nom de la fenêtre
  name: 'AdminRooms.vue',
  // données de la fenêtre
  data () {
    return {
      // permet de savoir si l'administrateur veut modifier une salle
      afficheFormModifRoom: false
    }
  },
  // importation des composants
  components: {
    // formulaire de modification de salle
    'form-modif-room': require('components/action/salle/modifieSalle.vue').default
  },
  // données qui permettent de modifier la salle
  props: {
    // La propriété room est obligatoire et doit être de type Object
    room: {
      type: Object,
      required: true
    }
  },
  computed: {
    rooms () {
      // retourne la liste des salles de l'API
      return this.$store.getters['rooms/getRooms']
    }
  },
  methods: {
    // appel de l'action de suppression de salle
    ...mapActions('rooms', ['getRoomsApi', 'supprimerSalle']),
    /**
     * permet de confirmer la suppression d'une salle
     * @param id identifiant de la salle à supprimer
     */
    confirmerSuppression (id) {
      // ouvre une boîte de dialogue
      this.$q.dialog({
        title: 'Supprimer tâche',
        message: 'Voulez-vous vraiment supprimer cette salle ?',
        cancel: 'Annuler',
        ok: 'Supprimer',
        persistent: true
      }).onOk(() => {
        // supprime la salle
        this.supprimerSalle(id)
      })
    }
  },
  mounted () {
    // retourne la liste des salles de l'API
    this.getRoomsApi()
  }
}
</script>

<style scoped>

</style>
