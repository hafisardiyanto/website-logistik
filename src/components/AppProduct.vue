<template>
  <section class="section" id="product">
    <div class="container">
      <div class="head center reveal">
        <span class="kicker">Satu sistem operasi</span>
        <h2>Semua yang diperlukan oleh operasi logistik Anda, saling terhubung.</h2>
        <p>
          Berhenti bolak-balik antara spreadsheet, chat, dan alat yang terpisah-pisah.
          LOGISTIQ menyatukan alur kerja operasional ke dalam satu
          pengalaman yang konsisten.
        </p>
      </div>
      <div class="features" id="features">
        <div class="feature reveal">
          <div class="icon">⌁</div>
          <h3>Manajemen Pesanan (Job Order)</h3>
          <p>
            Rekam permintaan pelanggan dan jadikan sebagai Pesanan
            terstruktur dengan konteks operasional yang lengkap.
          </p>
        </div>
        <div class="feature reveal delay1">
          <div class="icon">▣</div>
          <h3>Surat Jalan (Delivery Order)</h3>
          <p>
            Kelola rute, tujuan pengiriman barang, pengambilan, dan kebutuhan perjalan
            dari satu ruang kerja.
          </p>
        </div>
        <div class="feature reveal delay2">
          <div class="icon">◈</div>
          <h3>Manifes & Daftar Kemas</h3>
          <p>
            Kelompokkan daftar pengiriman Anda ke dalam manifes yang akurat
            sebelum kendaraan logistik berangkat.
          </p>
        </div>
        <div class="feature reveal">
          <div class="icon">◉</div>
          <h3>Armada & Pengemudi</h3>
          <p>
            Atur dan pasangkan kendaraan dan pengemudinya dengan
            pengawasan visibilitas yang baik untuk kapasitas maupun status armada.
          </p>
        </div>
        <div class="feature reveal delay1">
          <div class="icon">⌖</div>
          <h3>Lacak Secara Langsung</h3>
          <p>
            Memberikan tim operasi pandangan jernih terhadap progres pengiriman
            serta pengecualian di lapangan.
          </p>
        </div>
        <div class="feature reveal delay2">
          <div class="icon">◒</div>
          <h3>Biaya & Penagihan</h3>
          <p>
            Hubungkan tarif, uang jalan, biaya, dan alur tagihan secara utuh
            ke dalam pengiriman bersangkutan.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.features {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
}
.feature {
  padding: 24px;
  border: 1px solid var(--line);
  border-radius: 14px;
  background: white;
  transition: 0.2s;
}
.feature:hover {
  transform: translateY(-5px);
  box-shadow: 0 22px 45px #123d7010;
  border-color: #c7daf4;
}
.icon {
  width: 42px;
  height: 42px;
  border-radius: 10px;
  background: #edf5ff;
  color: var(--blue);
  display: grid;
  place-items: center;
  font-size: 19px;
}
.feature h3 {
  font-size: 14px;
  margin: 16px 0 7px;
}
.feature p {
  font-size: 10px;
  line-height: 1.7;
  color: var(--muted);
  margin: 0;
}

@media (max-width: 950px) {
  .features {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 600px) {
  .features {
    grid-template-columns: 1fr;
  }
}
</style>
