<template>
<v-container fluid class="pa-0">
  <AppBar :title="'BT'" search/>
  <v-tabs
    v-model="tab"
    grow
  >
    <v-tab>
      Companies
    </v-tab>
    <v-tab>
      Users
    </v-tab>
  </v-tabs>
  <v-tabs-items v-model="tab">
      <v-tab-item>
        <CompaniesList/>
      </v-tab-item>
      <v-tab-item>
        <MembersList/>
      </v-tab-item>
    </v-tabs-items>
</v-container>
</template>

<script>
import AppBar from '@/components/AppBar'
import CompaniesList from '@/components/lists/CompaniesList'
import MembersList from '@/components/lists/MembersList'
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
    CompaniesList,
    MembersList,
    AppBar
  }
}
</script>
