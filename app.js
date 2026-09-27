const DATA = [
 {id:"math",icon:"🔢",name:"Mathématiques",units:[
  {name:"Nombres et calculs",notions:["Puissances","Écriture scientifique","Racines carrées","Division euclidienne","Nombres premiers","PGCD","PPCM","Fractions","Priorités opératoires"]},
  {name:"Calcul littéral",notions:["Expressions littérales","Réduction","Développement","Factorisation","Équations du premier degré"]},
  {name:"Proportionnalité",notions:["Produit en croix","Pourcentages","Échelles","Vitesse","Distance","Temps","Thalès"]},
  {name:"Fonctions",notions:["Image","Antécédent","Tableau de valeurs","Fonction linéaire","Fonction affine"]},
  {name:"Géométrie",notions:["Pythagore","Réciproque de Pythagore","Thalès","Triangles","Quadrilatères","Aires","Volumes","Patrons"]},
  {name:"Statistiques et probabilités",notions:["Moyenne","Moyenne pondérée","Médiane","Mode","Étendue","Probabilité"]}
 ]},
 {id:"fr",icon:"🇫🇷",name:"Français",units:[
  {name:"Compréhension",notions:["Lecture","Informations explicites","Informations implicites","Idée principale","Interprétation","Résumé"]},
  {name:"Langue",notions:["Grammaire","Conjugaison","Orthographe","Vocabulaire","Connecteurs logiques"]},
  {name:"Production",notions:["Narration","Description","Explication","Information","Argumentation","Résumé"]}
 ]},
 {id:"creole",icon:"🗣️",name:"Créole",units:[
  {name:"Compréhension",notions:["Lecture","Thème","Idée principale","Interprétation","Résumé"]},
  {name:"Langue",notions:["Grammaire","Orthographe","Vocabulaire","Conjugaison","Ponctuation"]},
  {name:"Expression",notions:["Récit","Description","Explication","Argumentation","Lettre","Compte rendu"]}
 ]},
 {id:"science",icon:"🔬",name:"Sciences expérimentales",units:[
  {name:"Physique",notions:["Mouvement","Forces","Énergie","Électricité","Lumière","Son"]},
  {name:"Chimie",notions:["Matière","Mélanges","Transformations","Réactions"]},
  {name:"Sciences de la vie",notions:["Organismes vivants","Corps humain","Santé","Environnement"]},
  {name:"Sciences de la Terre",notions:["Terre","Roches","Fossiles","Histoire de la Terre","Univers"]}
 ]},
 {id:"histgeo",icon:"🌎",name:"Histoire-Géographie",units:[
  {name:"Histoire",notions:["Saint-Domingue","Esclavage","Révolution haïtienne","Indépendance","Construction de l'État","Haïti et le monde"]},
  {name:"Géographie",notions:["Cartes","Territoire haïtien","Population","Urbanisation","Ressources","Environnement","Caraïbes"]}
 ]},
 {id:"civic",icon:"🇭🇹",name:"Éducation à la citoyenneté",units:[
  {name:"Nation, identité et responsabilité",notions:["Citoyenneté mondiale","Valeurs","Patrimoine","Responsabilité"]},
  {name:"Citoyen, citoyenneté et État",notions:["Droits","Devoirs","Droits humains","Éthique","Participation"]},
  {name:"État démocratique",notions:["Loi","Démocratie","Participation","Engagement","Impôt","Solidarité"]}
 ]},
 {id:"english",icon:"🇬🇧",name:"Anglais",units:[
  {name:"Communication",notions:["Présentation","Famille","Goûts","Opinions","Demander une information"]},
  {name:"Grammar",notions:["Pronouns","Adjectives","Questions","Negatives","Verb tenses","Comparatives","Connectors"]},
  {name:"Writing",notions:["Message","Description","Dialogue","Opinion","Short paragraph"]}
 ]},
 {id:"spanish",icon:"🇪🇸",name:"Espagnol",units:[
  {name:"Comunicación",notions:["Saludos","Presentarse","Familia","Escuela","Gustos","Descripción"]},
  {name:"Gramática",notions:["Pronombres","Artículos","Adjetivos","Verbos","Negación","Preguntas"]},
  {name:"Producción",notions:["Mensaje","Diálogo","Descripción","Pequeña historia"]}
 ]},
 {id:"etap",icon:"💻",name:"ETAP",units:[
  {name:"Technologies numériques",notions:["Information","Communication numérique","Sécurité numérique","Usage responsable"]},
  {name:"Activités génératrices de revenus",notions:["Agriculture","Mer","Production","Transformation","Commercialisation"]},
  {name:"Recyclage et énergie",notions:["Déchets","Recyclage","Énergie solaire","Économie d'énergie"]},
  {name:"Entrepreneuriat",notions:["Idée","Coût","Prix","Vente","Bénéfice","Projet"]}
 ]},
 {id:"arts",icon:"🎨",name:"Éducation esthétique et artistique",units:[
  {name:"Arts visuels",notions:["Dessin","Formes","Couleurs","Composition","Patrimoine artistique"]},
  {name:"Arts de la scène",notions:["Musique","Rythme","Voix","Théâtre","Expression"]},
  {name:"Culture",notions:["Artistes haïtiens","Œuvres","Traditions","Patrimoine culturel"]}
 ]},
 {id:"eps",icon:"🏃",name:"EPS",units:[
  {name:"Santé et activité physique",notions:["Échauffement","Endurance","Force","Souplesse","Récupération","Hygiène"]},
  {name:"Sports",notions:["Règles","Techniques","Arbitrage","Stratégies","Sécurité","Esprit sportif"]}
 ]}
];

