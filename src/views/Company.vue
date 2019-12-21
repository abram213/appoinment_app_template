<template>
  <v-container fluid class="pa-0">
    <AppBar :title="'Company info'" backBtn/>
    <v-card>
      <v-sheet
          color="red lighten-3"
          height="150"
          class="white--text align-end d-flex"
          tile
      >
          <v-card-title v-text="company.name"></v-card-title>
      </v-sheet>
      <!-- <v-img
          src="https://cdn.vuetifyjs.com/images/cards/house.jpg"
          class="white--text align-end"
          gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
          height="200px"
      >
          <v-card-title v-text="company.name"></v-card-title>
      </v-img> -->
    </v-card>
    <MainCompanyInfo/>
    <v-divider></v-divider>
    <MembersList class="pt-0"/>
  </v-container>
</template>

<script>
import AppBar from '@/components/AppBar'
import MembersList from '@/components/lists/MembersList'
import MainCompanyInfo from '@/components/lists/MainCompanyInfo'
export default {
  data () {
    return {
      company: {
        name: 'Yandex',
        description: 'New company',
        product: 'it',
        members: '123'
      }
    }
  },
  components: {
    MembersList,
    MainCompanyInfo,
    AppBar
  }
}
</script>
