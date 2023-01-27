<template>
<v-layout>
    <v-app-bar>
      <v-container>
        <div class="d-flex justify-space-between align-center">
          <v-icon size="x-large">mdi-alpha-f-circle</v-icon>
          <ul class="d-flex flex-row">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Portofolio</li>
          </ul>
        </div>
      </v-container>
    </v-app-bar>
    <v-main>
      <v-container>
        <RouterView />
      </v-container>
    </v-main>
  </v-layout>
</template>

<style scoped>
ul {
  list-style-type: none;
  gap: 2rem;
}

</style>