<template>
  <v-card>
    <v-card-title>
      List Table
      <v-spacer></v-spacer>
      <v-btn
        fab
        dark
        large
        color="purple"
        @click="showGraphDialog"
      >
        <v-icon large dark>
          mdi-chart-line
        </v-icon>
      </v-btn>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="sensorData"
      item-key="id"
      :loading="sensorData.length === 0"
      :items-per-page="15"
      class="elevation-1"
    >
      <template v-slot:item.id="{ item }">
        {{ "#" + item.id }}
      </template>

      <template v-slot:item.data2="{ item }">
        {{ item.data2 ? item.data2 : "-" }}
      </template>

      <template v-slot:item.timestamp="{ item }">
        {{ item.timestamp ? formatDateTime(item.timestamp) : "-" }}
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
import componentsMixin from '@/mixins/componentsMixin'

export default {
  mixins: [componentsMixin],
  data () {
    return {
      headers: [
        { text: 'ID', value: 'id', class: 'font-weight-bold black--text' },
        { text: 'Data', value: 'data', class: 'font-weight-bold black--text' },
        { text: 'Data 2', value: 'data2', class: 'font-weight-bold black--text' },
        { text: 'Timestamp', value: 'timestamp', class: 'font-weight-bold black--text' }
      ]
    }
  },
  computed: {
    sensorData () {
      return this.$store.state.sensorData
    }
  }
}
</script>
