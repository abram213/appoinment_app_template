<template>
  <v-card tile flat class="mt-12" color="transparent" v-if="!file">
    <!-- <v-card-title class="title font-weight-regular justify-space-between">
            <span>Upload file</span>
    </v-card-title>-->
    <v-file-input id="file_input" v-show="false" v-model="file" @change="updateFilePreview"></v-file-input>
    <v-img>
      <v-row align="center" justify="center" class="fill-height">
        <v-btn @click="openFilePickDialog" icon height="150" width="150">
          <v-icon size="150">mdi-plus-circle-outline</v-icon>
        </v-btn>
      </v-row>
    </v-img>
    <v-card-text class="mt-6">
      <p class="body-2 grey--text text--darken-1 text-center">Сhoose a file to start uploading</p>
    </v-card-text>
  </v-card>
  <div v-else>
    <v-card tile class="mt-1">
      <v-card-title class="py-1">
        <span class="title font-weight-light text-truncate" single-line>{{file.name}}</span>
      </v-card-title>
      <v-divider></v-divider>
      <v-img height="200px" :src="imagePreview ? imagePreview : ''">
        <v-row v-if="!showPreview" align="center" justify="center" class="fill-height">
          <v-icon size="150">mdi-file-document</v-icon>
        </v-row>
      </v-img>
      <v-card-actions class="py-1">
        <span class="caption grey--text text--darken-1">{{file.size/1000}} кБ</span>
        <v-spacer />
        <v-btn icon @click="resetFile">
          <v-icon>mdi-close-circle-outline</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
    <v-btn dark block x-large color="black" class="mx-auto mt-6" @click="upload">Выгрузить</v-btn>
    <v-btn dark block x-large color="black" class="mx-auto mt-6" @click="download">Download</v-btn>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      file: null,
      showPreview: false,
      imagePreview: null
    }
  },
  methods: {
    openFilePickDialog () {
      document.getElementById('file_input').click()
    },
    updateFilePreview (file) {
      let reader = new FileReader()

      reader.addEventListener(
        'load',
        function () {
          this.showPreview = true
          this.imagePreview = reader.result
        }.bind(this),
        false
      )

      if (this.file) {
        if (/\.(jpe?g|png|gif)$/i.test(this.file.name)) {
          reader.readAsDataURL(this.file)
        }
      }
    },
    resetFile () {
      this.file = null
      this.showPreview = null
      this.imagePreview = null
    },
    upload () {
      var promise = new Promise(this.fileArrayBuffer)
      let self = this
      promise
        .then(function (arrayBuffer) {
          const strData = self.ab2str(arrayBuffer)
          console.log('data to encrypt:\n' + strData)
          let encypted = self.CryptoJS.AES.encrypt(strData, 'pass')
          console.log('encrypted data:\n' + encypted.toString())
          const file = new File([encypted.toString()], 'file', {
            type: 'text/plain'
          })

          let formData = new FormData()
          formData.append('file', file)

          axios.post(`/file/upload`, formData, {
            headers: {
              'Content-Type': 'undefined'
            }
          }).then((resp) => {
            console.log(resp)
          }).catch((error) => {
            console.log(error)
          })
        })
        .catch(function (err) {
          console.log('Error: ', err)
        })
    },
    download () {
      axios({
        url: 'http://localhost:4545/file/download/123',
        method: 'GET'
      }).then((resp) => {
        // console.log(resp.data)
        const data = resp.data
        // console.log('data to dencrypt:\n' + data)
        let decrypted = this.CryptoJS.AES.decrypt(data, 'pass')
        const decryptedUtf8 = decrypted.toString(this.CryptoJS.enc.Utf8)
        // console.log('dencrypted file data:\n' + decFileData)
        const arrayBuffer = this.str2ab(decryptedUtf8)

        this.imitateDownload(arrayBuffer, 'test.png', 'image/png')
      }).catch((err) => {
        console.log(err)
      })
    },
    imitateDownload (data, filename, type) {
      var file = new Blob([data], { type: type })

      var a = document.createElement('a')
      var url = URL.createObjectURL(file)
      a.href = url
      a.download = filename
      document.body.appendChild(a)
      a.click()
      setTimeout(function () {
        document.body.removeChild(a)
        window.URL.revokeObjectURL(url)
      }, 0)
    },
    str2ab (str) {
      var buf = new ArrayBuffer(str.length * 2) // 2 bytes for each char
      var bufView = new Uint8Array(buf)
      for (var i = 0, strLen = str.length; i < strLen; i++) {
        bufView[i] = str.charCodeAt(i)
      }
      return buf
    },
    ab2str (buf) {
      console.log(buf.byteLength)
      return String.fromCharCode.apply(null, new Uint8Array(buf))
    },
    fileArrayBuffer (resolve) {
      let reader = new FileReader()
      reader.readAsArrayBuffer(this.file)
      reader.onload = function () {
        let arrayBuffer = reader.result
        resolve(arrayBuffer)
      }
    }
  }
}
</script>
