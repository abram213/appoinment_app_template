<template>
  <v-card
    v-if="meeting"
    tile
    flat
    :style="{ borderLeft: meeting.approved ? '5px solid' : '', borderColor: meeting.expired ? '#F44336' : '#4CAF50' }"
    class="mb-1"
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="overline mb-2">{{ meeting.title }}</div>
        <v-list-item-title class="title mb-1">
          {{ meeting.person }}
          <v-btn icon v-on:click.stop="$router.push({ name: 'member' })">
            <v-icon>mdi-account</v-icon>
          </v-btn>
        </v-list-item-title>
        <v-list-item-subtitle>{{ meeting.company }}</v-list-item-subtitle>
      </v-list-item-content>
      <!-- <v-list-item-action class="mt-2">
          <v-list-item-action-text>{{ meeting.time }}</v-list-item-action-text>
      </v-list-item-action> -->
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
      <v-list-item-action
        class="mb-0"
        :class="{ 'mt-12' : meeting.approved }"
        :style="{ 'align-items': 'center' }"
      >
        <v-btn
          v-show="!meeting.approved"
          rounded
          depressed
          small
          color="success"
          class="my-1"
          width="100%"
          @click="meeting.approved = true"
        >Approve</v-btn>
        <v-btn
          :disabled="meeting.expired"
          rounded
          text
          small
          color="error"
          class="my-1"
          width="100%"
          @click="meeting.approved = false"
        >Cancel</v-btn>
      </v-list-item-action>
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
