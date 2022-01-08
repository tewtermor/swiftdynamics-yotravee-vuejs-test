<template>
  <div>
    <v-card class="white--text ma-4" color="white" tile>
      <v-card-title class="text-center" style="background-color: #61b865">
        <v-icon dark class="mr-2">{{ "mdi-account" }}</v-icon>
        Log in
      </v-card-title>
      <v-row class="ma-4">
        <v-col
          cols="12"
          sm="5"
        >
          <v-text-field
            v-model="userID"
            label="ID"
            :rules="[rules.required]"
            type="text"
            outlined
          ></v-text-field>
        </v-col>
        <v-col
          cols="12"
          sm="5"
        >
          <v-text-field
            v-model="password"
            :rules="[rules.required]"
            label="Password"
            type="password"
            @keyup.enter="userLoginSubmit"
            outlined
          ></v-text-field>
        </v-col>
        <v-col
          cols="12"
          sm="2"
        >
          <v-btn block color="primary" @click="userLoginSubmit">
            {{ 'Log in' }}
          </v-btn>
        </v-col>
      </v-row>
    </v-card>

    <v-card class="white--text ma-4" color="white" tile>
      <v-card-title class="text-center" style="background-color: #61b865">
        <v-icon dark class="mr-2">{{ "mdi-account" }}</v-icon>
        Work Approvement
        <v-spacer></v-spacer>
        <div v-if="user">Approver: {{user}}</div>
      </v-card-title>
      <v-row class="ma-4">
        <v-col
          cols="12"
          sm="5"
        >
          <v-text-field
            v-model="workID"
            label="Work ID"
            readonly
            outlined
          ></v-text-field>
        </v-col>
        <v-col
          cols="12"
          sm="2"
        >
          <v-btn block color="success" v-if="user" @click="approveWork">
            Approve
          </v-btn>
        </v-col>
      </v-row>
    </v-card>

    <v-snackbar
      v-model="snackbar.status"
    >
      {{ snackbar.text }}

      <template v-slot:action="{ attrs }">
        <v-btn
          color="success"
          text
          v-bind="attrs"
          @click="snackbar.status = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
export default {
  data () {
    return {
      userID: '',
      password: '',
      workID: 1,
      rules: {
        required: value => !!value || 'Required.'
      }
    }
  },
  methods: {
    userLoginSubmit () {
      var params = {
        id: this.userID,
        password: this.password
      }
      this.$store.dispatch('POST_LOGIN', params)
    },
    approveWork () {
      var params = {
        id: this.workID,
        params: {
          userID: this.userID
        }
      }
      this.$store.dispatch('POST_APPROVE_WORK', params)
    }
  },
  computed: {
    user () {
      return this.$store.state.user
    },
    snackbar () {
      return this.$store.state.snackbar
    }
  }
}
</script>
