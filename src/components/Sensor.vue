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
    <q-item-section side>
      <q-btn v-if="ajouterFavoris"
        @click="toFavorites"
        dense
        flat
        round
        color="primary"
        icon="star" />
      <q-btn v-else
        @click="toFavorites"
        dense
        flat
        round
        color="primary"
        icon="star_border" />
    </q-item-section>
    <q-item-section side>
      <q-btn v-if="afficherListe"
             @click="afficherListe = !afficherListe"
             dense
             flat
             round
             icon="north" />
      <q-btn v-else
             @click="afficherListe = !afficherListe"
             dense
             flat
             round
             icon="south" />
    </q-item-section>
  </q-item>
  <div v-if="afficherListe">
    <q-item v-for="mesure in sensor.mesures" :key="mesure.id" :mesure="mesure">
      <q-item-section >
        <q-item-label>
          {{ mesure.id }}
        </q-item-label>
      </q-item-section>
      <q-item-section >
        <q-item-label>
          {{ mesure.sequence }}
        </q-item-label>
        <q-item-label>
          <small>{{ mesure.date }}</small>
        </q-item-label>
      </q-item-section>
      <q-item-section >
        <q-item-label>
          {{ mesure.temperature }}
        </q-item-label>
      </q-item-section>
      <q-item-section >
        <q-item-label>
          {{ mesure.humidite }}
        </q-item-label>
      </q-item-section>
    </q-item>
    <q-item v-if="user.is_admin">
      <q-item-section>
        <q-btn
          @click="afficheFormNewMesure = true"
          label="Ajouter une nouvelle mesure"
          color="primary"
          v-close-popup/>
      </q-item-section>
    </q-item>
    <q-dialog
      v-model="afficheFormNewMesure">
      <form-new-measure @close="afficheFormNewMesure = false"/>
    </q-dialog>
  </div>
</template>

<script>

import { mapActions, mapState } from 'vuex'

export default {
  // nom de la fenêtre
  name: 'Sensor',
  // données de la page
  data () {
    return {
      // affiche la liste des capteurs
      afficherListe: false,
      // ajoute un capteur au favori
      ajouterFavoris: false,
      // affiche le formulaire pour ajouter un mesure
      afficheFormNewMesure: false
    }
  },
  props: {
    // La propriété sensor est obligatoire et doit être de type Object
    sensor: {
      type: Object,
      required: true
    }
  },
  // appel des méthodes
  methods: {
    // appel de l'action d'ajout aux favoris
    ...mapActions('favorites', ['ajouterFavorites']),
    /**
     * ajoute aux favoris selon l'état de l'étoile des favoris (bouton)
     */
    toFavorites () {
      if (this.ajouterFavoris) {
        this.ajouterFavoris = false
        console.log(this.sensor)
        this.ajouterFavorites(this.sensor)
      } else {
        this.ajouterFavoris = true
        console.log(this.sensor)
      }
    }
  },
  // importation des composants utiles
  components: {
    // formulaire d'ajout de mesures
    'form-new-measure': require('components/action/mesure/creeMesure.vue').default
  },
  // permet de récupérer les données de l'utilisateur connecté
  computed: {
    ...mapState('auth', ['user'])
  }
}
</script>

<style scoped>

</style>
