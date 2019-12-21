<template>
  <v-card
    class="upload_card upload_card__border"
    :class="{'upload_card__align': !needDrop}"
    flat
    :height="needDrop ? '100%' : ''"
  >
    <v-container
      fluid 
      fill-height
      v-if="state == 'loading'"
    >
      <v-layout align-center justify-center>
        <div class="text-xs-center">
          <v-progress-circular
              :size="250"
              :rotate="-90"
              :width="15"
              :value="percentCompleted"
              :color="'white darken-4'"
          >
            <p class="display-1 font-weight-bold"> {{ percentCompleted }} % </p>
          </v-progress-circular>
        </div>
      </v-layout>
    </v-container>
    <template v-else>
      <v-card-actions v-if="file || state == 'error' || state == 'success'">
        <v-spacer/>
        <v-btn
          @click="close"
          text
          icon
          color="white"
          class="mt-2 mr-2"
          min-width="70" min-height="70"
        >
          <v-icon size="50">mdi-close</v-icon>
        </v-btn>
      </v-card-actions>
      <v-card-text>
        <template v-if="state == 'file_ready'">
          <v-list-item>
            <v-list-item-avatar size="110">
              <v-icon size="160" color="white">mdi-file-document-outline</v-icon>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title><p class="file_name__font">{{file.name}}</p></v-list-item-title>
              <v-list-item-subtitle><p class="file_size__font">{{file.size/1000}} кБ</p></v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-spacer/>
          <div class="text-center mt-5">
            <v-btn 
              depressed
              large
              rounded
              color="white"
              @click="sendFile"
              class="text_background_colored"
            >Загрузить на сервер</v-btn>
          </div>
        </template>
        <div v-if="state == 'success'" class="text-center">
          <span v-html="qr"></span>
          <v-text-field
            id="file_info_link_field"
            class="mt-5"
            readonly
            solo
            :value="fileInfoLink"
          >
          <template v-slot:append-outer>
            <v-icon
              color="white"
              @click="copyLink"
            >mdi-content-copy</v-icon>
          </template>
          </v-text-field>
          <v-snackbar
            bottom
            :timeout="2000"
            v-model="snackbar"
          >
            Ссылка скопирована!
          </v-snackbar>
        </div>
        <template v-if="state == 'error'">
          <h2 class="display-3 red--text text-center">Ошибка!</h2>
          <h2 class="display-1 red--text text-center">{{error}}</h2>
        </template>
        <template v-if="state == 'waiting_file'">
          <v-container
            fluid 
            fill-height
          >
            <div id="drop_area" class="drop_off">
            </div>
            <v-file-input
              id="file_input"
              v-show="false"
              v-model="file"
            ></v-file-input>
            <v-layout align-center justify-center>
              <v-row align="center" justify="center" >
                  <v-col cols="12" v-if="needDrop">
                    <v-row align="center" justify="center">
                      <v-btn text icon color="white" min-width="140" min-height="140">
                        <v-icon size="150">mdi-plus-circle</v-icon>
                      </v-btn>
                    </v-row>
                  </v-col>
                  <v-col cols="12" class="pb-0" v-if="needDrop">
                    <v-row align="center" justify="center">
                      <div class="text-center">
                        <p class="download_big_text__font">Перетащите файлы сюда</p>
                        <p class="download_small_text__font">или</p>
                      </div>
                    </v-row>
                  </v-col>
                  <v-col cols="12" class="pt-0">
                    <v-row align="center" justify="center">
                      <v-btn 
                          id="select_file_button"
                          class="text_background_colored"
                          depressed
                          color="white"
                          @click="openFilePickDialog"
                          rounded
                          :large="!needDrop"
                        >Выбери файлы для загрузки</v-btn>
                    </v-row>
                  </v-col>
                </v-row>
            </v-layout>
          </v-container>
        </template>
      </v-card-text>
    </template>
  </v-card>
</template>

