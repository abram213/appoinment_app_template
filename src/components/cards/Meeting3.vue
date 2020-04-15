<template>
  <v-card
    v-if="meeting"
    tile
    flat
    class="mb-1"
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="overline mb-2">{{ meeting.title }}</div>
        <v-list-item-title class="title mb-1">{{ meeting.person }}</v-list-item-title>
        <v-list-item-subtitle>{{ meeting.company }}</v-list-item-subtitle>
      </v-list-item-content>
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
      <v-list-item-action class="mb-0" :style="{ 'align-items': 'center' }">
        <v-btn rounded text small color="error" class="my-1">Cancel</v-btn>
      </v-list-item-action>
    </v-list-item>
    <!-- <v-card-text class="pt-0">
        <div>
            <v-icon left>mdi-calendar</v-icon>
            <span>{{ meeting.date }}</span>
        </div>
        <div>
            <v-icon left>mdi-map-marker</v-icon>
            <span>{{ meeting.place }}</span>
        </div>
    </v-card-text> -->
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
