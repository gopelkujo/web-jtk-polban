<template>
  <div
    class="pa-0 ma-0"
  >
    <v-card
      class="elevation-0 mx-auto my-5"
      max-width="1292"
      max-height="426"
    >
      <v-img
        src="../assets/background-header-lp.png"
      >
        <v-card
          class="elevation-0 ml-6 text-h2 white--text font-weight-bold text-center"
          max-width="657"
          max-height="121"
          style="background: #2155CD; margin-top: 213px"
        >
          <p
            class="mx-auto py-6 text-h2 white--text font-weight-bold"
          >
          Pendopo Direnovasi!
          </p>
        </v-card>
      </v-img>
    </v-card>
    <v-card
      class="d-flex flex-row mx-auto mt-16 elevation-0"
      max-width="1292px"
    >
      <v-card
        class="elevation-0"
        width="907px"
      >
        <p class="text-h4 text-center">
          ARTIKEL
        </p>
        <v-card
          class="d-flex flex-row  elevation-0"
        >
          <v-card
            v-for="(artikel, i) in artikels"
            :key="i"
            class="mr-5 elevation-0 artikel"
            width="288"
          >
            <a href="#" class="text-decoration-none black--text">
              <v-img
                :lazy-src="getImgUrl(artikel.img)"
                :src="getImgUrl(artikel.img)"
                class="grey lighten-2"
              >
              </v-img>
              <v-card-title
                class="text-h4 text-center text-wrap artikel"
              >
                {{ artikel.judul }}
              </v-card-title>
            </a>
          </v-card>
        </v-card>
        <v-card
          class="d-flex justify-end elevation-0 mt-10 artikel"
        >
          <a href="#" class="text-decoration-none text-uppercase">Lebih banyak <v-icon small color="white">mdi-arrow-right</v-icon></a>
        </v-card>
      </v-card>
      <v-card
        width="346px"
        height="516px"
        color="#0AA1DD"
        class="white--text ml-9"
        style="border-radius: 10px;"
      >
        <v-card
          class="elevation-0 d-flex flex-row justify-space-between white--text sidebar mx-auto align-center mt-7 mb-5"
          color="#0AA1DD"
          width="315px"
          height="39px"
        >
          <v-card-title class="font-weight-bold px-0" style="font-size: 2rem">
            AGENDA
          </v-card-title>
          <a href="#" class="text-uppercase font-weight-bold">lebih banyak <v-icon small color="white">mdi-arrow-right</v-icon></a> 
        </v-card>
        <v-card
          v-for="(event, i) in events"
          :key="i"
          class="d-flex flex-row mx-auto elevation-0 mt-7"
          max-width="313px"
          max-height="76px"
          color="#0AA1DD"
        >
          <v-card
            width="70px"
            height="76px"
            class="d-flex flex-column black--text elevation-0 pa-0"
            color="#79DAE8"
          >
            <p class="text-h5 pa-0 mt-1 text-center font-weight-bold text-uppercase">{{ event.bulan }}</p>
            <p class="pa-0 mt-n7 text-center font-weight-bold" style="font-size: 40px;">{{ event.tgl }}</p>
          </v-card>
          <v-card
            class="elevation-0 pa-0 ma-0 ml-2 white--text"
            color="#0AA1DD"
            max-width="205px"
          >
            <p class="font-weight-bold pa-0 ma-0" style="font-size: 28px">{{ event.judul }}</p>
            <p class="pa-0 ma-0 text-truncate">{{ event.desk }}</p>
          </v-card>
        </v-card>
      </v-card>
    </v-card>
    <v-card
      class="mt-10 mx-auto elevation-0"
      max-width="1284px"
    >
      <a href="#">
        <v-img
          class="white--text align-center"
          width="1284px"
          height="402px"
          src="../assets/fasilitas-background.png"
        >
          <v-card-title class="text-uppercase justify-center" style="font-size: 36px">Fasilitas</v-card-title>
        </v-img>
      </a>
  </v-card>

  <v-card class="mt-10 elevation-0 mx-auto" max-width="1284px">
    <v-card-title class="text-uppercase font-weight-bold pl-0 pb-6" style="font-size: 32px">Gallery</v-card-title>

    <v-carousel hide-delimiters> 
      <template v-for="(item, index) in carouselImg"> 
        <v-carousel-item 
          v-if="(index + 1) % columns === 1 || columns === 1" 
          :key="index"
        > 
          <v-row class="flex-nowrap" style="height:100%"> 
            <template v-for="(n,i) in columns"> 
              <template v-if="(+index + i) < carouselImg.length"> 
                <v-col :key="i"> 
                  <v-img 
                  v-if="(+index + i) < carouselImg.length" 
                  :src="getImgUrl(carouselImg[+index + i].src)"
                  aspect-ratio="1"
                  >
                  </v-img>
                </v-col> 
              </template> 
            </template> 
          </v-row> 
        </v-carousel-item> 
      </template> 
    </v-carousel>  
  </v-card>
  </div>
