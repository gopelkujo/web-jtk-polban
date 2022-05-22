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
        <img
          src="../assets/logo_daftar_prestasi.png"
          alt="logo_daftar_prestasi"
        />
      </div>
      <div class="'text-${model}' text-h2 white--text mr-16">
        DAFTAR PRESTASI
      </div>
    </v-card>
        <div style="margin: 50px">
            <template>
                <v-simple-table height="300px">
                    <template v-slot:default>
                    <thead style="background-color: #349DFE;">
                        <tr>
                        <th class="text-left" style="color: black;">
                            No
                        </th>
                        <th class="text-left" style="color: black;">
                            Nama Kegiatan
                        </th>
                        <th class="text-left" style="color: black;">
                            Nama Mahasiswa(NIM)
                        </th>
                        <th class="text-left" style="color: black;">
                            Tingkat
                        </th>
                        <th class="text-left" style="color: black;">
                            Predikat
                        </th>
                        <th class="text-left" style="color: black;">
                            Tahun
                        </th>
                        <th class="text-left" style="color: black;">
                            Artikel
                        </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr
                        v-for="item in desserts"
                        :key="item.name"
                        >
                        <td>{{ item.no }}</td>
                        <td>{{ item.nama_kegiatan }}</td>
                        <td>{{ item.nama_mahasiswa }}</td>
                        <td>{{ item.tingkat }}</td>
                        <td>{{ item.predikat }}</td>
                        <td>{{ item.tahun }}</td>
                        <td><a href="#" style="text-decoration:none;">Artikel</a></td>
                        </tr>
                    </tbody>
                    </template>
                </v-simple-table>
            </template>
        </div>
    <div class="text-center">
        <v-pagination
        v-model= "page"
        :length="3"
        ></v-pagination>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
            page: 1,
            desserts: [
            {
                no: 1,  
                nama_kegiatan: 'MARKISA 2020',
                nama_mahasiswa: 'Muhammad Rafi Kamil (191524009)',
                tingkat: 'Nasional',
                predikat: 'Juara 1',
                tahun: '2020'
            },
            {
                no: 2,  
                nama_kegiatan: 'MARKISA 2020',
                nama_mahasiswa: 'Muhammad Hasbi Islahi Azam (191524024)',
                tingkat: 'Nasional',
                predikat: 'Juara 2',
                tahun: '2020'
            },
            {
                no: 3,
                nama_kegiatan: 'MARKISA 2020',
                nama_mahasiswa: 'Mochamad Nauval Dwisatya (191524023)',
                tingkat: 'Nasional',
                predikat: 'Juara 3',
                tahun: '2020'
            },
            {
                no: 4,  
                nama_kegiatan: 'MARKISA 2020',
                nama_mahasiswa: 'Gemintang Sangkaji Furqon (191524009)',
                tingkat: 'Nasional',
                predikat: 'Juara Harapan 1',
                tahun: '2020'
            },
            {
                no: 5,  
                nama_kegiatan: 'KMIPN',
                nama_mahasiswa: 'Muhammad Rafi Kamil (191524009)',
                tingkat: 'Internasional',
                predikat: 'Juara Favorit',
                tahun: '2022'
            },
            {
                no: 6,  
                nama_kegiatan: 'MARKISA 2020',
                nama_mahasiswa: 'Gemintang Sangkaji Furqon (191524009)',
                tingkat: 'Nasional',
                predikat: 'Juara Harapan 1',
                tahun: '2020'
            },
        ],
      }
    },
  }
</script>