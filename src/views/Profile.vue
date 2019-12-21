<template>
<v-container fluid class="pa-0">
    <AppBar :title="'Profile'" backBtn>
        <template v-slot:append>
            <v-btn icon>
                <v-icon>mdi-check</v-icon>
            </v-btn>
        </template>
    </AppBar>
    <v-card tile flat color="transparent">
        <v-card-title class="title font-weight-regular">
            <v-icon left>mdi-account-box</v-icon>
            <span>Персональная информация</span>
        </v-card-title>
        <v-card-text class="pb-0">
            <v-text-field
                filled
                label="Имя"
            ></v-text-field>
            <v-text-field
                filled
                label="Фамилия"
            ></v-text-field>
            <v-text-field
                filled
                label="Телефон"
            ></v-text-field>
            <v-text-field
                filled
                label="E-mail"
            ></v-text-field>
            <v-text-field
                filled
                label="Город"
            ></v-text-field>
        </v-card-text>
        <v-card-title class="title font-weight-regular pt-0">
            <v-icon left>mdi-bank</v-icon>
            <span>Работа</span>
        </v-card-title>
        <v-card-text class="pb-0">
            <v-text-field
                filled
                label="Компания"
            ></v-text-field>
            <v-text-field
                filled
                label="Должность"
            ></v-text-field>
        </v-card-text>
        <v-card-title class="title font-weight-regular pt-0">
            <v-icon left>mdi-human</v-icon>
            <span>Интересы</span>
        </v-card-title>
        <v-card-text class="pb-0">
            <v-text-field
                filled
                label="Я ищу"
            ></v-text-field>
            <v-text-field
                filled
                label="Я полезен"
            ></v-text-field>
            <v-text-field
                filled
                label="О себе"
            ></v-text-field>
        </v-card-text>
        <v-card-title class="title font-weight-regular pt-0">
            <v-icon left>mdi-web</v-icon>
            <span>Соцсети</span>
        </v-card-title>
        <v-card-text>
            <v-text-field
                filled
                label="Вконтакте"
            ></v-text-field>
            <v-text-field
                filled
                label="Facebook"
            ></v-text-field>
            <v-text-field
                filled
                label="Twitter"
            ></v-text-field>
            <v-text-field
                filled
                label="Insatgram"
            ></v-text-field>
        </v-card-text>
    </v-card>
</v-container>
</template>

<script>
import AppBar from '@/components/AppBar'
export default {
  components: {
    AppBar
  }
}
</script>
