/* ═══════════════════════════════════════════════════════════════
   Teniola Portfolio — script.js
   ─────────────────────────────────────────────────────────────

   ╔══════════════════════════════════════════════════════════╗
   ║         HOW TO ADD A NEW PROJECT (read this!)            ║
   ╠══════════════════════════════════════════════════════════╣
   ║                                                          ║
   ║  1. Find the `projects` array below (starts line ~50).   ║
   ║  2. Copy this template and paste it inside the [ ],      ║
   ║     after the last project (before the closing ] ).      ║
   ║  3. Save the file — your project will appear instantly.  ║
   ║                                                          ║
   ║  TEMPLATE:                                               ║
   ║  ─────────────────────────────────────────────────────── ║
   ║  {                                                       ║
   ║    name:        "My Project Name",                       ║
   ║    image:       "images/projects/myimage.png",           ║
   ║    description: "What this project does in 1-2 lines.",  ║
   ║    tech:        ["Angular", "Spring Boot", "SQL"],       ║
   ║    github:      "https://github.com/teniola/myproject",  ║
   ║    demo:        "https://myproject.netlify.app",         ║
   ║    featured:    false,   // true = shows in spotlight    ║
   ║    badge:       ""       // "⭐ Featured" | "🔥 Popular" ║
   ║                          // | "🚀 New"   | "" (none)    ║
   ║  },                                                      ║
   ║                                                          ║
   ║  TIPS:                                                   ║
   ║  • Leave image: "" if you have no screenshot yet.        ║
   ║  • Leave github: "" or demo: "" if no link yet.          ║
   ║  • tech array drives the filter buttons automatically.   ║
   ║  • Set featured: true for important/showcase projects.   ║
   ║                                                          ║
   ╚══════════════════════════════════════════════════════════╝

   ═══════════════════════════════════════════════════════════════ */


/* ─────────────────────────────────────────────────────────────
   ★  PROJECTS  ★
   Add / remove objects here to manage your portfolio.
───────────────────────────────────────────────────────────── */
const projects = [

  // ── DEMO PROJECT ─────────────────────────────────────────
  // This is your starter example. Replace or keep it,
  // then add your own real projects below it.
  {
    name:        "Mock Microfinance Bank App",
    image:       "banc.png",                     // add: "images/projects/taskmanager.png"
    description: "Design Sample",
    tech:        ["Angular"],
    github:      "",
    demo:        "https://teniola00001.github.io/bank-page-demo/",                     // add live demo URL when deployed
    featured:    true,
    badge:       ""
  },
   {
    name:        "HR portal And expenses tracking system",
    image:       "hr.png",                     // add: "images/projects/taskmanager.png"
    description: "Design Sample",
    tech:        ["Angular"],
    github:      "",
    demo:        "https://teniola00001.github.io/HR-Portal/",                     // add live demo URL when deployed
    featured:    true,
    badge:       ""
  },

  // ── ADD YOUR REAL PROJECTS HERE ──────────────────────────
  // Copy the template from the comment block at the top of
  // this file and paste it here. Each project is separated
  // by a comma. The last project should have no trailing comma.

];


/* ─────────────────────────────────────────────────────────────
   ★  SKILLS  ★
   Edit names and percentages to match your real proficiency.
───────────────────────────────────────────────────────────── */
const skills = [
  { name: "HTML & CSS",    pct: 100 },
  { name: "JavaScript",    pct: 85 },
  { name: "TypeScript",    pct: 82 },
  { name: "Angular",       pct: 90 },
  { name: "Java",          pct: 90 },
  { name: "Spring Boot",   pct: 85 },
  { name: "SQL",           pct: 75 },
];


/* ─────────────────────────────────────────────────────────────
   ★  PROCESS STEPS  ★
   Edit or reorder to describe how you actually work.
───────────────────────────────────────────────────────────── */
const processSteps = [
  { num: "01", icon: "fas fa-comments",     title: "Requirement Discussion", desc: "We talk through your vision, goals, and requirements to understand exactly what you need." },
  { num: "02", icon: "fas fa-pencil-ruler", title: "Design Prototype",       desc: "I create wireframes and UI designs for your approval before any code is written." },
  { num: "03", icon: "fas fa-code",         title: "Development",            desc: "I build your project with clean, scalable code using modern technologies." },
  { num: "04", icon: "fas fa-bug",          title: "Testing & QA",           desc: "Thorough testing across devices and browsers to ensure everything works perfectly." },
  { num: "05", icon: "fas fa-rocket",       title: "Launch & Support",       desc: "I deploy your project live and provide ongoing support and maintenance." },
];


