<template>
  <section class="section alt" id="about">
    <div class="container">
      <div class="about-grid">
        <div class="about-card reveal">
          <span class="kicker" style="color: #5dd7ff">About LOGISTIQ</span>
          <h3>Built around the reality of logistics operations.</h3>
          <p>
            LOGISTIQ is designed to help transport and distribution teams
            replace fragmented processes with a connected operational system
            — without making the daily workflow harder.
          </p>
          <div class="values">
            <div class="value">
              <b>Visibility</b><span>One source of operational truth.</span>
            </div>
            <div class="value">
              <b>Efficiency</b><span>Less manual work and reconciliation.</span>
            </div>
            <div class="value">
              <b>Control</b><span>Clear ownership across every process.</span>
            </div>
            <div class="value">
              <b>Scale</b><span>Ready for growing operations.</span>
            </div>
          </div>
        </div>
        <div class="about-copy reveal delay2">
          <span class="kicker">Our approach</span>
          <h2>
            Technology should simplify operations, not add another layer.
          </h2>
          <p>
            We focus on practical workflows, clear data and interfaces that
            help dispatchers, operations teams, finance and management work
            from the same information.
          </p>
          <p>
            From Job Order through Delivery and Billing, every module is
            connected so teams can move with confidence.
          </p>
          <div class="stats4">
            <div class="stat"><b>1</b><span>Connected platform</span></div>
            <div class="stat"><b>24/7</b><span>Visibility</span></div>
            <div class="stat"><b>API</b><span>Ready</span></div>
            <div class="stat"><b>∞</b><span>Scalable</span></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
}
.about-card {
  background: #07172b;
  border-radius: 16px;
  padding: 30px;
  color: white;
  min-height: 300px;
}
.about-card h3 {
  font: 800 25px Manrope;
  margin: 0 0 12px;
}
.about-card p {
  color: #a9b9cd;
  font-size: 11px;
  line-height: 1.8;
}
.values {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  margin-top: 20px;
}
.value {
  border: 1px solid #1b3859;
  border-radius: 9px;
  padding: 12px;
}
.value b {
  font-size: 10px;
}
.value span {
  display: block;
  font-size: 8px;
  color: #8196ae;
  margin-top: 4px;
}
.about-copy h2 {
  font: 800 35px/1.15 Manrope;
  letter-spacing: -1px;
}
.about-copy p {
  font-size: 12px;
  color: var(--muted);
  line-height: 1.8;
}
.stats4 {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin-top: 25px;
  border: 1px solid var(--line);
  border-radius: 12px;
  overflow: hidden;
}
.stat {
  text-align: center;
  padding: 20px;
  border-right: 1px solid var(--line);
}
.stat:last-child {
  border: 0;
}
.stat b {
  font: 800 24px Manrope;
}
.stat span {
  display: block;
  font-size: 8px;
  color: var(--muted);
  margin-top: 4px;
}

@media (max-width: 950px) {
  .about-grid {
    grid-template-columns: 1fr;
  }
}
@media (max-width: 600px) {
  .about-copy h2 {
    font-size: 29px;
  }
  .stats4 {
    grid-template-columns: 1fr 1fr;
  }
  .stat {
    border-bottom: 1px solid var(--line);
  }
  .stat:nth-child(2) {
    border-right: 0;
  }
}
</style>