const QUESTIONS = [
 {subject:"math",q:"Un véhicule parcourt 240 km en 4 heures. Quelle est sa vitesse moyenne ?",a:"60",ex:"vitesse = distance ÷ temps = 240 ÷ 4 = 60 km/h.",topic:"Vitesse"},
 {subject:"math",q:"Quel est le PGCD de 18 et 24 ?",a:"6",ex:"Les diviseurs communs sont 1, 2, 3 et 6. Le plus grand est 6.",topic:"PGCD"},
 {subject:"math",q:"Résous : 3x = 21. Quelle est la valeur de x ?",a:"7",ex:"On divise les deux membres par 3 : x = 21 ÷ 3 = 7.",topic:"Équations"},
 {subject:"civic",q:"Dans une démocratie, quel principe permet aux citoyens de participer à la vie collective ?",a:"participation",ex:"La participation citoyenne permet aux citoyens de prendre part à la vie collective.",topic:"Participation"}
];

let state = JSON.parse(localStorage.getItem("nineAFState") || '{"progress":{},"errors":[]}');
const save=()=>localStorage.setItem("nineAFState",JSON.stringify(state));
const $=s=>document.querySelector(s);

function show(id){
 document.querySelectorAll(".view").forEach(v=>v.classList.remove("active"));
 $("#"+id).classList.add("active");
 window.scrollTo({top:0,behavior:"smooth"});
 if(id==="courses") renderCourses($("#search").value);
 if(id==="practice") renderPractice();
 if(id==="review") renderReview();
 if(id==="progress") renderProgress();
 if(id==="exam") renderExam();
}
document.querySelectorAll("[data-go]").forEach(b=>b.addEventListener("click",()=>show(b.dataset.go)));
document.querySelectorAll(".back").forEach(b=>b.addEventListener("click",()=>show("home")));
$("#search").addEventListener("input",e=>renderCourses(e.target.value));

function renderCourses(term=""){
 const t=term.trim().toLowerCase();
 $("#subjects").innerHTML=DATA.map(s=>{
  const units=s.units.map(u=>{
   const ns=u.notions.filter(n=>!t||`${s.name} ${u.name} ${n}`.toLowerCase().includes(t));
   if(!ns.length)return "";
   return `<div class="unit"><div class="unit-title">${u.name}</div><div class="notions">${ns.map(n=>`<span class="tag">${n}</span>`).join("")}</div></div>`;
  }).join("");
  if(!units.trim())return "";
  return `<article class="subject"><div class="subject-head"><span class="subject-icon">${s.icon}</span><div><div class="subject-title">${s.name}</div><small>${s.units.length} unité(s)</small></div></div>${units}</article>`;
 }).join("") || `<div class="card">Aucune notion trouvée.</div>`;
}

