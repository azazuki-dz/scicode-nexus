/**
 * SciCode Nexus - Interactive Physics & Math Visualizer
 * Real-time 60FPS HTML5 Canvas physics simulations & Chart.js grapher.
 */

export class ProjectileSimulation {
  constructor(canvasId, hudElements = {}) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.hud = hudElements;

    // Simulation parameters
    this.v0 = 35; // m/s
    this.angleDeg = 45; // degrees
    this.g = 9.8; // m/s²
    this.airResistance = false;
    this.k = 0.005; // drag coefficient

    // State
    this.isRunning = false;
    this.isPaused = false;
    this.t = 0;
    this.dt = 0.02; // simulation time step
    this.scale = 4.5; // pixels per meter
    this.originX = 50;
    this.originY = this.canvas.height - 50;

    this.ball = { x: 0, y: 0, vx: 0, vy: 0 };
    this.trajectory = [];
    this.animationFrameId = null;

    // Computed peak & range
    this.maxHeight = 0;
    this.totalRange = 0;

    this.resize();
    window.addEventListener('resize', () => this.resize());
    this.reset();
  }

  resize() {
    if (!this.canvas) return;
    const rect = this.canvas.getBoundingClientRect();
    this.canvas.width = rect.width * (window.devicePixelRatio || 1);
    this.canvas.height = 360 * (window.devicePixelRatio || 1);
    this.ctx.scale(window.devicePixelRatio || 1, window.devicePixelRatio || 1);
    this.originX = 60;
    this.originY = 360 - 50;
    this.draw();
  }

  setParams(v0, angleDeg, g, airResistance = false) {
    this.v0 = Math.max(1, parseFloat(v0));
    this.angleDeg = parseFloat(angleDeg);
    this.g = Math.max(0.1, parseFloat(g));
    this.airResistance = airResistance;

    // Theoretical maximums
    const rad = (this.angleDeg * Math.PI) / 180;
    this.maxHeight = (Math.pow(this.v0 * Math.sin(rad), 2)) / (2 * this.g);
    this.totalRange = (Math.pow(this.v0, 2) * Math.sin(2 * rad)) / this.g;

    // Adjust scale so trajectory fits comfortably
    const maxDimension = Math.max(this.totalRange * 1.2, this.maxHeight * 1.5, 30);
    this.scale = (this.canvas.width / (window.devicePixelRatio || 1) - 120) / maxDimension;

    if (!this.isRunning) {
      this.reset();
    }
  }

  start() {
    this.reset();
    this.isRunning = true;
    this.isPaused = false;
    const rad = (this.angleDeg * Math.PI) / 180;
    this.ball.x = 0;
    this.ball.y = 0;
    this.ball.vx = this.v0 * Math.cos(rad);
    this.ball.vy = this.v0 * Math.sin(rad);
    this.trajectory = [{ x: 0, y: 0 }];
    this.loop();
  }

  pause() {
    this.isPaused = !this.isPaused;
    if (!this.isPaused && this.isRunning) {
      this.loop();
    }
  }

  reset() {
    this.isRunning = false;
    this.isPaused = false;
    cancelAnimationFrame(this.animationFrameId);
    this.t = 0;
    this.ball = { x: 0, y: 0, vx: 0, vy: 0 };
    this.trajectory = [];
    this.updateHUD(0, 0, 0, 0, 0);
    this.draw();
  }

  update() {
    if (!this.isRunning || this.isPaused) return;

    // Run multiple sub-steps for physical accuracy
    for (let i = 0; i < 2; i++) {
      const step = this.dt / 2;
      this.t += step;

      let ax = 0;
      let ay = -this.g;

      if (this.airResistance) {
        const speed = Math.sqrt(this.ball.vx * this.ball.vx + this.ball.vy * this.ball.vy);
        const drag = this.k * speed * speed;
        ax -= (drag * (this.ball.vx / speed));
        ay -= (drag * (this.ball.vy / speed));
      }

      this.ball.vx += ax * step;
      this.ball.vy += ay * step;
      this.ball.x += this.ball.vx * step;
      this.ball.y += this.ball.vy * step;

      if (this.ball.y <= 0 && this.t > 0.05) {
        this.ball.y = 0;
        this.isRunning = false;
        break;
      }
    }

    this.trajectory.push({ x: this.ball.x, y: this.ball.y });
    this.updateHUD(this.t, this.ball.x, this.ball.y, this.ball.vx, this.ball.vy);
  }

  updateHUD(t, x, y, vx, vy) {
    if (this.hud.time) this.hud.time.textContent = `${t.toFixed(2)} s`;
    if (this.hud.distance) this.hud.distance.textContent = `${x.toFixed(2)} m`;
    if (this.hud.height) this.hud.height.textContent = `${Math.max(0, y).toFixed(2)} m`;
    if (this.hud.velocity) {
      const currentSpeed = Math.sqrt(vx * vx + vy * vy);
      this.hud.velocity.textContent = `${currentSpeed.toFixed(2)} m/s`;
    }
  }

  draw() {
    const w = this.canvas.width / (window.devicePixelRatio || 1);
    const h = 360;
    this.ctx.clearRect(0, 0, w, h);

    // Draw background grid lines
    this.ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
    this.ctx.lineWidth = 1;
    for (let x = 0; x < w; x += 40) {
      this.ctx.beginPath();
      this.ctx.moveTo(x, 0);
      this.ctx.lineTo(x, h);
      this.ctx.stroke();
    }
    for (let y = 0; y < h; y += 40) {
      this.ctx.beginPath();
      this.ctx.moveTo(0, y);
      this.ctx.lineTo(w, y);
      this.ctx.stroke();
    }

    // Ground Line
    this.ctx.strokeStyle = 'rgba(99, 102, 241, 0.6)';
    this.ctx.lineWidth = 3;
    this.ctx.beginPath();
    this.ctx.moveTo(0, this.originY);
    this.ctx.lineTo(w, this.originY);
    this.ctx.stroke();

    // Ground hatching
    this.ctx.strokeStyle = 'rgba(99, 102, 241, 0.2)';
    this.ctx.lineWidth = 1;
    for (let x = 10; x < w; x += 15) {
      this.ctx.beginPath();
      this.ctx.moveTo(x, this.originY);
      this.ctx.lineTo(x - 10, this.originY + 12);
      this.ctx.stroke();
    }

    // Launch Cannon / Base
    const rad = (this.angleDeg * Math.PI) / 180;
    const cannonLen = 30;
    this.ctx.save();
    this.ctx.translate(this.originX, this.originY);
    this.ctx.strokeStyle = '#06b6d4';
    this.ctx.lineWidth = 6;
    this.ctx.beginPath();
    this.ctx.moveTo(0, 0);
    this.ctx.lineTo(cannonLen * Math.cos(rad), -cannonLen * Math.sin(rad));
    this.ctx.stroke();

    // Cannon pivot base
    this.ctx.fillStyle = '#6366f1';
    this.ctx.beginPath();
    this.ctx.arc(0, 0, 8, 0, Math.PI * 2);
    this.ctx.fill();
    this.ctx.restore();

    // Draw theoretical trajectory curve (dotted)
    if (!this.airResistance && this.totalRange > 0) {
      this.ctx.save();
      this.ctx.strokeStyle = 'rgba(6, 182, 212, 0.25)';
      this.ctx.setLineDash([4, 4]);
      this.ctx.lineWidth = 2;
      this.ctx.beginPath();
      const numSteps = 50;
      for (let i = 0; i <= numSteps; i++) {
        const simX = (this.totalRange * i) / numSteps;
        const simY = simX * Math.tan(rad) - (this.g * simX * simX) / (2 * Math.pow(this.v0 * Math.cos(rad), 2));
        const px = this.originX + simX * this.scale;
        const py = this.originY - Math.max(0, simY) * this.scale;
        if (i === 0) this.ctx.moveTo(px, py);
        else this.ctx.lineTo(px, py);
      }
      this.ctx.stroke();
      this.ctx.restore();
    }

    // Draw actual trajectory line (solid luminous cyan)
    if (this.trajectory.length > 1) {
      this.ctx.save();
      this.ctx.strokeStyle = '#06b6d4';
      this.ctx.shadowColor = 'rgba(6, 182, 212, 0.6)';
      this.ctx.shadowBlur = 10;
      this.ctx.lineWidth = 3;
      this.ctx.beginPath();
      for (let i = 0; i < this.trajectory.length; i++) {
        const pt = this.trajectory[i];
        const px = this.originX + pt.x * this.scale;
        const py = this.originY - pt.y * this.scale;
        if (i === 0) this.ctx.moveTo(px, py);
        else this.ctx.lineTo(px, py);
      }
      this.ctx.stroke();
      this.ctx.restore();
    }

    // Draw Projectile Ball
    const currentPx = this.originX + this.ball.x * this.scale;
    const currentPy = this.originY - this.ball.y * this.scale;

    this.ctx.save();
    this.ctx.fillStyle = '#f43f5e';
    this.ctx.shadowColor = '#f43f5e';
    this.ctx.shadowBlur = 14;
    this.ctx.beginPath();
    this.ctx.arc(currentPx, currentPy, 7, 0, Math.PI * 2);
    this.ctx.fill();

    // White core highlight
    this.ctx.fillStyle = '#ffffff';
    this.ctx.beginPath();
    this.ctx.arc(currentPx - 2, currentPy - 2, 2.5, 0, Math.PI * 2);
    this.ctx.fill();
    this.ctx.restore();
  }

  loop() {
    if (!this.isRunning || this.isPaused) return;
    this.update();
    this.draw();
    if (this.isRunning) {
      this.animationFrameId = requestAnimationFrame(() => this.loop());
    }
  }
}

