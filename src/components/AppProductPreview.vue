
<template>
  <section class="section" id="product" style="background:#07172b; color:white; padding:100px 0;">
    <div class="container center">
      <div class="reveal">
        <span style="color:#5dd7ff; font-weight:800; font-size:12px; letter-spacing:1px; text-transform:uppercase;">Product Showcase</span>
        <h2 style="font-size: 38px; font-weight: 800; font-family: Manrope; margin: 10px 0;">See Your Entire Logistics Operation in One View</h2>
        <p style="font-size: 16px; color: #a9b9cd; max-width: 700px; margin: 0 auto; line-height:1.7;">
          From daily operations to business performance, LOGISTIQ gives your team the visibility they need.
        </p>
      </div>
      
      <div class="product-tabs reveal delay1" style="margin-top: 40px;">
         <div class="tabs-header" style="display:flex; justify-content:center; flex-wrap:wrap; gap:10px; margin-bottom:30px;">
            <button class="tab-btn active">Dashboard</button>
            <button class="tab-btn">Customer</button>
            <button class="tab-btn">Job Order</button>
            <button class="tab-btn">Manifest</button>
            <button class="tab-btn">Delivery</button>
            <button class="tab-btn">Tracking</button>
            <button class="tab-btn">Invoice</button>
            <button class="tab-btn">Profit & Loss</button>
         </div>
         <div class="tab-content" style="background:#0f2944; border:1px solid #183a5b; border-radius:16px; min-height:450px; display:flex; flex-direction:column; align-items:center; justify-content:center; box-shadow:0 30px 60px rgba(0,0,0,0.5); padding:20px;">
            <!-- INSTRUCTION FOR USER: DROP ACTUAL UI SCREENSHOTS HERE -->
            <img src="" alt="LOGISTIQ logistics management dashboard showing shipment, revenue, cost and profit performance" style="max-width:100%; border-radius:8px; display:none;" />
            <div style="color:var(--blue); opacity:0.8; font-weight:700; font-size:16px; border:2px dashed var(--blue); padding:40px; border-radius:12px; width:100%; text-align:center;">
               [ REQUIRED: DROP ACTUAL UI SCREENSHOT HERE ]<br>
               <span style="font-size:13px; font-weight:400; color:#abc; display:block; margin-top:10px;">Please set src="/assets/your-actual-dashboard.png" in the codebase before going to production.</span>
            </div>
         </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.tab-btn {
  background: transparent;
  border: 1px solid #183a5b;
  color: #7891ad;
  padding: 10px 18px;
  border-radius: 99px;
  font-size: 13px;
  font-weight: 700;
  cursor: pointer;
  transition: 0.2s;
}
.tab-btn:hover { background: #0f2944; color: white; }
.tab-btn.active {
  background: var(--blue);
  color: white;
  border-color: var(--blue);
}
</style>
<style src="../assets/AppProductPreview.css" scoped></style>
