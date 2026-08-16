<template>
  <header class="nav" :class="{ 'is-scrolled': isScrolled }">
    <div class="container">
      <router-link to="/" class="logo">
        <span class="logo-mark">◆</span>
        <span><b>LOGISTIQ</b></span>
      </router-link>
      <button class="hamb" @click="toggleNav">☰</button>
      <nav class="links" id="links" :style="{ display: navOpen ? 'flex' : '' }">
        <a href="/#product">Produk</a>
        <a href="/#solutions">Solusi</a>
        <a href="/#features">Fitur</a>
        <a href="/#pricing">Harga</a>
        <a href="/#about">Tentang</a>
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

<style src="../assets/AppHeader.css" scoped></style>

