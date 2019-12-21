<template>
  <v-card
    color="transparent"
    flat
  >
    <v-card-text>
          <v-list-item v-if="fileInfo">
            <v-list-item-avatar :size="mobile ? 30 : 110">
              <v-icon :size="mobile ? 60 : 160" color="white">mdi-file-document-outline</v-icon>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title><p class="text_font file_name__font">{{fileInfo.name}}</p></v-list-item-title>
              <v-list-item-subtitle><p class="text_font file_size__font">{{fileInfo.size/1000}} кБ</p></v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <div class="text-center">
            <v-btn
              depressed
              :large="!mobile"
              rounded
              :small="mobile"
              color="white"
              @click="downloadFile"
              class="text_background_colored text-center"
            >Скачать</v-btn>
          </div>
      </v-card-text>
  </v-card>
</template>

<script>
import Swal from 'sweetalert2'
import axios from 'axios'
import storage from '../storage'
export default {
  name: 'FileInfoCard',
  data () {
    return {
      host: storage.host
    }
  },
  methods: {
    downloadFile () {
      window.open(this.fileInfo.download_link)
    }
  },
  computed: {
    fileInfo () {
      return this.$store.state.fileInfo
    },
    mobile () {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return true
        case 'sm': return false
        case 'md': return false
        case 'lg': return false
        case 'xl': return false
      }
    }
  },
  mounted () {
    this.$store.dispatch('getFileInfo', this.$route.params.id)
  }
}
</script>

<style scoped>
  .text_font {
    font-family: Montserrat!important;
    font-style: normal!important;
    color: #FFFFFF!important;
  }

  .file_name__font {
    font-weight: bold!important;
    font-size: 24px!important;

  }

  .file_size__font {
    font-weight: normal!important;
    font-size: 18px!important;
  }

  .text_background_colored {
    color:#A562EF!important;
  }

  @media (min-width: 0px) and (max-width: 576px)
  {
    .file_name__font {
      font-weight: bold!important;
      font-size: 14px!important;

    }

    .file_size__font {
      font-weight: normal!important;
      font-size: 14px!important;
    }
  }
</style>
