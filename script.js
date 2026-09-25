/* ==================================================================
   YUVA PAYANA 2026 · TEAM 07 — interactive team album

   1. Edit the TEAM data below: names, text and photo paths.
   2. Put the photos in /assets. If a photo is missing, the card shows
      the person's initials instead, so nothing ever looks broken.
   3. To add a participant, copy one { ... } block in `participants`.
   ================================================================== */

const TEAM = {
  event: 'Yuva Payana 2026',
  number: '07',
  tagline: 'Different paths, one journey.',
  logo: 'assets/logo.png',

  // The single root node all 19 participants connect to, on the Participants tree.
  root: {
    name: 'Yuva Payana',
    photo: 'assets/logo.png'
  },

  mentor: {
    name: 'Smt Prathima',
    role: 'Director - Academics, Education Sector, SVYM',
    photo: 'assets/participants/Mentor.png',
    intro: 'Striving to become a better person every day and to make a positive difference in the lives of others. She has trained in Classical Carnatic Music for six years, and enjoys singing, listening to music, and cooking.'
  },

  leaders: [
    {
      name: 'Mahek M Magi',
      photo: 'assets/participants/mahek.jpg',
      course: 'CSE',
      college: 'Jain College of Engineering and Technology, Hubballi',
      hometown: 'Dharwad',
      goal: 'Data Analyst',
      interests: ['Drawing', 'Watching movies', 'Learning new things'],
      fact: 'I’m good at bonding with people.'
    },
    {
      name: 'Pavan C',
      photo: 'assets/participants/PAVANC.jpg',
      course: 'CSE',
      college: 'The National Institute of Engineering, Mysore',
      hometown: 'Hunsur',
      goal: 'I aspire to become an entrepreneur.',
      interests: ['Travelling'],
      fact: "I can't handle multitasking at the same time perfectly."
    }
  ],

  participants: [
    { name: 'Lalitha raje urs', photo: 'assets/participants/Lalithaurs.jpg', hometown: 'Kunthur Chamarajanagar', course: 'BASLP', college: 'AIISH Mysore', interests: ['Reading novels writing poetry'], goal: 'To be a good human being, good audiologist speech language pathologist', fact: 'I’m a positive thinker who never lets an opportunity slip away and love learning new things quickly.' },
    { name: 'Gayitri M S', photo: 'assets/participants/gayithri.jpg', hometown: 'Hooli', course: 'ECE', college: 'Bangalore institute of technology', interests: ['Dancing', 'singing and acting'], goal: 'Financially stable and independent', fact: 'I am quick learner' },
    { name: 'Tharunya L T', photo: 'assets/participants/Tharunya.jpg', hometown: 'Chitradurga(district) Holalkere', course: 'ISE', college: 'UVCE Banglore', interests: ['learning New things', 'Nature photography'], goal: 'To build a successful career and become financially independent', fact: 'I love capturing nature and the little things i notice around me' },
    { name: 'Inchara A S', photo: 'assets/participants/Inchara shekar.png', hometown: 'Saragur', course: 'B.Sc B.Ed (Chemistry)', college: 'Azim Premji University', interests: ['Interest in the field of curriculum designing. Hobbies: Pencil Sketch', 'poetry writing in Kannada', 'Singing', 'Article writing in the field of education.'], goal: 'To became a curriculum designer and To grow as an educator while continuing to explore science, creativity and new ways of learning.', fact: 'I’m discovering the educator I want to become through questions, ideas, and understanding how children learn.' },
    { name: 'Vanita Umesh Shirkol', photo: 'assets/participants/vanitaShirkol.jpg', hometown: 'Dharwad', course: 'BE', college: 'Bapuji institute of engineering and technology Davangere', interests: ['Reading books', 'novels'], goal: 'To become responsible and respectful person in the society and become a best process engineering in the field of chemical engineering', fact: 'I am quick learner and I can understand things quickly' },
    { name: 'Jayashree', photo: 'assets/participants/Jayashree.jpg', hometown: 'Mysore', course: 'ISE', college: 'The National Institute of Engineering', interests: ['Paintings', 'poetry writing'], goal: 'Get a job in good MNC company', fact: 'I’m known for my patience.' },
    { name: 'Sagar Badiger', photo: 'assets/participants/Sagar Badiger.jpg', hometown: 'Maradagi, Dharwad District', course: 'EEE', college: 'KLE Technological University hubli', interests: ['Exploring technical field', 'reading kannada novels'], goal: 'My goal is to become a Electrical engineer', fact: 'I am a tech enthusiast.' },
    { name: 'Sahana basanagouda patil', photo: 'assets/participants/Sahanapatil.jpg', hometown: 'Hubli', course: 'BAMS', college: 'Dr N A Magadum ayurvedic medical college Ankali belgaum', interests: ['Yoga', 'crocheting'], goal: 'To be a good doctor', fact: 'I’ve been selected as the General Secretary of my college, and I’m happy to share this achievement!' },
    { name: 'Shubha B Y', photo: 'assets/participants/Shubha.jpg', hometown: 'Hassan', course: 'ECE', college: 'Alvas Institute of engineering and technology', interests: ['Singing', 'crochet'], goal: 'To become a skilled Electronics and Embedded Systems Engineer and use technology to solve real-world problems.', fact: 'I am a good listener and enjoy helping others' },
    { name: 'Prem Lamani', photo: 'assets/participants/Pasted image.png', hometown: '@Sevanagar tq:Shirahatti dist:Gadag', course: 'MBBS', college: 'Karnataka Medical College and Research Institute Hubli', interests: ['Watching movies'], goal: 'To become a good doctor', fact: 'I enjoy learning new things' },
    { name: 'Apoorva Kanakaraddi', photo: 'assets/participants/apporva.jpg', hometown: 'Alagawadi', course: 'CSE', college: 'SJCE Mysore', interests: ['Exploring new things in this new era'], goal: 'Data scientist', fact: 'I’m naturally curious and love exploring new things.' },
    { name: 'Vani sunagar', photo: 'assets/participants/VaniSunagar.jpg', hometown: 'Alnavar', course: 'Civil Engg', college: 'KLS VDIT COLLEGE HALIYAL', interests: ['Drawing'], goal: 'Establish my own identity', fact: '“One interesting fact about me is that I love learning new things, especially things that I can use in real life.”' },
    { name: 'Aishwarya Shivappa Halagi', photo: 'assets/participants/AishwaryaHalagi.png', hometown: 'Chillur badni, sub dist: Savanur, dist: Haveri', course: 'EEE', college: 'shri jayachamarajendra college of engineering mysore', interests: ['Drawing', 'painting', 'dancing', 'yoga', 'learning new language and reading novels.'], goal: 'To become a good human being and core electrical and electronics engineer', fact: 'I enjoy learning new things and exploring creative ideas, especially through technolgy and engineering' },
    { name: 'Veena S Kammar', photo: 'assets/participants/VeenaKammar1.jpg', hometown: 'Dharwad', course: 'BCA', college: 'KLE Society\'s of computer application Dharwad', interests: ['Coding', 'sports', 'writing dairy', 'learning new things in programming language'], goal: 'Frontend Developer', fact: 'I’m an all-rounder who enjoys coding and sports.' },
    { name: 'Rajani Joshi', photo: 'assets/participants/Rajani.jpg', hometown: 'Dharwad', course: 'MBBS', college: 'Belagavi Institute of Medical sciences', interests: ['Drawing'], goal: 'To become a competent doctor and contribute to society', fact: 'I love cats' },
    { name: 'Shreya Manjunath Madikanavar', photo: 'assets/participants/shreya.jpg', hometown: 'Hubli', course: 'ECE', college: 'REVA UNIVERSITY', interests: ['Drawing'], goal: 'Engineer', fact: 'I’m a very patient person.' },
    { name: 'Bhoomika Ishwar Baradwad', photo: 'assets/participants/bhoomi.jpg', hometown: 'AT/PO: Hiremunavalli TQ: Khanapur D: Belagavi 591112', course: 'MBBS', college: 'Shyamanuru shivashankarappa institute of medical and research center', interests: ['Yoga', 'paint', 'sports like vollyball running.'], goal: 'Cardiac surgeon', fact: 'I’m always looking for creative ways to do things.' },
    { name: 'Renukadevi mahabaleshwar Masuti', photo: 'assets/participants/RenukadeviMasuti.jpg', hometown: 'Uppinbetageri', course: 'BHMS', college: 'DR B D jatti homoeopathic and medical college Dharwad', interests: ['Reading novels nd watching movies'], goal: 'To become good citizen and serve people', fact: 'I always travel and make memories' }
],

  closing: {
    title: 'Our Journey',
    message: 'A mentor who guides, leaders who steer, and participants who bring it all to life. This is Team 07, and this is only the beginning.'
  }
};

