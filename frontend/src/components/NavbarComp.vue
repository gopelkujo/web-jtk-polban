<template>
    <v-app-bar
      app
      color="#E8F9FD"
      height="73"
      class="elevation-0"
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
        <div
          class="d-flex flex-row mt-1 text-subtitle-1"
        >
          <div
            class="my-auto"
          >
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
                  Tentang JTK
                </v-btn>
              </template>
              <v-list
                color="primary"
              >
                <v-list-item>
                  <v-list-item-title><a href="#">Profil Jurusan</a></v-list-item-title>
                </v-list-item>
                <v-list-item
                >
                  <v-list-item-title><a href="#">Profil Prodi</a></v-list-item-title>
                </v-list-item>
                <v-list-item
                >
                  <v-list-item-title><a href="#">Profil Pegawai</a></v-list-item-title>
                </v-list-item>
                <v-list-item
                >
                  <v-list-item-title><a href="#">Daftar Prestasi</a></v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
            <v-menu 
              offset-y
              open-on-hover
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  open-on-hover
                  text
                  v-bind="attrs"
                  v-on="on"
                >
                  Kurikulum
                </v-btn>
              </template>
              <v-list
                color="primary"
              >
                <v-list-item>
                  <v-list-item-title><a href="#">Profil Lulusan</a></v-list-item-title>
                </v-list-item>
                <v-list-item>
                  <v-list-item-title><a href="#">Mata Kuliah</a></v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
            <v-menu offset-y>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  href="#"
                  text
                  v-bind="attrs"
                  v-on="on"
                >
                  Berita
                </v-btn>
              </template>
            </v-menu>
            <v-menu offset-y>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  href="#"
                  text
                  v-bind="attrs"
                  v-on="on"
                >
                  Agenda
                </v-btn>
              </template>
            </v-menu>
            <v-menu offset-y>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  href="#"
                  text
                  v-bind="attrs"
                  v-on="on"
                >
                  Tracer Study
                </v-btn>
              </template>
            </v-menu>
          </div>
          <div>
            <v-autocomplete
              v-model="select"
              :loading="loading"
              :items="items"
              :search-input.sync="search"
              cache-items
              class="mx-4 my-auto"
              flat
              hide-no-data
              hide-details
              label="Search"
              solo-inverted
            ></v-autocomplete>
          </div>
        </div>
    </v-app-bar>
</template>

<style scoped>
a{color: white;}
</style>

<script>
  export default {
    name: 'NavbarComp',

    data: () => ({
      //
    }),
  }
</script>
