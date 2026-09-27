:root {
  --bg: #f4efe9;
  --panel: #ffffff;
  --panel-soft: #f8f3ee;
  --text: #1c1c1d;
  --muted: #5d5c5b;
  --primary: #8d5b3d;
  --primary-dark: #68442e;
  --accent: #d9b38d;
  --line: #e7ddd3;
  --success: #2f6a50;
  --shadow: 0 20px 45px rgba(45, 31, 23, 0.08);
  --dark: #171411;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: "Inter", Arial, sans-serif;
  background: var(--bg);
  color: var(--text);
  line-height: 1.55;
}

a {
  color: inherit;
  text-decoration: none;
}

img {
  display: block;
  max-width: 100%;
}

button {
  font: inherit;
}

.container {
  width: min(1180px, calc(100% - 32px));
  margin: 0 auto;
}

.site-header {
  position: sticky;
  top: 0;
  z-index: 40;
  background: rgba(21, 17, 15, 0.92);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.nav-wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 78px;
  gap: 20px;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  color: #fff;
  font-weight: 800;
  letter-spacing: 0.02em;
}

.brand.white {
  color: #fff;
}

.brand-mark {
  display: grid;
  place-items: center;
  width: 42px;
  height: 42px;
  border-radius: 14px;
  background: linear-gradient(135deg, var(--accent), var(--primary));
  color: #fff;
  font-size: 0.88rem;
  font-weight: 900;
}

.main-nav {
  display: flex;
  align-items: center;
  gap: 26px;
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.96rem;
}

.main-nav a {
  transition: color 0.2s ease;
}

.main-nav a:hover {
  color: var(--accent);
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 12px;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 999px;
  padding: 12px 20px;
  font-weight: 700;
  cursor: pointer;
  transition: transform 0.2s ease, opacity 0.2s ease, background 0.2s ease;
}

.btn:hover {
  transform: translateY(-1px);
}

.btn-primary {
  background: var(--primary);
  color: #fff;
}

.btn-primary:hover {
  background: var(--primary-dark);
}

.btn-secondary,
.btn-ghost {
  background: transparent;
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.btn-secondary:hover,
.btn-ghost:hover {
  background: rgba(255, 255, 255, 0.04);
}

.cart-button {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 46px;
  height: 46px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.14);
  background: rgba(255, 255, 255, 0.04);
  color: #fff;
  font-size: 1.2rem;
  cursor: pointer;
}

.cart-count {
  position: absolute;
  top: -6px;
  right: -6px;
  width: 22px;
  height: 22px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: var(--accent);
  color: #1a1a1a;
  font-size: 0.7rem;
  font-weight: 900;
}

.hero {
  background: linear-gradient(90deg, rgba(11, 9, 8, 0.8), rgba(11, 9, 8, 0.25)),
    url("https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=1400&q=80") center/cover no-repeat;
  color: #fff;
}

.hero-content {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  align-items: center;
  gap: 32px;
  min-height: 680px;
  padding: 72px 0;
}

.hero-copy {
  max-width: 620px;
}

.eyebrow {
  display: inline-flex;
  align-items: center;
  padding: 7px 12px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.18);
  font-size: 0.72rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  font-weight: 700;
}

.eyebrow.light {
  background: rgba(141, 91, 61, 0.08);
  border-color: rgba(141, 91, 61, 0.12);
  color: var(--primary);
}

.hero-copy h1 {
  margin: 18px 0 16px;
  font-size: clamp(2.7rem, 4vw, 5rem);
  line-height: 0.98;
  letter-spacing: -0.06em;
}

.hero-copy p {
  margin: 0;
  max-width: 560px;
  color: rgba(255, 255, 255, 0.85);
  font-size: 1.08rem;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 28px;
}

.hero-stats {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  margin-top: 32px;
}

.hero-stats div {
  min-width: 110px;
}

.hero-stats strong {
  display: block;
  font-size: clamp(1.7rem, 2vw, 2.2rem);
  line-height: 1;
}

.hero-stats span {
  display: block;
  margin-top: 8px;
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.85rem;
}

.hero-panel {
  display: flex;
  justify-content: flex-end;
}

.panel-card {
  width: min(100%, 400px);
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow: var(--shadow);
  backdrop-filter: blur(6px);
  border-radius: 28px;
  padding: 26px 24px 22px;
}

.mini-label {
  font-size: 0.72rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.75);
}

.deal-badge {
  display: inline-flex;
  margin-top: 12px;
  padding: 8px 10px;
  border-radius: 999px;
  background: rgba(217, 179, 141, 0.2);
  color: #fff;
  font-size: 0.78rem;
  font-weight: 700;
}

.panel-card h2 {
  margin: 20px 0 8px;
  font-size: clamp(2rem, 2vw, 2.7rem);
  letter-spacing: -0.04em;
}

.panel-card p {
  margin: 0;
  color: rgba(255, 255, 255, 0.8);
}

.deal-row {
  display: flex;
  align-items: baseline;
  gap: 8px;
  margin: 18px 0 18px;
}

