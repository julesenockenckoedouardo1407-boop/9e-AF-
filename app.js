let state=JSON.parse(localStorage.getItem("9eAFv5")||'{"scores":{},"attempts":{},"mistakes":[]}');
let currentExam=null,currentAnswers={};let deferredPrompt=null;
const save=()=>localStorage.setItem("9eAFv5",JSON.stringify(state));
const app=document.getElementById("app");
const esc=s=>String(s).replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[m]));
function go(page){render(page);scrollTo(0,0)}
function render(page="home"){
 if(page==="home") return home();
 if(page==="courses") return courses();
 if(page==="exams") return exams();
 if(page==="progress") return progress();
 if(page==="about") return about();
 if(page==="lesson") return lesson(Number(arguments[1]||0));
}
function home(){
 app.innerHTML=`<section class="hero"><h1>Bienvenue en 9e AF</h1><p>Apprendre, s'entraîner, passer des examens complets et suivre ses progrès.</p><button class="btn" data-nav="exams">🎯 Voir les examens</button></section>
 <h2>Accès rapide</h2><div class="grid">
 <button data-nav="courses">📚<br>Cours</button><button data-nav="exams">🎯<br>Examens par matière</button>
 <button data-nav="progress">📊<br>Ma progression</button><button data-nav="about">ℹ️<br>À propos</button></div>
 <div class="card"><h2>Principe</h2><p>Chaque matière possède des examens structurés par niveaux. Les erreurs peuvent être retrouvées pour organiser la révision.</p></div>`;
}
function courses(){
 let q=state.q||"";
 app.innerHTML=`<h1>📚 Cours</h1><input class="search" id="search" placeholder="Rechercher une leçon..." value="${esc(q)}"><div class="subject-filter">${SUBJECTS.map(s=>`<button class="btn secondary" data-filter="${s.id}">${s.name}</button>`).join("")}</div><div id="lessonList"></div>`;
 renderLessons();
 document.getElementById("search").oninput=e=>{state.q=e.target.value;renderLessons()}
}
function renderLessons(filter=""){
 let q=(state.q||"").toLowerCase();
 let arr=LESSONS.filter(x=>(!filter||x.subject===filter)&&(!q||x.title.toLowerCase().includes(q)||x.objective.toLowerCase().includes(q)));
 document.getElementById("lessonList").innerHTML=arr.map((x)=>{let i=LESSONS.indexOf(x);return `<div class="card"><span class="tag">${SUBJECTS.find(s=>s.id===x.subject)?.name||x.subject}</span><h3>${esc(x.title)}</h3><p>${esc(x.objective)}</p><button class="btn" data-lesson="${i}">📖 Ouvrir le cours</button></div>`}).join("")||"<p class='muted'>Aucun cours trouvé.</p>";
}
function lesson(i){
 let x=LESSONS[i];if(!x)return courses();
 app.innerHTML=`<button class="btn secondary" data-nav="courses">← Retour aux cours</button><div class="card"><span class="tag">${SUBJECTS.find(s=>s.id===x.subject)?.name||""}</span><h1>${esc(x.title)}</h1><h3>🎯 Objectif</h3><p>${esc(x.objective)}</p><h3>📖 Cours</h3><p>${esc(x.lesson)}</p><h3>💡 Exemple / application</h3><p>${esc(x.lesson)}</p><h3>🧠 À retenir</h3><p>${esc(x.tips)}</p><button class="btn" data-nav="exams">🎯 Passer un examen</button></div>`;
}
function exams(){
 app.innerHTML=`<h1>🎯 Examens complets par matière</h1><div class="card"><p class="muted">Chaque niveau correspond à un sujet structuré. Commence par le Niveau 1.</p></div><div class="grid">${SUBJECTS.map(s=>`<div class="card"><h3>${s.name}</h3><div class="row">${[1,2,3,4].map(n=>`<button class="btn ${n>1?'secondary':''}" data-exam="${s.id}" data-level="${n}">${n===4?'🏆 Défi':'Niveau '+n}</button>`).join("")}</div></div>`).join("")}</div>`;
}
function startExam(id,level){
 if(level!==1){alert("Les niveaux 2 à Défi seront ajoutés avec des sujets supplémentaires. Le Niveau 1 est complet dans cette version.");return}
 const sections=EXAMS[id]; if(!sections){alert("Sujet en préparation.");return}
 currentExam={id,level,sections};currentAnswers={};renderExam();
}
function renderExam(){
 const name=SUBJECTS.find(s=>s.id===currentExam.id)?.name||currentExam.id;
 let n=0,html=`<button class="btn secondary" data-nav="exams">← Liste des examens</button><div class="card"><h1>${name} — Niveau 1</h1><div class="exam-meta"><span class="tag">Sujet complet</span><span class="tag">Auto-correction</span></div><p>Réponds à toutes les parties. Pour les productions écrites, lis les critères avant de valider.</p></div>`;
 currentExam.sections.forEach((sec,si)=>{html+=`<div class="card"><h2>${esc(sec[0])}</h2>${sec[1]?`<p>${esc(sec[1])}</p>`:""}<div>`;
 sec[2].forEach((q,qi)=>{const id=`${si}-${qi}`; if(q[2]===null){html+=`<div class="question"><h3>${qi+1}. ${esc(q[0])}</h3><p class="muted">Critères : ${q[1].join(" • ")}</p><textarea id="open-${id}" style="width:100%;min-height:150px;padding:10px;border:1px solid #ccd9d3;border-radius:12px" placeholder="Rédige ta réponse ici..."></textarea></div>`}
 else {html+=`<div class="question"><h3>${qi+1}. ${esc(q[0])}</h3>${q[1].map((c,oi)=>`<button class="choice" data-answer="${id}" data-opt="${oi}">${esc(c)}</button>`).join("")}</div>`}});html+=`</div></div>`});
 html+=`<button class="btn" id="finishExam">✅ Terminer et corriger</button>`;
 app.innerHTML=html;
}
function finishExam(){
 let total=0,score=0;const name=currentExam.id;let open=0;
 currentExam.sections.forEach((sec,si)=>sec[2].forEach((q,qi)=>{
   if(q[2]===null){open++;return}
   total++;let a=currentAnswers[`${si}-${qi}`];if(a===q[2])score++;else if(a!==undefined)state.mistakes.push({subject:name,question:q[0],date:new Date().toISOString()});
 }));
 state.scores[`${name}-1`]={score,total,open,date:new Date().toISOString()};
 state.attempts[name]=(state.attempts[name]||0)+1;save();
 app.innerHTML=`<div class="card"><div class="result">Résultat : ${score}/${total}</div><p>${Math.round(score/total*100)}% des questions auto-corrigées réussies.</p><div class="bar"><i style="width:${Math.round(score/total*100)}%"></i></div><p class="muted">${open?`La production écrite reste à évaluer selon les critères affichés.`:"Toutes les questions sont auto-corrigées."}</p><button class="btn" data-nav="progress">📊 Voir ma progression</button> <button class="btn secondary" data-nav="exams">🎯 Autres examens</button></div>`;
}
function progress(){
 let rows=Object.entries(state.scores);app.innerHTML=`<h1>📊 Ma progression</h1><div class="card"><h2>Examens réalisés</h2>${rows.length?rows.map(([k,v])=>`<p><b>${esc(k)}</b> : ${v.score}/${v.total} (${Math.round(v.score/v.total*100)}%)</p>`).join(""):"<p class='muted'>Aucun examen terminé.</p>"}</div><div class="card"><h2>Erreurs à revoir</h2><p>${state.mistakes.length} erreur(s) enregistrée(s).</p>${state.mistakes.slice(-8).reverse().map(m=>`<div class="answer"><b>${esc(m.subject)}</b> — ${esc(m.question)}</div>`).join("")}</div>`}
