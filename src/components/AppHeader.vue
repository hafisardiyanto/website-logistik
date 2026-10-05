<template>
  <header class="app-header" :class="{ scanned: hasScrolled }">
    <div class="container header-container">
      
      <!-- LOGO -->
      <div class="header-logo">
        <a href="#">LOGISTIQ</a>
      </div>

      <!-- MAIN NAVIGATION (Anchor Links) -->
      <nav class="header-nav d-desktop-only">
        <a href="#features" class="nav-link">Platform</a>
        <a href="#casestudies" class="nav-link">Use Case</a>
        <a href="#integrations" class="nav-link">Integration</a>
        <a href="#security" class="nav-link">Security</a>
        <a href="#faq" class="nav-link">FAQ</a>
      </nav>

      <!-- CTA BUTTONS -->
      <div class="header-actions d-desktop-only">
        <a href="#" class="nav-link login-btn">Login</a>
        <a href="#contact" class="btn blue solid ml-3">Request a Demo</a>
      </div>

      <!-- MOBILE HAMBURGER -->
      <button class="mobile-toggle d-mobile-only" @click="toggleMobileMenu">
        <span></span><span></span><span></span>
      </button>

    </div>

    <!-- MOBILE MENU OVERLAY -->
    <div class="mobile-menu" :class="{ open: isMobileOpen }">
      <div class="m-nav-group">
        <a href="#features" class="m-link" @click="closeMobile">Platform</a>
        <a href="#casestudies" class="m-link" @click="closeMobile">Use Case</a>
        <a href="#integrations" class="m-link" @click="closeMobile">Integration</a>
        <a href="#security" class="m-link" @click="closeMobile">Security</a>
        <a href="#faq" class="m-link" @click="closeMobile">FAQ</a>
      </div>
      <div class="m-actions mt-4">
        <a href="#" class="btn outline w-100 mb-2">Login</a>
        <a href="#contact" class="btn blue solid w-100" @click="closeMobile">Request a Demo</a>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const hasScrolled = ref(false)
const isMobileOpen = ref(false)

const handleScroll = () => {
  hasScrolled.value = window.scrollY > 50
}

const toggleMobileMenu = () => {
  isMobileOpen.value = !isMobileOpen.value
}

const closeMobile = () => {
  isMobileOpen.value = false
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style src="../assets/AppHeader.css" scoped></style>
