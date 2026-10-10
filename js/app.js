/**
 * SHUBHAM KUMAR — PORTFOLIO APPLICATION LOGIC & ANIMATION ENGINE
 * Features: Scroll-reveal engine, 3D card tilt physics, navigation spy,
 *           modal deep-dives, and embedded interactive prototypes.
 */

document.addEventListener('DOMContentLoaded', () => {
  initScrollAnimations();
  init3DCardTilt();
  initHeroMotion();
  initNavigationAndModals();
  initRetainOSPrototype();
  initUberPrototypes();
  initPrismPlaygrounds();
});

/* ============================================================================
   0. HERO SPATIAL CONTINUITY (quiet pointer response, not a carousel effect)
   ============================================================================ */
function initHeroMotion() {
  const hero = document.querySelector('.hero-avatar-wrapper');
  if (!hero || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  let frame;

  hero.addEventListener('pointermove', (event) => {
    const rect = hero.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    cancelAnimationFrame(frame);
    frame = requestAnimationFrame(() => {
      hero.style.setProperty('--hero-x', `${(x * 8).toFixed(2)}px`);
      hero.style.setProperty('--hero-y', `${(y * 8).toFixed(2)}px`);
      hero.style.setProperty('--hero-rotate', `${(x * 1.2).toFixed(2)}deg`);
    });
  });

  hero.addEventListener('pointerleave', () => {
    hero.style.setProperty('--hero-x', '0px');
    hero.style.setProperty('--hero-y', '0px');
    hero.style.setProperty('--hero-rotate', '0deg');
  });
}

/* ==========================================================================
   1. SCROLL REVEAL ANIMATION ENGINE (IntersectionObserver)
   ========================================================================== */
function initScrollAnimations() {
  const revealElements = document.querySelectorAll('.reveal-on-scroll');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, {
      root: null,
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => observer.observe(el));
  } else {
    // Fallback for older browsers
    revealElements.forEach(el => el.classList.add('is-visible'));
  }
}

/* ==========================================================================
   2. 3D CARD TILT PHYSICS ENGINE (Interactive Mouse Tracking)
   ========================================================================== */
function init3DCardTilt() {
  const tiltCards = document.querySelectorAll('[data-tilt]');

  tiltCards.forEach(card => {
    let isHovering = false;

    card.addEventListener('mouseenter', () => {
      isHovering = true;
      card.style.transition = 'transform 0.1s ease-out, box-shadow 0.25s ease';
    });

    card.addEventListener('mousemove', (e) => {
      if (!isHovering) return;
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      // Max tilt angle (degrees)
      const maxTilt = 4.5;
      const rotateX = -((y - centerY) / centerY) * maxTilt;
      const rotateY = ((x - centerX) / centerX) * maxTilt;

      card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-4px) scale3d(1.01, 1.01, 1.01)`;
    });

    card.addEventListener('mouseleave', () => {
      isHovering = false;
      card.style.transition = 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease';
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px) scale3d(1, 1, 1)';
    });
  });
}

/* ==========================================================================
   3. NAVIGATION, SCROLL SPY & CASE STUDY MODALS
   ========================================================================== */
function initNavigationAndModals() {
  const modals = {
    retainos: document.getElementById('modal-retainos'),
    uber: document.getElementById('modal-uber'),
    prism: document.getElementById('modal-prism')
  };

  function openModal(studyName) {
    if (modals[studyName]) {
      modals[studyName].classList.add('open');
      document.body.style.overflow = 'hidden';
      window.location.hash = `#/${studyName}`;
    }
  }

  function closeModal() {
    Object.values(modals).forEach(m => {
      if (m) m.classList.remove('open');
    });
    document.body.style.overflow = '';
    if (window.location.hash.startsWith('#/')) {
      history.pushState('', document.title, window.location.pathname + window.location.search);
    }
  }

  // Open modal triggers
  document.querySelectorAll('.open-case-study').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const study = link.getAttribute('data-study');
      openModal(study);
    });
  });

  // Close triggers
  document.querySelectorAll('[data-close-modal]').forEach(btn => {
    btn.addEventListener('click', closeModal);
  });

  Object.values(modals).forEach(modal => {
    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
      });
    }
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });

  // URL hash check on initial load
  const initialHash = window.location.hash.replace('#/', '').replace('#', '');
  if (modals[initialHash]) {
    openModal(initialHash);
  }

  window.addEventListener('hashchange', () => {
    const hash = window.location.hash.replace('#/', '').replace('#', '');
    if (modals[hash]) {
      openModal(hash);
    } else if (!hash.startsWith('/')) {
      closeModal();
    }
  });

  // Smooth scroll & active navigation spy
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id], footer[id]');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollPos = window.scrollY + 120;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  }, { passive: true });
}

