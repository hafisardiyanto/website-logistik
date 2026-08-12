<template>
  <section class="cta">
    <div class="container">
      <div class="cta-box reveal">
        <span class="pill">Siap untuk transisi menuju modernisasi?</span>
        <h2>Jadikan logistik sebagai keunggulan kompetitif.</h2>
        <p>
          Uji sendiri bagaimana kuatnya framework LOGISTIQ dalam menghubungkan alur kerja
          operasi Anda yang terkesan rumit dan serahkan kendali penuh ke arah yang lebih efisien!
        </p>
        <div class="actions">
          <button
            class="btn"
            style="background: #fff; color: #1261d7"
            @click="scrollToId('contact')"
          >
            Jadwalkan Percobaan (Demo) →
          </button>
          <a
            href="#pricing"
            class="btn"
            style="color: white; border: 1px solid #ffffff55"
          >Lihat paket kami</a>
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

<style scoped>
.cta {
  padding: 25px 0;
}
.cta-box {
  padding: 50px;
  border-radius: 17px;
  background: linear-gradient(110deg, #0d5ed6, #368cf7);
  color: white;
  position: relative;
  overflow: hidden;
}
.cta-box:after {
  content: "";
  position: absolute;
  width: 330px;
  height: 330px;
  right: -100px;
  top: -120px;
  border: 1px solid #ffffff35;
  border-radius: 50%;
  box-shadow: 0 0 0 40px #ffffff08, 0 0 0 80px #ffffff05;
}
.cta-box h2 {
  font: 800 32px Manrope;
  letter-spacing: -1px;
  margin: 0 0 9px;
  max-width: 650px;
}
.cta-box p {
  font-size: 11px;
  color: #d9e9ff;
  max-width: 600px;
  line-height: 1.7;
}
.cta-box .actions {
  position: relative;
  z-index: 2;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-top: 25px;
}

@media (max-width: 600px) {
  .cta-box {
    padding: 35px 25px;
  }
  .cta-box h2 {
    font-size: 27px;
  }
}
</style>
