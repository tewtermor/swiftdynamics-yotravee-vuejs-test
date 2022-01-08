<template>
  <v-card>
    <v-card-title>
      Data Summary
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
    <v-sheet
      tile
      height="54"
      class="d-flex"
    >
      <v-btn
        icon
        class="ma-2"
        @click="$refs.calendar.prev()"
      >
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-toolbar-title v-if="$refs.calendar">
        {{ $refs.calendar.title }}
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        icon
        class="ma-2"
        @click="$refs.calendar.next()"
      >
        <v-icon>mdi-chevron-right</v-icon>
      </v-btn>
    </v-sheet>
    <v-sheet height="600">
      <v-calendar
        ref="calendar"
        v-model="value"
        locale="en"
        :weekdays="weekday"
        :type="type"
        :events="events"
        :event-overlap-mode="mode"
      ></v-calendar>
    </v-sheet>
  </v-card>
</template>

<script>
import componentsMixin from '@/mixins/componentsMixin'

export default {
  mixins: [componentsMixin],
  data () {
    return {
      type: 'month',
      mode: 'stack',
      weekday: [0, 1, 2, 3, 4, 5, 6],
      value: '',
      events: []
    }
  },
  mounted () {
    this.value = Object.keys(this.groupedSensorData)[0]
    const events = []
    Object.keys(this.groupedSensorData).forEach(element => {
      events.push({
        name: String(this.groupedSensorData[`${element}`].length),
        start: new Date(`${element}T00:00:00`),
        end: new Date(`${element}T23:59:59`),
        timed: false
      })
    })
    this.events = events
  },
  computed: {
    groupedSensorData () {
      return this.$store.state.groupedSensorData
    }
  }
}
</script>
