<template>
  <v-card
    tile
    outlined
    class="my-1"
  >
    <v-card-actions v-if="!meeting" class="pa-0">
      <NewMeeting v-on:emit_meeting="enableMeeting"/>
    </v-card-actions>
    <v-card-actions v-else class="py-0 pr-0">
      <span class="title ml-2 green--text">Meeting approved</span>
      <v-spacer></v-spacer>
      <v-divider vertical></v-divider>
      <v-btn icon tile @click="panel = !panel">
        <v-icon v-html="panel ? 'mdi-chevron-up' : 'mdi-chevron-down'"></v-icon>
      </v-btn>
      <v-divider vertical></v-divider>
      <v-btn icon tile>
        <v-icon>mdi-message-text</v-icon>
      </v-btn>
    </v-card-actions>
    <v-expand-transition>
      <v-list class="py-0" v-show="panel && meeting">
      <v-divider></v-divider>
        <v-list-item>
          <v-list-item-action>
            <v-icon>mdi-calendar</v-icon>
          </v-list-item-action>

          <v-list-item-content>
            <v-list-item-title>17-12-2019 12:00</v-list-item-title>
          </v-list-item-content>
          <!--<v-list-item-action>

          <v-icon>mdi-message-text</v-icon>
          </v-list-item-action>-->
        </v-list-item>

        <v-divider></v-divider>

        <v-list-item>
          <v-list-item-action>
            <v-icon>mdi-map-marker</v-icon>
          </v-list-item-action>

          <v-list-item-content>
            <v-list-item-title>Orlando, FL 79938</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list-item @click="cancelMeeting">
          <v-list-item-action>
            <v-icon color="red darken-2">mdi-close</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Cancel meeting</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-expand-transition>
  </v-card>
</template>

<script>
import NewMeeting from '@/components/dialogs/NewMeeting'
export default {
  data () {
    return {
      meeting: false,
      toggle_exclusive: undefined,
      panel: false
    }
  },
  methods: {
    cancelMeeting () {
      this.meeting = false
    },
    enableMeeting () {
      this.meeting = true
      this.panel = true
    }
  },
  components: {
    NewMeeting
  }
}
</script>
