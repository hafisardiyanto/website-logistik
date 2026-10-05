import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SeoPageTemplate from '../views/SeoPageTemplate.vue'

// Admin Views
import AdminLayout from '../views/admin/AdminLayout.vue'
import AdminDashboard from '../views/admin/AdminDashboard.vue'
import AdminLogin from '../views/admin/AdminLogin.vue'

const routes = [
  // 1. HUB HOMEPAGE
  { path: '/', name: 'home', component: HomeView, meta: { title: 'LOGISTIQ — Software Manajemen Logistik & Platform Operasional', desc: 'LOGISTIQ adalah platform manajemen logistik untuk menghubungkan order, planning, dispatch, tracking, delivery, billing, fleet, warehouse, dan profitability dalam satu sistem.' } },

  // 2. PLATFORM MODULES (Keyword targeting specific software functions)
  { path: '/platform/order-management', component: SeoPageTemplate, meta: { title: 'Software Order Management Logistik | LOGISTIQ', desc: 'Kelola order masuk, pelanggan, dan penugasan secara terpusat dengan Software Order Management dari LOGISTIQ.' } },
  { path: '/platform/transportation-management', component: SeoPageTemplate, meta: { title: 'Transportation Management System (TMS) | LOGISTIQ', desc: 'Sistem manajemen transportasi (TMS) untuk planning armada, tracking, dan operasional pengiriman tanpa batas.' } },
  { path: '/platform/fleet-management', component: SeoPageTemplate, meta: { title: 'Fleet Management Software | LOGISTIQ', desc: 'Kelola jadwal kendaraan, konsumsi bahan bakar, dan kinerja pengemudi dengan platform manajemen armada (Fleet Management).' } },
  { path: '/platform/warehouse-management', component: SeoPageTemplate, meta: { title: 'Warehouse Management System (WMS) | LOGISTIQ', desc: 'Sistem manajemen gudang (WMS) untuk tracking pergerakan barang, inbound, dan outbound logistics.' } },
  { path: '/platform/tracking-pod', component: SeoPageTemplate, meta: { title: 'Software Tracking & Proof of Delivery | LOGISTIQ', desc: 'Lacak pengiriman dan terima bukti kirim (E-POD) secara real-time ke sistem utama Anda.' } },

  // 3. SOLUTIONS (Keyword targeting industry niches)
  { path: '/solutions/logistics-freight', component: SeoPageTemplate, meta: { title: 'Software Manajemen Logistik & Freight | LOGISTIQ', desc: 'Sistem logistik dan freight forwarding untuk perusahaan yang menginginkan skalabilitas tinggi dan kontrol maksimal.' } },
  { path: '/solutions/trucking', component: SeoPageTemplate, meta: { title: 'Aplikasi Trucking & Manajemen Ekspedisi | LOGISTIQ', desc: 'Aplikasi operasional trucking dan manajemen ekspedisi muatan yang terintegrasi penuh dari order hingga invoice.' } },
  { path: '/solutions/distribution', component: SeoPageTemplate, meta: { title: 'Software Manajemen Distribusi | LOGISTIQ', desc: 'Otomatisasi seluruh alur logistik bisnis distribusi ritel dan barang Anda hari ini dengan sistem LOGISTIQ.' } },
  { path: '/solutions/warehouse', component: SeoPageTemplate, meta: { title: 'Sistem Manajemen Gudang & Penyimpanan | LOGISTIQ', desc: 'Kelola penyimpanan komersial skala besar dengan visibilitas inventaris real-time (WMS).' } },
  { path: '/solutions/manufacturing', component: SeoPageTemplate, meta: { title: 'Software Logistik Industri Manufaktur | LOGISTIQ', desc: 'Hubungkan rantai pasok manufaktur dari pengelolaan bahan mentah hingga pengiriman ke titik distributor.' } },

  // 4. RESOURCES & COMPANY PAGES
  { path: '/integration', component: SeoPageTemplate, meta: { title: 'Integrasi Sistem Logistik (API & ERP) | LOGISTIQ', desc: 'Hubungkan LOGISTIQ dengan ekosistem bisnis dan ERP yang sudah Anda gunakan (SAP, Oracle, dsb).' } },
  { path: '/security', component: SeoPageTemplate, meta: { title: 'Keamanan Data Operasional Logistik | LOGISTIQ', desc: 'Standar kemanan enterprise tinggi untuk melindungi kerahasiaan data ekspedisi perusahaan.' } },
  { path: '/use-cases', component: SeoPageTemplate, meta: { title: 'Contoh Penggunaan Software Logistik | LOGISTIQ', desc: 'Simulasi penggunaan nyata platform LOGISTIQ dari order masuk hingga menjadi analisis profit.' } },
  { path: '/faq', component: SeoPageTemplate, meta: { title: 'FAQ LOGISTIQ | LOGISTIQ', desc: 'Pertanyaan teknis dan populer seputar platform manajemen logistik kami.' } },
  { path: '/request-demo', component: SeoPageTemplate, meta: { title: 'Dapatkan Demo LOGISTIQ | LOGISTIQ', desc: 'Hubungi konsultan kami untuk demonstrasi eksklusif software logistik modern hari ini.' } },

  // 5. ADMIN BACKOFFICE (Intact)
  { path: '/admin/login', name: 'adminLogin', component: AdminLogin, meta: { title: 'Admin Login | LOGISTIQ', desc: 'CMS Login for Admin' } },
  {
    path: '/admin',
    component: AdminLayout,
    meta: { requiresAuth: true },
    children: [
      { path: '', redirect: '/admin/dashboard' },
      { path: 'dashboard', name: 'adminDashboard', component: AdminDashboard, meta: { title: 'Admin Dashboard | LOGISTIQ' } },
      { path: 'services', name: 'adminServices', component: AdminDashboard, meta: { title: 'Manage Services | LOGISTIQ' } },
      { path: 'settings', name: 'adminSettings', component: AdminDashboard, meta: { title: 'Settings | LOGISTIQ' } },
      { path: 'orders', name: 'adminOrders', component: AdminDashboard, meta: { title: 'Job Orders | LOGISTIQ' } }
    ]
  }
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

// Dynamic title, meta description & SEO canonical injections
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'LOGISTIQ';

  // Update Meta Description dynamically
  let metaDesc = document.querySelector('meta[name="description"]');
  if (!metaDesc) {
    metaDesc = document.createElement('meta');
    metaDesc.setAttribute('name', 'description');
    document.head.appendChild(metaDesc);
  }
  metaDesc.setAttribute('content', to.meta.desc || '');

  // Update Canonical URL per page dynamic mapping
  let linkCanonical = document.querySelector('link[rel="canonical"]');
  if (!linkCanonical) {
    linkCanonical = document.createElement('link');
    linkCanonical.setAttribute('rel', 'canonical');
    document.head.appendChild(linkCanonical);
  }
  const pathPart = to.path === '/' ? '' : to.path;
  linkCanonical.setAttribute('href', 'https://logistiq.id' + pathPart);

  // Vue Authentication Guard for Admin CMS
  if (to.meta.requiresAuth) {
    const isAuthenticated = localStorage.getItem('adminAuth') === 'true';
    if (!isAuthenticated) return next('/admin/login');
  }
  next();
})

export default router
