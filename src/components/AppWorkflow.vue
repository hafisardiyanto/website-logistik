<template>
  <section class="section alt" id="workflow">
    <div class="container">
      <div class="head reveal">
        <span class="kicker">Simple by design</span>
        <h2>A clear workflow from request to revenue.</h2>
        <p>
          Every step is connected, so your team can move faster with fewer
          handoffs and less manual reconciliation.
        </p>
      </div>
      <div class="workflow">
        <div class="flow reveal">
          <span class="flow-num">01</span>
          <div class="flow-icon">👥</div>
          <h3>Customer Request</h3>
          <p>Capture shipment requirements.</p>
        </div>
        <div class="flow reveal delay1">
          <span class="flow-num">02</span>
          <div class="flow-icon">📋</div>
          <h3>Job Order</h3>
          <p>Turn demand into an operational order.</p>
        </div>
        <div class="flow reveal delay2">
          <span class="flow-num">03</span>
          <div class="flow-icon">📦</div>
          <h3>Delivery Order</h3>
          <p>Define shipment and destination.</p>
        </div>
        <div class="flow reveal delay3">
          <span class="flow-num">04</span>
          <div class="flow-icon">🚚</div>
          <h3>Assignment</h3>
          <p>Assign vehicle and driver.</p>
        </div>
        <div class="flow reveal">
          <span class="flow-num">05</span>
          <div class="flow-icon">🧾</div>
          <h3>Manifest</h3>
          <p>Prepare shipment grouping.</p>
        </div>
        <div class="flow reveal delay1">
          <span class="flow-num">06</span>
          <div class="flow-icon">📍</div>
          <h3>Pickup & Route</h3>
          <p>Execute and monitor movement.</p>
        </div>
        <div class="flow reveal delay2">
          <span class="flow-num">07</span>
          <div class="flow-icon">✓</div>
          <h3>Delivery</h3>
          <p>Complete with proof of delivery.</p>
        </div>
        <div class="flow reveal delay3">
          <span class="flow-num">08</span>
          <div class="flow-icon">₨</div>
          <h3>Cost & Billing</h3>
          <p>Close operational and financial cycle.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.workflow {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
}
.flow {
  padding: 22px;
  border: 1px solid var(--line);
  background: white;
  border-radius: 13px;
  position: relative;
}
.flow-num {
  font-size: 9px;
  color: var(--blue);
  font-weight: 800;
}
.flow-icon {
  font-size: 27px;
  margin: 22px 0 13px;
}
.flow h3 {
  font-size: 13px;
  margin: 0 0 6px;
}
.flow p {
  font-size: 10px;
  color: var(--muted);
  line-height: 1.6;
  margin: 0;
}
.flow:after {
  content: "→";
  position: absolute;
  right: -18px;
  top: 45%;
  color: #9bb0c8;
}
.flow:nth-child(4n):after {
  display: none;
}

@media (max-width: 950px) {
  .workflow {
    grid-template-columns: repeat(2, 1fr);
  }
  .flow:after {
    display: none;
  }
}
@media (max-width: 600px) {
  .workflow {
    grid-template-columns: 1fr;
  }
}
</style>
