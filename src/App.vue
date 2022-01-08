<template>
  <v-app>
    <AppBar/>
    <Drawer/>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import AppBar from '@/views/AppBar/AppBar'
import Drawer from '@/views/AppBar/Drawer'
export default {
  name: 'App',
  components: { AppBar, Drawer }
}
</script>
