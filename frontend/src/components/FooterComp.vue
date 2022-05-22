<template>
  <v-footer
    color="#E8F9FD"
    padless
    class="d-flex flex-row justify-space-between"
  >
    <v-card
      color="#E8F9FD"
      class="elevation-0"
      width="228"
    >
        <v-card-title
          class="pb-0"
        >
        Address</v-card-title>
        <v-card-text
          class="ma-0 text-subtitle-1 black--text py-0"
          style="line-height: 1rem;"
        >
            Jalan Ciwaruga no.11 Kecamatan Cimahi Kabupaten Bandung
        </v-card-text>
    </v-card>
    <v-card
      color="#E8F9FD"
      class="elevation-0"
    >
        <v-card-title>
            Contact
        </v-card-title>
        <v-card-text>
              <div
                class="d-flex flex-row"
              >
                  <v-img
                      lazy-src="../assets/logo-mail.png"
                      max-height="18"
                      max-width="18"
                      src="../assets/logo-mail.png"
                      class="mr-3"
                  >
                    </v-img>
                  <p class="text-subtitle-1 black--text py-0 my-0">jtk@polban.ac.id</p>
              </div>
              <div
                class="d-flex flex-row"
              >
                  <v-img
                      lazy-src="../assets/logo-phone.png"
                      max-height="18"
                      max-width="18"
                      src="../assets/logo-phone.png"
                      class="mr-3"
                  >
                    </v-img>
                  <p class="text-subtitle-1 black--text">081 222 999 123</p>
              </div>
        </v-card-text>
    </v-card>
    <v-card
      color="#E8F9FD"
      class="elevation-0"
    >
        <v-card-title>
            Follow our social media:
        </v-card-title>
        <div
          class="d-flex flex-row ml-3"
        >
          <img src="../assets/logo-fb.png" alt="" width="37" height="37" class="mr-2">
          <img src="../assets/logo-tw.png" alt="" width="37" height="37" class="mr-2">
          <img src="../assets/logo-ig.png" alt="" width="37" height="37" class="mr-2">
          <img src="../assets/logo-line.png" alt="" width="37" height="37" class="mr-2">
          <img src="../assets/logo-yt.png" alt="" width="37" height="37" class="mr-2">
        </div>
    </v-card>
  </v-footer>
</template>

<script>
  export default {
    data: () => ({
      selectedItem: 1,
      items: [
        { text: 'jtk@polban.ac.id', icon: '../assets/logo-mail.png' },
        { text: '081 222 999 123', icon: '../assets/logo-phone.png' },
      ],
    }),
  }
</script>