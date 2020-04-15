<template>
  <v-list>
    <v-subheader class="subtitle-1">Staff</v-subheader>
    <template v-for="(item, index) in members">
      <v-divider v-if="index === 0" :key="index"></v-divider>
      <v-list-item
        :key="index"
        v-on:click.stop="$router.push({ name: 'member' })"
      >
        <v-list-item-avatar :color="item.color">
          <span :class="[item.avatarClass]">{{ item.surname[0] }}{{ item.name[0] }}</span>
          <!-- <v-icon :class="[item.iconClass]" v-text="item.icon"></v-icon> -->
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title v-text="item.surname + ' '+ item.name" class="text-truncate"></v-list-item-title>
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
      <v-divider v-if="index < members.length-1" :key="index" inset></v-divider>
    </template>
  </v-list>
</template>

<script>
export default {
  data () {
    return {
      members: [
        { avatarClass: 'white--text', name: 'Ivan', surname: 'Ivanov', color: 'red', star: true },
        { avatarClass: 'white--text', name: 'Ivan', surname: 'Ivanov', color: 'purple', star: true },
        { avatarClass: 'white--text', name: 'Ivan', surname: 'Ivanov', color: 'indigo', star: true },
        { avatarClass: 'white--text', name: 'Ivan', surname: 'Ivanov', color: 'blue', star: true },
        { avatarClass: 'white--text', name: 'Ivan', surname: 'Ivanov', color: 'teal', star: false },
        { avatarClass: 'white--text', name: 'Ivan', surname: 'Ivanov', color: 'green', star: true },
        { avatarClass: 'white--text', name: 'Ivan', surname: 'Ivanov', color: 'orange', star: false },
        { avatarClass: 'white--text', name: 'Ivan', surname: 'Ivanov', color: 'brown', star: true },
        { avatarClass: 'white--text', name: 'Ivan', surname: 'Ivanov', color: 'blue-grey', star: false },
        { avatarClass: 'white--text', name: 'Ivan', surname: 'Ivanov', color: 'deep-orange darken-3', star: false },
        { avatarClass: 'white--text', name: 'Ivan', surname: 'Ivanov', color: 'light-green darken-4', star: false }
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
