<template>
  <q-item clickable @click="afficherListe = !afficherListe">
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
    <q-item-label v-if="afficherListe">
      <q-icon name="north" />
    </q-item-label>
    <q-item-label v-else>
      <q-icon name="south" />
    </q-item-label>
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
  name: 'Sensor',
  data () {
    return {
      afficherListe: false
    }
  },
  props: {
    // La propriété client est obligatoire et doit être de type Object
    sensor: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
