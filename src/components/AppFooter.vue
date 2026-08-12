<template>
  <footer class="footer">
    <div class="container footer-grid">
      
      <div class="foot-brand">
        <div class="logo">
          <span class="logo-mark">◆</span>
          <span><b>LOGISTIQ</b></span>
        </div>
        <p>Sistem operasi logistik enterprise untuk perusahaan modern. Kelola order, tracking, biaya, dan tagihan dalam satu tempat.</p>
        <div class="socials">
          <span>in</span>
          <span>fb</span>
          <span>tw</span>
        </div>
      </div>
      
      <div class="foot-links">
        <b>Product</b>
        <a href="#">Dashboard</a>
        <a href="#">Job Order</a>
        <a href="#">Delivery Order</a>
        <a href="#">Manifest</a>
        <a href="#">Tracking</a>
        <a href="#pricing">Pricing</a>
      </div>
      
      <div class="foot-links">
        <b>Solutions</b>
        <a href="#">Trucking</a>
        <a href="#">3PL</a>
        <a href="#">Distribution</a>
        <a href="#">Warehouse</a>
      </div>
      
      <div class="foot-links">
        <b>Company</b>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
        <a href="#faq">FAQ</a>
      </div>
      
      <div class="foot-links">
        <b>Resources</b>
        <a href="#">Documentation</a>
        <a href="#">API</a>
        <a href="#">Privacy</a>
        <a href="#">Terms</a>
      </div>
      
    </div>
    
    <div class="container foot-bottom">
      <span>&copy; {{ new Date().getFullYear() }} LOGISTIQ Inc. All rights reserved.</span>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: white;
  border-top: 1px solid #e1e9f4;
  padding: 80px 0 30px;
}
.footer-grid {
  display: grid;
  grid-template-columns: 1.5fr repeat(4, 1fr);
  gap: 40px;
}
.foot-brand p {
  font-size: 12px;
  line-height: 1.8;
  color: var(--muted);
  margin: 20px 0;
  max-width: 250px;
}
.logo { display: flex; align-items: center; gap: 10px; }
.logo-mark {
  width: 32px; height: 32px; border-radius: 8px;
  background: linear-gradient(135deg, #1257d4, #66d2ff);
  display: grid; place-items: center; color: white; font-size: 14px;
}
.logo b { font: 800 18px Manrope; letter-spacing: -0.5px; color: var(--ink); }
.socials { display: flex; gap: 10px; }
.socials span {
  width: 32px; height: 32px; border-radius: 6px;
  background: #f0f4f9; display: grid; place-items: center;
  font-size: 12px; font-weight: 700; color: #8fa4b9; cursor: pointer; transition: 0.2s;
}
.socials span:hover { background: var(--blue); color: white; }

.foot-links b {
  display: block; font-size: 12px; font-weight: 800;
  color: var(--ink); margin-bottom: 20px; text-transform: uppercase; letter-spacing: 0.5px;
}
.foot-links a {
  display: block; font-size: 13px; color: var(--muted);
  margin-bottom: 15px; text-decoration: none; transition: 0.2s;
}
.foot-links a:hover { color: var(--blue); transform: translateX(3px); }

.foot-bottom {
  border-top: 1px solid #edf2f8;
  margin-top: 60px;
  padding-top: 30px;
  font-size: 12px;
  color: #aebfd1;
  text-align: center;
}

@media (max-width: 950px) {
  .footer-grid { grid-template-columns: repeat(2, 1fr); gap: 40px 20px; }
  .foot-brand { grid-column: span 2; }
}
@media (max-width: 600px) {
  .footer-grid { grid-template-columns: repeat(2, 1fr); }
  .foot-brand { grid-column: span 2; }
}
</style>
