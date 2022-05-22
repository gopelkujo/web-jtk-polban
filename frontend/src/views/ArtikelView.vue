<template>
  <div>
    <v-card class="
        d-flex
        blue
        accent-4
        align-center
        justify-space-between
        pa-4
        mx-auto
        mt-11
      " height="255px" max-width="1250px" outlined>
      <div class="ml-9 my-auto">
        <img src="../assets/logo_artikel.png" alt="logo_artikel" />
      </div>
      <div class="'text-${model}' text-h2 white--text mr-16">
        ARTIKEL
      </div>
    </v-card>

    <v-card class="
        d-flex
        accent-4
        pa-4
        mt-11
      " color= "#0AA1DD" height="100px" max-width="964px" outlined>
      <div class="ml-12"><b>Kategori</b></div>
      <div>
      </div>
    </v-card>

    <div class="mt-10 mx-auto" style="width: 939px">
      <div class="d-flex">
        <div>
        <router-link style="text-decoration: none; color: inherit;" to="/detail-artikel">
        <img src="../assets/artikel_satu.png" alt="artikel_satu"/>
        </router-link>
        </div>
        <div class="ml-5 d-flex flex-column">
          <router-link style="text-decoration: none; color: inherit;" to="/detail-artikel">
          <b>Jurnal Ilmiah Oleh Dosen JTK</b>
          </router-link>
          <td>Tema Artikel</td>
          <td>Artikel</td>
          <td>Tanggal Artikel</td>
        </div>
      </div>
      <v-divider></v-divider>
      <div class="d-flex mt-5">
        <div>
        <router-link style="text-decoration: none; color: inherit;" to="/detail-artikel">
        <img src="../assets/artikel_dua.png" alt="artikel_dua" />
        </router-link>
        </div>
        <div class="ml-5 d-flex flex-column">
          <router-link style="text-decoration: none; color: inherit;" to="/detail-artikel">
          <b>JTK Juara 1 Lomba Blog</b>
          </router-link>
          <td>Tema Artikel</td>
          <td>Artikel</td>
          <td>Tanggal Artikel</td>
        </div>
      </div>
      <v-divider></v-divider>
      <div class="d-flex mt-5">
        <div>
          <router-link style="text-decoration: none; color: inherit;" to="/detail-artikel">
          <img src="../assets/artikel_tiga.png" alt="artikel_tiga" />
          </router-link>
        </div>
        <div class="ml-5 d-flex flex-column">
          <router-link style="text-decoration: none; color: inherit;" to="/detail-artikel">
          <b>Dunia Metaverse telah release</b>
          </router-link>
          <td>Tema Artikel</td>
          <td>Artikel</td>
          <td>Tanggal Artikel</td>
        </div>
      </div>
      <v-divider></v-divider>
      <div class="d-flex mt-5">
        <div>
          <router-link style="text-decoration: none; color: inherit;" to="/detail-artikel">
          <img src="../assets/artikel_satu.png" alt="artikel_satu"/>
          </router-link>
        </div>
        <div class="ml-5 d-flex flex-column">
          <router-link style="text-decoration: none; color: inherit;" to="/detail-artikel">
          <b>Jurnal Ilmiah Oleh Dosen JTK</b>
          </router-link>
          <td>Tema Artikel</td>
          <td>Artikel</td>
          <td>Tanggal Artikel</td>
        </div>
      </div>
      <v-divider></v-divider>
      <div class="d-flex mt-5">
        <div>
          <router-link style="text-decoration: none; color: inherit;" to="/detail-artikel">
          <img src="../assets/artikel_dua.png" alt="artikel_dua" />
          </router-link>
        </div>
        <div class="ml-5 d-flex flex-column">
          <router-link style="text-decoration: none; color: inherit;" to="/detail-artikel">
          <b>Dunia Metaverse telah release</b>
          </router-link>
          <td>Tema Artikel</td>
          <td>Artikel</td>
          <td>Tanggal Artikel</td>
        </div>
      </div>
    </div>

    <v-card class="my-5 d-flex mx-auto mt-5 align-center justify-space-between border-2 blue--text" max-width="150px" outlined height="30px">
        <td>First</td>
        <td>1</td>
        <td>2</td>
        <td>3</td>
        <td>Last</td>
    </v-card>

  </div>
</template>

<script>
</script>