<template>
  <footer>
    <div class="container footer-grid">
      <div>
        <a class="logo" href="#home">
          <span class="logo-mark">◆</span>
          <span><b style="color: white">LOGISTIQ</b><small>Logistics Operating Platform</small></span>
        </a>
        <p>Connected logistics operations for modern businesses.</p>
      </div>
      <div>
        <h4>Product</h4>
        <a href="#features">Features</a><a href="#dashboard">Dashboard</a>
        <a href="#pricing">Pricing</a><a href="#workflow">How it works</a>
      </div>
      <div>
        <h4>Company</h4>
        <a href="#about">About</a><a href="#contact">Contact</a>
        <a href="#">Security</a><a href="#">API</a>
      </div>
      <div>
        <h4>Contact</h4>
        <p>hello@logistiq.co</p>
        <p>+62 811-1234-5678</p>
        <p>Surabaya, Indonesia</p>
      </div>
    </div>
    <div class="container copyright">
      © 2026 LOGISTIQ · Privacy · Terms · Security
    </div>
  </footer>
</template>

<style scoped>
footer {
  background: #06101f;
  color: #91a4bd;
  padding: 52px 0 18px;
}
.logo {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
}
.logo-mark {
  width: 37px;
  height: 37px;
  border-radius: 10px;
  background: linear-gradient(135deg, #1257d4, #66d2ff);
  display: grid;
  place-items: center;
  color: #fff;
  box-shadow: 0 9px 22px #1768e82e;
}
.logo b {
  font: 800 16px Manrope;
  letter-spacing: -0.5px;
}
.logo small {
  display: block;
  color: #8492a5;
  font-size: 8px;
  margin-top: 2px;
}

.footer-grid {
  display: grid;
  grid-template-columns: 2fr repeat(3, 1fr);
  gap: 45px;
}
.footer-grid h4 {
  font-size: 11px;
  color: white;
  margin-top: 0;
}
.footer-grid a,
.footer-grid p {
  font-size: 9px;
  line-height: 1.8;
  display: block;
  margin: 7px 0;
}
.copyright {
  border-top: 1px solid #ffffff12;
  margin-top: 30px;
  padding-top: 18px;
  text-align: center;
  font-size: 8px;
}

@media (max-width: 950px) {
  .footer-grid {
    grid-template-columns: 2fr 1fr 1fr;
  }
  .footer-grid > div:last-child {
    grid-column: 1/-1;
  }
}
@media (max-width: 600px) {
  .footer-grid {
    grid-template-columns: 1fr 1fr;
  }
}
</style>
