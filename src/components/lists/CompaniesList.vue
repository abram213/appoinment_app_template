<template>
  <v-list>
    <v-list-item
      v-for="(item, index) in companies"
      :key="index"
      v-on:click.stop="$router.push({ name: 'company' })"
      style="border-left: 5px solid; border-color: #F44336;"
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
        <v-btn icon>
          <v-icon color="grey darken-4">mdi-star-outline</v-icon>
        </v-btn>
      </v-list-item-action>
    </v-list-item>
  </v-list>
</template>

<script>
export default {
  data () {
    return {
      companies: [
        { avatarClass: 'headline white--text', title: 'Yandex', color: 'red' },
        { avatarClass: 'headline white--text', title: 'Mail', color: 'purple' },
        { avatarClass: 'headline white--text', title: 'Telegram', color: 'indigo' },
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
