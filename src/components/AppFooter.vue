<template>
  <footer class="app-footer">
    <div class="container container-lg">
      
      <!-- Brand Top -->
      <div class="footer-top">
        <h3 class="footer-logo">LOGISTIQ</h3>
        <span class="footer-tagline">Logistics Operations, Connected.</span>
        <p class="footer-desc">
          LOGISTIQ membantu perusahaan menghubungkan seluruh proses operasional logistik — dari order, planning, dispatch, tracking, delivery, billing, hingga profitability — dalam satu platform yang terintegrasi.
        </p>
      </div>

      <!-- Links Grid Desktop -->
      <div class="footer-grid d-desktop-grid">
        <div class="fg-links">
          <h4>Platform</h4>
          <ul>
            <li><a href="#product">Order Management</a></li>
            <li><a href="#product">Transportation Management</a></li>
            <li><a href="#product">Fleet Management</a></li>
            <li><a href="#product">Warehouse Management</a></li>
            <li><a href="#product">Tracking & POD</a></li>
            <li><a href="#product">Billing & Profitability</a></li>
          </ul>
        </div>
        <div class="fg-links">
          <h4>Solutions</h4>
          <ul>
            <li><a href="#industries">Logistics & Freight</a></li>
            <li><a href="#industries">Trucking</a></li>
            <li><a href="#industries">Distribution</a></li>
            <li><a href="#industries">Warehouse</a></li>
            <li><a href="#industries">Manufacturing</a></li>
          </ul>
        </div>
        <div class="fg-links">
          <h4>Company</h4>
          <ul>
            <li><a href="#home">About LOGISTIQ</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#contact">Request a Demo</a></li>
          </ul>
        </div>
        <div class="fg-links">
          <h4>Resources</h4>
          <ul>
            <li><a href="#faq">FAQ</a></li>
            <li><a href="#casestudies">Platform Overview</a></li>
            <li><a href="#integrations">Integration</a></li>
            <li><a href="#security">Security & Reliability</a></li>
          </ul>
        </div>
      </div>

      <!-- Mobile Accordion Links -->
      <div class="footer-mobile-links d-mobile-only">
        <details class="m-acc">
          <summary><span>Platform</span> <span class="acc-arr">+</span></summary>
          <ul class="m-list">
            <li><a href="#product">Order Management</a></li>
            <li><a href="#product">Transportation Management</a></li>
            <li><a href="#product">Fleet Management</a></li>
            <li><a href="#product">Warehouse Management</a></li>
            <li><a href="#product">Tracking & POD</a></li>
            <li><a href="#product">Billing & Profitability</a></li>
          </ul>
        </details>
        <details class="m-acc">
          <summary><span>Solutions</span> <span class="acc-arr">+</span></summary>
          <ul class="m-list">
            <li><a href="#industries">Logistics & Freight</a></li>
            <li><a href="#industries">Trucking</a></li>
            <li><a href="#industries">Distribution</a></li>
            <li><a href="#industries">Warehouse</a></li>
            <li><a href="#industries">Manufacturing</a></li>
          </ul>
        </details>
        <details class="m-acc">
          <summary><span>Company</span> <span class="acc-arr">+</span></summary>
          <ul class="m-list">
            <li><a href="#home">About LOGISTIQ</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#contact">Request a Demo</a></li>
          </ul>
        </details>
        <details class="m-acc">
          <summary><span>Resources</span> <span class="acc-arr">+</span></summary>
          <ul class="m-list">
            <li><a href="#faq">FAQ</a></li>
            <li><a href="#casestudies">Platform Overview</a></li>
            <li><a href="#integrations">Integration</a></li>
            <li><a href="#security">Security & Reliability</a></li>
          </ul>
        </details>
      </div>

      <!-- Mini CTA -->
      <div class="footer-cta">
        <div class="fc-copy">
          <h4>Ready to connect your operations?</h4>
          <p>Diskusikan kebutuhan operasional perusahaan Anda bersama tim LOGISTIQ.</p>
        </div>
        <div class="fc-btn">
          <a href="#contact" class="btn outline white-ghost">Request a Demo →</a>
        </div>
      </div>

      <!-- Copyright Bottom -->
      <div class="footer-bottom">
        <div class="fb-left">
          &copy; {{ new Date().getFullYear() }} LOGISTIQ. All rights reserved.
        </div>
        <div class="fb-right">
          <a href="javascript:void(0)">Privacy Policy</a>
          <span class="sep">&middot;</span>
          <a href="javascript:void(0)">Terms of Service</a>
        </div>
      </div>

    </div>
  </footer>
</template>

<style src="../assets/AppFooter.css" scoped></style>
