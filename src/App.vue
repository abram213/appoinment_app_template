<template>
  <v-app id="app" :style="{background: $vuetify.theme.themes[theme].background}">
    <!-- each view has it`s own app-bar -->
    <v-content>
      <router-view/>
    </v-content>
    <v-bottom-navigation
      app
      dark
      grow
      :value="nowRouteName"
    >
      <v-btn
        height="100%"
        v-for="(btn, index) in bottomNavButtons"
        v-bind:key="index"
        :value="btn.routeName"
        v-on:click.stop="$router.push({ name: btn.routeName })"
      >
        <!-- <span>{{ btn.name }}</span> -->
        <v-icon>{{ btn.icon }}</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      bottomNavButtons: [
        { name: 'Companies', icon: 'mdi-rocket', routeName: 'companies' },
        { name: 'Favorite', icon: 'mdi-star', routeName: 'favorite' },
        { name: 'Meetings', icon: 'mdi-clipboard-outline', routeName: 'meetings' },
        /* { name: 'Custom', icon: 'mdi-cube-outline', routeName: 'custom' }, */
        { name: 'Settings', icon: 'mdi-settings', routeName: 'settings' }
      ]
    }
  },
  computed: {
    theme () {
      return (this.$vuetify.theme.dark) ? 'dark' : 'light'
    },
    nowRouteName () {
      if (this.$route.name) {
        return this.$route.name.split('_', 1)[0]
      }
      return ''
    },
    filesView: {
      get () {
        return this.$store.state.filesView
      },
      set (state) {
        this.$store.state.filesView = state
      }
    }
  }
}
</script>
