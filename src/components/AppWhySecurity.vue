<template>
  <section class="section" id="why-us">
    <div class="container">
      <div class="head center reveal">
        <h2>Mengapa LOGISTIQ?</h2>
      </div>

      <div class="reasons-grid">
        <div class="reason reveal">
          <span class="num">01</span>
          <h3>Dibangun untuk workflow logistik</h3>
          <p>Bukan software generik (HR/Sales) yang fiturnya dipaksakan ke operasi distribusi logistik Anda.</p>
        </div>
        <div class="reason reveal delay1">
          <span class="num">02</span>
          <h3>Satu sumber data</h3>
          <p>Job Order, DO, Manifest, Shipment, Cost, dan Billing semuanya saling terhubung instan.</p>
        </div>
        <div class="reason reveal delay2">
          <span class="num">03</span>
          <h3>Operational visibility</h3>
          <p>Semua status pelacakan dapat dipantau dari satu platform komando oleh manajemen.</p>
        </div>
        <div class="reason reveal delay3">
          <span class="num">04</span>
          <h3>Scalable Ecosystem</h3>
          <p>Cocok mulai dari logistik satu cabang kecil hingga ke raksasa multi-branch operation.</p>
        </div>
      </div>

      <div class="tech-box reveal">
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
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-top: 40px;
}
.reason {
  background: #fcfdfe;
  border-top: 3px solid var(--blue);
  padding: 30px 20px;
  border-radius: 8px;
  box-shadow: 0 5px 25px #123d7008;
}
.num {
  font-family: inherit;
  font-size: 14px;
  font-weight: 800;
  color: #aebfd1;
  display: block;
  margin-bottom: 10px;
}
.reason h3 {
  font-size: 14px;
  font-weight: 800;
  margin: 0 0 10px;
}
.reason p {
  font-size: 11px;
  line-height: 1.7;
  color: var(--muted);
}

.tech-box {
  display: grid;
  grid-template-columns: 1fr 1fr;
  background: #091a31;
  border-radius: 16px;
  margin-top: 60px;
  color: white;
  overflow: hidden;
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
  .reasons-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 600px) {
  .reasons-grid { grid-template-columns: 1fr; }
  .tech-box { grid-template-columns: 1fr; }
  .tech-col { border-right: 0; border-bottom: 1px solid #1a2f4c; padding: 30px; }
}
</style>
