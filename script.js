const config = {
  defaultLang: "en",
  profilePhoto: "assets/profile-placeholder.jpg",
  brand: { en: "Khaled Al‑Qushti", ar: "خالد القشطي" },
  contact: {
    linkedin: "https://www.linkedin.com/in/USERNAME",
    whatsapp: "https://wa.me/218XXXXXXXXX",
    email: "your.name@email.com"
  },
  hero: {
    title: { en: "Shari’a Audit & Compliance Leader", ar: "مدير التدقيق والامتثال الشرعي" },
    subtitle: { en: "CSAA Fellow — AAOIFI | Business Development & Advisory", ar: "زمالة CSAA من أيوفي | تطوير الأعمال وتقديم الاستشارات" },
    lede: { en: "Delivering robust shari’a governance, internal audit excellence, and advisory across Islamic banking.", ar: "أقدّم حوكمة شرعية متينة، وتميّزًا في المراجعة والتدقيق، واستشارات للقطاع المصرفي الإسلامي." }
  },
  about: {
    body: {
      en: "Islamic banking professional specializing in shari’a audit, internal audit, and compliance. Practitioner of data-driven reporting and governance frameworks.",
      ar: "متخصص في التدقيق والتدقيق الداخلي والامتثال الشرعي، مع خبرة في تطوير الأعمال وتقديم الاستشارات، ومهارات في إعداد التقارير المعتمدة على البيانات وأُطر الحوكمة."
    }
  },
  skills: {
    en: ["Shari’a Audit", "Internal Audit", "Compliance", "Governance", "Risk & Controls", "Data Analysis", "Reporting"],
    ar: ["تطوير الأعمال والاستشارات", "تحليل البيانات وكتابة التقارير", "التدقيق الشرعي", "المراجعة الداخلية", "الامتثال والحوكمة"]
  },
  experience: {
    en: [
      { where: "Libyan Islamic Bank", what: "Head of Shari’a Audit", when: "2024 — Present" },
      { where: "Libyan Islamic Bank", what: "Shari’a & Internal Audit Assistant Manager", when: "2021 — 2024" },
      { where: "Libyan Islamic Bank", what: "Internal & Shari’a Auditor", when: "2019 — 2021" },
      { where: "Travel & Tourism Office", what: "Branch Manager", when: "2016 — 2018" },
      { where: "Showroom", what: "Regional Sales Manager", when: "2014 — 2016" }
    ],
    ar: [
      { where: "المصرف الإسلامي الليبي", what: "رئيس قسم التدقيق الشرعي", when: "2024 — حتى الآن" },
      { where: "المصرف الإسلامي الليبي", what: "مساعد مدير إدارة المراجعة والتدقيق الشرعي", when: "2021 — 2024" },
      { where: "المصرف الإسلامي الليبي", what: "مراجع داخلي ومدقق شرعي", when: "2019 — 2021" },
      { where: "مكتب سفر وسياحة", what: "مدير مكتب سفر وسياحة", when: "2016 — 2018" },
      { where: "صالة العرض", what: "مسؤول مبيعات صالة العرض", when: "2014 — 2016" }
    ]
  },
  projects: {
    en: [
      { title: "Shari’a Audit Function Establishment", blurb: "Built and led the shari’a audit function with risk‑based planning and coverage.", link: "#" },
      { title: "Islamic Products Design & Structuring", blurb: "Contributed to designing compliant products and aligning departments with standards.", link: "#" },
      { title: "T24 BI Reporting Dashboards", blurb: "Developed audit/ops dashboards to enhance reporting and insight.", link: "#" },
      { title: "Governance & Treasury Policies Framework", blurb: "Participated in governance and treasury policy committees to mature controls.", link: "#" }
    ],
    ar: [
      { title: "تأسيس وظيفة التدقيق الشرعي", blurb: "بناء وقيادة وظيفة التدقيق الشرعي مع تخطيط قائم على المخاطر ونطاق تغطية أوسع.", link: "#" },
      { title: "تصميم المنتجات الإسلامية وهيكلتها", blurb: "المساهمة في تصميم منتجات متوافقة ومواءمة الإدارات مع المعايير.", link: "#" },
      { title: "لوحات تقارير T24 BI", blurb: "تطوير لوحات تدقيق وتشغيل لتعزيز التقارير والرؤى.", link: "#" },
      { title: "إطار الحوكمة وسياسات الخزينة", blurb: "المشاركة في لجان الحوكمة والخزينة لرفع نضج الضوابط.", link: "#" }
    ]
  },
  education: {
    en: [{ degree: "B.Sc. in Economics & Islamic Banking", school: "University", meta: "Key courses: Islamic Finance, Audit, Risk" }],
    ar: [{ degree: "بكالوريوس الاقتصاد والمصارف الإسلامية", school: "الجامعة", meta: "أهم المقررات: التمويل الإسلامي، التدقيق، المخاطر" }]
  },
  certs: {
    en: ["Certified Shari’a Auditor & Advisor (CSAA) — AAOIFI"],
    ar: ["شهادة المراقب والمدقق الشرعي المعتمد CSAA - AAOIFI"]
  },
  affiliations: {
    en: [
      "Member, High Committee for Finance — Libyan Islamic Bank",
      "LIB representative at AAOIFI–World Bank Conference — 2018, 2023, 2024"
    ],
    ar: [
      "عضو، اللجنة العليا للتمويل — المصرف الإسلامي الليبي",
      "ممثل المصرف الإسلامي الليبي في مؤتمر AAOIFI–أيوفي-البنك الدولي — 2018، 2023، 2024"
    ]
  },
  languages: { en: ["Arabic (Native)", "English (Professional)"], ar: ["العربية", "الإنجليزية"] },
  cvFile: "Khaled Gushti Cv 2025 Ats.pdf"
};

