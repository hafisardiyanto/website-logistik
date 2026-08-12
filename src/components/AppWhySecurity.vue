<template>
  <section class="section" id="why-us">
    <div class="container">
      <div class="head center reveal">
        <h2>Mengapa LOGISTIQ?</h2>
      </div>

      <div class="reasons-grid">
        <div class="reason reveal">
          <span class="num">01</span>
          <h3>One source of truth</h3>
          <p>Semua proses logistik dan pengiriman (mulai dari Job Order hingga tagihan bersih) saling terhubung tersentralisasi sepenuhnya.</p>
        </div>
        <div class="reason reveal delay1">
          <span class="num">02</span>
          <h3>Built for real operations</h3>
          <p>Sistem merangkul fakta lapangan. Workflow dirancang secara murni dan eksklusif berdasarkan studi kasus operasional nyata Anda.</p>
        </div>
        <div class="reason reveal delay2">
          <span class="num">03</span>
          <h3>From operations to profitability</h3>
          <p>Tidak hanya sekadar menandai titik GPS muatan, tetapi menghubungkannya untuk memahami beban biaya (Cost) riil Anda.</p>
        </div>
      </div>

      <div class="tech-box reveal delay1">
        <div class="tech-col">
          <div class="icon-head">🛡️ SECURITY</div>
          <ul>
            <li>Role-Based Access Control</li>
            <li>Audit Trail (Log aktivitas)</li>
            <li>Data Protection Enkripsi</li>
            <li>Secure Authentication</li>
          </ul>
        </div>
        <div class="tech-col">
          <div class="icon-head">🔗 INTEGRATION</div>
          <ul>
            <li>REST API Terbuka</li>
            <li>Webhook Engine</li>
            <li>ERP Integration</li>
            <li>WMS & Payment Integration</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.reasons-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
  margin-top: 40px;
}
.reason {
  background: white;
  border-top: 4px solid var(--blue);
  padding: 35px 25px;
  border-radius: 12px;
  box-shadow: 0 10px 40px rgba(12,45,86,0.04);
}
.num {
  font-family: inherit;
  font-size: 14px;
  font-weight: 800;
  color: #aebfd1;
  display: block;
  margin-bottom: 12px;
}
.reason h3 {
  font-size: 16px;
  font-weight: 800;
  margin: 0 0 12px;
}
.reason p {
  font-size: 12px;
  line-height: 1.8;
  color: var(--muted);
  margin: 0;
}

.tech-box {
  display: grid;
  grid-template-columns: 1fr 1fr;
  background: #091a31;
  border-radius: 16px;
  margin-top: 60px;
  color: white;
  overflow: hidden;
  box-shadow: 0 20px 50px rgba(9, 26, 49, 0.4);
}
.tech-col {
  padding: 40px;
  border-right: 1px solid #1a2f4c;
}
.tech-col:last-child {
  border-right: 0;
}
.icon-head {
  font-size: 15px;
  font-family: Manrope;
  font-weight: 800;
  color: var(--cyan);
  margin-bottom: 25px;
  letter-spacing: 1px;
}
.tech-col ul {
  list-style: none;
  padding: 0;
}
.tech-col li {
  font-size: 13px;
  color: #a4bedb;
  margin: 15px 0;
  padding-left: 25px;
  position: relative;
}
.tech-col li:before {
  content: "✓";
  position: absolute;
  left: 0;
  color: var(--cyan);
  font-weight: 800;
}

@media (max-width: 950px) {
  .reasons-grid { grid-template-columns: 1fr; gap: 15px;}
}
@media (max-width: 600px) {
  .tech-box { grid-template-columns: 1fr; }
  .tech-col { border-right: 0; border-bottom: 1px solid #1a2f4c; padding: 30px; }
}
</style>
