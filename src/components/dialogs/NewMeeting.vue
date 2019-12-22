<template>
    <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
      <template v-slot:activator="{ on }">
        <v-btn
          v-on="on"
          outlined
          x-large
          block
          tile
          color="green lighten-1"
        >Назначить встречу</v-btn>
      </template>
      <v-card>
        <v-toolbar dark dense>
          <v-btn icon dark @click="dialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>Новая встреча</v-toolbar-title>
          <!-- <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn dark text @click="dialog = false">Save</v-btn>
          </v-toolbar-items> -->
        </v-toolbar>
        <v-card-title class="subtitle-1 py-2">
          Выбрать место
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text>
        <v-form
          ref="form"
          v-model="valid"
          lazy-validation
        >
          <v-select
              :items="items"
              label="Место встречи"
              prepend-icon="mdi-map-marker-radius"
            ></v-select>
        </v-form>

        <!-- <v-list three-line subheader>
          <v-subheader>Выбрать место</v-subheader>
          <v-divider></v-divider>
          <v-list-item>
            <v-list-item-content>
              <v-select
                :items="items"
                label="Standard"
              ></v-select>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <v-divider></v-divider>
        <v-list three-line subheader>
          <v-subheader>Выбрать время встречи</v-subheader>
          <v-divider></v-divider>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Auto-add widgets</v-list-item-title>
              <v-list-item-subtitle>Automatically add home screen widgets</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list> -->
        </v-card-text>
        <v-card-title class="subtitle-1 py-2">
          Выбрать дату и время
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text>
          <v-dialog
            ref="date"
            v-model="modal"
            :return-value.sync="date"
            persistent
            max-width="300"
          >
            <template v-slot:activator="{ on }">
              <v-text-field
                v-model="date"
                label="Дата"
                prepend-icon="mdi-calendar"
                readonly
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker v-model="date" scrollable>
              <v-spacer></v-spacer>
              <v-btn text color="primary" @click="modal = false">Отмена</v-btn>
              <v-btn text color="primary" @click="$refs.date.save(date)">Выбрать</v-btn>
            </v-date-picker>
          </v-dialog>
          <v-dialog
            ref="time"
            v-model="modal2"
            :return-value.sync="time"
            persistent
            width="300px"
          >
            <template v-slot:activator="{ on }">
              <v-text-field
                v-model="time"
                label="Время"
                prepend-icon="mdi-clock"
                readonly
                v-on="on"
              ></v-text-field>
            </template>
            <v-time-picker
              v-if="modal2"
              v-model="time"
              full-width
              ampm-in-title
              format="24hr"
            >
              <v-spacer></v-spacer>
              <v-btn text color="primary" @click="modal2 = false">Отмена</v-btn>
              <v-btn text color="primary" @click="$refs.time.save(time)">Выбрать</v-btn>
            </v-time-picker>
          </v-dialog>
        </v-card-text>
        <v-card-actions>
        <v-btn
          block
          bottom
          color="success"
          @click="$emit('emit_meeting')"
        >
          Назначить
        </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>

<script>
export default {
  data () {
    return {
      modal: false,
      modal2: false,
      valid: false,
      dialog: false,
      notifications: false,
      sound: true,
      widgets: false,
      items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
      date: null,
      time: null
    }
  }
}
</script>