/**
 * Pendulum Harmonic Oscillation Simulation
 */
export class PendulumSimulation {
  constructor(canvasId, hud = {}) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.hud = hud;

    this.length = 2.0; // meters
    this.gravity = 9.8; // m/s^2
    this.damping = 0.002; // air damping
    this.theta = (35 * Math.PI) / 180; // initial angle in radians
    this.omega = 0; // angular velocity
    this.alpha = 0; // angular acceleration

    this.originX = 0;
    this.originY = 30;
    this.scale = 110; // pixels per meter
    this.isRunning = true;
    this.animId = null;

    this.resize();
    window.addEventListener('resize', () => this.resize());
    this.start();
  }

  resize() {
    if (!this.canvas) return;
    const rect = this.canvas.getBoundingClientRect();
    this.canvas.width = rect.width * (window.devicePixelRatio || 1);
    this.canvas.height = 360 * (window.devicePixelRatio || 1);
    this.ctx.scale(window.devicePixelRatio || 1, window.devicePixelRatio || 1);
    this.originX = (rect.width) / 2;
    this.originY = 40;
  }

  setParams(length, gravity, damping) {
    this.length = parseFloat(length);
    this.gravity = parseFloat(gravity);
    this.damping = parseFloat(damping);
  }

  reset(angleDegrees = 35) {
    this.theta = (angleDegrees * Math.PI) / 180;
    this.omega = 0;
    this.alpha = 0;
  }

  start() {
    this.isRunning = true;
    this.loop();
  }

  update() {
    // Angular acceleration: alpha = -(g / L) * sin(theta) - damping * omega
    const dt = 0.016;
    this.alpha = -(this.gravity / this.length) * Math.sin(this.theta) - this.damping * this.omega;
    this.omega += this.alpha * dt;
    this.theta += this.omega * dt;

    const period = 2 * Math.PI * Math.sqrt(this.length / this.gravity);
    if (this.hud.period) {
      this.hud.period.textContent = `${period.toFixed(2)} s`;
    }
    if (this.hud.angle) {
      const deg = (this.theta * 180) / Math.PI;
      this.hud.angle.textContent = `${deg.toFixed(1)}°`;
    }
  }

  draw() {
    const w = this.canvas.width / (window.devicePixelRatio || 1);
    const h = 360;
    this.ctx.clearRect(0, 0, w, h);

    const bobX = this.originX + this.length * this.scale * Math.sin(this.theta);
    const bobY = this.originY + this.length * this.scale * Math.cos(this.theta);

    // Pivot mount
    this.ctx.fillStyle = '#64748b';
    this.ctx.fillRect(this.originX - 30, this.originY - 8, 60, 8);

    this.ctx.fillStyle = '#3b82f6';
    this.ctx.beginPath();
    this.ctx.arc(this.originX, this.originY, 6, 0, Math.PI * 2);
    this.ctx.fill();

    // Rod
    this.ctx.strokeStyle = 'rgba(255, 255, 255, 0.6)';
    this.ctx.lineWidth = 2.5;
    this.ctx.beginPath();
    this.ctx.moveTo(this.originX, this.originY);
    this.ctx.lineTo(bobX, bobY);
    this.ctx.stroke();

    // Bob
    this.ctx.save();
    this.ctx.fillStyle = '#a855f7';
    this.ctx.shadowColor = '#a855f7';
    this.ctx.shadowBlur = 18;
    this.ctx.beginPath();
    this.ctx.arc(bobX, bobY, 18, 0, Math.PI * 2);
    this.ctx.fill();

    this.ctx.fillStyle = '#ffffff';
    this.ctx.beginPath();
    this.ctx.arc(bobX - 4, bobY - 4, 5, 0, Math.PI * 2);
    this.ctx.fill();
    this.ctx.restore();
  }

  loop() {
    if (!this.isRunning) return;
    this.update();
    this.draw();
    this.animId = requestAnimationFrame(() => this.loop());
  }
}
