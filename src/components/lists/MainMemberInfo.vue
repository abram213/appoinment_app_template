<template>
    <v-list dense class="pb-0">
    <v-list-item>
      <v-list-item-icon class="mr-3">
        <v-icon>mdi-domain</v-icon>
      </v-list-item-icon>
      <v-list-item-content>
        <v-list-item-subtitle>Company: {{ member.company }}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <v-list-item>
        <v-list-item-icon class="mr-3">
        <v-icon>mdi-newspaper-variant-outline</v-icon>
      </v-list-item-icon>
      <v-list-item-content>
        <v-list-item-subtitle>Job: {{ member.job }}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <DetailedMemberInfo/>
  </v-list>
</template>

<script>
import DetailedMemberInfo from '@/components/dialogs/DetailedMemberInfo'
export default {
  data () {
    return {
      member: {
        name: 'Ivan',
        surname: 'Ivanov',
        company: 'Test company',
        job: 'Boss'
      }
    }
  },
  components: {
    DetailedMemberInfo
  }
}
</script>
