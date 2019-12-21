<template>
    <v-app-bar
      app
      dense
      dark
    >
      <v-btn icon @click="$router.go(-1)" v-if="backBtn">
        <v-icon dark>mdi-keyboard-backspace</v-icon>
      </v-btn>
      <slot name="prepend"></slot>
      <v-toolbar-title class="pl-0">
          {{ title }}
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <slot name="append"></slot>
      <v-btn icon v-if="search">
        <v-icon dark>mdi-magnify</v-icon>
      </v-btn>
    </v-app-bar>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Title'
    },
    backBtn: {
      type: Boolean,
      default: false
    },
    search: {
      type: Boolean,
      default: false
    }
  }
}
</script>
