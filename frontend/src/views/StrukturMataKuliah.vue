<template>

  <div>
    <v-card>
      <v-img src="../assets/struktur_mata_kuliah 1.png"
      class="white--text align-end"
      >

        <v-card
        color="#165687"
        maxWidth="595"
        maxheight="72"
        class="white--text"
        >
          <v-card-title
          ><h3 class="font-weight-medium">STRUKTUR MATA KULIAH</h3></v-card-title>
        </v-card>
      </v-img>
    </v-card>
    
      <v-card 
      maxWidth="1400"
      class="mx-auto mt-3 elevation-0 corner-radius-0"
      >
      <v-card
    maxWidth="306"
    maxHeight="38"
    class="elevation-0 ml-0"
    >
      <v-select
    :items="kurikulum"
    label="Kurikulum"
    outlined
    >
    </v-select>
    </v-card>
      <v-card-title class="mt-3"><h5>D-III Teknik Informatika</h5></v-card-title>
        <v-table>
        <v-data-table
         dense
        :headers="headers"
        :items="no"
        item-key="no"
        class="elevation-1"
        >
        </v-data-table>

        <v-card-title><h5>D-IV Teknik Informatika</h5></v-card-title>
        </v-table>
        <v-table>
        <v-data-table
         dense
        :headers="headers"
        :items="no"
        item-key="no"
        class="elevation-1"
        >
        </v-data-table>
      </v-table>
      </v-card>
    </div>
</template>

<script>
export default {
    data: () => ({
      no: [
        {
          no: 1,
          semester: 1,
          kodeMataKuliah: '16TIN6001',
          namaMataKuliah: 'Dasar Pemrograman',
        },
        {
          no: 2,
          semester: 1,
          kodeMataKuliah: '16TIN6001',
          namaMataKuliah: 'Aljabar Linear',
        },
        {
          no: 3,
          semester: 1,
          kodeMataKuliah: '16TIN6001',
          namaMataKuliah: 'Dasar Pemrograman',
        },
        {
          no: 4,
          semester: 1,
          kodeMataKuliah: '16TIN6001',
          namaMataKuliah: 'Dasar Pemrograman',
        },
        {
          no: 5,
          semester: 1,
          kodeMataKuliah: '16TIN6001',
          namaMataKuliah: 'Dasar Pemrograman',
        },
        {
          no: 6,
          semester: 1,
          kodeMataKuliah: '16TIN6001',
          namaMataKuliah: 'Dasar Pemrograman',
        },
        {
          no: 7,
          semester: 1,
          kodeMataKuliah: '16TIN6001',
          namaMataKuliah: 'Dasar Pemrograman',
        },
      ],
      headers: [
        {
          text: 'No',
          align: 'start',
          sortable: false,
          value: 'no',
        },
        { text: 'Semester', value: 'semester' },
        { text: 'Kode Mata Kuliah', value: 'kodeMataKuliah' },
        { text: 'Nama Mata Kuliah', value: 'namaMataKuliah' },
      ],
    }),

    data1: () => ({
     kurikulum: ['Kurikulum 2016', 'Bar', 'Fizz', 'Buzz'],
    }),
  }
</script>
