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

<style scoped>
.cta {
  padding: 50px 0 80px;
}
.cta-box {
  padding: 80px 50px 0;
  border-radius: 20px;
  background: linear-gradient(135deg, #0d5ed6, #3b8ff5);
  color: white;
  position: relative;
  overflow: hidden;
  text-align: center;
}
.cta-box:after {
  content: "";
  position: absolute;
  width: 500px;
  height: 500px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid #ffffff35;
  border-radius: 50%;
  box-shadow: 0 0 0 80px #ffffff08, 0 0 0 160px #ffffff05;
  pointer-events: none;
}
.cta-box h2 {
  font: 800 42px Manrope;
  letter-spacing: -2px;
  margin: 0 auto 15px;
  max-width: 650px;
  position: relative;
  z-index: 2;
}
.cta-box p {
  font-size: 15px;
  color: #fff;
  opacity: 0.9;
  position: relative;
  z-index: 2;
  margin-bottom: 40px;
}
.btn-lg {
  padding: 18px 40px;
  font-size: 14px;
}
.cta-box .actions {
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: center;
  gap: 15px;
  flex-wrap: wrap;
}

/* Mini visual representation */
.cta-visual {
  width: 600px;
  height: 180px;
  margin: 50px auto 0;
  background: white;
  border-radius: 12px 12px 0 0;
  box-shadow: 0 -20px 50px #04255546;
  position: relative;
  z-index: 3;
  padding: 20px;
}
.dash-mini {
  border: 1px solid #e1e9f4;
  height: 100%;
  border-radius: 8px;
  padding: 15px;
  background: #fdfdfe;
}
.dash-mini .mock-hdr { height: 18px; background: #eaf0f6; border-radius: 4px; margin-bottom: 20px; width: 30%; }
.dash-mini .mock-grid { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 15px; margin-bottom: 15px; }
.dash-mini .mock-grid i { height: 50px; background: #f0f4f9; border-radius: 6px; }
.dash-mini .mock-bar { height: 40px; background: #eaf0f6; border-radius: 6px; }

@media (max-width: 600px) {
  .cta-box {
    padding: 60px 25px 0;
  }
  .cta-box h2 {
    font-size: 32px;
  }
  .cta-visual {
    width: 90%;
    margin-top: 40px;
    height: 120px;
  }
}
</style>
