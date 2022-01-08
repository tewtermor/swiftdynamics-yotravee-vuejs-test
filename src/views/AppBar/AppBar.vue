<template>
  <v-app-bar app color="#666666" dark flat height="75" style="left: 0px">
    <v-toolbar-title>
      <v-img
        :src="require('@/assets/logo/sentenance_logo.png')"
        max-width="200"
      >
      </v-img>
    </v-toolbar-title>

    <v-text-field
      class="ml-6"
      solo
      solo-inverted
      label="Search Here"
      append-icon="mdi-magnify"
      hide-details
      style="max-width: 256px"
    ></v-text-field>

    <v-btn icon>
      <v-icon>{{ icons.mdiFormatListBulleted }}</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>{{ icons.mdiViewDashboard }}</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>{{ icons.mdiMap }}</v-icon>
    </v-btn>

    <v-spacer></v-spacer>

    <v-btn icon>
      <v-icon>{{ icons.mdiBell }}</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>{{ icons.mdiMessageReply }}</v-icon>
    </v-btn>

    <div>Hi, admin</div>

    <v-avatar class="ml-4">
      <v-img src="https://cdn.vuetifyjs.com/images/john.jpg"></v-img>
    </v-avatar>
  </v-app-bar>
</template>

<script>
import {
  mdiFormatListBulleted,
  mdiBell,
  mdiMessageReply,
  mdiViewDashboard,
  mdiMap
} from '@mdi/js'

export default {
  name: 'AppBar',
  data () {
    return {
      drawer: true,
      icons: {
        mdiFormatListBulleted,
        mdiBell,
        mdiMessageReply,
        mdiViewDashboard,
        mdiMap
      }
    }
  }
}
</script>
