<template>
<v-container fluid class="pa-0">
  <AppBar :title="'Meetings'" search/>
  <v-tabs
    v-model="tab"
    grow
  >
    <v-tab>
      <v-badge right color="success">
        <template v-slot:badge>
          <span class="caption">10</span>
        </template>
        Approved
      </v-badge>
    </v-tab>
    <v-tab>
      <v-badge right color="error">
        <template v-slot:badge>
          <span class="caption">3</span>
        </template>
        Unconfirmed
      </v-badge>
    </v-tab>
    <v-tab>
      <v-badge>
        <template v-slot:badge>
          <span class="caption">6</span>
        </template>
        Appointment
      </v-badge>
    </v-tab>
  </v-tabs>
  <v-tabs-items v-model="tab">
      <v-tab-item>
        <MeetingsList/>
      </v-tab-item>
      <v-tab-item>
        <MeetingsList/>
      </v-tab-item>
      <v-tab-item>
        <MeetingsList/>
      </v-tab-item>
    </v-tabs-items>
</v-container>
</template>

<script>
import AppBar from '@/components/AppBar'
import MeetingsList from '@/components/lists/MeetingsList'
export default {
  data () {
    return {
      search: '',
      tab: null
    }
  },
  computed: {

  },
  components: {
    MeetingsList,
    AppBar
  }
}
</script>

<style scoped>
  .v-tab {
    font-size: 0.7em;
    padding-left: 3px;
    padding-right: 21px;
  }
</style>
