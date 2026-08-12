<template>
  <section class="section alt problems" id="solusi">
    <div class="container center">
      <div class="reveal">
        <span class="kicker text-red">Masalah Operasional Sektoral</span>
        <h2>Teknologi yang menyederhanakan operasi, bukan menambah kompleksitas.</h2>
        <p class="subtitle">Sebagian besar perusahaan kewalahan menghadapi serakan grup WhatsApp pengemudi, spreadsheet silo, dan tumpukan resi Surat Jalan (DO) mekanis yang rentan manipulasi maupun error.</p>
      </div>

      <div class="cards-grid">
        <div class="card reveal delay1">
          <div class="icon red">⊘</div>
          <h3>Fragmentasi Data</h3>
          <p>
            Mencari informasi di 3 aplikasi terpisah hanya untuk melihat status bongkar muat satu surat jalan.
          </p>
        </div>
        <div class="card reveal delay2">
          <div class="icon orange">◷</div>
          <h3>Keterlambatan Akuntansi</h3>
          <p>
            Tagihan (Invoice) sulit dicairkan dengan instan karena staf harus menginput ulang lembar POD yang fisik.
          </p>
        </div>
        <div class="card reveal delay3">
          <div class="icon gray">∅</div>
          <h3>Titik Buta (Blind Spots)</h3>
          <p>
            Customer Services tidak bisa langsung menjawab posisi riil armada truk di jalan tol (lost contact).
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.problems {
  background: white;
  border-bottom: 1px solid var(--line);
}
.kicker.text-red {
  color: var(--red);
  background: #fff0f1;
}
.subtitle {
  max-width: 650px;
  margin: 0 auto 50px;
  color: var(--muted);
  line-height: 1.8;
  font-size: 18px;
}
.cards-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
}
.card {
  padding: 30px;
  background: #fdfdfe;
  border: 1px solid #f0f3f7;
  border-radius: 16px;
  text-align: center;
  box-shadow: 0 10px 40px #123d7008;
}
.icon {
  width: 50px;
  height: 50px;
  margin: 0 auto 20px;
  border-radius: 12px;
  display: grid;
  place-items: center;
  font-size: 26px;
}
.icon.red { background: #feebeb; color: var(--red); }
.icon.orange { background: #fff0e0; color: #ff8c00; }
.icon.gray { background: #f0f3f7; color: #768a9f; }
.card h3 {
  font-size: 19px;
  margin: 0 0 12px;
  color: var(--ink);
}
.card p {
  font-size: 16px;
  line-height: 1.7;
  color: var(--muted);
  margin: 0;
}

@media (max-width: 950px) {
  .cards-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 600px) {
  .cards-grid { grid-template-columns: 1fr; }
}
</style>