/* ==========================================================================
   4. RETAINOS: RISK TABLE & WHAT-IF INTERVENTION SIMULATOR
   ========================================================================== */
function initRetainOSPrototype() {
  const rows = [
    {
      id: 'EMP-7411',
      name: 'Staff Product Designer',
      dept: 'Design Systems & Product',
      avatar: 'PD',
      baseScore: 72,
      status: 'critical',
      topDriver: '+31% Role duration > 34mo without band progression',
      sparkline: 'M 2 19 Q 25 15, 45 12 T 74 4',
      drivers: [
        {
          weight: '+34% Risk',
          title: 'Overtime exceeded 15hrs/wk for 3 consecutive months',
          context: 'Sprint fatigue logged across Q2-Q3 release milestones'
        },
        {
          weight: '+28% Risk',
          title: 'Time in current role > 32 months without band progression',
          context: 'Peer cohort benchmark: 82% progressed within 24 months'
        },
        {
          weight: '+16% Risk',
          title: 'Commute distance vs hybrid policy mismatch',
          context: 'Logged residence 34km away with mandatory 4-day policy'
        }
      ]
    },
    {
      id: 'EMP-8902',
      name: 'Senior Systems Architect',
      dept: 'Engineering · Core Infra',
      avatar: 'SA',
      baseScore: 78,
      status: 'critical',
      topDriver: '+34% Overtime > 15hrs/wk for 3mo',
      sparkline: 'M 2 18 Q 20 14, 38 10 T 74 3',
      drivers: [
        {
          weight: '+34% Risk',
          title: 'Overtime exceeded 18hrs/wk during cloud migration',
          context: 'On-call escalation rate in top 2% of engineering org'
        },
        {
          weight: '+26% Risk',
          title: 'Band stagnation at IC Level 5 > 36 months',
          context: 'Exceeding expectation ratings without compensation parity'
        },
        {
          weight: '+18% Risk',
          title: 'Manager turnover in direct reporting line',
          context: 'New reporting chain established within past 60 days'
        }
      ]
    },
    {
      id: 'EMP-6129',
      name: 'Lead Backend Engineer',
      dept: 'Platform Services',
      avatar: 'BE',
      baseScore: 54,
      status: 'warning',
      topDriver: '+26% On-call incident pages > 18/month',
      sparkline: 'M 2 16 Q 25 8, 48 14 T 74 9',
      drivers: [
        {
          weight: '+26% Risk',
          title: 'On-call incident escalation pages > 18/month',
          context: 'Out-of-hours production alerts during primary rotation'
        },
        {
          weight: '+18% Risk',
          title: 'Commute distance > 28km vs 4-day policy',
          context: 'Transit duration averages 75 mins each way'
        },
        {
          weight: '+10% Risk',
          title: 'Direct team manager turnover in past 6 months',
          context: 'Org restructuring impact'
        }
      ]
    },
    {
      id: 'EMP-4091',
      name: 'Data Scientist II',
      dept: 'Predictive Modeling',
      avatar: 'DS',
      baseScore: 22,
      status: 'nominal',
      topDriver: '+12% Project rotation cycle overdue by 4mo',
      sparkline: 'M 2 7 Q 25 10, 48 15 T 74 18',
      drivers: [
        {
          weight: '+12% Risk',
          title: 'Project rotation cycle overdue by 4 months',
          context: 'Assigned to single domain model maintenance > 14 months'
        },
        {
          weight: '+6% Risk',
          title: 'Lateral peer compensation parity variance',
          context: 'Minor compensation drift against newly hired peer tier'
        },
        {
          weight: '+4% Risk',
          title: 'External recruiter outreach engagement spike',
          context: 'Increased profile activity across industry platforms'
        }
      ]
    }
  ];

  let currentSelectedIdx = 0;
  let activeInterventions = { comp: false, remote: false, band: false, mentor: false };

  const tableBody = document.getElementById('retainos-table-body');
  const drawer = document.getElementById('retainos-drawer');
  const closeDrawerBtn = document.getElementById('retainos-close-drawer');
  const filterPills = document.querySelectorAll('.retainos-filter-pill');

  function renderTable(filter = 'all') {
    if (!tableBody) return;
    tableBody.innerHTML = '';

    rows.forEach((row, idx) => {
      if (filter === 'critical' && row.status !== 'critical') return;
      if (filter === 'engineering' && !row.dept.toLowerCase().includes('infra') && !row.dept.toLowerCase().includes('platform')) return;
      if (filter === 'design' && !row.dept.toLowerCase().includes('design')) return;

      const tr = document.createElement('tr');
      tr.className = `retainos-row ${idx === currentSelectedIdx ? 'selected' : ''}`;
      tr.innerHTML = `
        <td>
          <div class="cohort-cell">
            <div class="cohort-avatar">${row.avatar}</div>
            <div class="cohort-info">
              <span class="cohort-title">${row.name}</span>
              <span class="cohort-id-mono">${row.id} · <span style="color: var(--accent-copper)">Masked Cohort</span></span>
            </div>
          </div>
        </td>
        <td style="color: var(--ink-secondary); font-size: 13px;">${row.dept}</td>
        <td>
          <span class="mono-chip ${row.status}">${row.baseScore}% Risk</span>
        </td>
        <td style="font-family: var(--font-mono); font-size: 12px; color: var(--ink-secondary);">
          ${row.topDriver}
        </td>
        <td>
          <svg class="sparkline-svg" viewBox="0 0 76 22">
            <path class="sparkline-path ${row.status}" d="${row.sparkline}" />
          </svg>
        </td>
      `;

      tr.addEventListener('click', () => {
        currentSelectedIdx = idx;
        renderTable(filter);
        openInspector(row);
      });

      tableBody.appendChild(tr);
    });
  }

  filterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      filterPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      renderTable(pill.getAttribute('data-filter') || 'all');
    });
  });

  function openInspector(data) {
    if (!drawer) return;
    drawer.classList.add('open');

    const empTitle = document.getElementById('drawer-emp-title');
    const empMeta = document.getElementById('drawer-emp-meta');
    if (empTitle) empTitle.textContent = data.name;
    if (empMeta) empMeta.textContent = `${data.id} · ${data.dept} (Role-Based Justified Access)`;

    const driversContainer = document.getElementById('drawer-drivers-container');
    if (driversContainer) {
      driversContainer.innerHTML = '';
      data.drivers.forEach(d => {
        const dCard = document.createElement('div');
        dCard.className = 'driver-card';
        dCard.innerHTML = `
          <div class="driver-card-top">
            <span class="driver-weight-badge">${d.weight}</span>
            <span class="driver-context">Temporal Weight</span>
          </div>
          <div class="driver-text">${d.title}</div>
          <div class="driver-context">${d.context}</div>
        `;
        driversContainer.appendChild(dCard);
      });
    }

    recalculateSimulator(data.baseScore);
  }

  if (closeDrawerBtn) {
    closeDrawerBtn.addEventListener('click', () => {
      drawer.classList.remove('open');
    });
  }

  // Simulator Toggle Logic
  const simToggles = document.querySelectorAll('.intervention-toggle-item');
  const simOldScore = document.getElementById('sim-old-score');
  const simNewScore = document.getElementById('sim-new-score');
  const simDeltaLabel = document.getElementById('sim-delta-label');
  const simSubmitBtn = document.getElementById('btn-sim-approval');
  const drawerScoreLarge = document.getElementById('drawer-gauge-score');
  const drawerGaugeBar = document.getElementById('drawer-gauge-fill');

  simToggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
      const type = toggle.getAttribute('data-intervention');
      activeInterventions[type] = !activeInterventions[type];
      toggle.classList.toggle('active', activeInterventions[type]);
      recalculateSimulator(rows[currentSelectedIdx].baseScore);
    });
  });

  function recalculateSimulator(baseScore) {
    let delta = 0;
    if (activeInterventions.comp) delta += 16;
    if (activeInterventions.remote) delta += 15;
    if (activeInterventions.band) delta += 13;
    if (activeInterventions.mentor) delta += 7;

    const projectedScore = Math.max(12, baseScore - delta);

    if (simOldScore) simOldScore.textContent = `${baseScore}%`;
    if (simNewScore) {
      simNewScore.textContent = `${projectedScore}%`;
      simNewScore.className = `sim-new-score ${projectedScore > 70 ? 'critical' : projectedScore > 40 ? 'warning' : 'nominal'}`;
    }

    if (simDeltaLabel) {
      simDeltaLabel.textContent = delta > 0 ? `-${delta}% Predicted Attrition Reduction` : 'No Interventions Active';
    }

    if (drawerScoreLarge) {
      drawerScoreLarge.textContent = `${projectedScore}%`;
      drawerScoreLarge.className = `gauge-score-large ${projectedScore > 70 ? 'critical' : projectedScore > 40 ? 'warning' : 'nominal'}`;
    }

    if (drawerGaugeBar) {
      drawerGaugeBar.style.width = `${projectedScore}%`;
      drawerGaugeBar.className = `gauge-bar-fill ${projectedScore > 70 ? 'critical' : projectedScore > 40 ? 'warning' : 'nominal'}`;
    }

    if (simSubmitBtn) {
      const hasAny = Object.values(activeInterventions).some(Boolean);
      simSubmitBtn.disabled = !hasAny;
      simSubmitBtn.textContent = hasAny ? 'Submit Interventions for HR Approval →' : 'Select Interventions to Simulate';
      simSubmitBtn.className = hasAny ? 'btn-primary btn-workflow' : 'btn-secondary btn-workflow';
    }
  }

  if (simSubmitBtn) {
    simSubmitBtn.addEventListener('click', () => {
      if (simSubmitBtn.disabled) return;
      alert(`Intervention Plan submitted to HR Director! \nTracking ID: WF-RET-${Math.floor(1000 + Math.random() * 9000)}\nPredicted Retention Improvement: ${simDeltaLabel.textContent}`);
    });
  }

  // Work card row quick click
  const heroRow = document.getElementById('hero-retainos-row');
  if (heroRow) {
    heroRow.addEventListener('click', () => {
      const openBtn = document.querySelector('.open-case-study[data-study="retainos"]');
      if (openBtn) openBtn.click();
    });
  }

  renderTable();
  if (rows[currentSelectedIdx]) {
    openInspector(rows[currentSelectedIdx]);
  }
}

