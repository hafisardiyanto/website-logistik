<template>
  <section class="section tech-section" id="tech">
    <div class="container center">
      <div class="reveal">
        <h2 style="margin-bottom: 50px; font: 800 32px Manrope;">Teknologi Skala Enterprise</h2>
      </div>
      <div class="stats4 reveal delay1">
        <div class="stat">
          <div class="icon-wrap">⚡</div>
          <b>API</b><span>Terbuka (Ready)</span>
        </div>
        <div class="stat">
          <div class="icon-wrap">🔗</div>
          <b>Integration</b><span>Lancar terkoneksi dengan ERP & Accounting</span>
        </div>
        <div class="stat">
          <div class="icon-wrap">🛡️</div>
          <b>Security</b><span>Enkripsi data & Role Based Access Control</span>
        </div>
        <div class="stat">
          <div class="icon-wrap">∞</div>
          <b>Scalable</b><span>Infrastruktur Cloud siap untuk jutaan order</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.tech-section {
  padding-top: 10px;
}
.stats4 {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  border: 1px solid var(--line);
  border-radius: 16px;
  overflow: hidden;
  background: white;
  box-shadow: 0 15px 40px #123d7008;
}
.stat {
  text-align: center;
  padding: 35px 20px;
  border-right: 1px solid var(--line);
}
.stat:last-child {
  border: 0;
}
.icon-wrap {
  font-size: 26px;
  margin-bottom: 12px;
}
.stat b {
  font: 800 18px Manrope;
  display: block;
}
.stat span {
  display: block;
  font-size: 10px;
  line-height: 1.6;
  color: var(--muted);
  margin-top: 8px;
}

@media (max-width: 950px) {
  .stats4 {
    grid-template-columns: 1fr 1fr;
  }
  .stat {
    border-bottom: 1px solid var(--line);
  }
}
@media (max-width: 600px) {
  .stats4 {
    grid-template-columns: 1fr;
  }
}
</style>
