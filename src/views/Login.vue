<template>
    <v-card tile flat color="transparent">
        <AuthLoader
          v-if="this.authState == 'loading'"
          :color="'grey darken-1'"
          class="mt-12"
        />
        <v-form
          v-else
          @submit.prevent="tryLogin"
          ref="login_form"
          v-model="valid"
        >
        <v-card-title class="title font-weight-regular justify-space-between">
            <span>Login</span>
        </v-card-title>
        <v-card-text>
                <v-text-field
                    v-model="username"
                    label="Username"
                    name="username"
                    prepend-icon="mdi-account"
                    type="text"
                    :rules="[v => !!v || 'Input your username']"
                />
                <v-text-field
                    v-model="password"
                    label="Password"
                    name="password"
                    prepend-icon="mdi-lock"
                    type="password"
                    :rules="[v => !!v || 'Input your password']"
                />
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
            <v-btn
              block
              dark
              color="black"
              type="submit"
            >Login</v-btn>
        </v-card-actions>
        <v-card-text class="py-0">
            <span class="caption grey--text text--darken-1">
                Don`t have account? <router-link to="/">Registration</router-link>
            </span>
        </v-card-text>
        </v-form>
    </v-card>
</template>

<script>
import AuthLoader from '@/components/AuthLoader'
export default {
  components: {
    AuthLoader
  },
  data () {
    return {
      username: '',
      password: '',
      authState: '',
      valid: false
    }
  },
  methods: {
    tryLogin () {
      if (this.$refs.login_form.validate()) {
        const { username, password } = this
        //request to backend
      }
    }
  }
}
</script>
