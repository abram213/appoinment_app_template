<template>
  <div v-if="unconfirmedMeetings">
    <Meeting
      v-for="(item, index) in unconfirmedMeetings"
      :key="index"
      :initMeeting="item"
    />
  </div>
</template>

<script>
import Meeting from '@/components/cards/Meeting'
export default {
  components: {
    Meeting
  },
  mounted () {
    this.$store.dispatch('getUnconfirmedMeetings')
  },
  computed: {
    unconfirmedMeetings () {
      return this.$store.state.unconfirmedMeetings
    }
  }
}
</script>
