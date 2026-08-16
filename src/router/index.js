
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SeoPageTemplate from '../views/SeoPageTemplate.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView, meta: { title: 'LOGISTIQ | Platform Manajemen Logistik & Pengiriman', desc: 'LOGISTIQ adalah platform manajemen logistik dan pengiriman terintegrasi untuk mengelola customer, order, jadwal armada, tracking, invoice, biaya, dan profit.' } },
  { path: '/aplikasi-pengiriman', component: SeoPageTemplate, meta: { title: 'Aplikasi Pengiriman Barang | LOGISTIQ', desc: 'LOGISTIQ adalah aplikasi pengiriman barang untuk mengelola customer, order, jadwal pengiriman, armada, tracking, invoice, biaya, dan profit dalam satu platform.' } },
  { path: '/software-logistik', component: SeoPageTemplate, meta: { title: 'Software Manajemen Logistik | LOGISTIQ', desc: 'Kelola operasional logistik, customer, order, delivery, biaya, invoice, dan profitability dalam satu platform terintegrasi bersama LOGISTIQ.' } },
  { path: '/software-trucking', component: SeoPageTemplate, meta: { title: 'Software Trucking & Manajemen Armada | LOGISTIQ', desc: 'Transportation Management System (TMS) untuk kebutuhan ekspedisi truk dan manajemen armada muatan Anda.' } },
  { path: '/transportation', component: SeoPageTemplate, meta: { title: 'Transportation Management System | LOGISTIQ', desc: 'Atur jadwal kirim, lacak kendaraan, dan kelola invoice dalam satu pilar Transportasi LOGISTIQ.' } },
  { path: '/freight-forwarding', component: SeoPageTemplate, meta: { title: 'Software Freight Forwarding | LOGISTIQ', desc: 'Sistem operasional menyeluruh untuk bisnis Freight Forwarding, ekspor, dan impor.' } },
  { path: '/warehouse', component: SeoPageTemplate, meta: { title: 'Warehouse Management System | LOGISTIQ', desc: 'Pantau ketersediaan barang, tata letak logistik gudang, dan inbound/outbound material dengan mulus.' } },
  { path: '/distribution', component: SeoPageTemplate, meta: { title: 'Software Distribusi & Last-Mile Delivery | LOGISTIQ', desc: 'Jangkau pelanggan dengan rute optimal dan bukti kirim elektronik (POD) di LOGISTIQ Distribusi.' } },
  { path: '/features', component: SeoPageTemplate, meta: { title: 'Fitur Platform LOGISTIQ | LOGISTIQ', desc: 'Pelajari fitur dari lini Sales, Operations, Finance, dan Management.' } },
  { path: '/pricing', component: SeoPageTemplate, meta: { title: 'Harga & Paket Langganan | LOGISTIQ', desc: 'Pilihan investasi berlangganan sistem SaaS LOGISTIQ yang sesuai untuk kebutuhan ragam ukuran bisnis.' } },
  { path: '/about', component: SeoPageTemplate, meta: { title: 'Tentang LOGISTIQ | LOGISTIQ', desc: 'Kami membangun sistem operasi mutlak untuk memecahkan beban operasional rantai pasok Anda.' } },
  { path: '/contact', component: SeoPageTemplate, meta: { title: 'Kontak LOGISTIQ | LOGISTIQ', desc: 'Hubungi tim ahli logistik kami untuk memulai uji coba demonstrasi (Request Demo) hari ini.' } },
  { path: '/blog', component: SeoPageTemplate, meta: { title: 'Logistics Blog & Insights | LOGISTIQ', desc: 'Baca panduan ahli mengenai TMS, rasio laba logistik, dan pengelolaan supir truk.' } },
  { path: '/privacy-policy', component: SeoPageTemplate, meta: { title: 'Privacy Policy | LOGISTIQ', desc: 'Kebijakan privasi bagaimana platform LOGISTIQ mengelola data berharga korporat Anda secara rahasia dan aman.' } },
  { path: '/terms-of-service', component: SeoPageTemplate, meta: { title: 'Terms of Service | LOGISTIQ', desc: 'Syarat dan Ketentuan layanan perangkat lunak (SaaS) LOGISTIQ untuk operasi Anda.' } }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth', top: 50 };
    }
    return { top: 0, left: 0, behavior: 'smooth' };
  }
})

// Dynamic title, meta description & canonical
router.beforeEach((to, from, next) => {
  // 1. Title
  document.title = to.meta.title || 'LOGISTIQ';
  
  // 2. Meta Description
  let metaDesc = document.querySelector('meta[name="description"]');
  if (!metaDesc) {
    metaDesc = document.createElement('meta');
    metaDesc.setAttribute('name', 'description');
    document.head.appendChild(metaDesc);
  }
  metaDesc.setAttribute('content', to.meta.desc || '');

  // 3. Canonical URL
  let linkCanonical = document.querySelector('link[rel="canonical"]');
  if (!linkCanonical) {
    linkCanonical = document.createElement('link');
    linkCanonical.setAttribute('rel', 'canonical');
    document.head.appendChild(linkCanonical);
  }
  // Construct production URL
  const pathPart = to.path === '/' ? '' : to.path;
  linkCanonical.setAttribute('href', 'https://logistiq.id' + pathPart);

  next();
})

export default router
