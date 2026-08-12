<template>
  <header class="nav" :class="{ 'is-scrolled': isScrolled }">
    <div class="container">
      <a href="#home" class="logo">
        <span class="logo-mark">◆</span>
        <span><b>LOGISTIQ</b></span>
      </a>
      <button class="hamb" @click="toggleNav">☰</button>
      <nav class="links" id="links" :style="{ display: navOpen ? 'flex' : '' }">
        <a href="#product">Produk</a>
        <a href="#solusi">Solusi</a>
        <a href="#features">Fitur</a>
        <a href="#pricing">Harga</a>
        <a href="#about">Tentang</a>
      </nav>
      <div class="nav-buttons">
        <button class="btn clear" @click="$emit('open-login')">Masuk</button>
        <button class="btn blue" @click="scrollToId('contact')" style="border-radius: 99px; padding: 10px 22px;">Jadwalkan Demo</button>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const navOpen = ref(false)
const isScrolled = ref(false)

const toggleNav = () => {
  navOpen.value = !navOpen.value
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 40
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const scrollToId = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  if (window.innerWidth <= 950) {
    navOpen.value = false;
  }
}
</script>

<style scoped>
.nav {
  position: sticky;
  top: 0;
  z-index: 50;
  background: white;
  transition: all 0.3s ease;
  border-bottom: 1px solid transparent;
}
.nav.is-scrolled {
  background: rgba(255, 255, 255, 0.75);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.04);
  border-bottom: 1px solid rgba(220, 230, 240, 0.5);
}
.nav .container {
  height: 78px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: height 0.3s ease;
}
.nav.is-scrolled .container {
  height: 64px;
}
.logo {
  display: flex;
  align-items: center;
  gap: 12px;
}
.logo-mark {
  width: 36px;
  height: 36px;
  border-radius: 10px;
  background: linear-gradient(135deg, #1257d4, #66d2ff);
  display: grid;
  place-items: center;
  color: #fff;
  font-size: 20px;
  box-shadow: 0 9px 22px #1768e83b;
}
.logo b {
  font: 800 25px Manrope;
  letter-spacing: -0.5px;
  color: #0c1b30;
}
.links {
  display: flex;
  gap: 35px;
  align-items: center;
  color: #4b5e73;
  font-size: 17px;
  font-weight: 700;
}
.links a:hover { color: var(--blue); }
.nav-buttons {
  display: flex;
  gap: 14px;
}
.btn.clear {
  background: transparent;
  border: 0;
  color: #4b5e73;
  font-weight: 700;
  font-family: Arial;
  font-size: 17px;
}
.btn.clear:hover { color: var(--blue); }
.hamb { display: none; border: 0; background: none; font-size: 28px; }
@media (max-width: 950px) {
  .links, .nav-buttons { display: none; }
  .hamb { display: block; }
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
  .nav .container, .nav.is-scrolled .container { height: 60px; }
}
</style>
