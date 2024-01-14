  <template>
    <v-card
        class="mx-auto"
        max-width="344"
        outlined
    >


      <v-list-item three-line>
        <v-list-item-content>
          <div class="text-overline mb-4">
            {{ data[0].monthDate }}
          </div>
          <v-list-item-title class="text-h5 mb-1">
            SPENT:     {{data[0].totalSpent}}
          </v-list-item-title>
          <v-list-item-subtitle>Budget: {{data[0].budgetToSpend}} </v-list-item-subtitle>
          <v-list-item-subtitle> Still available: {{availableMonthAmount}} </v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-avatar
            tile
            size="80"
            color="grey"
        ></v-list-item-avatar>
      </v-list-item>

      <v-card-actions>
        <v-btn
            outlined
            rounded
            text
        >
          Button
        </v-btn>
      </v-card-actions>
    </v-card>
  </template>

<script>
import transactions from "../api/trasnactions.json"

export default {
  name: "HomeCard",
  data () {
    return {
      data : transactions,
    }
    },
  computed: {
    availableMonthAmount () {
      return (this.data[0].budgetToSpend) - (this.data[0].totalSpent)
    }
  }
}
</script>

<style scoped>

</style>