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
    <div>
      <v-card
        class="align-center justify-space-between elevation-0 pa-0 mx-auto mt-8"
        max-width="1334px"
      >
        <div class="font-weight-bold text-h5">Seminar Dosen</div>
      </v-card>
      <v-card
        class="
          d-flex
          flex-row
          elevation-0
          mx-auto
          mt-5
          justify-space-between
        "
        max-width="1334px"
        height="auto"
      >
        <div class="d-flex flex-row">
          <div class="font-weight-bold">
            <p class="mb-3">Penyelenggara</p>
            <p class="mb-3">Tanggal Agenda</p>
            <p class="mb-3">Waktu Agenda</p>
            <p class="mb-3">Tempat Agenda</p>
            <p class="mb-3">Tipe Agenda</p>
            <p>Cara Daftar</p>
          </div>
          <div class="font-weight-bold ml-4">
            <p class="mb-3">:</p>
            <p class="mb-3">:</p>
            <p class="mb-3">:</p>
            <p class="mb-3">:</p>
            <p class="mb-3">:</p>
            <p>:</p>
          </div>
          <div class="ml-16">
            <p class="mb-3">Rafi Erikamil</p>
            <p class="mb-3">17 Agustus 1945</p>
            <p class="mb-3">00.00 - 06.00 WIB</p>
            <p class="mb-3">Jalan Murni No. 18</p>
            <p class="mb-3">Rapat</p>
            <p>-</p>
          </div>
        </div>
        <div>
          <img
            src="../assets/image_agenda_1_potrait.png"
            alt="image-agenda-1-potrait"
          />
        </div>
      </v-card>
      <v-card class="mx-auto mt-4 elevation-0" width="1334px">
        <p class="text-justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
          tristique justo justo. In hac habitasse platea dictumst. Integer
          ultricies, tellus sit amet consectetur placerat, justo nisl auctor
          lorem, quis accumsan ligula nisi sit amet elit. Ut et libero
          tincidunt, elementum magna non, tincidunt lorem. Aenean hendrerit diam
          eu tortor pulvinar, at malesuada tellus pretium. Maecenas quis sem id
          mauris lacinia commodo nec nec est. Vestibulum et facilisis odio, at
          congue neque. Ut nec luctus eros. Maecenas lacus libero, molestie nec
          consectetur nec, porta quis nisi. Vestibulum tristique enim nec diam
          semper rutrum. Aenean volutpat vestibulum odio mattis sollicitudin.
          Morbi semper, tellus sit amet condimentum tincidunt, felis urna
          pharetra leo, ac mattis dolor quam ut leo. Aenean consequat rutrum
          risus at venenatis. Donec dui mi, interdum sit amet mollis nec, congue
          eget nibh.
        </p>
        <p class="text-justify">
          Morbi eget fringilla nisl. Aenean non lacus magna. Nunc gravida
          scelerisque sodales. Phasellus vel tellus nec ante lobortis ornare.
          Quisque sit amet odio ac nisl porta faucibus eu non justo. In aliquet
          eu diam id convallis. Morbi sit amet quam et purus suscipit porttitor
          quis sit amet odio.
        </p>
        <p class="text-justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
          tristique justo justo. In hac habitasse platea dictumst. Integer
          ultricies, tellus sit amet consectetur placerat, justo nisl auctor
          lorem, quis accumsan ligula nisi sit amet elit. Ut et libero
          tincidunt, elementum magna non, tincidunt lorem. Aenean hendrerit diam
          eu tortor pulvinar, at malesuada tellus pretium. Maecenas quis sem id
          mauris lacinia commodo nec nec est. Vestibulum et facilisis odio, at
          congue neque. Ut nec luctus eros. Maecenas lacus libero, molestie nec
          consectetur nec, porta quis nisi. Vestibulum tristique enim nec diam
          semper rutrum. Aenean volutpat vestibulum odio mattis sollicitudin.
          Morbi semper, tellus sit amet condimentum tincidunt, felis urna
          pharetra leo, ac mattis dolor quam ut leo. Aenean consequat rutrum
          risus at venenatis. Donec dui mi, interdum sit amet mollis nec, congue
          eget nibh.
        </p>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "AgendaViewDetails",
};
</script>