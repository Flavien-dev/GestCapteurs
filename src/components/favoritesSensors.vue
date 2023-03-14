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
  </div>
</template>

<script>

export default {
  // nom de la fenêtre
  name: 'favoritesSensors',
  // données de la fenêtre
  data () {
    return {
      // affiche la liste des favoris
      afficherListe: false
    }
  },
  // données qui permettent de récupérer un favori
  props: {
    // La propriété sensor est obligatoire et doit être de type Object
    sensor: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
