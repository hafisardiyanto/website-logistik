<template>
  <section class="integrations text-center" id="integrations">
    <div class="container container-md">
      <!-- Section Header -->
      <div class="reveal">
        <span class="int-kicker">CONNECTED OPERATIONS</span>
        <h2 class="int-title">Hubungkan LOGISTIQ dengan Ekosistem Bisnis Anda</h2>
        <p class="int-desc">Integrasikan data dan proses operasional agar informasi dapat mengalir lebih mudah antara LOGISTIQ dan sistem yang sudah digunakan perusahaan.</p>
      </div>

      <!-- Integration Diagram -->
      <div class="int-diagram reveal delay2">
        <!-- Layer 1: Business Systems -->
        <div class="diag-layer systems-layer">
          <div class="diag-node">
            <span class="node-icon">💰</span>
            <h5>Finance</h5>
            <small>Data transaksi keuangan</small>
          </div>
          <div class="diag-node">
            <span class="node-icon">🏢</span>
            <h5>ERP</h5>
            <small>Proses & data enterprise</small>
          </div>
          <div class="diag-node">
            <span class="node-icon">⚙️</span>
            <h5>External API</h5>
            <small>Aplikasi eksternal pendukung</small>
          </div>
        </div>

        <!-- Connection Lines 1 -->
        <div class="diag-lines lines-in d-desktop-only">
          <svg width="100%" height="60" preserveAspectRatio="none">
            <path class="animated-line" d="M15%,0 Q50%,30 50%,60" fill="none" stroke="#cbdcf0" stroke-width="2" stroke-dasharray="6,6" />
            <path class="animated-line" d="M50%,0 L50%,60" fill="none" stroke="#cbdcf0" stroke-width="2" stroke-dasharray="6,6" />
            <path class="animated-line" d="M85%,0 Q50%,30 50%,60" fill="none" stroke="#cbdcf0" stroke-width="2" stroke-dasharray="6,6" />
          </svg>
        </div>
        <div class="m-arrow d-mobile-only">↓</div>

        <!-- Layer 2: Core Platform -->
        <div class="diag-layer main-layer">
          <div class="diag-master shadow-lg">
            <div class="master-glow"></div>
            <h3>LOGISTIQ</h3>
            <p>Logistics Management Platform</p>
          </div>
        </div>

        <!-- Connection Lines 2 -->
        <div class="diag-lines lines-out d-desktop-only">
          <svg width="100%" height="60" preserveAspectRatio="none">
            <path class="animated-line" d="M50%,0 Q15%,30 15%,60" fill="none" stroke="#cbdcf0" stroke-width="2" stroke-dasharray="6,6" />
            <path class="animated-line" d="M50%,0 Q40%,30 40%,60" fill="none" stroke="#cbdcf0" stroke-width="2" stroke-dasharray="6,6" />
            <path class="animated-line" d="M50%,0 Q60%,30 60%,60" fill="none" stroke="#cbdcf0" stroke-width="2" stroke-dasharray="6,6" />
            <path class="animated-line" d="M50%,0 Q85%,30 85%,60" fill="none" stroke="#cbdcf0" stroke-width="2" stroke-dasharray="6,6" />
          </svg>
        </div>
        <div class="m-arrow d-mobile-only">↓</div>

        <!-- Layer 3: Modules -->
        <div class="diag-layer modules-layer">
          <div class="diag-leaf"><b>Order</b></div>
          <div class="diag-leaf"><b>Fleet</b></div>
          <div class="diag-leaf"><b>Warehouse</b></div>
          <div class="diag-leaf"><b>Reporting</b></div>
        </div>
      </div>

      <!-- 3 Value Props -->
      <div class="int-values reveal delay3">
        <div class="val-card">
          <h4>API & Data Integration</h4>
          <p>Hubungkan LOGISTIQ dengan sistem lain melalui API dan mekanisme pertukaran data sesuai kebutuhan operasional.</p>
        </div>
        <div class="val-card">
          <h4>Flexible Integration</h4>
          <p>Sesuaikan alur integrasi dengan proses bisnis, arsitektur sistem, dan kebutuhan perusahaan Anda.</p>
        </div>
        <div class="val-card">
          <h4>Connected Data</h4>
          <p>Kurangi input data berulang dan bantu menjaga konsistensi informasi antar sistem.</p>
        </div>
      </div>

      <div class="int-cta reveal delay4 mt-5">
        <a href="#contact" class="btn outline blue-text">Explore Integration →</a>
      </div>

    </div>
  </section>
</template>

<style src="../assets/AppIntegrations.css" scoped></style>
