<template>
<v-container fluid class="pa-0">
  <AppBar :title="'Favorite'" search/>
  <!-- <v-card tile fixed>
    <v-card-title class="pt-0 pb-2">
      <v-text-field
        class="pt-0"
        v-model="search"
        append-icon="mdi-magnify"
        label="Search..."
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
  </v-card> -->
  <v-tabs
    v-model="tab"
    grow
  >
    <v-tab>
      Компании
    </v-tab>
    <v-tab>
      Участники
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
