<template>
  <v-navigation-drawer style="margin-top: 75px;" v-model="drawer" app hide-overlay stateless>
    <v-list dense nav>
      <v-list-item
        v-for="item in items"
        :key="item.title"
        link
        :to="item.to"
        active-class="success white--text">
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-group
        :value="true"
        v-for="item in itemsGroup"
        :key="item.titleGroup"
      >
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title>{{item.titleGroup}}</v-list-item-title>
          </v-list-item-content>
        </template>
        <v-list-item
          v-for="(subItem, i) in item.list"
          :key="i"
          link
          :to="subItem.to"
          active-class="success white--text"
        >
          <v-list-item-icon>
            <v-icon>{{subItem.icon}}</v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{subItem.title}}</v-list-item-title>
        </v-list-item>
        <v-divider class="mb-1" />
      </v-list-group>
    </v-list>

    <v-btn block dark color="red" @click="logout">
      Logout
    </v-btn>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'Drawer',
  data () {
    return {
      drawer: true,
      items: [
        { title: 'Overview', icon: 'mdi-cloud-outline', to: '/overview' },
        { title: 'Report', icon: 'mdi-file-chart', to: '/report' },
        { title: 'Map', icon: 'mdi-map', to: '/map' },
        { title: 'Location', icon: 'mdi-compass', to: '/location' }
      ],
      itemsGroup: [
        {
          titleGroup: 'Device Management',
          list: [
            { title: 'Sensor', icon: 'mdi-signal-cellular-3', to: '/sensor' },
            { title: 'Gateway', icon: 'mdi-router-wireless', to: '/gateway' },
            { title: 'Camera', icon: 'mdi-camera', to: '/camera' }
          ]
        },
        {
          titleGroup: 'Manage Work',
          list: [
            { title: 'Work Management', icon: 'mdi-briefcase', to: '/' },
            { title: 'Work Status', icon: 'mdi-clipboard-text', to: '/status' }
          ]
        },
        {
          titleGroup: 'Setting',
          list: [
            { title: 'Alert', icon: 'mdi-alert-octagram', to: '/alert' },
            { title: 'Network', icon: 'mdi-wifi', to: '/network' },
            { title: 'Location Setting', icon: 'mdi-compass', to: '/setting' },
            { title: 'User', icon: 'mdi-account', to: '/user' },
            { title: 'Permission Setting', icon: 'mdi-account-check', to: '/permission' },
            { title: 'Form', icon: 'mdi-file', to: '/form' }
          ]
        }
      ]
    }
  },
  methods: {
    logout () {
      this.$store.commit('SET_USER_LOGIN', { id: null })
    }
  }
}
</script>
