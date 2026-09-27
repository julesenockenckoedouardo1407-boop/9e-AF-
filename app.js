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
 {subject:"math",q:"Quel est le PGCD de 18 et 24 ?",a:"6",ex:"Le plus grand diviseur commun de 18 et 24 est 6.",topic:"PGCD"},
 {subject:"math",q:"Résous : 3x = 21. Quelle est la valeur de x ?",a:"7",ex:"On divise les deux membres par 3 : x = 7.",topic:"Équations"},
 {subject:"math",q:"Quel est le PPCM de 6 et 8 ?",a:"24",ex:"24 est le plus petit multiple commun positif de 6 et 8.",topic:"PPCM"},
 {subject:"math",q:"Combien vaut 25 % de 200 ?",a:"50",ex:"25 % = 0,25 ; 0,25 × 200 = 50.",topic:"Pourcentages"},
 {subject:"math",q:"La moyenne de 8, 10 et 12 est combien ?",a:"10",ex:"(8 + 10 + 12) ÷ 3 = 10.",topic:"Moyenne"},
 {subject:"math",q:"Si 3 cahiers coûtent 150 gourdes, combien coûtent 6 cahiers au même prix unitaire ?",a:"300",ex:"6 est le double de 3, donc 150 × 2 = 300 gourdes.",topic:"Proportionnalité"},
 {subject:"math",q:"Quel est le carré de 9 ?",a:"81",ex:"9 × 9 = 81.",topic:"Puissances"},
 {subject:"math",q:"Si x + 5 = 12, quelle est la valeur de x ?",a:"7",ex:"On soustrait 5 aux deux membres : x = 7.",topic:"Équations"},
 {subject:"math",q:"Un rectangle mesure 8 cm de longueur et 3 cm de largeur. Quelle est son aire en cm² ?",a:"24",ex:"Aire = longueur × largeur = 8 × 3 = 24 cm².",topic:"Aires"},

 {subject:"fr",q:"Dans un texte, comment appelle-t-on l'idée principale autour de laquelle s'organisent les informations ?",a:"thème",ex:"Le thème est le sujet général traité par le texte.",topic:"Compréhension"},
 {subject:"fr",q:"Quel type de texte cherche principalement à défendre un point de vue ?",a:"argumentatif",ex:"Le texte argumentatif présente une thèse et des arguments.",topic:"Argumentation"},
 {subject:"fr",q:"Quel connecteur exprime une opposition : « donc », « mais » ou « parce que » ?",a:"mais",ex:"« Mais » marque une opposition ou un contraste.",topic:"Connecteurs"},
 {subject:"fr",q:"Comment appelle-t-on un mot qui a un sens proche d'un autre mot ?",a:"synonyme",ex:"Un synonyme a un sens identique ou proche.",topic:"Vocabulaire"},

 {subject:"creole",q:"Ki sa yo rele lide prensipal yon tèks ?",a:"lide prensipal",ex:"Se lide ki pi enpòtan tèks la ap devlope.",topic:"Konpreyansyon"},
 {subject:"creole",q:"Ki kalite tèks ki chèche defann yon opinyon ak agiman ?",a:"tèks agimantatif",ex:"Tèks agimantatif la sèvi ak agiman pou soutni yon pozisyon.",topic:"Ekspresyon"},

 {subject:"science",q:"Quel appareil permet de mesurer une température ?",a:"thermomètre",ex:"Le thermomètre sert à mesurer la température.",topic:"Physique"},
 {subject:"science",q:"Dans un circuit électrique simple, quel élément fournit généralement l'énergie électrique ?",a:"pile",ex:"La pile est une source d'énergie électrique dans un circuit simple.",topic:"Électricité"},
 {subject:"science",q:"Comment appelle-t-on le passage d'un liquide à l'état gazeux ?",a:"vaporisation",ex:"La vaporisation est le passage de l'état liquide à l'état gazeux.",topic:"Chimie"},
 {subject:"science",q:"Les fossiles permettent notamment d'étudier quoi ?",a:"l'histoire de la vie",ex:"Les fossiles fournissent des informations sur les êtres vivants du passé et l'histoire de la vie.",topic:"Sciences de la Terre"},

 {subject:"histgeo",q:"En quelle année Haïti proclame-t-elle son indépendance ?",a:"1804",ex:"L'indépendance d'Haïti est proclamée le 1er janvier 1804.",topic:"Indépendance"},
 {subject:"histgeo",q:"Quel outil permet de représenter et localiser des espaces géographiques ?",a:"carte",ex:"La carte représente un espace selon une échelle et une légende.",topic:"Cartographie"},
 {subject:"histgeo",q:"Comment appelle-t-on l'augmentation de la population vivant dans les villes ?",a:"urbanisation",ex:"L'urbanisation désigne notamment la croissance de la population urbaine et du fait urbain.",topic:"Population"},

 {subject:"civic",q:"Quel mot désigne la participation d'un citoyen à la vie collective ?",a:"participation",ex:"La participation citoyenne est une dimension de la vie collective.",topic:"Participation"},
 {subject:"civic",q:"Comment appelle-t-on l'ensemble des règles obligatoires qui s'appliquent dans une société ?",a:"loi",ex:"La loi fixe des règles qui organisent la vie collective.",topic:"Loi"},
 {subject:"civic",q:"Un citoyen possède des droits. Possède-t-il aussi des devoirs ?",a:"oui",ex:"La citoyenneté associe droits, devoirs et responsabilités.",topic:"Droits et devoirs"},

 {subject:"english",q:"Translate: « Bonjour ».",a:"hello",ex:"« Bonjour » se traduit généralement par « hello ».",topic:"Vocabulary"},
 {subject:"english",q:"Complete: « I ___ a student. »",a:"am",ex:"Avec « I », le verbe « to be » au présent est « am ».",topic:"Grammar"},
 {subject:"english",q:"What is the comparative of « small » ?",a:"smaller",ex:"Pour beaucoup d'adjectifs courts, on forme le comparatif avec -er.",topic:"Comparatives"},

 {subject:"spanish",q:"Translate « Bonjour » into Spanish.",a:"hola",ex:"« Bonjour » se traduit par « hola » en espagnol.",topic:"Vocabulario"},
 {subject:"spanish",q:"Complete: « Yo ___ estudiante. »",a:"soy",ex:"Avec « yo », le verbe ser donne « soy ».",topic:"Gramática"},

 {subject:"etap",q:"Dans un projet de petite entreprise, quel élément permet de connaître ce que l'on dépense pour produire ?",a:"coût",ex:"Le coût regroupe les dépenses liées à la production ou à l'activité.",topic:"Entrepreneuriat"},
 {subject:"etap",q:"Quelle pratique consiste à transformer des déchets pour leur donner une nouvelle utilisation ?",a:"recyclage",ex:"Le recyclage permet de valoriser certains déchets.",topic:"Recyclage"},
 {subject:"etap",q:"L'énergie provenant du Soleil est appelée énergie… ?",a:"solaire",ex:"L'énergie solaire provient du rayonnement du Soleil.",topic:"Énergie"},

 {subject:"arts",q:"Quels sont les trois volets annoncés dans le programme d'éducation esthétique et artistique du 3e cycle ?",a:"arts plastiques et visuels, arts de la scène principalement la musique, connaissances culturelles et patrimoine haïtien",ex:"Le programme distingue ces trois volets.",topic:"Programme"},
 {subject:"arts",q:"Quel domaine artistique utilise notamment les sons, le rythme et la voix ?",a:"musique",ex:"La musique travaille notamment les sons, le rythme et la voix.",topic:"Arts de la scène"},

 {subject:"eps",q:"Pourquoi fait-on un échauffement avant une activité physique ?",a:"préparer le corps",ex:"L'échauffement prépare progressivement le corps à l'effort et participe à la sécurité de la pratique.",topic:"Sécurité"},
 {subject:"eps",q:"Après un effort physique, quelle phase aide le corps à revenir progressivement au calme ?",a:"récupération",ex:"La récupération permet un retour progressif au repos.",topic:"Récupération"}
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
