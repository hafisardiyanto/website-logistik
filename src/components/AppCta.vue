<template>
  <section class="cta">
    <div class="container">
      <div class="cta-box reveal">
        <h2>Siap mengubah operasi logistik Anda?</h2>
        <p>Mulai dari order hingga billing, kelola semuanya dalam satu platform.</p>
        <div class="actions">
          <button
            class="btn btn-lg"
            style="background: #fff; color: #1261d7"
            @click="scrollToId('contact')"
          >
            Jadwalkan Demo
          </button>
          <a
            class="btn outline btn-lg cta-btn"
            style="border-radius: 99px; background: transparent; border: 1px solid #ffffff44; color: white;"
            href="#contact"
          >
            Hubungi Tim Kami
          </a>
        </div>
        
        <div class="cta-visual">
          <div class="dash-mini">
            <div class="mock-hdr"></div>
            <div class="mock-grid"><i></i><i></i><i></i></div>
            <div class="mock-bar"></div>
          </div>
        </div>
        
      </div>
    </div>
  </section>
</template>

<script setup>
const scrollToId = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
</script>

<style src="../assets/AppCta.css" scoped></style>

