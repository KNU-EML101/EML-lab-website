function esc(value){
  return String(value ?? "").replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#039;"}[m]));
}

function renderShell(active){
  const c = window.COMMON_CONTENT;
  document.title = c.siteTitle;
  const nav = [
    ['index.html','Home','home'],
    ['research.html','Research','research'],
    ['members.html','Members','members'],
    ['publications.html','Publications','publications'],
    ['news.html','News','news'],
    ['contact.html','Contact','contact']
  ];

  document.getElementById('siteHeader').innerHTML = `
    <div class="container">
      <nav>
        <a class="logo" href="index.html">${esc(c.shortName)} <span>LAB</span></a>
        <div class="nav-links" id="navLinks">
          ${nav.map(([href,label,key])=>`<a href="${href}" class="${active===key?'active':''}">${label}</a>`).join('')}
        </div>
        <button class="menu-btn" aria-label="menu" onclick="document.getElementById('navLinks').classList.toggle('open')">☰</button>
      </nav>
    </div>`;

  document.getElementById('siteFooter').innerHTML = `
    <div class="container">
      <div class="footer-grid">
        <div>
          <div class="logo" style="font-size:26px">${esc(c.shortName)} <span>LAB</span></div>
          <p>${esc(c.labName)}<br>${esc(c.footerAffiliation)}</p>
        </div>
        <div>
          <div class="eyebrow" style="color:#8fbce8">Contact</div>
          <p>${[c.contact.room,c.contact.address,`Email: ${c.contact.email}`,`Tel: ${c.contact.tel}`].map(esc).join('<br>')}</p>
        </div>
      </div>
      <div class="footer-bottom">© ${new Date().getFullYear()} ${esc(c.labName)}. All rights reserved.</div>
    </div>`;
}

function renderPageHero(){
  const d = window.PAGE_CONTENT;
  const el = document.getElementById('pageHero');
  if(el){
    el.innerHTML = `
      <div class="container">
        <div class="eyebrow">${esc(window.COMMON_CONTENT.shortName)} LAB</div>
        <h1>${esc(d.pageTitle)}</h1>
        <p>${esc(d.pageDescription)}</p>
      </div>`;
  }
}

/* =========================================================
   HERO 배터리 애니메이션 제어
   ---------------------------------------------------------
   - 기본 주기: 4200ms
   - mode/caption 문구를 바꾸려면 states 배열 안의 label/caption 수정
   - index.html에 batteryDevice가 없으면 실행되지 않습니다.
   ========================================================= */
function initBatteryAnimation(){
  const device = document.getElementById('batteryDevice');
  const modeLabel = document.getElementById('batteryModeLabel');
  const caption = document.getElementById('batteryCaption');
  if(!device || !modeLabel || !caption) return;

  const states = [
    {
      className:'is-discharge',
      label:'Discharge mode',
      caption:'Li+ ions move to the cathode while electrons travel through the external circuit to deliver energy.'
    },
    {
      className:'is-charge',
      label:'Charge mode',
      caption:'During charging, Li+ ions return toward the anode and the electron flow reverses to store energy again.'
    }
  ];

  let current = 0;
  const applyState = () => {
    const state = states[current];
    device.classList.remove('is-discharge','is-charge');
    device.classList.add(state.className);
    modeLabel.textContent = state.label;
    caption.textContent = state.caption;
    current = (current + 1) % states.length;
  };

  applyState();
  window.setInterval(applyState, 4200);
}
