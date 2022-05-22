<template>
  <v-app>
    <NavbarComp/>
    <v-main>
      <router-view/>
    </v-main>
    <FooterComp/>
  </v-app>
</template>

<script>
import NavbarComp from './components/NavbarComp'
import FooterComp from './components/FooterComp';

export default {
  name: 'App',
  components: {
    NavbarComp,
    FooterComp
},
  data: () => ({
    //
  }),
};
</script>