/* ==================================================================
   App code — you shouldn’t need to change anything below this line.
   ================================================================== */
(() => {
  'use strict';

  const ORDER   = ['home', 'mentor', 'leaders', 'participants', 'team'];
  const JOURNEY = ['mentor', 'leaders', 'participants', 'team'];
  const P = TEAM.participants;
  const N = P.length;

  const $  = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
  const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const initials = n => String(n).trim().split(/\s+/).slice(0, 2).map(w => w[0]).join('').toUpperCase();
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const ICON = {
    pin: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/></svg>',
    cap: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2 9l10-5 10 5-10 5L2 9z"/><path d="M6 11.5V16c0 1.4 2.7 3 6 3s6-1.6 6-3v-4.5"/></svg>'
  };

  /* ---------- Photos: show initials until (and unless) the image loads ---------- */
  const photo = (src, name) =>
    `<span class="ph" role="img" aria-label="${esc(name)}"><span class="ph-initials" aria-hidden="true">${esc(initials(name))}</span>${src ? `<img src="${esc(src)}" alt="">` : ''}</span>`;

  document.addEventListener('load',  e => { if (e.target.tagName === 'IMG') e.target.parentElement.classList.add('loaded'); }, true);
  document.addEventListener('error', e => { if (e.target.tagName === 'IMG') e.target.remove(); }, true);
  function sweepImages(root = document) {           // catches images that finished before we listened
    $$('.ph img, .logo img', root).forEach(img => {
      if (img.complete) img.naturalWidth ? img.parentElement.classList.add('loaded') : img.remove();
    });
  }

  const chips = list => `<div class="chips">${(list || []).map(i => `<span class="chip">${esc(i)}</span>`).join('')}</div>`;

  /* ---------- State ---------- */
  let current = null;
  let furthest = -1;
  let leaderIdx = 0;
  let pendingLeader = null;
  let openIdx = null;
  let lastFocus = null;
  let spinning = false;
  let lastRandom = -1;

  const modal = $('#modal');

  /* ==================================================================
     Rendering
     ================================================================== */
  function renderHome() {
    $('#home').innerHTML = `
      <div class="welcome">
        <svg class="trail" viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
          <path id="trailPath" d="M -30 500 C 160 590, 280 210, 560 300 S 930 470, 1230 110" pathLength="100"/>
          <g id="waypoints"></g>
        </svg>
        <span class="logo logo-lg"><span class="logo-fallback">YP</span><img data-logo alt="${esc(TEAM.event)} logo"></span>
        <p class="eyebrow">${esc(TEAM.event)}</p>
        <h1>Team ${esc(TEAM.number)}</h1>
        <p class="tagline">${esc(TEAM.tagline)}</p>
        <button class="btn primary" type="button" data-go="mentor">Begin Our Journey &rarr;</button>
      </div>`;
    // Place four waypoints along the route: they echo the journey bar at the bottom.
    const path = $('#trailPath'), g = $('#waypoints');
    if (path && path.getTotalLength) {
      const len = path.getTotalLength();
      g.innerHTML = [0.1, 0.22, 0.82, 0.94].map((f, i) => {
        const pt = path.getPointAtLength(len * f);
        return `<circle cx="${pt.x.toFixed(1)}" cy="${pt.y.toFixed(1)}" r="9" style="--i:${i}"/>`;
      }).join('');
    }
  }

  function renderMentor() {
    const m = TEAM.mentor;
    $('#mentor').innerHTML = `
      <div class="split">
        <div class="portrait">${photo(m.photo, m.name)}</div>
        <div class="details">
          <p class="eyebrow">Our mentor</p>
          <h2>${esc(m.name)}</h2>
          <p class="role">${esc(m.role)}</p>
          <p class="lead">${esc(m.intro)}</p>
          <div class="actions">
            <button class="btn ghost" type="button" data-go="home">&larr; Welcome</button>
            <button class="btn primary" type="button" data-go="leaders">Meet Our Leaders &rarr;</button>
          </div>
        </div>
      </div>`;
  }

  function renderLeaders(swap) {
    const L = TEAM.leaders;
    leaderIdx = Math.max(0, Math.min(L.length - 1, leaderIdx));
    const l = L[leaderIdx];
    const first = leaderIdx === 0, last = leaderIdx === L.length - 1;
    $('#leaders').innerHTML = `
      <div class="tabs" role="tablist" aria-label="Team leaders">
        ${L.map((x, i) => `<button type="button" role="tab" aria-selected="${i === leaderIdx}" data-leader="${i}">${esc(x.name.split(' ')[0] === 'Leader' ? 'Leader ' + (i + 1) : x.name)}</button>`).join('')}
      </div>
      <div class="split leader-panel${swap ? ' swap' : ''}">
        <div class="portrait">${photo(l.photo, l.name)}</div>
        <div class="details">
          <p class="eyebrow">Team leader ${leaderIdx + 1}</p>
          <h2>${esc(l.name)}</h2>
          <div class="fact-grid">
            <div><span class="k">Course &amp; college</span><span class="v">${esc(l.course)}<br>${esc(l.college)}</span></div>
            <div><span class="k">Hometown</span><span class="v">${esc(l.hometown)}</span></div>
          </div>
          <div class="block"><span class="k">Goal</span><p>${esc(l.goal)}</p></div>
          <div class="block"><span class="k">Hobbies &amp; interests</span>${chips(l.interests)}</div>
          <div class="callout"><span class="k">Interesting fact</span><p>${esc(l.fact)}</p></div>
          <div class="actions">
            ${first ? `<button class="btn ghost" type="button" data-go="mentor">&larr; Our Mentor</button>`
                    : `<button class="btn ghost" type="button" data-leader-step="-1">&larr; Previous leader</button>`}
            ${last  ? `<button class="btn primary" type="button" data-go="participants">Meet the Participants &rarr;</button>`
                    : `<button class="btn primary" type="button" data-leader-step="1">Next leader &rarr;</button>`}
          </div>
        </div>
      </div>`;
    sweepImages($('#leaders'));
  }

  function renderParticipants() {
    const r = TEAM.root;
    $('#participants').innerHTML = `
      <header class="section-head">
        <h2>Team ${esc(TEAM.number)}</h2>
        <p>${esc(r.name)} — and the ${P.length} of us who make up Team ${esc(TEAM.number)}. Tap a photo to open that person’s profile.</p>
      </header>
      <div class="tree" id="tree">
        <div class="tree-root">
          <span class="root-photo">${photo(r.photo, r.name)}</span>
          <span class="root-name">${esc(r.name)}</span>
        </div>
        <svg class="tree-lines" id="treeLines" aria-hidden="true"></svg>
        <div class="tree-grid" id="treeGrid">
          ${P.map((p, i) => `
            <button class="gcard tree-card" type="button" data-open="${i}" aria-label="Open profile of ${esc(p.name)}">
              <span class="gphoto">${photo(p.photo, p.name)}</span>
              <span class="gname">${esc(p.name)}</span>
              <span class="gtown">${esc(p.hometown)}</span>
            </button>`).join('')}
        </div>
      </div>
      <div class="center">
        <button class="btn magic" type="button" data-random>&#10024; Meet Someone From Team ${esc(TEAM.number)}</button>
      </div>`;
    sweepImages($('#participants'));
    requestAnimationFrame(drawTreeLines);
  }

  /* ---------- Tree lines: root (SVYM) fanning out to every participant ---------- */
  function drawTreeLines() {
    const tree = $('#tree');
    const svg = $('#treeLines');
    if (!tree || !svg || current !== 'participants') return;
    const root = $('.tree-root', tree);
    const cards = $$('.tree-card', tree);
    const tRect = tree.getBoundingClientRect();
    if (!tRect.width || !cards.length) return;

    svg.setAttribute('viewBox', `0 0 ${tRect.width} ${tRect.height}`);
    const rRect = root.getBoundingClientRect();
    const rx = rRect.left - tRect.left + rRect.width / 2;
    const ry = rRect.bottom - tRect.top;

    svg.innerHTML = cards.map(c => {
      const cRect = c.getBoundingClientRect();
      const cx = cRect.left - tRect.left + cRect.width / 2;
      const cy = cRect.top - tRect.top;
      const midY = ry + (cy - ry) * 0.55;
      return `<path d="M ${rx.toFixed(1)} ${ry.toFixed(1)} C ${rx.toFixed(1)} ${midY.toFixed(1)}, ${cx.toFixed(1)} ${midY.toFixed(1)}, ${cx.toFixed(1)} ${cy.toFixed(1)}"/>`;
    }).join('');
  }

  let treeResizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(treeResizeTimer);
    treeResizeTimer = setTimeout(drawTreeLines, 150);
  });
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(drawTreeLines);

  function renderTeam() {
    const ava = (src, name, attrs, role) => `
      <button class="ava" type="button" ${attrs} aria-label="${esc(name)}, ${esc(role)}">
        <span class="ava-ph">${photo(src, name)}</span>
        <span class="ava-name">${esc(name)}</span>
      </button>`;
    $('#team').innerHTML = `
      <header class="section-head">
        <h2>${esc(TEAM.closing.title)}</h2>
        <p>${esc(TEAM.closing.message)}</p>
      </header>
      <div class="roster">
        <div class="group"><span class="k">Mentor</span>
          <div class="avas">${ava(TEAM.mentor.photo, TEAM.mentor.name, 'data-go="mentor"', 'mentor')}</div></div>
        <div class="group"><span class="k">Leaders</span>
          <div class="avas">${TEAM.leaders.map((l, i) => ava(l.photo, l.name, `data-leader-jump="${i}"`, 'leader')).join('')}</div></div>
        <div class="group"><span class="k">Participants</span>
          <div class="avas">${P.map((p, i) => ava(p.photo, p.name, `data-open="${i}"`, 'participant')).join('')}</div></div>
      </div>
      <div class="center actions-row">
        <button class="btn magic" type="button" data-random>&#10024; Meet Someone From Team ${esc(TEAM.number)}</button>
        <button class="btn ghost" type="button" data-go="home">Back to the start</button>
      </div>`;
    sweepImages($('#team'));
  }

  /* ==================================================================
     Navigation
     ================================================================== */
  function show(id) {
    if (!ORDER.includes(id)) id = 'home';
    const dir = current && ORDER.indexOf(id) < ORDER.indexOf(current) ? 'back' : 'fwd';
    closeProfile(true);

    if (id === 'leaders' && current !== 'leaders') {
      leaderIdx = pendingLeader ?? (dir === 'back' ? TEAM.leaders.length - 1 : 0);
      pendingLeader = null;
      renderLeaders(false);
    }

    current = id;
    $$('.view').forEach(v => v.classList.toggle('active', v.id === id));
    $$('[data-nav]').forEach(a => a.toggleAttribute('aria-current', a.dataset.nav === id));
    const navEl = $('.nav'), on = $('[data-nav][aria-current]');     // keep the active tab visible on narrow phones
    if (navEl && on) navEl.scrollLeft = on.offsetLeft - (navEl.clientWidth - on.offsetWidth) / 2;

    furthest = Math.max(furthest, JOURNEY.indexOf(id));
    updateJourney();
    if (id === 'participants') requestAnimationFrame(drawTreeLines);

    window.scrollTo(0, 0);
    const view = $('#' + id);
    view.setAttribute('tabindex', '-1');
    view.focus({ preventScroll: true });
  }

  function go(id) {
    if (id === current) { window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' }); return; }
    show(id);
    try { history.pushState({ id }, '', '#' + id); } catch (_) { /* sandboxed preview: navigation still works */ }
  }

  window.addEventListener('popstate', e => show((e.state && e.state.id) || location.hash.slice(1) || 'home'));

  function updateJourney() {
    const cur = JOURNEY.indexOf(current);
    $$('#journey li').forEach((li, i) => {
      li.classList.toggle('lit', i <= furthest);
      li.classList.toggle('current', i === cur);
      const b = $('button', li);
      i === cur ? b.setAttribute('aria-current', 'step') : b.removeAttribute('aria-current');
    });
  }

  /* ==================================================================
     Participant profile
     ================================================================== */
  function profileHTML(p, i) {
    return `
      <div class="pphoto">${photo(p.photo, p.name)}</div>
      <div class="pinfo">
        <h3 id="pname">${esc(p.name)}</h3>
        <ul class="pmeta">
          <li>${ICON.pin}<span>${esc(p.hometown)}</span></li>
          <li>${ICON.cap}<span>${esc(p.course)}<br>${esc(p.college)}</span></li>
        </ul>
        <div class="pblock"><span class="k">Interests</span>${chips(p.interests)}</div>
        <div class="pblock"><span class="k">My goal</span><p>${esc(p.goal)}</p></div>
        <div class="callout"><span class="k">Did you know?</span><p>${esc(p.fact)}</p></div>
      </div>`;
  }

  function openProfile(i, dir) {
    if (!N) return;
    openIdx = ((i % N) + N) % N;
    const body = $('#profileBody');
    body.classList.remove('swap-fwd', 'swap-back');
    body.innerHTML = profileHTML(P[openIdx], openIdx);
    sweepImages(body);
    $('#profileCount').textContent = `${openIdx + 1} of ${N}`;
    if (dir) { void body.offsetWidth; body.classList.add('swap-' + dir); }

    if (modal.hidden) {
      lastFocus = document.activeElement;
      modal.hidden = false;
      document.body.classList.add('noscroll');
      requestAnimationFrame(() => modal.classList.add('open'));
      $('.close', modal).focus({ preventScroll: true });
    }
    $('.profile-body', modal).scrollTop = 0;
  }

  function closeProfile(instant) {
    if (modal.hidden) return;
    openIdx = null;
    modal.classList.remove('open');
    document.body.classList.remove('noscroll');
    const done = () => { if (openIdx === null) modal.hidden = true; };
    (instant || reduceMotion) ? done() : setTimeout(done, 220);
    if (lastFocus && document.contains(lastFocus)) lastFocus.focus({ preventScroll: true });
  }

  /* ---------- “Meet someone from Team 07” ---------- */
  function randomMember() {
    if (spinning || !N) return;
    if (current !== 'participants') { go('participants'); setTimeout(spin, reduceMotion ? 0 : 380); }
    else spin();
  }

  function spin() {
    const cards = $$('.gcard');
    let pick;
    do { pick = Math.floor(Math.random() * N); } while (N > 1 && pick === lastRandom);
    lastRandom = pick;
    if (reduceMotion || !cards.length) { openProfile(pick); return; }

    spinning = true;
    const total = 11;
    let k = 0;
    const tick = () => {
      const idx = (((pick - (total - 1 - k)) % N) + N) % N;   // walks the highlight round and lands on `pick`
      cards.forEach((c, i) => c.classList.toggle('spot', i === idx));
      if (k < total - 1) { k++; setTimeout(tick, 70 + k * 16); }
      else setTimeout(() => {
        cards.forEach(c => c.classList.remove('spot'));
        spinning = false;
        openProfile(pick);
      }, 450);
    };
    tick();
  }

  /* ==================================================================
     Events
     ================================================================== */
  document.addEventListener('click', e => {
    const t = e.target.closest('[data-go],[data-leader],[data-leader-step],[data-leader-jump],[data-open],[data-close],[data-step],[data-random]');
    if (!t) return;
    if (t.tagName === 'A') e.preventDefault();

    if (t.dataset.go)                       return go(t.dataset.go);
    if (t.dataset.leaderJump !== undefined) { pendingLeader = +t.dataset.leaderJump; return go('leaders'); }
    if (t.dataset.leader !== undefined)     { leaderIdx = +t.dataset.leader; renderLeaders(true); const s = $('#leaders [aria-selected="true"]'); return s && s.focus({ preventScroll: true }); }
    if (t.dataset.leaderStep)               { leaderIdx += +t.dataset.leaderStep; window.scrollTo(0, 0); return renderLeaders(true); }
    if (t.dataset.open !== undefined)       return openProfile(+t.dataset.open);
    if (t.hasAttribute('data-close'))       return closeProfile();
    if (t.dataset.step)                     return openProfile(openIdx + +t.dataset.step, +t.dataset.step > 0 ? 'fwd' : 'back');
    if (t.hasAttribute('data-random'))      return randomMember();
  });

  document.addEventListener('keydown', e => {
    if (modal.hidden) return;
    if (e.key === 'Escape')          closeProfile();
    else if (e.key === 'ArrowRight') openProfile(openIdx + 1, 'fwd');
    else if (e.key === 'ArrowLeft')  openProfile(openIdx - 1, 'back');
    else if (e.key === 'Tab') {                      // keep keyboard focus inside the open profile
      const f = $$('button', $('.profile', modal));
      const first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });

  // Swipe left/right on the profile card (phones)
  let sx = 0, sy = 0;
  const card = $('.profile', modal);
  card.addEventListener('touchstart', e => { sx = e.touches[0].clientX; sy = e.touches[0].clientY; }, { passive: true });
  card.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].clientX - sx, dy = e.changedTouches[0].clientY - sy;
    if (Math.abs(dx) > 60 && Math.abs(dy) < 50) openProfile(openIdx + (dx < 0 ? 1 : -1), dx < 0 ? 'fwd' : 'back');
  }, { passive: true });

  /* ==================================================================
     Start
     ================================================================== */
  document.title = `${TEAM.event} – Team ${TEAM.number}`;
  $('#brandEvent').textContent = TEAM.event;
  $('#brandTeam').textContent = `Team ${TEAM.number}`;
  $$('img[data-logo]').forEach(img => { img.src = TEAM.logo; });

  renderHome();
  renderMentor();
  renderLeaders(false);
  renderParticipants();
  renderTeam();
  $$('img[data-logo]').forEach(img => { img.src = TEAM.logo; });   // the welcome page logo is created above
  sweepImages();

  const start = location.hash.slice(1);
  show(ORDER.includes(start) ? start : 'home');
  try { history.replaceState({ id: current }, '', '#' + current); } catch (_) {}
})();
