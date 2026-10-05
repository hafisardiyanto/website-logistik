<template>
  <section class="how-it-works" id="workflow">
    <div class="container">
      <div class="reveal text-center">
        <span class="hiw-kicker">HOW LOGISTIQ WORKS</span>
        <h2 class="hiw-title">Dari Order hingga Profit, Semua Proses Terhubung.</h2>
        <p class="hiw-desc">
          LOGISTIQ membantu tim mengelola setiap tahapan operasional dalam satu alur kerja yang terstruktur — mulai dari order diterima hingga revenue dan profitability dapat dianalisis.
        </p>
      </div>

      <!-- DESKTOP TIMELINE (Snake Layout) -->
      <div class="timeline-desktop d-desktop-only">
        
        <!-- ROW 1 -->
        <div class="t-row reveal delay1">
          <!-- Step 1 -->
          <div class="t-step">
            <div class="t-head">
              <span class="t-num">01</span>
              <span class="t-name">ORDER</span>
            </div>
            <div class="t-card fade-in">
              <div class="icon">📋</div>
              <b>Capture Every Order</b>
              <p>Kelola customer dan order dalam satu sistem sebagai awal dari proses operasional.</p>
            </div>
          </div>
          
          <div class="t-arrow">→</div>

          <!-- Step 2 -->
          <div class="t-step">
            <div class="t-head">
              <span class="t-num">02</span>
              <span class="t-name">PLANNING</span>
            </div>
            <div class="t-card fade-in">
              <div class="icon">📅</div>
              <b>Plan Your Shipment</b>
              <p>Tentukan jadwal, kebutuhan armada, rute, dan sumber daya sebelum pengiriman.</p>
            </div>
          </div>

          <div class="t-arrow">→</div>

          <!-- Step 3 -->
          <div class="t-step">
            <div class="t-head">
              <span class="t-num">03</span>
              <span class="t-name">DISPATCH</span>
            </div>
            <div class="t-card fade-in">
              <div class="icon">🚚</div>
              <b>Dispatch With Control</b>
              <p>Assign armada dan driver serta pastikan setiap shipment memiliki penugasan jelas.</p>
            </div>
          </div>

          <div class="t-arrow">→</div>

          <!-- Step 4 -->
          <div class="t-step">
            <div class="t-head">
              <span class="t-num">04</span>
              <span class="t-name">TRACKING</span>
            </div>
            <div class="t-card fade-in">
              <div class="icon">📍</div>
              <b>Monitor Every Shipment</b>
              <p>Pantau status perjalanan dan progress dari proses dispatch hingga delivery.</p>
            </div>
          </div>
        </div>

        <div class="t-down-arrow reveal delay2">↓</div>

        <!-- ROW 2 -->
        <div class="t-row row-two reveal delay3">
          <!-- Step 5 -->
          <div class="t-step">
            <div class="t-head">
              <span class="t-num">05</span>
              <span class="t-name">DELIVERY</span>
            </div>
            <div class="t-card fade-in">
              <div class="icon">📦</div>
              <b>Complete the Delivery</b>
              <p>Catat penyelesaian pengiriman dan dokumentasikan Proof of Delivery (ePOD).</p>
            </div>
          </div>
          
          <div class="t-arrow">→</div>

          <!-- Step 6 -->
          <div class="t-step">
            <div class="t-head">
              <span class="t-num">06</span>
              <span class="t-name">BILLING</span>
            </div>
            <div class="t-card fade-in">
              <div class="icon">🧾</div>
              <b>Turn Operations Into Billing</b>
              <p>Gunakan data operasional sebagai dasar proses billing dan invoice customer.</p>
            </div>
          </div>

          <div class="t-arrow">→</div>

          <!-- Step 7 -->
          <div class="t-step">
            <div class="t-head">
              <span class="t-num">07</span>
              <span class="t-name">PROFITABILITY</span>
            </div>
            <div class="t-card fade-in">
              <div class="icon">📊</div>
              <b>Understand Your Profitability</b>
              <p>Bandingkan revenue dan operational cost untuk memahami performa net profit.</p>
            </div>
          </div>
        </div>
      </div>

      <!-- MOBILE TIMELINE -->
      <div class="timeline-mobile d-mobile-only reveal delay1">
        <div class="m-step">
          <span class="m-num">01</span>
          <b>ORDER</b>
          <strong>Capture Every Order</strong>
          <p>Kelola customer dan order dalam satu sistem sebagai awal operasi.</p>
        </div>
        <div class="m-arrow">↓</div>
        <div class="m-step">
          <span class="m-num">02</span>
          <b>PLANNING</b>
          <strong>Plan Your Shipment</strong>
          <p>Tentukan jadwal, rute, dan kebutuhan armada sebelum jalan.</p>
        </div>
        <div class="m-arrow">↓</div>
        <div class="m-step">
          <span class="m-num">03</span>
          <b>DISPATCH</b>
          <strong>Dispatch With Control</strong>
          <p>Assign driver & armada dengan penugasan terstruktur.</p>
        </div>
        <div class="m-arrow">↓</div>
        <div class="m-step">
          <span class="m-num">04</span>
          <b>TRACKING</b>
          <strong>Monitor Every Shipment</strong>
          <p>Pantau perjalanan pengiriman secara live GPS real-time.</p>
        </div>
        <div class="m-arrow">↓</div>
        <div class="m-step">
          <span class="m-num">05</span>
          <b>DELIVERY</b>
          <strong>Complete the Delivery</strong>
          <p>Catat penyelesaian dan dokumentasi ePOD digital.</p>
        </div>
        <div class="m-arrow">↓</div>
        <div class="m-step">
          <span class="m-num">06</span>
          <b>BILLING</b>
          <strong>Turn Operations Into Billing</strong>
          <p>Data operasional otomatis memicu generate invoice.</p>
        </div>
        <div class="m-arrow">↓</div>
        <div class="m-step">
          <span class="m-num">07</span>
          <b>PROFITABILITY</b>
          <strong>Understand Profitability</strong>
          <p>Hitung selisih cost & revenue per perjalanan instan.</p>
        </div>
      </div>

      <!-- SYSTEM SCREENSHOT -->
      <div class="hiw-visual text-center reveal delay4">
        <h3 class="hiw-sub">Every Step. One Connected System.</h3>
        <div class="screenshot-wrapper text-center">
          <img src="/Screenshot.jpg" alt="LOGISTIQ Software Platform" class="screenshot-img shadow-lg" />
        </div>
      </div>

    </div>
  </section>
</template>

<style src="../assets/AppHowItWorks.css" scoped></style>
