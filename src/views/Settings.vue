<template>
<v-container fluid class="pa-0">
    <AppBar :title="'Settings'"/>
    <v-card tile flat color="transparent">
        <!-- <v-card-title class="title font-weight-regular justify-space-between">
            <span>Settings</span>
        </v-card-title> -->
        <v-list flat>
        <v-list-item-group>
            <v-list-item
                v-for="(item, i) in listItems"
                :key="i"
                v-on:click.stop="$router.push({ name: item.routeName })"
            >
                <v-list-item-icon>
                    <v-icon v-text="item.icon"></v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                    <v-list-item-title v-text="item.text"></v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list-item-group>
        </v-list>
        <v-list class="mt-2" flat>
            <v-list-item-group >
                <v-list-item v-on:click="logout">
                    <v-list-item-content>
                        <v-list-item-title class="red--text font-weight-bold">Exit</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list-item-group>
        </v-list>
    </v-card>
</v-container>
</template>

<script>
import AppBar from '@/components/AppBar'
export default {
  data: () => ({
    listItems: [
      { icon: 'mdi-account', text: 'Profile', routeName: 'profile' },
      { icon: 'mdi-home', text: 'Company', routeName: 'settings_company' },
      { icon: 'mdi-tune', text: 'Main', routeName: 'settings_main' },
      { icon: 'mdi-bell', text: 'Notifications', routeName: 'settings_notifications' }
    ]
  }),
  methods: {
    logout () {
      this.$store.dispatch('logout')
    }
  },
  components: {
    AppBar
  }
}
</script>