/* ══════════════════════════════════════════════════════════════
   ▼  APP LOGIC — no need to edit below unless you are
      customising behaviour  ▼
══════════════════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {
  initLoader();
  initTheme();
  initNavbar();
  initScrollProgress();
  initBackToTop();
  renderSkills();
  renderProjects();
  renderFilters();
  renderProcess();
  initScrollReveal();
  initCounters();
  initModal();
  initRequestForm();
  initContactForm();
});


/* ── Page Loader ─────────────────────────────────────────────── */
function initLoader() {
  const el = document.getElementById('page-loader');
  if (!el) return;
  const hide = () => el.classList.add('out');
  if (document.readyState === 'complete') { setTimeout(hide, 600); }
  else { window.addEventListener('load', () => setTimeout(hide, 600)); }
  setTimeout(hide, 2500); // hard fallback
}


/* ── Theme (dark / light) ────────────────────────────────────── */
function initTheme() {
  const btn  = document.getElementById('theme-toggle');
  const icon = document.getElementById('theme-icon');
  const html = document.documentElement;

  // Respect OS preference on first visit
  const saved = localStorage.getItem('theme');
  const prefer = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  const initial = saved || prefer;
  applyTheme(initial);

  btn?.addEventListener('click', () => {
    const next = html.dataset.theme === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    localStorage.setItem('theme', next);
  });

  function applyTheme(t) {
    html.dataset.theme = t;
    if (icon) {
      icon.className = t === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    }
  }
}


/* ── Navbar + mobile menu ────────────────────────────────────── */
function initNavbar() {
  const nav   = document.getElementById('navbar');
  const ham   = document.getElementById('hamburger');
  const menu  = document.getElementById('mobile-menu');
  const links = document.querySelectorAll('.ml');

  // Scroll class
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
    highlightActiveLink();
  }, { passive: true });

  // Hamburger toggle
  ham?.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    ham.classList.toggle('open', open);
    ham.setAttribute('aria-expanded', open);
    menu.setAttribute('aria-hidden', !open);
    document.body.style.overflow = open ? 'hidden' : '';
  });

  // Close on link click
  links.forEach(l => l.addEventListener('click', closeMenu));

  // Close on outside tap
  document.addEventListener('click', e => {
    if (menu?.classList.contains('open') && !nav.contains(e.target)) closeMenu();
  });

  function closeMenu() {
    menu?.classList.remove('open');
    ham?.classList.remove('open');
    ham?.setAttribute('aria-expanded', 'false');
    menu?.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
}

function highlightActiveLink() {
  const sections = document.querySelectorAll('section[id]');
  const y = window.scrollY + 100;
  sections.forEach(sec => {
    const link = document.querySelector(`.nl[href="#${sec.id}"]`);
    if (!link) return;
    const inView = y >= sec.offsetTop && y < sec.offsetTop + sec.offsetHeight;
    link.classList.toggle('active', inView);
  });
}


/* ── Scroll Progress ─────────────────────────────────────────── */
function initScrollProgress() {
  const bar = document.getElementById('scroll-progress');
  window.addEventListener('scroll', () => {
    const total = document.body.scrollHeight - window.innerHeight;
    if (total > 0) bar.style.width = (window.scrollY / total * 100) + '%';
  }, { passive: true });
}


/* ── Back to Top ─────────────────────────────────────────────── */
function initBackToTop() {
  const btn = document.getElementById('btt');
  window.addEventListener('scroll', () => {
    btn.classList.toggle('show', window.scrollY > 450);
  }, { passive: true });
  btn?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}


/* ── Render Skill Bars ───────────────────────────────────────── */
function renderSkills() {
  const wrap = document.getElementById('skills-bars');
  if (!wrap) return;

  wrap.innerHTML = skills.map(s => `
    <div class="sbar-item">
      <div class="sbar-top">
        <span class="sbar-name">${s.name}</span>
        <span class="sbar-pct">${s.pct}%</span>
      </div>
      <div class="sbar-track">
        <div class="sbar-fill" data-pct="${s.pct}"></div>
      </div>
    </div>
  `).join('');

  // Animate when section scrolls into view
  const section = document.getElementById('skills');
  if (!section) return;
  const obs = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      wrap.querySelectorAll('.sbar-fill').forEach(b => { b.style.width = b.dataset.pct + '%'; });
      obs.disconnect();
    }
  }, { threshold: 0.25 });
  obs.observe(section);
}


/* ── Render Project Cards ────────────────────────────────────── */
function renderProjects() {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;

  if (!projects.length) {
    grid.innerHTML = '<p style="color:var(--text-muted);padding:40px 0;">No projects added yet. Open script.js and add your first project!</p>';
    return;
  }

  grid.innerHTML = projects.map((p, i) => buildCard(p, i)).join('');

  // Staggered fade-in
  requestAnimationFrame(() => {
    grid.querySelectorAll('.pcard').forEach((c, i) => {
      setTimeout(() => c.classList.add('visible'), i * 90);
    });
  });
}

