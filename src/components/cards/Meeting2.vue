<template>
  <v-card
    v-if="meeting"
    tile
    flat
    :style="{ borderColor: meeting.borderColor }"
    style="border-left: 5px solid;"
    class="mb-1"
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="overline mb-2">{{ meeting.title }}</div>
        <v-list-item-title class="title mb-1">{{ meeting.person }}</v-list-item-title>
        <v-list-item-subtitle>{{ meeting.company }}</v-list-item-subtitle>
      </v-list-item-content>
      <v-list-item-action class="mt-2">
        <v-menu bottom left>
          <template v-slot:activator="{ on }">
            <v-btn icon v-on="on">
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </template>
          <v-list class="py-0">
            <v-list-item @click="">
              <v-list-item-title>Edit</v-list-item-title>
            </v-list-item>
            <v-list-item @click="">
              <v-list-item-title class="red--text">Cancel</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-list-item-action>
    </v-list-item>
    <v-list-item three-line>
      <v-list-item-content class="pt-0">
        <div class="subtitle-1">
          <v-icon left>mdi-clock</v-icon>
          {{ meeting.time }}
        </div>
        <div class="subtitle-1">
          <v-icon left>mdi-calendar</v-icon>
          {{ meeting.date }}
        </div>
        <div class="subtitle-1">
          <v-icon left>mdi-map-marker</v-icon>
          {{ meeting.place }}
        </div>
      </v-list-item-content>
    </v-list-item>
    <v-divider></v-divider>
  </v-card>
</template>

<script>
export default {
  data () {
    return {
      borderColor: '#F44336'
    }
  },
  props: {
    initMeeting: null
  },
  computed: {
    meeting () {
      return this.initMeeting
    }
  }
}
</script>