/* ==========================================================================
   5. UBER FARE LOCK & MATCH GUARANTEE PROTOTYPES
   ========================================================================== */
function initUberPrototypes() {
  ['card-uber-fare-pill', 'modal-uber-fare-pill'].forEach(id => {
    const pill = document.getElementById(id);
    if (pill) {
      pill.addEventListener('click', () => {
        pill.classList.toggle('expanded');
        const details = pill.querySelector('.fare-breakdown-details');
        if (details) {
          details.style.display = pill.classList.contains('expanded') ? 'block' : 'none';
        }
      });
    }
  });

  const modalTierStandard = document.getElementById('modal-tier-standard');
  const modalTierGuaranteed = document.getElementById('modal-tier-guaranteed');
  const modalConfirmBtn = document.getElementById('modal-uber-confirm-btn');

  if (modalTierStandard && modalTierGuaranteed) {
    modalTierStandard.addEventListener('click', () => {
      modalTierStandard.classList.add('selected');
      modalTierGuaranteed.classList.remove('selected');
      if (modalConfirmBtn) modalConfirmBtn.innerHTML = `Request Uber Go · <span style="font-family: var(--font-mono)">₹380</span>`;
    });

    modalTierGuaranteed.addEventListener('click', () => {
      modalTierGuaranteed.classList.add('selected');
      modalTierStandard.classList.remove('selected');
      if (modalConfirmBtn) modalConfirmBtn.innerHTML = `Confirm Guaranteed Lock · <span style="font-family: var(--font-mono)">₹420</span>`;
    });
  }

  const radarSteps = [
    document.getElementById('modal-radar-step-1'),
    document.getElementById('modal-radar-step-2'),
    document.getElementById('modal-radar-step-3')
  ];
  const timerChip = document.getElementById('modal-radar-timer-chip');
  let currentStep = 1;

  function runRadarStep(step) {
    currentStep = step;
    radarSteps.forEach((item, idx) => {
      if (!item) return;
      const stepNum = idx + 1;
      item.classList.remove('active', 'completed');
      if (stepNum < step) item.classList.add('completed');
      else if (stepNum === step) item.classList.add('active');
    });

    if (timerChip) {
      if (step === 1) timerChip.textContent = 'Pinging 4 drivers...';
      else if (step === 2) timerChip.textContent = 'Driver #2 evaluating route...';
      else if (step === 3) timerChip.textContent = 'Match Guaranteed • Driver 4 min away';
    }
  }

  setInterval(() => {
    let nextStep = currentStep >= 3 ? 1 : currentStep + 1;
    runRadarStep(nextStep);
  }, 3200);
}

