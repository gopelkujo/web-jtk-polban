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
          src="../assets/logo_struktur_mk.png"
          alt="logo_struktur_mk"
        />
      </div>
      <div class="'text-${model}' text-h2 white--text mr-16">
        STRUKTUR MATA KULIAH
      </div>
    </v-card>
    <template>
      <div>
        <div style="margin-left: 10%; margin-top: 30px">
          <h3>
            Prodi D3
          </h3  >
        </div>
        <center>
        <div style="display: grid;  grid-template-columns: auto auto auto;gap: 20px 200px;">
            <ul style="list-style-type: none;">
              <li><h4>Semester 1</h4></li>
              <li>Matkul 1</li>
              <li>Matkul 2</li>
              <li>Matkul 3</li>
              <li>Matkul 4</li>
            </ul>
            <ul style="list-style-type: none;">
              <li><h4>Semester 2</h4></li>
              <li>Matkul 1</li>
              <li>Matkul 2</li>
              <li>Matkul 3</li>
              <li>Matkul 4</li>
            </ul>
            <ul style="list-style-type: none;">
              <li><h4>Semester 3</h4></li>
              <li>Matkul 1</li>
              <li>Matkul 2</li>
              <li>Matkul 3</li>
              <li>Matkul 4</li>
            </ul>
            <ul style="list-style-type: none;">
              <li><h4>Semester 4</h4></li>
              <li>Matkul 1</li>
              <li>Matkul 2</li>
              <li>Matkul 3</li>
              <li>Matkul 4</li>
            </ul>
            <ul style="list-style-type: none;">
              <li><h4>Semester 5</h4></li>
              <li>Matkul 1</li>
              <li>Matkul 2</li>
              <li>Matkul 3</li>
              <li>Matkul 4</li>
            </ul>
            <ul style="list-style-type: none;">
              <li><h4>Semester 6</h4></li>
              <li>Matkul 1</li>
              <li>Matkul 2</li>
              <li>Matkul 3</li>
              <li>Matkul 4</li>
            </ul>
          </div>
        </center>
        </div>
        <hr style="margin: 60px">
              <div>
        <div style="margin-left: 10%; margin-top: 30px">
          <h3>
            Prodi D4
          </h3  >
        </div>
        <center>
        <div style="display: grid;  grid-template-columns: auto auto auto auto;gap: 20px;">
            <ul style="list-style-type: none;">
              <li><h4>Semester 1</h4></li>
              <li>Matkul 1</li>
              <li>Matkul 2</li>
              <li>Matkul 3</li>
              <li>Matkul 4</li>
            </ul>
            <ul style="list-style-type: none;">
              <li><h4>Semester 2</h4></li>
              <li>Matkul 1</li>
              <li>Matkul 2</li>
              <li>Matkul 3</li>
              <li>Matkul 4</li>
            </ul>
            <ul style="list-style-type: none;">
              <li><h4>Semester 3</h4></li>
              <li>Matkul 1</li>
              <li>Matkul 2</li>
              <li>Matkul 3</li>
              <li>Matkul 4</li>
            </ul>
            <ul style="list-style-type: none;">
              <li><h4>Semester 4</h4></li>
              <li>Matkul 1</li>
              <li>Matkul 2</li>
              <li>Matkul 3</li>
              <li>Matkul 4</li>
            </ul>
            <ul style="list-style-type: none;">
              <li><h4>Semester 5</h4></li>
              <li>Matkul 1</li>
              <li>Matkul 2</li>
              <li>Matkul 3</li>
              <li>Matkul 4</li>
            </ul>
            <ul style="list-style-type: none;">
              <li><h4>Semester 6</h4></li>
              <li>Matkul 1</li>
              <li>Matkul 2</li>
              <li>Matkul 3</li>
              <li>Matkul 4</li>
            </ul>
            <ul style="list-style-type: none;">
              <li><h4>Semester 7</h4></li>
              <li>Matkul 1</li>
              <li>Matkul 2</li>
              <li>Matkul 3</li>
              <li>Matkul 4</li>
            </ul>
            <ul style="list-style-type: none;">
              <li><h4>Semester 8</h4></li>
              <li>Matkul 1</li>
              <li>Matkul 2</li>
              <li>Matkul 3</li>
              <li>Matkul 4</li>
            </ul>
          </div>
        </center>
        </div>
        
        <!-- <v-container
          v-for="align in alignments"
          :key="align"
          class="grey lighten-5 mb-6"
        >
          <v-row
            :align="align"
            no-gutters
            style="height: 150px;"
          >
            <v-col
              v-for="n in 4"
              :key="n"
            >
              <v-card
                class="pa-2"
                outlined
                tile
              >
                Matkul 1
              </v-card>

              <v-card
                class="pa-2"
                outlined
                tile
              >
                Matkul 2
              </v-card>
              <v-card
                class="pa-2"
                outlined
                tile
              >
                Matkul 3
              </v-card>
              <v-card
                class="pa-2"
                outlined
                tile
              >
                Matkul 4  
              </v-card>                            
            </v-col>
          </v-row>
        </v-container>

        <v-container class="grey lighten-5">
          <v-row
            no-gutters
            style="height: 150px;"
          >
            <v-col
              v-for="align in alignments"
              :key="align"
              :align-self="align"
            >
            </v-col>
          </v-row>
        </v-container>
        </div>-->
      
    </template> 
  </div>
</template>

<script>

</script>
