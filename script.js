(()=>{const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)],R=document.documentElement;
let dk;try{dk=localStorage.getItem('t')}catch(e){}dk=dk?dk==='d':matchMedia('(prefers-color-scheme:dark)').matches;
const tb=$('#theme'),setT=()=>{R.dataset.theme=dk?'dark':'light';if(tb)tb.textContent=dk?'☀':'☾'};setT();
const flip=()=>{dk=!dk;setT();try{localStorage.setItem('t',dk?'d':'l')}catch(e){}};tb&&tb.addEventListener('click',flip);
const L=$('.links'),M=$('.menu');M&&M.addEventListener('click',()=>L.classList.toggle('open'));L&&L.addEventListener('click',e=>e.target.tagName=='A'&&L.classList.remove('open'));
const pg=$('.prog');addEventListener('scroll',()=>{const h=R.scrollHeight-innerHeight;pg.style.transform=`scaleX(${h>0?scrollY/h:0})`},{passive:true});
const y=$('#yr');y&&(y.textContent=new Date().getFullYear());
const rl=$('#role');if(rl){const a=['Data Scientist','Product Builder','AI Explorer','Customer-Focused Founder'];let i=0;setInterval(()=>{i=(i+1)%a.length;rl.textContent=a[i]},2400)}
const cnt=e=>{const t=+e.dataset.n;let s=null;const f=n=>{s=s||n;const p=Math.min((n-s)/1300,1);e.textContent=Math.round(t*(1-Math.pow(1-p,3))).toLocaleString('en-US');p<1&&requestAnimationFrame(f)};requestAnimationFrame(f)};
const io=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting){x.target.classList.add('in');$$('[data-n]',x.target).forEach(cnt);io.unobserve(x.target)}}),{threshold:.12});$$('.rv').forEach(e=>io.observe(e));
const nl=$$('.links a[href^="#"],.toc a'),so=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting){nl.forEach(a=>a.classList.toggle('on',a.getAttribute('href')==='#'+x.target.id))}}),{rootMargin:'-40% 0px -55% 0px'});$$('main section[id],.art h2[id]').forEach(s=>so.observe(s));
$$('[data-p]').forEach(t=>t.addEventListener('click',()=>{$$('[data-p]').forEach(x=>x.setAttribute('aria-selected',x===t));$$('.panel').forEach(p=>p.hidden=p.id!==t.dataset.p)}));
$$('[data-f]').forEach(c=>c.addEventListener('click',()=>{$$('[data-f]').forEach(x=>x.setAttribute('aria-selected',x===c));const f=c.dataset.f;$$('.proj').forEach(p=>p.hidden=!(f=='all'||p.dataset.c.split(' ').includes(f)))}));
$$('[data-sk]').forEach(c=>c.addEventListener('click',()=>{$$('[data-sk]').forEach(x=>x.setAttribute('aria-selected',x===c));const f=c.dataset.sk;$$('.sk span').forEach(s=>s.hidden=!(f=='all'||s.dataset.g==f))}));
const T=$('#toast'),say=m=>{T.textContent=m;T.classList.add('on');setTimeout(()=>T.classList.remove('on'),2200)};
const cp=$('#copy');cp&&cp.addEventListener('click',()=>{const e='dawoodarsalaan8@gmail.com';navigator.clipboard?navigator.clipboard.writeText(e).then(()=>say('Email copied'),()=>say(e)):say(e)});
const w=$('.win');w&&document.addEventListener('mousemove',e=>{const x=(e.clientX/innerWidth-.5)*8,y=(e.clientY/innerHeight-.5)*-8;w.style.transform=`perspective(900px) rotateY(${x}deg) rotateX(${y}deg)`});
const P=$('#pal');if(P){const home=location.pathname.endsWith('case-study.html')?'index.html':'';const A=[['Go to About','#about'],['Go to Experience','#experience'],['Go to Projects','#projects'],['Go to Skills','#skills'],['Read the product case study','case-study.html'],['Download resume','assets/Dawood_M_D_Resume.pdf'],['Open GitHub','https://github.com/Dawoodsdatalife'],['Open LinkedIn','https://www.linkedin.com/in/m-d-dawood'],['Send an email','mailto:dawoodarsalaan8@gmail.com'],['Toggle dark mode',null]].map(([l,h])=>[l,h&&h[0]=='#'?home+h:h]);
const q=$('input',P),ul=$('ul',P);let cur=0,vis=A;const draw=()=>{ul.innerHTML='';vis.forEach((a,i)=>{const li=document.createElement('li');li.textContent=a[0];li.className=i==cur?'on':'';li.onclick=()=>run(a);ul.appendChild(li)})};
const run=a=>{P.classList.remove('on');a[1]===null?flip():a[1].startsWith('http')?open(a[1],'_blank'):location.href=a[1]};
const op=()=>{P.classList.add('on');q.value='';vis=A;cur=0;draw();q.focus()};$('#cmdk')&&$('#cmdk').addEventListener('click',op);
q.addEventListener('input',()=>{vis=A.filter(a=>a[0].toLowerCase().includes(q.value.toLowerCase()));cur=0;draw()});
addEventListener('keydown',e=>{if((e.ctrlKey||e.metaKey)&&e.key=='k'){e.preventDefault();op()}else if(P.classList.contains('on')){if(e.key=='Escape')P.classList.remove('on');else if(e.key=='ArrowDown'){cur=(cur+1)%vis.length;draw()}else if(e.key=='ArrowUp'){cur=(cur+vis.length-1)%vis.length;draw()}else if(e.key=='Enter'&&vis[cur])run(vis[cur])}});P.addEventListener('click',e=>e.target===P&&P.classList.remove('on'))}
})();
