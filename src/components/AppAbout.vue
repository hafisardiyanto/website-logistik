<template>
  <section class="section alt" id="about">
    <div class="container">
      <div class="about-grid">
        <div class="about-card reveal">
          <span class="kicker" style="color: #5dd7ff">Tentang LOGISTIQ</span>
          <h3>Dibangun di atas realita sesungguhnya dari operasi logistik.</h3>
          <p>
            LOGISTIQ dirancang khusus untuk memandu tim perusahan distribusi transportasi
            dalam menggantikan cara-cara berantakan dengan suatu sistem operasi yang saling terhubung 
            — dan kami melakukannya dengan tanpa membuat alur kerja Anda menjadi lebih berat.
          </p>
          <div class="values">
            <div class="value">
              <b>Visibilitas</b><span>Satu sumber data operasional utama yang transparan.</span>
            </div>
            <div class="value">
              <b>Efisiensi</b><span>Terbebas secara dramatis dari pekerjaan manual atau rekonsiliasi.</span>
            </div>
            <div class="value">
              <b>Kendali</b><span>Tanggungjawabnya nyata serta sangat bisa diandalkan pada setiap detailnya.</span>
            </div>
            <div class="value">
              <b>Berskala</b><span>Infrastruktur stabil dan siap menemani kapasitas Anda yang makin bertambah!</span>
            </div>
          </div>
        </div>
        <div class="about-copy reveal delay2">
          <span class="kicker">Pendekatan Kami</span>
          <h2>
            Teknologi semestinya membantu Anda menjadi simpel, bukan malah membuat kerumitan baru lagi.
          </h2>
          <p>
            Kami fokus pada kepraktisan alur kerja, data yang jelas, serta sebuah tatap muka perangkat lunak canggih yang membantu pihak manajemen, kru administrasi surat, departemen pendanaan (finance) serta jajaran yang mengawasi gudang dapat berkolaborasi langsung menggunakan informasi yang sama.
          </p>
          <p>
            Mulai dari Pesanan Pelanggan hingga pada bukti Penagihan dan pelunasannya, modul terhubung ini sangat memastikan tiap armada dan personel bekerja dengan rasa yang lebih mantap.
          </p>
          <div class="stats4">
            <div class="stat"><b>1</b><span>Platform Tunggal</span></div>
            <div class="stat"><b>24/7</b><span>Visibilitas</span></div>
            <div class="stat"><b>API</b><span>Terbuka (Ready)</span></div>
            <div class="stat"><b>∞</b><span>Skalabilitas Ekstrem</span></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
}
.about-card {
  background: #07172b;
  border-radius: 16px;
  padding: 30px;
  color: white;
  min-height: 300px;
}
.about-card h3 {
  font: 800 25px Manrope;
  margin: 0 0 12px;
}
.about-card p {
  color: #a9b9cd;
  font-size: 11px;
  line-height: 1.8;
}
.values {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  margin-top: 20px;
}
.value {
  border: 1px solid #1b3859;
  border-radius: 9px;
  padding: 12px;
}
.value b {
  font-size: 10px;
}
.value span {
  display: block;
  font-size: 8px;
  color: #8196ae;
  margin-top: 4px;
}
.about-copy h2 {
  font: 800 35px/1.15 Manrope;
  letter-spacing: -1px;
}
.about-copy p {
  font-size: 12px;
  color: var(--muted);
  line-height: 1.8;
}
.stats4 {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin-top: 25px;
  border: 1px solid var(--line);
  border-radius: 12px;
  overflow: hidden;
}
.stat {
  text-align: center;
  padding: 20px;
  border-right: 1px solid var(--line);
}
.stat:last-child {
  border: 0;
}
.stat b {
  font: 800 24px Manrope;
}
.stat span {
  display: block;
  font-size: 8px;
  color: var(--muted);
  margin-top: 4px;
}

@media (max-width: 950px) {
  .about-grid {
    grid-template-columns: 1fr;
  }
}
@media (max-width: 600px) {
  .about-copy h2 {
    font-size: 29px;
  }
  .stats4 {
    grid-template-columns: 1fr 1fr;
  }
  .stat {
    border-bottom: 1px solid var(--line);
  }
  .stat:nth-child(2) {
    border-right: 0;
  }
}
</style>
