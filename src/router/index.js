
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SeoPageTemplate from '../views/SeoPageTemplate.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView, meta: { title: 'LOGISTIQ | Platform Manajemen Logistik & Pengiriman' } },
  { path: '/aplikasi-pengiriman', component: SeoPageTemplate, meta: { pageTitle: 'Aplikasi Pengiriman Barang Terlengkap', title: 'Aplikasi Pengiriman Barang | LOGISTIQ' } },
  { path: '/software-logistik', component: SeoPageTemplate, meta: { pageTitle: 'Software Manajemen Logistik Operasional', title: 'Software Manajemen Logistik | LOGISTIQ' } },
  { path: '/software-trucking', component: SeoPageTemplate, meta: { pageTitle: 'Sistem Manajemen Armada Trucking', title: 'Software Trucking & Manajemen Armada | LOGISTIQ' } },
  { path: '/transportation', component: SeoPageTemplate, meta: { pageTitle: 'Transportation Management System', title: 'Transportation Management System | LOGISTIQ' } },
  { path: '/freight-forwarding', component: SeoPageTemplate, meta: { pageTitle: 'Infrastruktur Freight Forwarding', title: 'Software Freight Forwarding | LOGISTIQ' } },
  { path: '/warehouse', component: SeoPageTemplate, meta: { pageTitle: 'Warehouse Management System', title: 'Warehouse Management System | LOGISTIQ' } },
  { path: '/distribution', component: SeoPageTemplate, meta: { pageTitle: 'Optimasi Manajemen Distribusi B2B', title: 'Software Distribusi & Last-Mile Delivery | LOGISTIQ' } },
  { path: '/features', component: SeoPageTemplate, meta: { pageTitle: 'Fitur Sistem LOGISTIQ', title: 'Fitur Platform LOGISTIQ | LOGISTIQ' } },
  { path: '/pricing', component: SeoPageTemplate, meta: { pageTitle: 'Investasi Harga Logistik', title: 'Harga & Paket Langganan | LOGISTIQ' } },
  { path: '/about', component: SeoPageTemplate, meta: { pageTitle: 'Tentang Misi Kami', title: 'Tentang LOGISTIQ | LOGISTIQ' } },
  { path: '/contact', component: SeoPageTemplate, meta: { pageTitle: 'Hubungi Tim Penjualan', title: 'Kontak LOGISTIQ | LOGISTIQ' } },
  { path: '/blog', component: SeoPageTemplate, meta: { pageTitle: 'Kumpulan Edukasi Logistik', title: 'Logistics Blog & Insights | LOGISTIQ' } },
  { path: '/privacy-policy', component: SeoPageTemplate, meta: { pageTitle: 'Kebijakan Privasi', title: 'Privacy Policy | LOGISTIQ' } },
  { path: '/terms-of-service', component: SeoPageTemplate, meta: { pageTitle: 'Syarat dan Ketentuan', title: 'Terms of Service | LOGISTIQ' } }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth', top: 50 }
    }
    return { top: 0, behavior: 'smooth' }
  }
})

// Dynamic title updates
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'LOGISTIQ - Platform Logistik';
  next();
})

export default router
