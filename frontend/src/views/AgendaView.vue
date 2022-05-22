<template>
  <div>
    <v-card
      class="
        d-flex
        blue
        accent-4
        align-center
        justify-space-between
        pa-4
        mx-auto
        mt-11
      "
      height="255px"
      max-width="1334px"
      outlined
    >
      <div class="ml-9 my-auto">
        <img src="../assets/logo_agenda.png" alt="logo_agenda" />
      </div>
      <div class="'text-${model}' text-h2 white--text mr-16">AGENDA</div>
    </v-card>
    <v-card
      class="
        d-flex
        flex-row
        elevation-0
        white
        justify-space-between
        align-start
        pa-0
        mx-auto
        mt-13
      "
      max-width="1334px"
    >
      <div>
        <v-card
          class="elevation-0 border-radius-10"
          max-width="304px"
        >
          <img src="../assets/image_agenda_1.png" alt="image_agenda" class= />
          <a href="#" class="text-decoration-none text-h6"> Seminar Dosen </a>
          <p class="font-weight-bold">Senin, 18 April 2022</p>
          <p class="text-justify mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            pretium sit amet leo nec lacinia. Vivamus ut lorem non mauris
            vehicula ultrices. Donec scelerisque congue maximus. Sed risus
            lorem, molestie sit amet porta ut, facilisis nec purus. Phasellus
            volutpat porttitor volutpat. Pellentesque feugiat ullamcorper
            hendrerit. Interdum et malesuada fames ac ante ipsum primis in
            faucibus.
          </p>
        </v-card>
      </div>
      <div>
        <v-card
          class="elevation-0 border-radius-10"
          height="144px"
          max-width="304px"
        >
          <img src="../assets/image_agenda_2.png" alt="image_agenda" class= />
          <a href="#" class="text-decoration-none text-h6"> ETS JTK </a>
          <p class="font-weight-bold">Selasa, 19 April 2022</p>
          <p class="text-justify mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            pretium sit amet leo nec lacinia. Vivamus ut lorem non mauris
            vehicula ultrices. Donec scelerisque congue maximus. Sed risus
            lorem, molestie sit amet porta ut, facilisis nec purus. Phasellus
            volutpat porttitor volutpat. Pellentesque feugiat ullamcorper
            hendrerit. Interdum et malesuada fames ac ante ipsum primis in
            faucibus.
          </p>
        </v-card>
      </div>
      <div>
        <v-card
          class="elevation-0 border-radius-10"
          height="144px"
          max-width="304px"
        >
          <img src="../assets/image_agenda_3.png" alt="image_agenda" class= />
          <a href="#" class="text-decoration-none text-h6"> Wisuda </a>
          <p class="font-weight-bold">Rabu, 20 April 2022</p>
          <p class="text-justify mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            pretium sit amet leo nec lacinia. Vivamus ut lorem non mauris
            vehicula ultrices. Donec scelerisque congue maximus. Sed risus
            lorem, molestie sit amet porta ut, facilisis nec purus. Phasellus
            volutpat porttitor volutpat. Pellentesque feugiat ullamcorper
            hendrerit. Interdum et malesuada fames ac ante ipsum primis in
            faucibus.
          </p>
        </v-card>
      </div>
      <div>
        <v-card
          class="elevation-0 border-radius-10"
          height="144px"
          max-width="304px"
        >
          <img src="../assets/image_agenda_4.png" alt="image_agenda" class= />
          <a href="#" class="text-decoration-none text-h6"> EAS JTK </a>
          <p class="font-weight-bold">Kamis, 21 April 2022</p>
          <p class="text-justify mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            pretium sit amet leo nec lacinia. Vivamus ut lorem non mauris
            vehicula ultrices. Donec scelerisque congue maximus. Sed risus
            lorem, molestie sit amet porta ut, facilisis nec purus. Phasellus
            volutpat porttitor volutpat. Pellentesque feugiat ullamcorper
            hendrerit. Interdum et malesuada fames ac ante ipsum primis in
            faucibus.
          </p>
        </v-card>
      </div>
    </v-card>
    <v-card
    class="elevation-0 border-radius-10 mx-auto mt-16"
      width="250px"
      height="57px"
      outlined
    >
      <div class="text-center mt-0">
        <v-pagination v-model="page" :length="3"> </v-pagination>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "AgendaView",
};
</script>