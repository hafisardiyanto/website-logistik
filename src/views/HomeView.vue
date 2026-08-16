
<template>
  <div class="home-wrapper">
    <AppHero />
    <AppTrust />
    <AppProblems />
    <AppSolution />
    <AppWorkflow />
    <AppProduct />
    <AppProductPreview />
    <AppDashboard />
    <AppFeatures />
    <AppWhySecurity />
    <AppPricing />
    <AppAbout />
    <AppFaq />
    <AppContact />
    <AppCta />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

import AppHero from '../components/AppHero.vue'
import AppTrust from '../components/AppTrust.vue'
import AppProblems from '../components/AppProblems.vue'
import AppSolution from '../components/AppSolution.vue'
import AppWorkflow from '../components/AppWorkflow.vue'
import AppProductPreview from '../components/AppProductPreview.vue'
import AppProduct from '../components/AppProduct.vue'
import AppFeatures from '../components/AppFeatures.vue'
import AppException from '../components/AppException.vue'
import AppProfit from '../components/AppProfit.vue'
import AppDashboard from '../components/AppDashboard.vue'
import AppWhySecurity from '../components/AppWhySecurity.vue'
import AppPricing from '../components/AppPricing.vue'
import AppAbout from '../components/AppAbout.vue'
import AppFaq from '../components/AppFaq.vue'
import AppContact from '../components/AppContact.vue'
import AppCta from '../components/AppCta.vue'


onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) =>
      entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add("show");
      }),
    { threshold: 0.12 },
  );
  setTimeout(() => {
    document
      .querySelectorAll(".reveal")
      .forEach((el) => observer.observe(el));
  }, 100);
});
</script>
