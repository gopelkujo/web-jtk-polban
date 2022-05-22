<template>
    <v-app-bar
        app
        color="#E8F9FD"
        height="73"
        >
        <div class="d-flex align-center">
            <v-img
            alt="Logo JTK"
            class="shrink mr-2"
            contain
            src="../assets/logo-polban.png"
            transition="scale-transition"
            width="28"
            height="28"
            />
            <div
              class="text-h6"
            >
              Jurusan Teknik Komputer dan Informatika POLBAN
            </div>
        </div>

        <v-spacer></v-spacer>
        <v-menu
        open-on-hover
        bottom
        offset-y
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              text
              v-bind="attrs"
              v-on="on"
            >
              Dropdown
            </v-btn>
          </template>
          <v-list>
            <v-list-item
            >
              <v-list-item-title><a href="#">Home</a></v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              text
              v-bind="attrs"
              v-on="on"
            >
              Home
            </v-btn>
          </template>
          <v-list>
            <v-list-item
            >
              <v-list-item-title><a href="#">Dropdown</a></v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
    </v-app-bar>
</template>

<script>
  export default {
    name: 'NavbarComp',

    data: () => ({
      //
    }),
  }
</script>
