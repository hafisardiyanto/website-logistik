<template>
  <section class="section" id="contact">
    <div class="container contact">
      <div class="contact-copy reveal">
        <span class="kicker">Contact</span>
        <h2>Let's talk about your logistics operation.</h2>
        <p>
          Tell us about your current workflow, fleet size or operational
          challenge. We'll show you how LOGISTIQ can fit into the process.
        </p>
        <div class="contact-info">
          <div>
            ✉ <span><b>Email</b>hello@logistiq.co</span>
          </div>
          <div>
            ☎ <span><b>Phone</b>+62 811-1234-5678</span>
          </div>
          <div>
            ⌖ <span><b>Office</b>Surabaya, Indonesia</span>
          </div>
        </div>
      </div>
      <form class="form reveal delay2" @submit.prevent="submitContact">
        <h3>Request a personalized demo</h3>
        <div class="form-grid">
          <input required placeholder="First name" />
          <input required placeholder="Last name" />
          <input required type="email" placeholder="Work email" />
          <input placeholder="Company name" />
          <select class="full">
            <option>Company size</option>
            <option>1–10</option>
            <option>11–50</option>
            <option>51–200</option>
            <option>201+</option>
          </select>
          <textarea
            class="full"
            placeholder="Tell us what you want to improve"
          ></textarea>
          <button class="btn blue full" type="submit">
            Send request →
          </button>
        </div>
      </form>
    </div>
  </section>
</template>

<script setup>
const submitContact = () => {
  alert("Terima kasih. Demo request berhasil dikirim (demo UI).");
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