</template>

<style scoped>
a {text-decoration: none;}
.artikel {
  word-break: keep-all;
  color: black;
}
.artikel:hover {
  color: #2196F3;
}

.artikel a {
  color: black;
}

.artikel a:hover {
  color: #2196F3;
}

.sidebar a {
  color: white;
  text-decoration: none;
}
.sidebar a:hover {
  color: #2155CD;
}
</style>

<script>
  export default {
    name: 'HomeView',
    data: () => ({
      selectedItem: 1,
      artikels: [
        { 
          judul: 'JTK Juara 1 Lomba Blog', 
          img: 'post-1.png',
          url: '#'
        },
        { 
          judul: 'Jurnal Ilmiah Oleh Dosen JTK', 
          img: 'post-2.png',
          url: '#'
        },
        { 
          judul: 'Dunia Metaverse Telah Release', 
          img: 'post-3.png',
          url: '#'
        },
      ],
      events: [
        {
          judul: 'Seminar Dosen',
          desk: 'Seminar daring oleh dosen tamu',
          bulan: 'mei',
          tgl: '10'
        },
        {
          judul: 'ETS JTK',
          desk: 'Evaluasi Tengah Semester JTK POLBAN',
          bulan: 'mei',
          tgl: '15'
        },
        {
          judul: 'Wisuda',
          desk: 'Wisuda luring 2022',
          bulan: 'mei',
          tgl: '25'
        },
        {
          judul: 'EAS JTK',
          desk: 'Evaluasi Akhir Semester JTK POLBAN',
          bulan: 'mei',
          tgl: '28'
        }
      ],
      model: 0,
      colors: [
        'primary',
        'secondary',
        'yellow darken-2',
        'red',
        'orange',
      ],
      carouselImg: [
        {
          src: 'gallery-1.png',
        },
        {
          src: 'gallery-2.png',
        },
        {
          src: 'gallery-3.png',
        },
        {
          src: 'gallery-4.png',
        },
        {
          src: 'gallery-4.png',
        },
        {
          src: 'gallery-4.png',
        },
      ],
      slider: [
        "red", 
        "green", 
        "orange", 
        "blue", 
        "pink", 
        "purple", 
        "indigo", 
        "cyan", 
        "deep-purple", 
        "light-green", 
        "deep-orange", 
        "blue-grey"
      ]
    }),
    methods: {
      getImgUrl(pic) {
        return require('../assets/' + pic)
      }
    },
    computed: {
      columns() {
        if (this.$vuetify.breakpoint.xl) {
          return 4;
        }

        if (this.$vuetify.breakpoint.lg) {
          return 3;
        }

        if (this.$vuetify.breakpoint.md) {
          return 2;
        }

        return 1;
      }
    },
  }
</script>
