<template>
    <div class="text-center">
      <v-dialog v-model="graphDialogShow" width="70%" height="70%" @click:outside="closeDialog">
        <v-card>
          <v-card-title class="blue white--text">{{ dialogName }}</v-card-title>
          <div id="chart">
            <apexchart ref="chartRef" type="line" height="350" :options="chartOptions" :series="series"></apexchart>
          </div>
          <v-divider></v-divider>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" text @click="closeDialog">Close</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
</template>

<script>
export default {
  props: {
    dialogName: String
  },
  data () {
    return {
      series: [],
      chartOptions: {
        chart: {
          height: 350,
          type: 'line',
          zoom: {
            enabled: false
          }
        },
        dataLabels: {
          enabled: true
        },
        stroke: {
          curve: 'straight'
        },
        title: {
          text: this.dialogName,
          align: 'center'
        },
        grid: {
          borderColor: '#e7e7e7',
          row: {
            colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.5
          }
        },
        xaxis: {
          categories: [],
          title: {
            text: 'Date'
          }
        },
        yaxis: {
          title: {
            text: 'Data Number'
          },
          min: 0,
          forceNiceScale: true,
          labels: {
            formatter: function (val) {
              return val.toFixed(0)
            }
          }
        }
      }
    }
  },
  mounted () {
    this.$refs.chartRef.updateOptions({
      xaxis: {
        categories: Object.keys(this.groupedSensorData)
      }
    })
    const dataArray = []
    Object.keys(this.groupedSensorData).forEach(element => {
      dataArray.push(this.groupedSensorData[`${element}`].length)
    })
    this.$refs.chartRef.updateSeries([{
      data: dataArray
    }])
  },
  methods: {
    closeDialog () {
      this.$store.commit('SET_GRAPH_DIALOG_SHOW', false)
    }
  },
  computed: {
    graphDialogShow () {
      return this.$store.state.graphDialogShow
    },
    groupedSensorData () {
      return this.$store.state.groupedSensorData
    }
  }
}
</script>
