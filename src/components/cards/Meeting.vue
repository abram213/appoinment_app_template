<template>
  <v-card
    v-if="meeting"
    tile
    flat
    :style="{ borderColor: meeting.borderColor }"
    style="border-left: 5px solid;"
    class="mb-1"
  >
    <v-overlay
          absolute
          opacity="0.2"
          color="#616161"
          :value="!meeting.active"
        >
    </v-overlay>
    <v-list-item three-line>
      <v-list-item-content>
        <div class="overline mb-2">{{ meeting.title }}</div>
        <v-list-item-title class="title mb-1">{{ meeting.person }}</v-list-item-title>
        <v-list-item-subtitle>{{ meeting.company }}</v-list-item-subtitle>
      </v-list-item-content>
      <v-list-item-action class="mt-2">
          <v-list-item-action-text>{{ meeting.time }}</v-list-item-action-text>
      </v-list-item-action>
    </v-list-item>
    <v-card-text class="pt-0">
        <div>
            <v-icon left>mdi-calendar</v-icon>
            <span>{{ meeting.date }}</span>
        </div>
        <div>
            <v-icon left>mdi-map-marker</v-icon>
            <span>{{ meeting.place }}</span>
        </div>
    </v-card-text>
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
