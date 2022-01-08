import moment from 'moment'

export default {
  methods: {
    showGraphDialog () {
      this.$store.commit('SET_GRAPH_DIALOG_SHOW', true)
    },
    formatDateTime (timestamp) {
      return moment(timestamp).parseZone().format('YYYY-MM-DD hh:mm:ss')
    }
  }
}
