function esc(value){return String(value ?? "").replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#039;"}[m]));}
function renderShell(active){
  const c=window.COMMON_CONTENT;
  document.title=c.siteTitle;
  const nav=[['index.html','Home','home'],['research.html','Research','research'],['members.html','Members','members'],['publications.html','Publications','publications'],['news.html','News','news'],['contact.html','Contact','contact']];
  document.getElementById('siteHeader').innerHTML=`<div class="container"><nav><a class="logo" href="index.html">${esc(c.shortName)} <span>LAB</span></a><div class="nav-links" id="navLinks">${nav.map(([href,label,key])=>`<a href="${href}" class="${active===key?'active':''}">${label}</a>`).join('')}</div><button class="menu-btn" aria-label="menu" onclick="document.getElementById('navLinks').classList.toggle('open')">☰</button></nav></div>`;
  document.getElementById('siteFooter').innerHTML=`<div class="container"><div class="footer-grid"><div><div class="logo" style="font-size:26px">${esc(c.shortName)} <span>LAB</span></div><p>${esc(c.labName)}<br>${esc(c.footerAffiliation)}</p></div><div><div class="eyebrow" style="color:#8fbce8">Contact</div><p>${[c.contact.room,c.contact.address,`Email: ${c.contact.email}`,`Tel: ${c.contact.tel}`].map(esc).join('<br>')}</p></div></div><div class="footer-bottom">© ${new Date().getFullYear()} ${esc(c.labName)}. All rights reserved.</div></div>`;
}
function renderPageHero(){const d=window.PAGE_CONTENT;const el=document.getElementById('pageHero');if(el)el.innerHTML=`<div class="container"><div class="eyebrow">${esc(window.COMMON_CONTENT.shortName)} LAB</div><h1>${esc(d.pageTitle)}</h1><p>${esc(d.pageDescription)}</p></div>`;}
