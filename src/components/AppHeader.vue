<template>
  <div>
    <div class="top">
      <div class="container">
        <span>Platform Operasional Logistik Perusahaan</span>
        <strong>Infrastruktur aman · Siap API · Dukungan 24/7</strong>
      </div>
    </div>

    <header class="nav">
      <div class="container">
        <a href="#home" class="logo">
          <span class="logo-mark">◆</span>
          <span><b>LOGISTIQ</b><small>Platform Operasional Logistik</small></span>
        </a>
        <button class="hamb" @click="toggleNav">☰</button>
        <nav class="links" id="links" :style="{ display: navOpen ? 'flex' : '' }">
          <a href="#product">Produk</a>
          <a href="#features">Fitur</a>
          <a href="#pricing">Harga</a>
          <a href="#about">Tentang</a>
          <a href="#contact">Kontak</a>
        </nav>
        <div class="nav-buttons">
          <button class="btn outline" @click="$emit('open-login')">Masuk</button>
          <button class="btn blue" @click="scrollToId('contact')">Jadwalkan Demo →</button>
        </div>
      </div>
    </header>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const navOpen = ref(false)
const toggleNav = () => {
  navOpen.value = !navOpen.value
}

const scrollToId = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  // if on mobile close nav
  if (window.innerWidth <= 950) {
    navOpen.value = false;
  }
}
</script>

<style scoped>
.top {
  height: 34px;
  background: #06101f;
  color: #9fb1c8;
  font-size: 10px;
}
.top .container {
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.top strong {
  color: #dbe8f7;
}
.nav {
  position: sticky;
  top: 0;
  z-index: 50;
  background: #ffffffec;
  backdrop-filter: blur(16px);
  border-bottom: 1px solid #eaf0f6;
}
.nav .container {
  height: 76px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.logo {
  display: flex;
  align-items: center;
  gap: 10px;
}
.logo-mark {
  width: 37px;
  height: 37px;
  border-radius: 10px;
  background: linear-gradient(135deg, #1257d4, #66d2ff);
  display: grid;
  place-items: center;
  color: #fff;
  box-shadow: 0 9px 22px #1768e82e;
}
.logo b {
  font: 800 16px Manrope;
  letter-spacing: -0.5px;
}
.logo small {
  display: block;
  color: #8492a5;
  font-size: 8px;
  margin-top: 2px;
}
.links {
  display: flex;
  gap: 27px;
  align-items: center;
  color: #43566f;
  font-size: 12px;
  font-weight: 600;
}
.links a:hover {
  color: var(--blue);
}
.nav-buttons {
  display: flex;
  gap: 8px;
}
.hamb {
  display: none;
  border: 0;
  background: none;
  font-size: 24px;
}
@media (max-width: 950px) {
  .links,
  .nav-buttons {
    display: none;
  }
  .hamb {
    display: block;
  }
  .links {
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: white;
    padding: 20px;
    border-bottom: 1px solid #eaf0f6;
    box-shadow: 0 10px 20px rgba(0,0,0,0.05);
  }
}
@media (max-width: 600px) {
  .top {
    display: none;
  }
  .nav .container {
    height: 68px;
  }
}
</style>