function about(){app.innerHTML=`<div class="card"><h1>ℹ️ À propos</h1><p><b>9e AF</b> — application d'apprentissage et d'entraînement.</p><p>Contenu structuré à partir des orientations du programme du 3e cycle, avec adaptation pédagogique pour l'apprentissage hors ligne.</p><hr><p><b>Créé par maître Jules Enock</b></p><p>Contact : <b>+509 40409680</b></p></div>`}
document.addEventListener("click",e=>{
 const nav=e.target.closest("[data-nav]");if(nav){go(nav.dataset.nav);return}
 const l=e.target.closest("[data-lesson]");if(l){go("lesson",Number(l.dataset.lesson));return}
 const f=e.target.closest("[data-filter]");if(f){renderLessons(f.dataset.filter);return}
 const ex=e.target.closest("[data-exam]");if(ex){startExam(ex.dataset.exam,Number(ex.dataset.level));return}
 const ans=e.target.closest("[data-answer]");if(ans){const id=ans.dataset.answer;currentAnswers[id]=Number(ans.dataset.opt);document.querySelectorAll(`[data-answer="${id}"]`).forEach(b=>b.classList.remove("correct","wrong"));ans.classList.add("correct");return}
 if(e.target.id==="finishExam")finishExam();
});
window.addEventListener("beforeinstallprompt",e=>{e.preventDefault();deferredPrompt=e;document.getElementById("installBtn").classList.remove("hidden")});
document.getElementById("installBtn").onclick=async()=>{if(deferredPrompt){deferredPrompt.prompt();deferredPrompt=null}};
render("home");

if("serviceWorker" in navigator) window.addEventListener("load",()=>navigator.serviceWorker.register("./sw.js").catch(()=>{}));
