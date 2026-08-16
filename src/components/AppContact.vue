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

<style src="../assets/AppContact.css" scoped></style>