.deal-price {
  font-size: 2.2rem;
  font-weight: 800;
  letter-spacing: -0.06em;
}

.deal-meta {
  color: rgba(255, 255, 255, 0.7);
  font-weight: 600;
}

.full {
  width: 100%;
}

.section {
  padding: 100px 0;
}

.section-heading {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 18px;
  margin-bottom: 34px;
  flex-wrap: wrap;
}

.section-heading h2 {
  margin: 12px 0 0;
  font-size: clamp(2.2rem, 3vw, 3.2rem);
  letter-spacing: -0.05em;
  line-height: 1.05;
}

.section-heading p {
  max-width: 620px;
  margin: 0;
  color: var(--muted);
  font-size: 1.05rem;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 22px;
}

.feature-card {
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: 24px;
  padding: 26px 24px;
  box-shadow: var(--shadow);
}

.feature-icon {
  display: grid;
  place-items: center;
  width: 56px;
  height: 56px;
  border-radius: 16px;
  background: rgba(141, 91, 61, 0.1);
  color: var(--primary);
  font-size: 1.7rem;
  margin-bottom: 16px;
}

.feature-card h3 {
  margin: 0 0 10px;
  font-size: 1.3rem;
}

.feature-card p {
  margin: 0;
  color: var(--muted);
}

.shop-section {
  background: linear-gradient(180deg, rgba(255,255,255,0.4), rgba(255,255,255,0.1));
}

.catalog-tools {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  margin-bottom: 26px;
  flex-wrap: wrap;
}

.filters {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.filter-btn {
  border: 1px solid var(--line);
  background: #fff;
  color: var(--text);
  border-radius: 999px;
  padding: 10px 16px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s ease;
}

.filter-btn.active {
  background: var(--primary);
  border-color: var(--primary);
  color: #fff;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 22px;
}

.product-card {
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: 22px;
  overflow: hidden;
  box-shadow: var(--shadow);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.product-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 22px 44px rgba(45, 31, 23, 0.12);
}

.product-image {
  height: 260px;
  background-size: cover;
  background-position: center;
}

.product-body {
  padding: 18px 18px 20px;
}

.product-meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 10px;
  font-size: 0.74rem;
  color: var(--muted);
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 5px 8px;
  background: rgba(47, 106, 80, 0.12);
  color: var(--success);
  font-weight: 800;
  border-radius: 999px;
}

.product-card h3 {
  margin: 0 0 8px;
  font-size: 1.18rem;
}

.product-card p {
  min-height: 52px;
  margin: 0 0 16px;
  color: var(--muted);
}

.price-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 14px;
}

.price {
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--primary-dark);
  letter-spacing: -0.04em;
}

.price small {
  font-size: 0.66rem;
  color: var(--muted);
  font-weight: 700;
}

.add-to-cart {
  padding: 9px 14px;
  font-size: 0.82rem;
}

.brand-strip {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 18px;
}

.brand-strip div {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 80px;
  background: #fff;
  border: 1px solid var(--line);
  border-radius: 16px;
  color: var(--muted);
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.cta-section {
  padding-top: 28px;
}

.cta-box {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  background: linear-gradient(135deg, #f7f1eb, #efe0d0);
  border: 1px solid var(--line);
  border-radius: 28px;
  padding: 28px 30px;
  box-shadow: var(--shadow);
}

.cta-box h3 {
  margin: 0 0 8px;
  font-size: clamp(1.8rem, 2.8vw, 2.7rem);
  letter-spacing: -0.05em;
}

.cta-box p {
  margin: 0;
  color: var(--muted);
}

.site-footer {
  background: #171311;
  color: #efe9e2;
  padding: 48px 0 30px;
}

.footer-grid {
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1.2fr;
  gap: 28px;
  padding-bottom: 26px;
}

.footer-brand p {
  margin-top: 18px;
  max-width: 420px;
  color: rgba(239, 233, 226, 0.75);
}

.site-footer h4 {
  margin: 0 0 16px;
  color: #fff;
  font-size: 1rem;
}

.site-footer ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 10px;
  color: rgba(239, 233, 226, 0.75);
}

.site-footer a {
  color: rgba(239, 233, 226, 0.75);
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  flex-wrap: wrap;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  padding-top: 18px;
  color: rgba(239, 233, 226, 0.72);
  font-size: 0.92rem;
}

@media (max-width: 980px) {
  .main-nav {
    display: none;
  }

  .hero-content {
    grid-template-columns: 1fr;
    min-height: 640px;
    padding-top: 60px;
  }

  .hero-panel {
    justify-content: flex-start;
  }

  .feature-grid {
    grid-template-columns: 1fr;
  }

  .product-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .footer-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 640px) {
  .nav-wrap {
    min-height: 72px;
  }

  .hero-stats {
    gap: 18px;
  }

  .section {
    padding: 78px 0;
  }

  .product-grid,
  .brand-strip,
  .footer-grid {
    grid-template-columns: 1fr;
  }

  .cta-box {
    flex-direction: column;
    align-items: flex-start;
  }
}
