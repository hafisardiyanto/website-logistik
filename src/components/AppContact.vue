<template>
  <section class="section" id="contact">
    <div class="container contact">
      <div class="contact-copy reveal">
        <span class="kicker">Kontak</span>
        <h2>Mari berdiskusi tentang operasi logistik Anda.</h2>
        <p>
          Ceritakan kepada kami bagaimana alur kerja Anda saat ini, ukuran armada, atau 
          hambatan perasional yang Anda lalui. Kami siap untuk mendemonstrasikan bagaimana LOGISTIQ 
          mengisi celah-celah solusi dalam proses rantai pasok Anda itu.
        </p>
        <div class="contact-info">
          <div>
            ✉ <span><b>Email</b>hello@logistiq.co</span>
          </div>
          <div>
            ☎ <span><b>Telepon</b>+62 811-1234-5678</span>
          </div>
          <div>
            ⌖ <span><b>Kantor Pusat</b>Surabaya, Indonesia</span>
          </div>
        </div>
      </div>
      <form class="form reveal delay2" @submit.prevent="submitContact">
        <h3>Meminta demonstrasi perangkat (Demo)</h3>
        <div class="form-grid">
          <input required placeholder="Nama depan" />
          <input required placeholder="Nama belakang" />
          <input required type="email" placeholder="Email kerja resmi" />
          <input placeholder="Nama Perusahaan" />
          <select class="full">
            <option>Ukuran Karyawan</option>
            <option>1–10 Orang</option>
            <option>11–50 Orang</option>
            <option>51–200 Orang</option>
            <option>201+ Orang</option>
          </select>
          <textarea
            class="full"
            placeholder="Mohon sebutkan tantangan operasional apa yang ingin Anda selesaikan/tingkatkan?"
          ></textarea>
          <button class="btn blue full" type="submit">
            Kirim Permintaan Demo →
          </button>
        </div>
      </form>
    </div>
  </section>
</template>

<script setup>
const submitContact = () => {
  alert("Terima kasih! Permintaan demo perangkat lunak Anda berhasil dikirim (UI Sandbox).");
}
</script>

<style scoped>
.contact {
  display: grid;
  grid-template-columns: 0.75fr 1.25fr;
  gap: 50px;
  align-items: start;
}
.contact-copy h2 {
  font: 800 36px/1.15 Manrope;
  letter-spacing: -1px;
}
.contact-copy p {
  font-size: 12px;
  line-height: 1.8;
  color: var(--muted);
}
.contact-info {
  margin-top: 28px;
}
.contact-info div {
  display: flex;
  gap: 11px;
  margin: 16px 0;
}
.contact-info b {
  display: block;
  font-size: 10px;
}
.contact-info span {
  display: block;
  font-size: 9px;
  color: var(--muted);
  margin-top: 3px;
}
.form {
  border: 1px solid var(--line);
  border-radius: 15px;
  padding: 28px;
  box-shadow: 0 20px 55px #123d700d;
}
.form h3 {
  font-size: 16px;
  margin: 0 0 15px;
}
.form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}
.form input,
.form select,
.form textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #d9e3ef;
  border-radius: 8px;
  outline: none;
  margin: 5px 0;
}
.form textarea {
  height: 100px;
  resize: vertical;
}

@media (max-width: 950px) {
  .contact {
    grid-template-columns: 1fr;
  }
}
@media (max-width: 600px) {
  .contact-copy h2 {
    font-size: 29px;
  }
}
</style>