function buildCard(p, i) {
  const badgeHtml = p.badge ? `<span class="pbadge ${badgeClass(p.badge)}">${p.badge}</span>` : '';
  const imgHtml   = p.image
    ? `<img src="${p.image}" alt="${escHtml(p.name)}" loading="lazy"
         onerror="this.replaceWith(Object.assign(document.createElement('div'),{className:'pcard-img-ph',innerHTML:'<i class=\\"fas fa-code\\"></i>'}))"/>`
    : `<div class="pcard-img-ph"><i class="fas fa-code"></i></div>`;

  return `
    <div class="pcard ${p.featured ? 'is-featured' : ''}"
         data-tech="${escHtml(p.tech.join(','))}"
         data-index="${i}">
      <div class="pcard-img">
        ${imgHtml}
        ${badgeHtml}
      </div>
      <div class="pcard-body">
        <h4>${escHtml(p.name)}</h4>
        <p>${escHtml(p.description)}</p>
        <div class="tag-row">
          ${p.tech.map(t => `<span class="tag">${escHtml(t)}</span>`).join('')}
        </div>
        <div class="card-acts">
          <button class="ca-btn ca-primary" onclick="openModal(${i})">
            <i class="fas fa-eye"></i> View
          </button>
          ${p.github ? `<a href="${p.github}" target="_blank" rel="noopener" class="ca-btn ca-outline"><i class="fab fa-github"></i></a>` : ''}
          ${p.demo   ? `<a href="${p.demo}"   target="_blank" rel="noopener" class="ca-btn ca-outline"><i class="fas fa-external-link-alt"></i></a>` : ''}
        </div>
      </div>
    </div>`;
}

function badgeClass(badge) {
  if (badge.includes('Featured')) return 'pbadge-f';
  if (badge.includes('Popular'))  return 'pbadge-p';
  if (badge.includes('New'))      return 'pbadge-n';
  return '';
}


/* ── Filter Buttons ──────────────────────────────────────────── */
function renderFilters() {
  const bar = document.getElementById('filter-bar');
  if (!bar) return;

  const techSet = new Set();
  projects.forEach(p => p.tech.forEach(t => techSet.add(t)));
  const filters = ['All', ...Array.from(techSet).sort()];

  bar.innerHTML = filters.map(f =>
    `<button class="fbtn ${f === 'All' ? 'active' : ''}" data-filter="${escHtml(f)}">${escHtml(f)}</button>`
  ).join('');

  bar.addEventListener('click', e => {
    const btn = e.target.closest('.fbtn');
    if (!btn) return;
    bar.querySelectorAll('.fbtn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    filterProjects(btn.dataset.filter);
  });
}

function filterProjects(filter) {
  const cards = document.querySelectorAll('.pcard');
  const noRes = document.getElementById('no-results');
  let shown = 0;
  cards.forEach(card => {
    const match = filter === 'All' || card.dataset.tech.split(',').includes(filter);
    card.classList.toggle('hidden', !match);
    if (match) shown++;
  });
  if (noRes) noRes.style.display = shown === 0 ? 'block' : 'none';
}


/* ── Render Process Steps ────────────────────────────────────── */
function renderProcess() {
  const grid = document.getElementById('proc-grid');
  if (!grid) return;
  grid.innerHTML = processSteps.map((s, i) => `
    <div class="pstep reveal-up" style="transition-delay:${i * 0.08}s">
      <span class="ps-num">Step ${s.num}</span>
      <div class="ps-ico"><i class="${s.icon}"></i></div>
      <h4>${s.title}</h4>
      <p>${s.desc}</p>
    </div>
  `).join('');
  // Re-run reveal after render
  initScrollReveal();
}


/* ── Modal ───────────────────────────────────────────────────── */
function initModal() {
  document.getElementById('modal-bg')?.addEventListener('click', closeModal);
  document.getElementById('modal-x')?.addEventListener('click',  closeModal);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
}

window.openModal = function(index) {
  const p = projects[index];
  const modal = document.getElementById('proj-modal');
  if (!p || !modal) return;

  // Image
  const img = document.getElementById('modal-img');
  if (img) { img.src = p.image || ''; img.alt = p.name; img.style.display = p.image ? 'block' : 'none'; }

  // Badge
  const bdg = document.getElementById('modal-bdg');
  if (bdg) bdg.innerHTML = p.badge ? `<span class="pbadge ${badgeClass(p.badge)}">${escHtml(p.badge)}</span>` : '';

  setText('modal-name', p.name);
  setText('modal-desc', p.description);

  // Tags
  const tags = document.getElementById('modal-tags');
  if (tags) tags.innerHTML = p.tech.map(t => `<span class="tag">${escHtml(t)}</span>`).join('');

  // Buttons
  const gh   = document.getElementById('modal-gh');
  const live = document.getElementById('modal-live');
  if (gh)   { gh.href   = p.github || '#'; gh.style.display   = p.github ? 'inline-flex' : 'none'; }
  if (live) { live.href = p.demo   || '#'; live.style.display = p.demo   ? 'inline-flex' : 'none'; }

  modal.removeAttribute('hidden');
  requestAnimationFrame(() => modal.classList.add('open'));
  document.body.style.overflow = 'hidden';
};

function closeModal() {
  const modal = document.getElementById('proj-modal');
  if (!modal) return;
  modal.classList.remove('open');
  setTimeout(() => modal.setAttribute('hidden', ''), 300);
  document.body.style.overflow = '';
}


/* ── Animated Counters ───────────────────────────────────────── */
function initCounters() {
  const els = document.querySelectorAll('[data-target]');
  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el  = entry.target;
      const end = parseInt(el.dataset.target, 10);
      let cur   = 0;
      const step = Math.max(1, Math.ceil(end / 55));
      const tick = setInterval(() => {
        cur += step;
        if (cur >= end) { cur = end; clearInterval(tick); }
        el.textContent = cur + '+';
      }, 22);
      obs.unobserve(el);
    });
  }, { threshold: 0.6 });
  els.forEach(el => obs.observe(el));
}


