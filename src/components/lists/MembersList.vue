<template>
  <v-list>
    <v-list-item v-for="(item, index) in members" :key="index" v-on:click.stop="$router.push({ name: 'member' })">
      <v-list-item-avatar :color="item.color">
        <span :class="[item.avatarClass]">{{ item.surname[0] }}{{ item.name[0] }}</span>
        <!-- <v-icon :class="[item.iconClass]" v-text="item.icon"></v-icon> -->
      </v-list-item-avatar>

      <v-list-item-content>
        <v-list-item-title v-text="item.surname + ' '+ item.name" class="text-truncate"></v-list-item-title>
        <!-- <v-list-item-subtitle v-text="item.subtitle"></v-list-item-subtitle> -->
      </v-list-item-content>

      <v-list-item-action>
        <v-btn icon @click.stop="item.star = !item.star">
          <v-icon
            :color="item.star ? 'yellow darken-2' : 'grey darken-4'"
            v-html="item.star ? 'mdi-star' : 'mdi-star-outline'"
          >mdi-star-outline</v-icon>
        </v-btn>
      </v-list-item-action>
    </v-list-item>
  </v-list>
</template>

<script>
export default {
  data () {
    return {
      members: [
        { avatarClass: 'white--text', name: 'Misha', surname: 'Abramovich', color: 'red', star: true },
        { avatarClass: 'white--text', name: 'Misha', surname: 'Abramovich', color: 'purple', star: true },
        { avatarClass: 'white--text', name: 'Misha', surname: 'Abramovich', color: 'indigo', star: true },
        { avatarClass: 'white--text', name: 'Misha', surname: 'Abramovich', color: 'blue', star: true },
        { avatarClass: 'white--text', name: 'Misha', surname: 'Abramovich', color: 'teal', star: false },
        { avatarClass: 'white--text', name: 'Misha', surname: 'Abramovich', color: 'green', star: true },
        { avatarClass: 'white--text', name: 'Misha', surname: 'Abramovich', color: 'orange', star: false },
        { avatarClass: 'white--text', name: 'Misha', surname: 'Abramovich', color: 'brown', star: true },
        { avatarClass: 'white--text', name: 'Misha', surname: 'Abramovich', color: 'blue-grey', star: false },
        { avatarClass: 'white--text', name: 'Misha', surname: 'Abramovich', color: 'deep-orange darken-3', star: false },
        { avatarClass: 'white--text', name: 'Misha', surname: 'Abramovich', color: 'light-green darken-4', star: false }
      ]
    }
  }
}
</script>
