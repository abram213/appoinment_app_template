<template>
    <v-list dense class="pb-0">
    <v-list-item>
      <v-list-item-icon class="mr-3">
        <v-icon>mdi-package-variant</v-icon>
      </v-list-item-icon>
      <v-list-item-content>
        <v-list-item-subtitle>Продукт: {{ company.product }}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <v-list-item>
        <v-list-item-icon class="mr-3">
        <v-icon>mdi-account-multiple</v-icon>
      </v-list-item-icon>
      <v-list-item-content>
        <v-list-item-subtitle>Количество сотрудников: {{ company.members }}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <v-list-item>
        <v-list-item-icon class="mr-3">
        <v-icon>mdi-order-bool-descending</v-icon>
      </v-list-item-icon>
      <v-list-item-content>
        <v-list-item-subtitle>Описание: {{ company.description }}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
      <DetailedCompanyInfo/>
  </v-list>
</template>

<script>
import DetailedCompanyInfo from '@/components/dialogs/DetailedCompanyInfo'
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
    DetailedCompanyInfo
  }
}
</script>
