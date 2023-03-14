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
        @click="afficheFormModifCapteur = true"
        dense
        flat
        round
        color="primary"
        icon="edit" />
      <q-btn
        @click="confirmerSuppression(sensor.id)"
        dense
        flat
        round
        color="negative"
        icon="delete" />
    </q-item-label>
    <q-dialog
      v-model="afficheFormModifCapteur">
      <form-modif-capteur
        :capteurAModifier="sensor"
        @close="afficheFormModifCapteur = false"/>
    </q-dialog>
  </q-item>
</template>

<script>
// importation des actions du magasin
import { mapActions } from 'vuex'

export default {
  // nom de la fenêtre
  name: 'AdminSensor.vue',
  // données de la fenêter
  data () {
    return {
      // permet de savoir si l'administrateur veut modifier un capteur ou pas
      afficheFormModifCapteur: false
    }
  },
  // importation des composants à utiliser dans cette fenêtre
  components: {
    // formulaire de modification de capteur
    'form-modif-capteur': require('components/action/capteur/modifieCapteur.vue').default
  },
  props: {
    // La propriété client est obligatoire et doit être de type Object
    sensor: {
      type: Object,
      required: true
    }
  },
  computed: {
    rooms () {
      return this.$store.getters['sensors/getSensors']
    }
  },
  methods: {
    ...mapActions('sensors', ['getSensorsApi', 'supprimerCapteur']),
    confirmerSuppression (id) {
      this.$q.dialog({
        title: 'Supprimer tâche',
        message: 'Voulez-vous vraiment supprimer ce capteur ?',
        cancel: 'Annuler',
        ok: 'Supprimer',
        persistent: true
      }).onOk(() => {
        this.supprimerCapteur(id)
      })
    }
  },
  mounted () {
    this.getSensorsApi()
  }
}
</script>

<style scoped>

</style>
