import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProfilJurusan from '../views/ProfilJurusan.vue'
import ProfilProdi from '../views/ProfilProdi.vue'
import AgendaView from '../views/AgendaView.vue'
import AgendaViewDetails from '../views/AgendaViewDetails.vue'
import DaftarPrestasi from '../views/DaftarPrestasi.vue'
import StrukturMataKuliah from '../views/StrukturMataKuliah.vue'
import InfoKerjasama from '../views/InfoKerjasama.vue'
import ArtikelView from '../views/ArtikelView.vue'
import DetailArtikel from '../views/DetailArtikel.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/profil-jurusan',
    name: 'profiljurusan',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: ProfilJurusan
  },
  {
    path: '/profil-prodi',
    name: 'profilprodi',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: ProfilProdi
  },
  {
    path: '/agenda',
    name: 'agendaview',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: AgendaView
  },
  {
    path: '/agenda/agenda-details',
    name: 'agendaviewdetails',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: AgendaViewDetails
  },
  {
    path: '/artikel',
    name: 'artikel',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: ArtikelView
  },
  {
    path: '/detail-artikel',
    name: 'detailartikel',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: DetailArtikel
  },
  {
    path: '/daftar-prestasi',
    name: 'daftarprestasi',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: DaftarPrestasi
  },
  {
    path: '/struktur-mata-kuliah',
    name: 'strukturmatakuliah',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: StrukturMataKuliah
  },
  {
    path: '/info-kerjasama',
    name: 'infokerjasama',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: InfoKerjasama
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
