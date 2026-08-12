<template>
  <section class="cta">
    <div class="container">
      <div class="cta-box reveal">
        <h2>Siap membuat operasi logistik lebih terkontrol?</h2>
        <div class="actions">
          <button
            class="btn btn-lg"
            style="background: #fff; color: #1261d7"
            @click="scrollToId('contact')"
          >
            Jadwalkan Demo →
          </button>
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
  padding: 60px 50px;
  border-radius: 20px;
  background: linear-gradient(110deg, #0d5ed6, #368cf7);
  color: white;
  position: relative;
  overflow: hidden;
  text-align: center;
}
.cta-box:after {
  content: "";
  position: absolute;
  width: 400px;
  height: 400px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid #ffffff35;
  border-radius: 50%;
  box-shadow: 0 0 0 50px #ffffff08, 0 0 0 100px #ffffff05;
  pointer-events: none;
}
.cta-box h2 {
  font: 800 36px Manrope;
  letter-spacing: -1.5px;
  margin: 0 auto 30px;
  max-width: 650px;
  position: relative;
  z-index: 2;
}
.btn-lg {
  padding: 15px 35px;
  font-size: 14px;
}
.cta-box .actions {
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: center;
}

@media (max-width: 600px) {
  .cta-box {
    padding: 45px 25px;
  }
  .cta-box h2 {
    font-size: 29px;
  }
}
</style>
