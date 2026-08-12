<template>
  <section class="section" id="pricing">
    <div class="container">
      <div class="head center reveal">
        <span class="kicker">Harga & Paket</span>
        <h2>Berinvestasi pada infrastruktur.</h2>
      </div>
      
      <div class="pricing">
        
        <div class="price reveal">
          <h3>Starter</h3>
          <strong>Rp 999K <small>/ bulan</small></strong>
          <p class="desc">Untuk mendigitalkan operasional manual (Excel) ke cloud.</p>
          <button class="btn outline price-btn" @click="scrollToId('contact')">
            Mulai sekarang
          </button>
          <ul>
            <li>Customer Management</li>
            <li>Job Order</li>
            <li>Delivery Order</li>
            <li>Basic Dashboard</li>
            <li>User Management</li>
          </ul>
        </div>
        
        <div class="price featured reveal delay1">
          <span class="popular">PALING POPULER</span>
          <h3>Professional</h3>
          <strong>Rp 2.499K <small>/ bulan</small></strong>
          <p class="desc">Kendalikan alur kompleks armada, beban biaya, dan pelacakan GPS.</p>
          <button class="btn blue price-btn" @click="scrollToId('contact')">
            Jadwalkan Demo
          </button>
          <ul class="accent">
            <li><strong>Semua fitur Starter ditambah:</strong></li>
            <li>Manifest & Capacity Planning</li>
            <li>Tracking & GPS</li>
            <li>Driver Management</li>
            <li>Cost Management</li>
            <li>Reporting & Analytics</li>
            <li>Standard API</li>
          </ul>
        </div>

        <div class="price reveal delay2">
          <h3>Enterprise</h3>
          <strong style="font-size: 26px;">Kustom</strong>
          <p class="desc">Bagi korporasi dengan unit cabang tersendiri dan aliran bisnis raksasa.</p>
          <button class="btn dark price-btn" @click="scrollToId('contact')">
            Hubungi Sales
          </button>
          <ul>
            <li><strong>Semua fitur Professional ditambah:</strong></li>
            <li>Dedicated Server</li>
            <li>Custom API Integration</li>
            <li>Custom Workflow</li>
            <li>SLA Guarantee</li>
            <li>Dedicated Enterprise Support</li>
          </ul>
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
.pricing {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  align-items: stretch;
  margin-top: 30px;
}
.price {
  border: 1px solid var(--line);
  border-radius: 16px;
  padding: 35px 30px;
  background: white;
  position: relative;
  transition: all 0.2s;
}
.price.featured {
  border: 2px solid #6ca4f4;
  box-shadow: 0 25px 60px #1768e814;
  transform: translateY(-5px);
}
.popular {
  position: absolute;
  top: -12px;
  right: 25px;
  background: var(--blue);
  color: white;
  border-radius: 99px;
  padding: 6px 12px;
  font-size: 9px;
  font-weight: 800;
  letter-spacing: 0.5px;
}
.price h3 {
  font-size: 16px;
  font-weight: 800;
  margin: 0;
}
.price .desc {
  font-size: 11px;
  line-height: 1.6;
  color: var(--muted);
  min-height: 50px;
  margin: 10px 0;
}
.price strong {
  font: 800 32px Manrope;
  display: block;
  margin: 15px 0 5px;
}
.price strong small {
  font: 700 11px "DM Sans";
  color: var(--muted);
}
.price .price-btn {
  width: 100%;
  margin: 20px 0;
  padding: 12px;
}
.price ul {
  list-style: none;
  padding: 0;
}
.price li {
  font-size: 11px;
  color: #55667c;
  margin: 12px 0;
  padding-left: 20px;
  position: relative;
}
.price li:before {
  content: "✓";
  color: var(--green);
  font-weight: 800;
  position: absolute;
  left: 0;
  top: 0;
}
.price li strong {
  font-size: 11px;
  font-family: inherit;
  margin: 0;
  display: inline;
  color: var(--ink);
}

@media (max-width: 950px) {
  .pricing {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 600px) {
  .pricing {
    grid-template-columns: 1fr;
  }
  .price.featured {
    transform: translateY(0);
  }
}
</style>
