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
        <v-col align="center" xs="12" cols="auto">
            <v-hover>
                <template v-slot:default="{ hover }">
                    <v-avatar size="160">
                        <v-img :src="'https://cdn.vuetifyjs.com/images/cards/server-room.jpg'"></v-img>
                        <v-fade-transition>
                            <v-overlay
                                v-if="hover"
                                absolute
                                color="#212121"
                            >
                                <v-btn icon width="70" height="70">
                                    <v-icon size="70" >mdi-upload</v-icon>
                                </v-btn>
                            </v-overlay>
                        </v-fade-transition>
                    </v-avatar>
                </template>
            </v-hover>
        </v-col>
        <v-card-title class="title font-weight-regular">
            <v-icon left>mdi-account-box</v-icon>
            <span>Personal info</span>
        </v-card-title>
        <v-card-text class="pb-0">
            <v-text-field
                filled
                label="Name"
            ></v-text-field>
            <v-text-field
                filled
                label="Surname"
            ></v-text-field>
            <v-text-field
                filled
                label="Phone"
            ></v-text-field>
            <v-text-field
                filled
                label="E-mail"
            ></v-text-field>
            <v-text-field
                filled
                label="City"
            ></v-text-field>
        </v-card-text>
        <v-card-title class="title font-weight-regular pt-0">
            <v-icon left>mdi-bank</v-icon>
            <span>Work</span>
        </v-card-title>
        <v-card-text class="pb-0">
            <v-text-field
                filled
                label="Company"
            ></v-text-field>
            <v-text-field
                filled
                label="Job"
            ></v-text-field>
        </v-card-text>
        <v-card-title class="title font-weight-regular pt-0">
            <v-icon left>mdi-human</v-icon>
            <span>Interests</span>
        </v-card-title>
        <v-card-text class="pb-0">
            <v-text-field
                filled
                label="I watch"
            ></v-text-field>
            <v-text-field
                filled
                label="I useful"
            ></v-text-field>
            <v-text-field
                filled
                label="About me"
            ></v-text-field>
        </v-card-text>
        <v-card-title class="title font-weight-regular pt-0">
            <v-icon left>mdi-web</v-icon>
            <span>Social</span>
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
