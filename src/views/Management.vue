<template>
  <div class="ma-4">
    <v-row class="mb-6">
      <v-col lg="2" sm="12">
        <v-card class="white--text" color="white" tile>
          <v-card-title style="background-color: #61b865">
            <v-icon dark class="mr-2">{{ "mdi-alert-circle-outline" }}</v-icon>
            Upcoming Tasks
          </v-card-title>
          <div class="text-h4 text-center green--text text--darken-4 py-4">
            1
          </div>
        </v-card>
      </v-col>
      <v-col lg="2" sm="12">
        <v-card class="white--text" color="white" tile>
          <v-card-title style="background-color: #61b865">
            <v-icon dark class="mr-2">{{ "mdi-alarm-snooze" }}</v-icon>
            Late Tasks
          </v-card-title>
          <div class="text-h4 text-center warning--text py-4">
            5
          </div>
        </v-card>
      </v-col>
      <v-col lg="2" sm="12">
        <v-card class="white--text" color="white" tile>
          <v-card-title style="background-color: #61b865">
            <v-icon dark class="mr-2">{{ "mdi-swap-horizontal" }}</v-icon>
            Open Tasks
          </v-card-title>
          <div class="text-h4 text-center green--text text--darken-4 py-4">
            0
          </div>
        </v-card>
      </v-col>
      <v-col lg="2" sm="12">
        <v-card class="white--text" color="white" tile>
          <v-card-title style="background-color: #61b865">
            <v-icon dark class="mr-2">{{ "mdi-check" }}</v-icon>
            Completed Tasks
          </v-card-title>
          <div class="text-h4 text-center green--text text--darken-4 py-4">
            1
          </div>
        </v-card>
      </v-col>
      <v-col lg="2" sm="12">
        <v-card class="white--text" color="white" tile>
          <v-card-title style="background-color: #61b865">
            <v-icon dark class="mr-2">{{ "mdi-alarm" }}</v-icon>
            Overdue Tasks
          </v-card-title>
          <div class="text-h4 text-center error--text py-4">
            2
          </div>
        </v-card>
      </v-col>
      <v-col lg="2" sm="12">
        <v-card class="white--text" color="white" tile>
          <v-card-title style="background-color: #61b865">
            <v-icon dark class="mr-2">{{ "mdi-clock-time-four-outline" }}</v-icon>
            Time Spent
          </v-card-title>
          <div class="text-h4 text-center black--text py-4">
            24 hr
          </div>
        </v-card>
      </v-col>
    </v-row>
    <v-card class="white--text" color="white" tile>
      <v-card-title style="background-color: #61b865">
        <v-icon dark class="mr-2">{{ "mdi-view-list-outline" }}</v-icon>
        Assignment of Open Work Orders
        <v-spacer></v-spacer>
        <v-btn color="warning" dark>Start WO</v-btn>
      </v-card-title>
      <v-card-text class="text--primary mt-2">
        <v-tabs color="deep-purple accent-4" left>
          <v-tab v-for="item in configTab" :key="item.name">
            <v-icon>{{ item.icon }}</v-icon>
            {{ item.name }}
          </v-tab>
          <v-tab-item>
            <ListTable />
          </v-tab-item>
          <v-tab-item>
            <Calendar />
          </v-tab-item>
        </v-tabs>
      </v-card-text>
    </v-card>
    <graphDialog v-if="graphDialogShow" :dialogName="'Sensor Data'"/>
  </div>
</template>

<script>
import ListTable from '@/components/ListTable.vue'
import Calendar from '@/components/Calendar.vue'
import graphDialog from '@/components/graphDialog.vue'

export default {
  name: 'Management',
  components: {
    ListTable,
    Calendar,
    graphDialog
  },
  data () {
    return {
      configTab: [
        { name: 'List', icon: 'mdi-format-list-bulleted-square' },
        { name: 'Calendar', icon: 'mdi-calendar' },
        { name: 'User', icon: 'mdi-account-multiple' }
      ]
    }
  },
  mounted () {
    this.$store.dispatch('GET_SENSOR_DATA')
  },
  computed: {
    graphDialogShow () {
      return this.$store.state.graphDialogShow
    }
  }
}
</script>
