<template>
  <section class="section" id="pricing">
    <div class="container">
      <div class="head center reveal">
        <span class="kicker">Pricing</span>
        <h2>Start simple. Scale when you need to.</h2>
        <p>
          Choose a plan that fits the maturity of your logistics operation.
          Enterprise plans can be tailored to your workflow.
        </p>
      </div>
      <div class="pricing-toggle">
        <button class="toggle" :class="{ active: mode === 'monthly' }" @click="mode = 'monthly'">
          Monthly
        </button>
        <button class="toggle" :class="{ active: mode === 'yearly' }" @click="mode = 'yearly'">
          Yearly · Save 20%
        </button>
      </div>
      <div class="pricing">
        <div class="price reveal">
          <h3>Starter</h3>
          <p class="desc">
            For small teams starting to digitize operations.
          </p>
          <strong>{{ mode === 'yearly' ? 'Rp 799K' : 'Rp 999K' }} <small>/ month</small></strong>
          <button class="btn outline price-btn" @click="scrollToId('contact')">
            Get started
          </button>
          <ul>
            <li>Job Order & Delivery Order</li>
            <li>Basic dashboard</li>
            <li>Fleet & Driver master</li>
            <li>Up to 5 users</li>
            <li>Email support</li>
          </ul>
        </div>
        <div class="price featured reveal delay1">
          <span class="popular">MOST POPULAR</span>
          <h3>Business</h3>
          <p class="desc">For growing logistics teams that need control.</p>
          <strong>{{ mode === 'yearly' ? 'Rp 1.999K' : 'Rp 2.499K' }} <small>/ month</small></strong>
          <button class="btn blue price-btn" @click="scrollToId('contact')">
            Book a demo
          </button>
          <ul>
            <li>Everything in Starter</li>
            <li>Manifest & Packing List</li>
            <li>Tracking & operational analytics</li>
            <li>Cost & billing workflow</li>
            <li>Up to 25 users</li>
          </ul>
        </div>
        <div class="price reveal delay2">
          <h3>Enterprise</h3>
          <p class="desc">
            For complex operations and multiple business units.
          </p>
          <strong>Custom</strong>
          <button class="btn dark price-btn" @click="scrollToId('contact')">
            Talk to sales
          </button>
          <ul>
            <li>Everything in Business</li>
            <li>Multi-branch & advanced RBAC</li>
            <li>API & system integration</li>
            <li>Custom workflow</li>
            <li>Dedicated support</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const mode = ref('monthly')

const scrollToId = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
</script>

<style scoped>
.pricing-toggle {
  display: flex;
  justify-content: center;
  gap: 6px;
  margin: -15px 0 35px;
}
.toggle {
  padding: 8px 13px;
  border: 1px solid #d5e1ef;
  background: white;
  border-radius: 999px;
  font-size: 10px;
  color: #63738a;
  cursor: pointer;
}
.toggle.active {
  background: #eaf3ff;
  color: var(--blue);
  border-color: #bdd5f3;
}
.pricing {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
  align-items: stretch;
}
.price {
  border: 1px solid var(--line);
  border-radius: 15px;
  padding: 27px;
  background: white;
  position: relative;
}
.price.featured {
  border: 1.5px solid #6ca4f4;
  box-shadow: 0 20px 50px #1768e814;
}
.popular {
  position: absolute;
  top: -11px;
  right: 20px;
  background: var(--blue);
  color: white;
  border-radius: 99px;
  padding: 5px 9px;
  font-size: 8px;
  font-weight: 800;
}
.price h3 {
  font-size: 15px;
  margin: 0;
}
.price .desc {
  font-size: 10px;
  color: var(--muted);
  min-height: 35px;
}
.price strong {
  font: 800 29px Manrope;
  display: block;
  margin: 17px 0 4px;
}
.price strong small {
  font: 500 10px "DM Sans";
  color: var(--muted);
}
.price .price-btn {
  width: 100%;
  margin: 12px 0 14px;
}
.price ul {
  list-style: none;
  padding: 0;
  border-top: 1px solid var(--line);
  padding-top: 14px;
}
.price li {
  font-size: 10px;
  color: #5f7088;
  margin: 11px 0;
}
.price li:before {
  content: "✓";
  color: var(--green);
  font-weight: 800;
  margin-right: 8px;
}

@media (max-width: 950px) {
  .pricing {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 600px) {
  .pricing {
    grid-template-columns: 1fr;
  }
}
</style>
