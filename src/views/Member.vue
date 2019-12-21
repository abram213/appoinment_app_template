<template>
  <v-container fluid class="pa-0">
    <AppBar :title="'Member Info'" backBtn/>
    <v-card>
      <v-sheet
          color="blue lighten-3"
          height="150"
          class="white--text align-end d-flex"
          tile
      >
        <v-card-title class="pb-2">
          {{ member.surname }} {{ member.name }}
        </v-card-title>
        <v-card-actions class="ml-auto">
          <v-btn icon @click.stop="star = !star">
            <v-icon
              :color="star ? 'yellow darken-2' : 'grey darken-4'"
              v-html="star ? 'mdi-star' : 'mdi-star-outline'"
            >mdi-star-outline</v-icon>
          </v-btn>
        </v-card-actions>
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
    <MeetingActionCard/>
    <MainMemberInfo/>
    <v-divider></v-divider>
  </v-container>
</template>

<script>
import AppBar from '@/components/AppBar'
import MainMemberInfo from '@/components/lists/MainMemberInfo'
import MeetingActionCard from '@/components/cards/MeetingActionCard'
export default {
  data () {
    return {
      member: {
        name: 'Misha',
        surname: 'Abramovich',
        product: 'it',
        members: '123',
        role: '456',
        custom: '789'
      },
      star: true
    }
  },
  components: {
    MainMemberInfo,
    MeetingActionCard,
    AppBar
  }
}
</script>