function nextQuestion(){
 const idx=Math.floor(Math.random()*QUESTIONS.length);
 return QUESTIONS[idx];
}
function renderPractice(){
 const q=nextQuestion();
 $("#practiceBox").innerHTML=`<div class="card">
   <div class="muted">${DATA.find(s=>s.id===q.subject)?.name||""} · ${q.topic}</div>
   <p class="question">${q.q}</p>
   <input id="answer" class="answer" placeholder="Ta réponse">
   <button id="check" class="action">Vérifier</button>
   <div id="feedback"></div>
 </div>`;
 $("#check").onclick=()=>{
   const value=$("#answer").value.trim().toLowerCase();
   const correct=q.a.toLowerCase();
   const good=value===correct;
   const key=q.subject+"|"+q.topic;
   state.progress[key]=Math.min(100,(state.progress[key]||0)+(good?20:0));
   if(!good && !state.errors.includes(key))state.errors.push(key);
   save();
   $("#feedback").className="feedback "+(good?"ok":"bad");
   $("#feedback").innerHTML=good?`✅ Correct !<br><span class="muted">${q.ex}</span>`:`❌ Pas encore.<br><span class="muted">${q.ex}</span>`;
 };
}

function renderReview(){
 const errors=state.errors;
 $("#reviewBox").innerHTML=errors.length?`<div class="card"><h3>🔴 Notions à revoir</h3>${errors.map(e=>`<p>• ${e.replace("|"," — ")}</p>`).join("")}<button class="action" id="clearErrors">Réinitialiser mes erreurs</button></div>`:
 `<div class="card"><h3>🌟 Rien à revoir pour le moment</h3><p class="muted">Fais quelques exercices. Les notions qui posent problème apparaîtront ici.</p></div>`;
 if($("#clearErrors"))$("#clearErrors").onclick=()=>{state.errors=[];save();renderReview()};
}

function renderProgress(){
 const rows=DATA.map(s=>{
   const vals=Object.entries(state.progress).filter(([k])=>k.startsWith(s.id+"|")).map(x=>x[1]);
   const p=vals.length?Math.round(vals.reduce((a,b)=>a+b,0)/vals.length):0;
   return `<div class="progress-row"><div><span>${s.icon} ${s.name}</span><b>${p}%</b></div><div class="bar"><i style="width:${p}%"></i></div></div>`;
 }).join("");
 $("#progressBox").innerHTML=`<div class="card"><h3>Ma progression</h3>${rows}<p class="muted">La progression est conservée sur cet appareil grâce au stockage local.</p></div>`;
}

function renderExam(){
 const qs=[...QUESTIONS].sort(()=>Math.random()-.5).slice(0,4);
 $("#examBox").innerHTML=`<div class="card"><p class="muted">Simulation locale — ${qs.length} questions</p>${qs.map((q,i)=>`<div class="examq"><p class="question">${i+1}. ${q.q}</p><input class="answer exam-answer" data-a="${q.a}" placeholder="Réponse"></div>`).join("")}<button class="action" id="finishExam">Terminer</button><div id="examResult"></div></div>`;
 $("#finishExam").onclick=()=>{
   let score=0;document.querySelectorAll(".exam-answer").forEach(x=>{if(x.value.trim().toLowerCase()===x.dataset.a.toLowerCase())score++});
   $("#examResult").className="feedback "+(score>=3?"ok":"bad");
   $("#examResult").innerHTML=`Résultat : <strong>${score}/${qs.length}</strong>`;
 };
}

if("serviceWorker" in navigator) window.addEventListener("load",()=>navigator.serviceWorker.register("sw.js"));
let deferredPrompt=null;
window.addEventListener("beforeinstallprompt",e=>{e.preventDefault();deferredPrompt=e;$("#installBtn").hidden=false});
$("#installBtn").onclick=async()=>{if(!deferredPrompt)return;deferredPrompt.prompt();deferredPrompt=null;$("#installBtn").hidden=true};

renderCourses();
