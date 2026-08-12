<template>
  <section class="hero" id="home">
    <div class="container hero-grid">
      <div class="reveal">
        <span class="pill">✦ Dibuat untuk tim logistik modern</span>
        <h1>Jalankan logistik <span>tanpa kekacauan operasional.</span></h1>
        <p>
          LOGISTIQ menghubungkan pesanan, operasi pengiriman, armada, pengemudi,
          biaya, dan penagihan ke dalam satu platform operasi cerdas — memberikan
          tim Anda satu sumber kebenaran dari permintaan hingga pengiriman.
        </p>
        <div class="actions">
          <button class="btn blue" @click="scrollToId('contact')">
            Jadwalkan demo khusus →
          </button>
          <a class="btn dark" href="#product">Jelajahi platform</a>
        </div>
        <div class="hero-note">
          Tanpa kartu kredit · Panduan lengkap product · Cocok untuk Perusahaan Besar
        </div>
      </div>
      <div class="visual reveal delay2">
        <div class="orb"></div>
        <div class="app">
          <div class="app-head">
            <b>LOGISTIQ</b><span>Ringkasan Operasi</span><i>● ● ●</i>
          </div>
          <div class="app-body">
            <div class="app-side">
              <b>LOGISTIQ</b><span>Dasbor</span><span>Pesanan</span>
              <span>Pengiriman</span><span>Manifes</span><span>Armada</span>
              <span>Pengemudi</span><span>Keuangan</span>
            </div>
            <div class="app-main">
              <h3>Ringkasan Operasi</h3>
              <div class="metric-grid">
                <div class="metric">
                  <small>Pesanan</small><b>1,248</b>
                </div>
                <div class="metric">
                  <small>Pengiriman</small><b>872</b>
                </div>
                <div class="metric"><small>Di Perjalanan</small><b>156</b></div>
                <div class="metric"><small>Selesai</small><b>98</b></div>
              </div>
              <div class="chart">
                <i style="height: 36%"></i><i style="height: 51%"></i>
                <i style="height: 45%"></i><i style="height: 69%"></i>
                <i style="height: 61%"></i><i style="height: 84%"></i>
                <i style="height: 70%"></i><i style="height: 91%"></i>
                <i style="height: 78%"></i><i style="height: 97%"></i>
              </div>
            </div>
          </div>
        </div>
        <div class="truck">🚚</div>
        <div class="live">
          <small>PENGIRIMAN LANGSUNG</small><b>Surabaya → Jakarta</b>
          <small>TRK-021 · ETA 18:40</small>
          <div class="progress"><i></i></div>
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
.hero {
  padding: 88px 0 70px;
  background: linear-gradient(180deg, #f6faff, #fff 70%);
  overflow: hidden;
  position: relative;
}
.hero:after {
  content: "";
  position: absolute;
  width: 620px;
  height: 620px;
  right: -180px;
  top: -130px;
  background: radial-gradient(circle, #dceeff, transparent 66%);
  pointer-events: none;
}
.hero-grid {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 0.84fr 1.16fr;
  gap: 55px;
  align-items: center;
}
.hero h1 {
  font: 800 57px/1.05 Manrope;
  letter-spacing: -3px;
  margin: 20px 0;
}
.hero h1 span {
  color: var(--blue);
}
.hero p {
  font-size: 14px;
  line-height: 1.8;
  color: var(--muted);
  max-width: 540px;
}
.actions {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-top: 25px;
}
.hero-note {
  font-size: 9px;
  color: #8a98aa;
  margin-top: 14px;
}
.visual {
  height: 460px;
  position: relative;
}
.orb {
  position: absolute;
  inset: 0 0 0 40px;
  border-radius: 50%;
  background: radial-gradient(circle at 55% 45%, #edf8ff, #cfe8ff 40%, transparent 67%);
}
.app {
  position: absolute;
  top: 30px;
  right: 0;
  width: 90%;
  height: 330px;
  border: 1px solid #dce7f3;
  border-radius: 16px;
  background: white;
  box-shadow: 0 30px 75px #0c3a711e;
  overflow: hidden;
  transform: perspective(1000px) rotateY(-4deg);
}
.app-head {
  height: 40px;
  background: #091d36;
  color: #fff;
  padding: 0 14px;
  display: flex;
  align-items: center;
  gap: 15px;
  font-size: 9px;
}
.app-head i {
  margin-left: auto;
  color: #7590ac;
  font-style: normal;
}
.app-body {
  display: grid;
  grid-template-columns: 105px 1fr;
  height: 290px;
}
.app-side {
  background: #f7faff;
  border-right: 1px solid #e8eef5;
  padding: 14px 9px;
}
.app-side b {
  font-size: 9px;
  color: var(--blue);
}
.app-side span {
  display: block;
  font-size: 7px;
  color: #718198;
  padding: 8px 6px;
  margin-top: 4px;
  border-radius: 5px;
}
.app-side span:first-of-type {
  background: #e8f2ff;
  color: var(--blue);
  font-weight: 700;
}
.app-main {
  padding: 15px;
}
.app-main h3 {
  font-size: 13px;
  margin: 0 0 10px;
}
.metric-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 6px;
}
.metric {
  border: 1px solid #e9eef4;
  border-radius: 7px;
  padding: 8px;
}
.metric small {
  display: block;
  color: #8a96a7;
  font-size: 6px;
}
.metric b {
  font-size: 13px;
}
.chart {
  height: 120px;
  border: 1px solid #e9eef4;
  border-radius: 7px;
  margin-top: 8px;
  display: flex;
  align-items: end;
  gap: 5px;
  padding: 11px;
}
.chart i {
  flex: 1;
  background: linear-gradient(#438ff9, #d9eaff);
  border-radius: 3px 3px 0 0;
}
.truck {
  position: absolute;
  left: -5px;
  bottom: 25px;
  font-size: 105px;
  filter: drop-shadow(0 18px 12px #123b5b42);
}
.live {
  position: absolute;
  right: -10px;
  bottom: 15px;
  width: 190px;
  padding: 13px;
  background: white;
  border: 1px solid #dce7f3;
  border-radius: 11px;
  box-shadow: 0 18px 45px #123f7518;
}
.live small {
  font-size: 7px;
  color: #8a98aa;
}
.live b {
  display: block;
  font-size: 11px;
  margin: 5px 0;
}
.progress {
  height: 5px;
  border-radius: 99px;
  background: #e9eff6;
  overflow: hidden;
}
.progress i {
  display: block;
  width: 78%;
  height: 100%;
  background: #1b72ed;
}

@media (max-width: 950px) {
  .hero-grid {
    grid-template-columns: 1fr;
  }
  .visual {
    height: 400px;
  }
}
@media (max-width: 600px) {
  .hero {
    padding: 60px 0 35px;
  }
  .hero h1 {
    font-size: 38px;
    letter-spacing: -2px;
  }
  .visual {
    height: 340px;
  }
  .app {
    height: 245px;
    width: 96%;
  }
  .app-body {
    grid-template-columns: 70px 1fr;
    height: 205px;
  }
  .app-side span {
    font-size: 6px;
  }
  .app-main {
    padding: 9px;
  }
  .metric-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .chart {
    height: 92px;
  }
  .truck {
    font-size: 80px;
  }
  .live {
    width: 155px;
  }
}
</style>
