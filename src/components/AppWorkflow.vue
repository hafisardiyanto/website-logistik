<template>
  <section class="section alt" id="workflow">
    <div class="container">
      <div class="head reveal">
        <span class="kicker">Desain Sederhana</span>
        <h2>Alur kerja yang jelas dari permintaan hingga pendapatan.</h2>
        <p>
          Setiap langkah saling terhubung, sehingga tim Anda dapat bergerak lebih cepat
          dengan minim perpindahan tangan dan tanpa rekonsiliasi manual.
        </p>
      </div>
      <div class="workflow">
        <div class="flow reveal">
          <span class="flow-num">01</span>
          <div class="flow-icon">👥</div>
          <h3>Permintaan Pelanggan</h3>
          <p>Mencatat kebutuhan dan syarat logistik.</p>
        </div>
        <div class="flow reveal delay1">
          <span class="flow-num">02</span>
          <div class="flow-icon">📋</div>
          <h3>Pesanan / Job Order</h3>
          <p>Ubah pesanan menjadi tugas operasional.</p>
        </div>
        <div class="flow reveal delay2">
          <span class="flow-num">03</span>
          <div class="flow-icon">📦</div>
          <h3>Surat Jalan / Delivery Order</h3>
          <p>Tetapkan barang, pengiriman dan tujuan.</p>
        </div>
        <div class="flow reveal delay3">
          <span class="flow-num">04</span>
          <div class="flow-icon">🚚</div>
          <h3>Penugasan</h3>
          <p>Tunjuk kendaraan dan pengemudi khusus.</p>
        </div>
        <div class="flow reveal">
          <span class="flow-num">05</span>
          <div class="flow-icon">🧾</div>
          <h3>Manifes</h3>
          <p>Persiapkan pengelompokan muatan.</p>
        </div>
        <div class="flow reveal delay1">
          <span class="flow-num">06</span>
          <div class="flow-icon">📍</div>
          <h3>Penjemputan & Rute</h3>
          <p>Eksekusi rute dan pantau pergerakan armada.</p>
        </div>
        <div class="flow reveal delay2">
          <span class="flow-num">07</span>
          <div class="flow-icon">✓</div>
          <h3>Selesai & Terkirim</h3>
          <p>Dokumentasi dengan Bukti Penyerahan (POD).</p>
        </div>
        <div class="flow reveal delay3">
          <span class="flow-num">08</span>
          <div class="flow-icon">₨</div>
          <h3>Biaya & Tagihan</h3>
          <p>Tutup siklus operasional dan keuangan.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.workflow {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
}
.flow {
  padding: 22px;
  border: 1px solid var(--line);
  background: white;
  border-radius: 13px;
  position: relative;
}
.flow-num {
  font-size: 9px;
  color: var(--blue);
  font-weight: 800;
}
.flow-icon {
  font-size: 27px;
  margin: 22px 0 13px;
}
.flow h3 {
  font-size: 13px;
  margin: 0 0 6px;
}
.flow p {
  font-size: 10px;
  color: var(--muted);
  line-height: 1.6;
  margin: 0;
}
.flow:after {
  content: "→";
  position: absolute;
  right: -18px;
  top: 45%;
  color: #9bb0c8;
}
.flow:nth-child(4n):after {
  display: none;
}

@media (max-width: 950px) {
  .workflow {
    grid-template-columns: repeat(2, 1fr);
  }
  .flow:after {
    display: none;
  }
}
@media (max-width: 600px) {
  .workflow {
    grid-template-columns: 1fr;
  }
}
</style>
