<template>
  <v-list class="pt-0">
    <template v-for="(item, index) in companies">
      <v-divider v-if="index === 0" :key="index"></v-divider>
      <v-list-item
        :key="index"
        v-on:click.stop="$router.push({ name: 'company' })"
      >
        <v-list-item-avatar :color="item.color">
          <span :class="[item.avatarClass]">{{ item.title[0] }}</span>
          <!-- <v-icon :class="[item.iconClass]" v-text="item.icon"></v-icon> -->
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title v-text="item.title" class="text-truncate"></v-list-item-title>
          <!-- <v-list-item-subtitle v-text="item.subtitle"></v-list-item-subtitle> -->
        </v-list-item-content>

        <v-list-item-action>
          <v-btn class="unactive" retain-focus-on-click icon @click.stop="item.star = !item.star">
            <v-icon
              :color="item.star ? 'yellow darken-2' : 'grey darken-4'"
              v-html="item.star ? 'mdi-star' : 'mdi-star-outline'"
            >mdi-star-outline</v-icon>
          </v-btn>
        </v-list-item-action>
      </v-list-item>
      <v-divider v-if="index < companies.length-1" :key="index"></v-divider>
    </template>
  </v-list>
</template>

<script>
export default {
  data () {
    return {
      companies: [
        { avatarClass: 'headline white--text', title: 'Yandex', color: 'red', star: true },
        { avatarClass: 'headline white--text', title: 'Mail', color: 'purple', star: true },
        { avatarClass: 'headline white--text', title: 'Telegram', color: 'indigo', star: true },
        { avatarClass: 'headline white--text', title: 'Facebook', color: 'blue' },
        { avatarClass: 'headline white--text', title: 'Tinder', color: 'teal' },
        { avatarClass: 'headline white--text', title: 'Habrahabr', color: 'green' },
        { avatarClass: 'headline white--text', title: 'SPbGUT', color: 'orange' },
        { avatarClass: 'headline white--text', title: 'Vuetify', color: 'brown' },
        { avatarClass: 'headline white--text', title: 'Google', color: 'blue-grey' },
        { avatarClass: 'headline white--text', title: 'DropIT', color: 'deep-orange darken-3' },
        { avatarClass: 'headline white--text', title: 'Github', color: 'light-green darken-4' }
      ]
    }
  }
}
</script>

<style scoped>
  .unactive:focus::before {
    opacity: 0 !important;
  }
</style>
