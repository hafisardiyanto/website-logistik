<template>
  <section class="faq text-center" id="faq">
    <div class="container container-md">
      
      <!-- FAQ Header -->
      <div class="reveal">
        <span class="faq-kicker">FAQ</span>
        <h2 class="faq-title">Pertanyaan tentang LOGISTIQ?</h2>
        <p class="faq-desc">Temukan jawaban atas pertanyaan mengenai platform, customization, integrasi, implementasi, dan penggunaan LOGISTIQ untuk operasional perusahaan Anda.</p>
      </div>

      <!-- FAQ Accordion List -->
      <div class="faq-list reveal delay2">
        <div 
          v-for="(item, index) in faqData" 
          :key="index"
          class="faq-item"
          :class="{ 'is-open': openIndex === index }"
        >
          <button class="faq-toggle" @click="toggleFaq(index)">
            {{ item.question }}
            <span class="faq-icon">{{ openIndex === index ? '−' : '+' }}</span>
          </button>
          <div class="faq-body">
            <div class="faq-content">
              <p>{{ item.answer }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Mini CTA -->
      <div class="faq-cta reveal delay3">
        <h4>Masih memiliki pertanyaan?</h4>
        <p>Diskusikan kebutuhan operasional perusahaan Anda bersama tim LOGISTIQ.</p>
        <a href="#contact" class="btn blue">Talk to Our Team →</a>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const openIndex = ref(null)

const toggleFaq = (idx) => {
  if (openIndex.value === idx) {
    openIndex.value = null
  } else {
    openIndex.value = idx
  }
}

const faqData = [
  {
    question: 'Apakah LOGISTIQ bisa disesuaikan dengan proses bisnis perusahaan?',
    answer: 'Ya. LOGISTIQ dapat disesuaikan dengan kebutuhan dan alur kerja operasional perusahaan. Setiap perusahaan dapat memiliki proses, struktur data, approval, dan kebutuhan reporting yang berbeda, sehingga konfigurasi dan pengembangan dapat disesuaikan berdasarkan kebutuhan tersebut.'
  },
  {
    question: 'Apakah LOGISTIQ dapat diintegrasikan dengan sistem yang sudah kami gunakan?',
    answer: 'Bisa. LOGISTIQ dapat dirancang untuk terhubung dengan sistem lain melalui API atau mekanisme pertukaran data sesuai kebutuhan dan arsitektur sistem perusahaan.'
  },
  {
    question: 'Apakah LOGISTIQ mendukung banyak user dan role?',
    answer: 'Ya. LOGISTIQ dapat menggunakan pengaturan role dan permission untuk mengatur akses pengguna berdasarkan tanggung jawab masing-masing, seperti administrator, operational, fleet, warehouse, finance, maupun management.'
  },
  {
    question: 'Apakah LOGISTIQ dapat digunakan untuk beberapa cabang atau lokasi?',
    answer: 'Bisa disesuaikan dengan struktur organisasi perusahaan. Sistem dapat dirancang untuk mendukung kebutuhan multi-cabang, lokasi, warehouse, atau unit operasional sesuai kebutuhan bisnis.'
  },
  {
    question: 'Bagaimana proses implementasi LOGISTIQ?',
    answer: 'Implementasi dimulai dengan memahami proses bisnis dan kebutuhan perusahaan, kemudian dilanjutkan dengan konfigurasi atau pengembangan sistem, pengujian, deployment, dan onboarding pengguna.'
  },
  {
    question: 'Apakah tersedia training untuk pengguna?',
    answer: 'Ya. Training dapat diberikan kepada pengguna sesuai role dan modul yang digunakan agar tim dapat memahami alur kerja dan penggunaan sistem dengan baik.'
  },
  {
    question: 'Apakah LOGISTIQ dapat dikembangkan setelah sistem digunakan?',
    answer: 'Bisa. Kebutuhan operasional perusahaan dapat berkembang seiring waktu. LOGISTIQ dapat dikembangkan secara bertahap untuk menambahkan fitur, modul, integrasi, atau kebutuhan bisnis lainnya.'
  },
  {
    question: 'Apakah tersedia support setelah implementasi?',
    answer: 'Ya. Dukungan setelah implementasi dapat disesuaikan dengan kebutuhan perusahaan, termasuk bantuan penggunaan, troubleshooting, maintenance, dan pengembangan lanjutan.'
  }
]
</script>

<style src="../assets/AppFaq.css" scoped></style>
