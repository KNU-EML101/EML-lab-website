function esc(value){return String(value ?? "").replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#039;"}[m]));}

function renderShell(active){
  const c=window.COMMON_CONTENT;
  document.title=c.siteTitle;
  const nav=[['index.html','Home','home'],['research.html','Research','research'],['members.html','Members','members'],['publications.html','Publications','publications'],['news.html','News','news'],['contact.html','Contact','contact']];

  const brand = `
    <a class="site-brand" href="index.html" aria-label="${esc(c.labName)} home">
      ${c.logoPath ? `<img class="brand-mark" src="${esc(c.logoPath)}" alt="${esc(c.logoAlt || c.shortName)}">` : ''}
      <span class="brand-text">
        <span class="brand-title">${esc(c.shortName)} <span>LAB</span></span>
        <span class="brand-sub">${esc(c.labName)}</span>
      </span>
    </a>`;

  document.getElementById('siteHeader').innerHTML=`<div class="container"><nav>${brand}<div class="nav-links" id="navLinks">${nav.map(([href,label,key])=>`<a href="${href}" class="${active===key?'active':''}">${label}</a>`).join('')}</div><button class="menu-btn" aria-label="menu" onclick="document.getElementById('navLinks').classList.toggle('open')">☰</button></nav></div>`;

  document.getElementById('siteFooter').innerHTML=`<div class="container"><div class="footer-grid"><div><div class="logo" style="font-size:26px">${esc(c.shortName)} <span>LAB</span></div><p>${esc(c.labName)}<br>${esc(c.footerAffiliation)}</p></div><div class="footer-contact-block"><div><div class="eyebrow" style="color:#8fbce8">Contact</div><p>${[c.contact.room,c.contact.address,`Email: ${c.contact.email}`,`Tel: ${c.contact.tel}`,c.contact.fax?`Fax: ${c.contact.fax}`:''].filter(Boolean).map(esc).join('<br>')}</p></div><img class="footer-knu-logo" src="images/knu-logo-white.png" alt="Kyungpook National University"></div></div><div class="footer-bottom">© ${new Date().getFullYear()} ${esc(c.labName)}. All rights reserved.</div></div>`;
}

function renderPageHero(){
  const d=window.PAGE_CONTENT;
  const el=document.getElementById('pageHero');
  if(el)el.innerHTML=`<div class="container"><div class="eyebrow">${esc(window.COMMON_CONTENT.shortName)} LAB</div><h1>${esc(d.pageTitle)}</h1><p>${esc(d.pageDescription)}</p></div>`;
}

/* =========================================================
   HOME 배경 영상 보조 처리
   ---------------------------------------------------------
   - autoplay가 가능한 환경에서는 자동 재생됩니다.
   - 모바일 브라우저 대응을 위해 muted + playsInline을 강제합니다.
   - 영상 파일 자체를 바꾸려면 index.html의 source 경로를 수정하거나
     images/battery-hero.mp4를 같은 이름으로 교체하면 됩니다.
   ========================================================= */
function initHeroVideo(){
  const video=document.querySelector('.hero-bg-video');
  if(!video) return;

  video.muted=true;
  video.playsInline=true;

  const playPromise=video.play();
  if(playPromise && typeof playPromise.catch==='function'){
    playPromise.catch(()=>{
      document.addEventListener('click',()=>video.play().catch(()=>{}),{once:true});
    });
  }
}
