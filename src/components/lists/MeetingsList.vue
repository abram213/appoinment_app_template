<template>
  <div v-if="approvedMeetings">
    <Meeting
      v-for="(item, index) in approvedMeetings"
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
    this.$store.dispatch('getApprovedMeetings')
  },
  computed: {
    approvedMeetings () {
      return this.$store.state.approvedMeetings
    }
  }
}
</script>