/* ── Scroll Reveal ───────────────────────────────────────────── */
function initScrollReveal() {
  const els = document.querySelectorAll('.reveal-up:not(.in), .reveal-left:not(.in), .reveal-right:not(.in)');
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('in'); obs.unobserve(e.target); }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -32px 0px' });
  els.forEach(el => obs.observe(el));
}


/* ── Request Form → WhatsApp ─────────────────────────────────── */
function initRequestForm() {
  const form = document.getElementById('request-form');
  if (!form) return;

  form.addEventListener('submit', e => {
    e.preventDefault();
    if (!validateForm(form)) return;

    const v = id => (form.querySelector(`#${id}`)?.value || '').trim();
    const name  = v('rn');
    const biz   = v('rb') || 'N/A';
    const email = v('re');
    const type  = v('rt');
    const budget= v('rbu');
    const dl    = v('rd') || 'Flexible';
    const desc  = v('rdesc');

    const msg = encodeURIComponent(
`🌐 NEW WEBSITE REQUEST 🌐

👤 Name: ${name}
🏢 Business: ${biz}
📧 Email: ${email}
🖥️ Type: ${type}
💰 Budget: ${budget}
📅 Deadline: ${dl}

📝 Description:
${desc}

— Sent from Teniola's portfolio`
    );

    window.open(`https://wa.me/2347042692224?text=${msg}`, '_blank');
  });
}


/* ── Contact Form ────────────────────────────────────────────── */
function initContactForm() {
  const form = document.getElementById('contact-form');
  const ok   = document.getElementById('con-ok');
  const btn  = document.getElementById('con-btn');
  if (!form) return;

  form.addEventListener('submit', e => {
    e.preventDefault();
    if (!validateForm(form)) return;

    // Replace this setTimeout with a real email service
    // (e.g. EmailJS, Formspree, your own API endpoint)
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending…';
    btn.disabled  = true;

    setTimeout(() => {
      if (ok) ok.style.display = 'flex';
      form.reset();
      btn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';
      btn.disabled  = false;
      setTimeout(() => { if (ok) ok.style.display = 'none'; }, 6000);
    }, 1200);
  });
}


/* ── Form Validation ─────────────────────────────────────────── */
function validateForm(form) {
  let ok = true;
  form.querySelectorAll('[required]').forEach(f => {
    f.classList.remove('err');
    const empty   = !f.value.trim();
    const badMail = f.type === 'email' && f.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.value);
    if (empty || badMail) { f.classList.add('err'); ok = false; }
  });
  if (!ok) {
    const first = form.querySelector('.err');
    first?.focus();
    first?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
  return ok;
}


/* ── Helpers ─────────────────────────────────────────────────── */
function setText(id, text) {
  const el = document.getElementById(id);
  if (el) el.textContent = text;
}

function escHtml(str) {
  return String(str)
    .replace(/&/g,  '&amp;')
    .replace(/</g,  '&lt;')
    .replace(/>/g,  '&gt;')
    .replace(/"/g,  '&quot;');
}
