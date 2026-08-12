<template>
  <section class="section" id="product">
    <div class="container">
      <div class="head center reveal">
        <span class="kicker">One operating system</span>
        <h2>Everything your logistics operation needs, connected.</h2>
        <p>
          Stop switching between spreadsheets, chats and disconnected tools.
          LOGISTIQ brings the operational workflow into one consistent
          experience.
        </p>
      </div>
      <div class="features" id="features">
        <div class="feature reveal">
          <div class="icon">⌁</div>
          <h3>Job Order Management</h3>
          <p>
            Capture customer requests and turn them into structured Job
            Orders with complete operational context.
          </p>
        </div>
        <div class="feature reveal delay1">
          <div class="icon">▣</div>
          <h3>Delivery Order</h3>
          <p>
            Manage destinations, goods, pickup and service requirements from
            a single workspace.
          </p>
        </div>
        <div class="feature reveal delay2">
          <div class="icon">◈</div>
          <h3>Manifest & Packing List</h3>
          <p>
            Group shipments into accurate manifests before the vehicle
            leaves.
          </p>
        </div>
        <div class="feature reveal">
          <div class="icon">◉</div>
          <h3>Fleet & Driver</h3>
          <p>
            Assign vehicles and drivers while keeping capacity and status
            visible.
          </p>
        </div>
        <div class="feature reveal delay1">
          <div class="icon">⌖</div>
          <h3>Live Tracking</h3>
          <p>
            Give operations teams a clear view of delivery progress and
            exceptions.
          </p>
        </div>
        <div class="feature reveal delay2">
          <div class="icon">◒</div>
          <h3>Cost & Billing</h3>
          <p>
            Connect tariffs, costs and invoice workflows to the shipment
            that created them.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.features {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
}
.feature {
  padding: 24px;
  border: 1px solid var(--line);
  border-radius: 14px;
  background: white;
  transition: 0.2s;
}
.feature:hover {
  transform: translateY(-5px);
  box-shadow: 0 22px 45px #123d7010;
  border-color: #c7daf4;
}
.icon {
  width: 42px;
  height: 42px;
  border-radius: 10px;
  background: #edf5ff;
  color: var(--blue);
  display: grid;
  place-items: center;
  font-size: 19px;
}
.feature h3 {
  font-size: 14px;
  margin: 16px 0 7px;
}
.feature p {
  font-size: 10px;
  line-height: 1.7;
  color: var(--muted);
  margin: 0;
}

@media (max-width: 950px) {
  .features {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 600px) {
  .features {
    grid-template-columns: 1fr;
  }
}
</style>
