<template>
  <div class="seo-landing-page">
    
    <!-- Dynamic Semantic Hero -->
    <section class="seo-hero">
      <div class="container hero-grid">
        <div class="hero-copy">
          <h1 class="hero-title">{{ dynamicHeading }}</h1>
          <p class="hero-desc">{{ route.meta.desc }}</p>
          <div class="actions">
            <a href="/#contact" class="btn blue solid">Diskusikan Kebutuhan Anda</a>
            <router-link to="/" class="btn outline outline-btn ml-3" style="display:inline-block">Kembali ke Beranda</router-link>
          </div>
        </div>
        <div class="hero-visual">
           <!-- High-performance semantic image placeholder (lazy load recommended for real production) -->
           <img src="/VisualUtama.jpg" :alt="dynamicHeading" class="shadow-lg hero-img" loading="lazy" />
        </div>
      </div>
    </section>

    <!-- Technical SEO Generic Value Propostions (Semantic HTML) -->
    <section class="seo-content container pt-5 pb-5">
      <h2 class="section-heading text-center">Kenapa Tim Operasional Anda Membutuhkannya?</h2>
      <div class="benefits-grid mt-4">
         <div class="benefit-card shadow-sm">
            <div class="b-icon">⚙️</div>
            <h3>Automasi Terpusat</h3>
            <p>Hilangkan pekerjaan manual dan kumpulan spreadsheet terpecah antar departemen dengan sinkronisasi data yang mulus.</p>
         </div>
         <div class="benefit-card shadow-sm">
            <div class="b-icon">📊</div>
            <h3>Visibilitas Lengkap</h3>
            <p>Kendalikan pergerakan aset logistik, armada, hingga margin profit dengan satu dashboard interaktif dan cerdas.</p>
         </div>
         <div class="benefit-card shadow-sm">
            <div class="b-icon">🚀</div>
            <h3>Skalabel & Adaptif</h3>
            <p>Fondasi teknologi Enterprise yang dirancang kokoh untuk tumbuh seiring melesatnya volume jaringan ekspedisi Anda.</p>
         </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

// Extract exactly the main intent keyword from the Title by splitting via the pipe | separator
const dynamicHeading = computed(() => {
  const title = route.meta.title || ''
  return title.split(' | ')[0].trim() || title.split(' — ')[0].trim() || 'Logistics Operations'
})

</script>

<style scoped>
.seo-landing-page { 
  /* Push past fixed AppHeader */
  padding-top: 120px; 
  padding-bottom: 80px; 
  background: #f8fafc;
  min-height: calc(100vh - 300px);
}
.seo-hero { padding: 40px 0 60px; }
.hero-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 50px; align-items: center; }
.hero-title { font-size: 46px; font-weight: 800; color: #0f172a; line-height: 1.15; margin-bottom: 20px; letter-spacing:-0.5px;}
.hero-desc { font-size: 18px; color: #64748b; margin-bottom: 35px; line-height: 1.7; }
.hero-img { width: 100%; border-radius: 12px; object-fit: cover; border: 1px solid #e2e8f0; }

.btn.blue {
  background: #0f4c81;
  color: #fff;
  padding: 13px 26px;
  border-radius: 8px;
  font-weight: 700;
  text-decoration: none;
  display: inline-block;
  transition: all 0.2s;
}
.btn.blue:hover { background: #0b192c; }
.btn.outline {
  background: white;
  color: #0f4c81;
  border: 1px solid #cbdcf0;
  padding: 13px 26px;
  border-radius: 8px;
  font-weight: 700;
  text-decoration: none;
  transition: all 0.2s;
}
.btn.outline:hover { background: #f1f5f9; }

.section-heading { font-weight: 800; font-size: 32px; color: #0f172a; margin-bottom:30px; letter-spacing:-0.5px;}
.benefits-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 30px; }
.benefit-card { background: white; padding: 40px 30px; border-radius: 12px; border: 1px solid #e2e8f0; transition: transform 0.3s ease; }
.benefit-card:hover { transform: translateY(-5px); box-shadow: 0 15px 35px rgba(15,23,42,0.05); }
.b-icon { font-size: 30px; margin-bottom: 15px; }
.benefit-card h3 { font-size: 20px; font-weight: 800; color: #0b192c; margin-bottom: 12px; }
.benefit-card p { color: #64748b; font-size: 15px; margin: 0; line-height: 1.6; }

@media (max-width: 950px) {
  .hero-grid { grid-template-columns: 1fr; text-align: center;  }
  .actions { justify-content: center; display: flex; flex-direction: column; gap: 15px; }
  .btn.outline { margin-left: 0 !important; }
  .hero-title { font-size: 36px; }
}

@media (max-width: 768px) {
  .benefits-grid { grid-template-columns: 1fr; }
}
</style>