const $ = sel => document.querySelector(sel);

function setLang(lang){
  const isAr = lang === "ar";
  document.documentElement.lang = isAr ? "ar" : "en";
  document.documentElement.dir = isAr ? "rtl" : "ltr";
  document.querySelectorAll(".hero-text").forEach(el => el.style.display = isAr ? "none" : "");
  document.querySelectorAll(".hero-text.ar").forEach(el => el.style.display = isAr ? "" : "none");
  document.querySelectorAll(".ar").forEach(el => el.style.display = isAr ? "" : "none");
  document.getElementById("langToggle").textContent = isAr ? "English" : "العربية";
  document.getElementById("brandText").textContent = isAr ? config.brand.ar : config.brand.en;
  document.getElementById("brandFoot").textContent = isAr ? config.brand.ar : config.brand.en;
  const navMap = isAr
    ? ["نبذة","المهارات","الخبرات","المشاريع","التعليم","الشهادات","العضويات والانتماءات","اللغات","التواصل"]
    : ["About","Skills","Experience","Projects","Education","Certifications","Affiliations","Languages","Contact"];
  document.querySelectorAll(".nav a").forEach((a,i)=> a.textContent = navMap[i]);
  document.querySelector("#downloadCV").textContent = isAr ? "تحميل السيرة الذاتية" : "Download CV";
}

function populate(){
  // brand & photo
  $("#brandText").textContent = config.brand.en;
  $("#brandFoot").textContent = config.brand.en;
  $("#avatar").src = config.profilePhoto;

  // skills
  const skillsList = document.getElementById("skillsList");
  const skillsListAr = document.getElementById("skillsListAr");
  config.skills.en.forEach(s => { const li=document.createElement("li"); li.className="tag"; li.textContent=s; skillsList.appendChild(li); });
  config.skills.ar.forEach(s => { const li=document.createElement("li"); li.className="tag"; li.textContent=s; skillsListAr.appendChild(li); });

  // experience
  const exp = document.getElementById("expTimeline");
  const expAr = document.getElementById("expTimelineAr");
  const mk = o => { const d=document.createElement("div"); d.className="entry"; d.innerHTML = `<div class="what">${o.what}</div><div class="where">${o.where}</div><div class="when">${o.when}</div>`; return d; };
  config.experience.en.forEach(x => exp.appendChild(mk(x)));
  config.experience.ar.forEach(x => { const d=mk(x); d.dir="rtl"; expAr.appendChild(d); });

  // projects
  const pr = document.getElementById("projectsGrid"), prAr = document.getElementById("projectsGridAr");
  const mkCard = p => { const a=document.createElement("a"); a.href=p.link||"#"; a.className="entry"; a.innerHTML=`<div class="what">${p.title}</div><div class="where">${p.blurb}</div>`; return a; };
  config.projects.en.forEach(p => pr.appendChild(mkCard(p)));
  config.projects.ar.forEach(p => { const c = mkCard(p); c.dir="rtl"; prAr.appendChild(c); });

  // education
  const ed = document.getElementById("eduList"), edAr = document.getElementById("eduListAr");
  const mkEdu = e => { const d=document.createElement("div"); d.className="entry"; d.innerHTML=`<div class="what">${e.degree}</div><div class="where">${e.school}</div><div class="when">${e.meta}</div>`; return d; };
  config.education.en.forEach(e => ed.appendChild(mkEdu(e)));
  config.education.ar.forEach(e => { const d=mkEdu(e); d.dir="rtl"; edAr.appendChild(d); });

  // certs
  const cert = document.getElementById("certList"), certAr = document.getElementById("certListAr");
  config.certs.en.forEach(c => { const li=document.createElement("li"); li.textContent=c; cert.appendChild(li); });
  config.certs.ar.forEach(c => { const li=document.createElement("li"); li.textContent=c; certAr.appendChild(li); });

  // affiliations
  const af = document.getElementById("affList"), afAr = document.getElementById("affListAr");
  config.affiliations.en.forEach(a => { const li=document.createElement("li"); li.textContent=a; af.appendChild(li); });
  config.affiliations.ar.forEach(a => { const li=document.createElement("li"); li.textContent=a; afAr.appendChild(li); });

  // languages
  const ln = document.getElementById("langList"), lnAr = document.getElementById("langListAr");
  config.languages.en.forEach(l => { const li=document.createElement("li"); li.textContent=l; ln.appendChild(li); });
  config.languages.ar.forEach(l => { const li=document.createElement("li"); li.textContent=l; lnAr.appendChild(li); });

  // contact
  document.getElementById("linkedinLink").href = config.contact.linkedin;
  document.getElementById("linkedinLinkAr").href = config.contact.linkedin;
  document.getElementById("whatsappLink").href = config.contact.whatsapp;
  document.getElementById("whatsappLinkAr").href = config.contact.whatsapp;
  const mailto = "mailto:"+config.contact.email;
  document.getElementById("emailLink").href = mailto;
  document.getElementById("emailLinkAr").href = mailto;
  document.getElementById("emailValue").textContent = config.contact.email;
  document.getElementById("emailValueAr").textContent = config.contact.email;

  // CV
  document.getElementById("downloadCV").addEventListener("click", ()=>{
    const a=document.createElement("a"); a.href = config.cvFile; a.download = config.cvFile; a.click();
  });

  // Year
  document.getElementById("year").textContent = new Date().getFullYear();

  setLang(config.defaultLang);
}

document.getElementById("langToggle").addEventListener("click", ()=>{
  const now = document.documentElement.lang === "ar" ? "en" : "ar";
  setLang(now);
});

window.addEventListener("DOMContentLoaded", populate);
