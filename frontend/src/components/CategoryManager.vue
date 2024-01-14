<template>
<v-card>
  {{ data }}
  <v-container fluid>
    <v-row dense>
      <v-col
          v-for="card in cards"
          :key="card.title"
          :cols="card.flex"
      >
        <v-card>
          <v-img
              :src="card.src"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="100px"
          >
            <v-card-title v-text="card.title"></v-card-title>
          </v-img>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn icon>
              <v-icon>mdi-heart</v-icon>
            </v-btn>

            <v-btn icon>
              <v-icon>mdi-bookmark</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</v-card>
</template>

<script>
import transactions from "../api/trasnactions.json"
export default {
  name: "CategoryManager",
  data: () => ({
    data : transactions,
    cards: [
      { title: 'Pet', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 3 },
      { title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 3 },
      { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 3 },
      { title: 'Pre-fab homes', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 3 },
      { title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 3 },
      { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 3 },
    ],
  }),
}
</script>

<style scoped>

</style>