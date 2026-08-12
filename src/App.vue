<script setup>
import { onMounted, ref, watch } from 'vue'
import AppHeader from './components/AppHeader.vue'
import AppHero from './components/AppHero.vue'
import AppTrust from './components/AppTrust.vue'
import AppProblems from './components/AppProblems.vue'
import AppSolution from './components/AppSolution.vue'
import AppWorkflow from './components/AppWorkflow.vue'
import AppProductPreview from './components/AppProductPreview.vue'
import AppProduct from './components/AppProduct.vue'
import AppDashboard from './components/AppDashboard.vue'
import AppPricing from './components/AppPricing.vue'
import AppTech from './components/AppTech.vue'
import AppCta from './components/AppCta.vue'
import AppFooter from './components/AppFooter.vue'
import AppLogin from './components/AppLogin.vue'

const showLogin = ref(false)

watch(showLogin, (val) => {
  if (val) {
    document.body.classList.add('login-open')
  } else {
    document.body.classList.remove('login-open')
  }
})

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) =>
      entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add("show");
      }),
    { threshold: 0.12 },
  );
  // Add a slight delay to allow rendering of child components before observing
  setTimeout(() => {
    document
      .querySelectorAll(".reveal")
      .forEach((el) => observer.observe(el));
  }, 100);
})
</script>

<template>
  <AppHeader @open-login="showLogin = true" />
  <main>
    <AppHero />
    <AppTrust />
    <AppProblems />
    <AppSolution />
    <AppWorkflow />
    <AppProductPreview />
    <AppProduct />
    <AppDashboard />
    <AppPricing />
    <AppTech />
    <AppCta />
  </main>
  <AppFooter />
  <AppLogin :is-open="showLogin" @close-login="showLogin = false" />
</template>