/* ==========================================================================
   6. PRISM-METRIC CRAFT PLAYGROUNDS
   ========================================================================== */
function initPrismPlaygrounds() {
  const badgeStateBtns = document.querySelectorAll('[data-badge-state]');
  const badgeDensityBtns = document.querySelectorAll('.data-badge-density');
  const previewBadges = document.querySelectorAll('.prism-status-badge');
  let activeState = 'default';
  let activeDensity = 'comfortable';

  badgeStateBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      badgeStateBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeState = btn.getAttribute('data-badge-state');
      updateBadges();
    });
  });

  badgeDensityBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      badgeDensityBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeDensity = btn.getAttribute('data-badge-density');
      updateBadges();
    });
  });

  function updateBadges() {
    previewBadges.forEach(badge => {
      badge.classList.remove('compact', 'comfortable', 'state-hover', 'state-loading', 'state-alert');
      badge.classList.add(activeDensity);
      if (activeState === 'hover') badge.classList.add('state-hover');
      else if (activeState === 'loading') badge.classList.add('state-loading');
      else if (activeState === 'critical') badge.classList.add('state-alert');
    });
  }

  const devBtn = document.getElementById('modal-toggle-dev-mode-btn');
  const devContainer = document.getElementById('modal-badge-playground-container');
  if (devBtn && devContainer) {
    devBtn.addEventListener('click', () => {
      const isActive = devBtn.classList.toggle('active');
      devBtn.textContent = isActive ? 'Dev Mode: ON (8pt Grid & Tokens Active)' : 'Dev Mode: OFF (Inspect Tokens)';
      devContainer.classList.toggle('dev-mode-active', isActive);
    });
  }
}