<script>
import Swal from 'sweetalert2'
import axios from 'axios'
import storage from '../storage'
export default {
  name: 'UploadFileCard',
  data() {
    return {
      file: null,
      qr: '',
      fileIdentifier: '',
      host: storage.host,
      error: '',
      valid: false,
      percentCompleted: 0,
      state: 'waiting_file',
      snackbar: false
    }
  },
  computed: {
    fileInfoLink () {
      if (this.fileIdentifier) {
        return this.host + "/file/info/" + this.fileIdentifier
      }
    },
    needDrop () {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return false
        case 'sm': return true
        case 'md': return true
        case 'lg': return true
        case 'xl': return true
      }
    }
  },
  methods: {
    sendFile () {
        this.state = 'loading'
        let sendData = new FormData()
        sendData.append('file', this.file)

        let config = {
          onUploadProgress: function(progressEvent) {
            this.percentCompleted = Math.round( (progressEvent.loaded * 100) / progressEvent.total )
          }.bind(this),
          headers: {
              'Content-Type': 'undefined'
          }
        }

        axios.post( `/upload`, sendData, config)
        .then((resp) => {
          this.file = null
          this.qr = resp.data.qr
          this.fileIdentifier = resp.data.identifier
          this.state = 'success'
          this.percentCompleted = 0
        }).catch((error) => {
          console.log(error)
          this.error = error.response.data
          this.state = 'error'
          this.percentCompleted = 0
        })
    },
    close() {
      this.file = null
      this.qr = ''
      this.identifier = ''
      this.state = 'waiting_file'
      this.error = ''
    },
    openFilePickDialog() {
      document.getElementById('file_input').click()
    },
    copyLink () {
      if (navigator && navigator.clipboard) {
        navigator.clipboard.writeText(this.fileInfoLink)
        this.snackbar = true
      } else {
        let copyText = document.getElementById("file_info_link_field");
        copyText.select();
        document.execCommand("copy");
        this.snackbar = true
      }
    }
  },
  watch: {
    percentCompleted () {
      if (this.percentCompleted > 100) {
        this.percentCompleted = 100
      }
    },
    file () {
      if (this.file) {
        this.state = 'file_ready'
      }
    }
  },
  mounted() {
    const drop_area = document.getElementById('drop_area');
    const select_file_button = document.getElementById('select_file_button');
    let self = this
    drop_area.addEventListener("dragenter", function (e) {
      drop_area.className = 'drop_on';
      select_file_button.style.zIndex = 0;
    })

    drop_area.addEventListener("dragleave", function (e) {
        e.preventDefault()
        drop_area.className = 'drop_off';
        select_file_button.style.zIndex = 1;
    })

    drop_area.addEventListener("dragover", function (e) {
        e.preventDefault()
    })

    drop_area.addEventListener("drop", function (ev) {
      ev.preventDefault()
      if (ev.dataTransfer.items) {
        if (ev.dataTransfer.items[0].kind === 'file') {
          const dropedFile = ev.dataTransfer.items[0].getAsFile();
          self.file = dropedFile
        }
      } else {
        const dropedFile = ev.dataTransfer.files[0];
        self.file = dropedFile
      }
      drop_area.className = 'drop_off';
      select_file_button.style.zIndex = 1;
    })
  }
}
</script>

<style scoped>
  .upload_card {
    background-color:  rgb(255, 255, 255, 0)!important;
  }

  .upload_card__border {
    border: 2px dashed #FFFFFF!important;
    border-radius: 44px;
  }

  .upload_card__align {
    margin-top: 80px!important;
  }

  .download_big_text__font {
    font-family: Montserrat!important;
    font-style: normal!important;
    font-weight: bold!important;
    font-size: 35px!important;

    letter-spacing: 0.01em!important;

    color: #FFFFFF!important;
  }

  .download_small_text__font {
    font-family: Montserrat!important;
    font-style: normal!important;
    font-weight: normal!important;
    font-size: 18px!important;

    letter-spacing: 0.01em!important;

    color: #FFFFFF!important;
  }

  .file_name__font {
    font-family: Montserrat!important;
    font-style: normal!important;
    font-weight: bold!important;
    font-size: 24px!important;
    color: #FFFFFF!important;
  }

  .file_size__font {
    font-family: Montserrat!important;
    font-style: normal!important;
    font-weight: normal!important;
    font-size: 18px!important;
    color: #FFFFFF!important;
  }

  .body_style {
    background-color: transparent!important;
  }

  #drop_area {
    position: absolute;
    top: 0; 
    left: 0; 
    right: 0; 
    bottom: 0; 
    background: rgba(0,0,0,.5);
    border-radius: 44px;
    margin: -2px;
    z-index: 1;
  }

  .drop_off {
    opacity: 0;
  }

  .drop_on {
    opacity: 0.5;
  }

  #select_file_button {
    z-index: 1;
  }

  .text_background_colored {
    color:#A562EF!important;
  }


  @media (min-width: 0px) and (max-width: 576px)
  {
    .download_big_text__font {
      font-size: 20px!important;
    }

    .download_small_text__font {
      font-size: 15px!important;
    }
  }
</style>