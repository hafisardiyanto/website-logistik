
<script setup>
import { ref, watch, onMounted } from 'vue'
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import AppLogin from './components/AppLogin.vue'

const showLogin = ref(false)
const scrollPercent = ref(0)

watch(showLogin, (val) => {
  if (val) document.body.classList.add('login-open')
  else document.body.classList.remove('login-open')
})

onMounted(() => {
  const updateScroll = () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    if (height > 0) scrollPercent.value = (winScroll / height) * 100;
  };
  window.addEventListener('scroll', updateScroll);
})
</script>

<template>
  <div class="scroll-progress" :style="{ width: scrollPercent + '%' }"></div>
  <AppHeader @open-login="showLogin = true" />
  <main style="min-height: 80vh;">
    <router-view />
  </main>
  <AppFooter />
  <AppLogin :is-open="showLogin" @close-login="showLogin = false" />
</template>

<style>
.scroll-progress {
  position: fixed;
  top: 0; left: 0; height: 2px;
  background: var(--blue);
  z-index: 10000;
  transition: width 0.1s ease-out;
}
</style>
