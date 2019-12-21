<template>
    <v-list dense class="pb-0">
    <v-list-item>
      <v-list-item-icon class="mr-3">
        <v-icon>mdi-dribbble</v-icon>
      </v-list-item-icon>
      <v-list-item-content>
        <v-list-item-subtitle>Продукт: {{ member.product }}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <v-list-item>
        <v-list-item-icon class="mr-3">
        <v-icon>mdi-equal-box</v-icon>
      </v-list-item-icon>
      <v-list-item-content>
        <v-list-item-subtitle>Количество сотрудников: {{ member.members }}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <v-list-item>
        <v-list-item-icon class="mr-3">
        <v-icon>mdi-broom</v-icon>
      </v-list-item-icon>
      <v-list-item-content>
        <v-list-item-subtitle>Описание: {{ member.role }}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <v-list-item>
        <v-list-item-icon class="mr-3">
        <v-icon>mdi-broom</v-icon>
      </v-list-item-icon>
      <v-list-item-content>
        <v-list-item-subtitle>Описание: {{ member.custom }}</v-list-item-subtitle>
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
        name: 'Misha',
        surname: 'Abramovich',
        product: 'it',
        members: '123',
        role: '456',
        custom: '789'
      }
    }
  },
  components: {
    DetailedMemberInfo
  }
}
</script>
