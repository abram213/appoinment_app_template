 <template>
    <v-layout align-center justify-center>
        <div class="text-xs-center">
            <v-progress-circular
                :size="50"
                :color="color"
                indeterminate
            ></v-progress-circular>
        </div>
    </v-layout>
 </template>

<script>
export default {
  name: 'AuthLoader',
  props: {
    color: {
      type: String,
      required: true
    }
  }
}
</script>
