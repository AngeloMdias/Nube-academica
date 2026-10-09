const U = window.NAUtils;
const PROTOTYPE_VERSION = "80-real-11-de-14";

const DEMO_USERS = [
  { id: 1, name: "José Ángel Pineda", email: "estudiante@unanleon.edu.ni", password: "Demo123!", role: "student", active: true, last: "Hoy, 09:42" },
  { id: 2, name: "María López", email: "docente@unanleon.edu.ni", password: "Demo123!", role: "teacher", active: true, last: "Ayer, 15:18" },
  { id: 3, name: "Carlos Méndez", email: "admin@unanleon.edu.ni", password: "Demo123!", role: "admin", active: true, last: "Hoy, 10:05" },
  { id: 4, name: "Ana Castillo", email: "ana.castillo@unanleon.edu.ni", password: "Demo123!", role: "student", active: true, last: "28 ago., 11:20" },
  { id: 5, name: "Roberto Pérez", email: "roberto.perez@unanleon.edu.ni", password: "Demo123!", role: "teacher", active: false, last: "18 ago., 08:11" }
];

const DEFAULT_RECORDS = [
  { id: 101, code: "ISI-501", subject: "Proyecto Integrador II", teacher: "William Martínez", period: "2026-II", credits: 4, status: "Publicado" },
  { id: 102, code: "ISI-503", subject: "Patrones de Diseño", teacher: "María López", period: "2026-II", credits: 4, status: "Publicado" },
  { id: 103, code: "ISI-505", subject: "Administración de Redes", teacher: "Carlos Duarte", period: "2026-II", credits: 4, status: "Publicado" },
  { id: 104, code: "ISI-507", subject: "Auditoría de Sistemas", teacher: "Lucía Gómez", period: "2026-II", credits: 4, status: "Borrador" },
  { id: 105, code: "ISI-509", subject: "Aplicaciones Web", teacher: "Anthony Hernández", period: "2026-II", credits: 4, status: "Publicado" },
  { id: 106, code: "ISI-402", subject: "Bases de Datos II", teacher: "Jorge Ruiz", period: "2026-I", credits: 4, status: "Publicado" },
  { id: 107, code: "ISI-404", subject: "Ingeniería de Software", teacher: "Marta Flores", period: "2026-I", credits: 4, status: "Publicado" }
];

const ACADEMIC_DATA = {
  1: [
    { code: "ISI-501", subject: "Proyecto Integrador II", schedule: "Lun · 08:00", period: "2026-II", credits: 4, grade: 92, status: "En curso" },
    { code: "ISI-503", subject: "Patrones de Diseño", schedule: "Mar · 10:00", period: "2026-II", credits: 4, grade: 88, status: "En curso" },
    { code: "ISI-505", subject: "Administración de Redes", schedule: "Mié · 13:00", period: "2026-II", credits: 4, grade: 86, status: "En curso" },
    { code: "ISI-507", subject: "Auditoría de Sistemas", schedule: "Jue · 08:00", period: "2026-II", credits: 4, grade: 90, status: "En curso" },
    { code: "ISI-509", subject: "Aplicaciones Web", schedule: "Vie · 10:00", period: "2026-II", credits: 4, grade: 86, status: "En curso" },
    { code: "ISI-402", subject: "Bases de Datos II", schedule: "Lun · 10:00", period: "2026-I", credits: 4, grade: 91, status: "Aprobado" },
    { code: "ISI-404", subject: "Ingeniería de Software", schedule: "Mar · 13:00", period: "2026-I", credits: 4, grade: 89, status: "Aprobado" },
    { code: "ISI-406", subject: "Seguridad Informática", schedule: "Jue · 08:00", period: "2026-I", credits: 4, grade: 87, status: "Aprobado" },
    { code: "ISI-408", subject: "Sistemas Distribuidos", schedule: "Vie · 10:00", period: "2026-I", credits: 4, grade: 90, status: "Aprobado" }
  ],
  4: [
    { code: "ISI-501", subject: "Proyecto Integrador II", schedule: "Lun · 08:00", period: "2026-II", credits: 4, grade: 84, status: "En curso" },
    { code: "ISI-503", subject: "Patrones de Diseño", schedule: "Mar · 10:00", period: "2026-II", credits: 4, grade: 93, status: "En curso" },
    { code: "ISI-505", subject: "Administración de Redes", schedule: "Mié · 13:00", period: "2026-II", credits: 4, grade: 89, status: "En curso" },
    { code: "ISI-507", subject: "Auditoría de Sistemas", schedule: "Jue · 08:00", period: "2026-II", credits: 4, grade: 87, status: "En curso" },
    { code: "ISI-509", subject: "Aplicaciones Web", schedule: "Vie · 10:00", period: "2026-II", credits: 4, grade: 95, status: "En curso" },
    { code: "ISI-402", subject: "Bases de Datos II", schedule: "Lun · 10:00", period: "2026-I", credits: 4, grade: 88, status: "Aprobado" },
    { code: "ISI-404", subject: "Ingeniería de Software", schedule: "Mar · 13:00", period: "2026-I", credits: 4, grade: 92, status: "Aprobado" }
  ]
};

const DEFAULT_DOCUMENTS = [
  { id: 201, name: "Calendario académico 2026-II.pdf", type: "PDF", category: "Calendario", owner: "Secretaría Académica", date: "28/08/2026", size: "22 KB", sample: true, path: "sample-files/Calendario_academico_2026-II.pdf" },
  { id: 202, name: "Reglamento académico estudiantil.pdf", type: "PDF", category: "Normativa", owner: "Registro Académico", date: "22/08/2026", size: "24 KB", sample: true, path: "sample-files/Reglamento_academico_estudiantil.pdf" },
  { id: 203, name: "Formato de solicitud.docx", type: "DOCX", category: "Formatos", owner: "Secretaría Académica", date: "18/08/2026", size: "18 KB", sample: true, path: "sample-files/Formato_de_solicitud.docx" },
  { id: 204, name: "Guía de matrícula 2026.pdf", type: "PDF", category: "Académico", owner: "Facultad de Ciencias y Tecnología", date: "12/08/2026", size: "23 KB", sample: true, path: "sample-files/Guia_de_matricula_2026.pdf" },
  { id: 205, name: "Plan de estudios ISI.xlsx", type: "XLSX", category: "Académico", owner: "Departamento de Sistemas", date: "08/08/2026", size: "12 KB", sample: true, path: "sample-files/Plan_de_estudios_ISI.xlsx" }
];

const DEFAULT_NOTIFICATIONS = [
  { id: 701, eventKey: "student-1-calendar", recipientUserId: 1, subject: "Calendario académico actualizado", body: "Ya está disponible el calendario del segundo semestre 2026.", date: "22/09/2026 09:15", linkView: "documents", read: false },
  { id: 702, eventKey: "student-1-grade", recipientUserId: 1, subject: "Información académica disponible", body: "Se actualizaron los datos visibles del período 2026-II.", date: "21/09/2026 16:40", linkView: "academic", read: false },
  { id: 703, eventKey: "teacher-2-docs", recipientUserId: 2, subject: "Repositorio disponible", body: "Puedes cargar archivos PDF, DOCX y XLSX para la demostración.", date: "22/09/2026 08:20", linkView: "documents", read: false },
  { id: 704, eventKey: "admin-3-report", recipientUserId: 3, subject: "Reporte listo para exportar", body: "La vista de reportes permite filtrar por período y exportar CSV.", date: "22/09/2026 10:05", linkView: "reports", read: false },
  { id: 705, eventKey: "admin-3-audit", recipientUserId: 3, subject: "Bitácora habilitada", body: "Los accesos y operaciones críticas quedan registrados en modo de solo lectura.", date: "22/09/2026 10:07", linkView: "audit", read: true },
  { id: 706, eventKey: "student-4-calendar", recipientUserId: 4, subject: "Calendario académico actualizado", body: "Ya está disponible el calendario del segundo semestre 2026.", date: "22/09/2026 09:15", linkView: "documents", read: false }
];


const DEFAULT_AGENDA = [
  {id:901, ownerRole:"student", ownerUserId:1, title:"Entregar avance del artículo", subject:"Proyecto Integrador II", date:"2026-10-09", type:"Tarea", note:"Revisar rúbrica y referencias", done:false},
  {id:902, ownerRole:"student", ownerUserId:1, title:"Repasar patrones estructurales", subject:"Patrones de Diseño", date:"2026-10-12", type:"Examen", note:"Decorador y Flyweight", done:false},
  {id:903, ownerRole:"teacher", ownerUserId:2, title:"Publicar guía de práctica", subject:"Patrones de Diseño", date:"2026-10-10", type:"Recordatorio", note:"Subir material al repositorio", done:false},
  {id:904, ownerRole:"teacher", ownerUserId:2, title:"Revisar entregas del grupo", subject:"Patrones de Diseño", date:"2026-10-13", type:"Tarea", note:"Registrar observaciones", done:false}
];

const DEFAULT_AUDIT = [
  { id: 801, date: "22/09/2026 10:07", actor: "admin@unanleon.edu.ni", action: "Consulta de bitácora", result: "Correcto", origin: "Navegador demo" },
  { id: 802, date: "22/09/2026 10:05", actor: "admin@unanleon.edu.ni", action: "Generación de reporte", result: "Correcto", origin: "Navegador demo" },
  { id: 803, date: "22/09/2026 09:42", actor: "estudiante@unanleon.edu.ni", action: "Consulta académica 2026-II", result: "Correcto", origin: "Navegador demo" },
  { id: 804, date: "22/09/2026 09:21", actor: "desconocido@unanleon.edu.ni", action: "Intento de inicio de sesión", result: "Denegado", origin: "Navegador demo" }
];

const TITLES = {
  dashboard: ["Panel", "Resumen"], academic: ["Servicios académicos", "Información académica"],
  records: ["Administración", "Registros académicos"], documents: ["Recursos", "Repositorio documental"],
  search: ["RF-06", "Búsqueda integrada"], notifications: ["RF-07", "Notificaciones"],
  reports: ["RF-08", "Reportes académicos"], audit: ["RF-09", "Bitácora"],
  users: ["Seguridad", "Usuarios y roles"], agenda: ["Organización", "Agenda académica"]
};
const ROLE_LABELS = { student: "Estudiante", teacher: "Docente", admin: "Administrador académico" };

if (localStorage.getItem("na_version") !== PROTOTYPE_VERSION) {
  ["na_users", "na_records", "na_documents", "na_notifications", "na_audit", "na_agenda"].forEach(k => localStorage.removeItem(k));
  localStorage.setItem("na_version", PROTOTYPE_VERSION);
}

let currentUser = null;
let users = loadData("na_users", DEMO_USERS);
let records = loadData("na_records", DEFAULT_RECORDS);
let documents = loadData("na_documents", DEFAULT_DOCUMENTS);
let notifications = loadData("na_notifications", DEFAULT_NOTIFICATIONS);
let audit = loadData("na_audit", DEFAULT_AUDIT);
let agenda = loadData("na_agenda", DEFAULT_AGENDA);

function loadData(key, fallback) {
  try { return JSON.parse(localStorage.getItem(key)) || structuredClone(fallback); }
  catch { return structuredClone(fallback); }
}
function saveData(key, data) { localStorage.setItem(key, JSON.stringify(data)); }
function el(id) { return document.getElementById(id); }
function escapeHtml(value = "") { return String(value).replace(/[&<>'"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"}[c])); }
function initials(name) { return name.split(" ").slice(0,2).map(x => x[0]).join("").toUpperCase(); }
function showToast(message) { const t = el("toast"); t.textContent = message; t.hidden = false; clearTimeout(showToast.timer); showToast.timer = setTimeout(() => t.hidden = true, 2600); }
function nowLabel() { return new Date().toLocaleString("es-NI", { dateStyle: "short", timeStyle: "short" }); }

function addAudit(actor, action, result = "Correcto", origin = "Navegador demo") {
  audit.unshift({ id: Date.now(), date: nowLabel(), actor: actor || "Identidad no reconocida", action, result, origin });
  audit = audit.slice(0, 120);
  saveData("na_audit", audit);
}

function login(email, password) {
  const normalizedEmail = email.trim().toLowerCase();
  const match = users.find(u => u.email.toLowerCase() === normalizedEmail && u.password === password);
  if (!match) {
    addAudit(normalizedEmail || "Identidad vacía", "Intento de inicio de sesión", "Denegado");
    return showLoginError("Las credenciales no coinciden con una cuenta de demostración.");
  }
  if (!match.active) {
    addAudit(match.email, "Intento de inicio de sesión", "Denegado");
    return showLoginError("Esta cuenta se encuentra inactiva. Contacta al administrador.");
  }
  currentUser = match;
  addAudit(currentUser.email, "Inicio de sesión", "Correcto");
  el("login-error").hidden = true;
  el("login-view").hidden = true;
  el("app-view").hidden = false;
  configureSession();
}

function showLoginError(message) { el("login-error").textContent = message; el("login-error").hidden = false; }

function configureSession() {
  el("user-name").textContent = currentUser.name;
  el("user-role").textContent = ROLE_LABELS[currentUser.role];
  el("user-initials").textContent = initials(currentUser.name);
  document.querySelectorAll(".nav-item").forEach(btn => {
    btn.hidden = !btn.dataset.roles.split(",").includes(currentUser.role);
  });
  showView("dashboard");
  renderAll();
}

function showView(view) {
  const nav = document.querySelector(`.nav-item[data-view="${view}"]`);
  if (nav && nav.hidden) return;
  document.querySelectorAll(".view").forEach(v => { v.hidden = true; v.classList.remove("active-view"); });
  document.querySelectorAll(".nav-item").forEach(v => v.classList.remove("active"));
  const target = el(`view-${view}`);
  if (!target) return;
  target.hidden = false; target.classList.add("active-view");
  nav?.classList.add("active");
  const title = TITLES[view] || ["Panel", "Nube Académica"];
  el("page-kicker").textContent = title[0]; el("page-title").textContent = title[1];
  if (view === "academic") { renderAcademic(); addAudit(currentUser.email, `Consulta académica ${el("period-filter").value}`); }
  if (view === "agenda") renderAgenda();
  if (view === "search") renderGlobalSearch();
  if (view === "notifications") renderNotifications();
  if (view === "reports") { renderReports(); addAudit(currentUser.email, "Consulta de reportes"); }
  if (view === "audit") renderAudit();
}

function renderAll() {
  renderDashboard();
  if (currentUser.role === "student") renderAcademic();
  if (currentUser.role === "admin") { renderRecords(); renderUsers(); renderReports(); renderAudit(); }
  renderDocuments(); if (["student","teacher"].includes(currentUser.role)) renderAgenda(); renderGlobalSearch(); renderNotifications(); updateNotificationBadge();
}

function renderDashboard() {
  const stats = [];
  if (currentUser.role === "student") {
    const rows = U.filterAcademicByStudent(ACADEMIC_DATA, currentUser.id, "2026-II");
    const avg = rows.length ? (rows.reduce((s,r)=>s+r.grade,0)/rows.length).toFixed(1) : "—";
    stats.push(["Promedio actual", avg, "Período 2026-II"], ["Asignaturas", rows.length, "Datos propios"], ["Documentos", documents.length, "Repositorio autorizado"], ["Avisos sin leer", unreadNotifications(), "RF-07"]);
    el("welcome-title").textContent = "Tu información académica, en un solo lugar";
    el("welcome-text").textContent = "Consulta tus datos separados por identidad, documentos y notificaciones.";
  } else if (currentUser.role === "teacher") {
    stats.push(["Documentos", documents.length, "Repositorio"], ["Avisos sin leer", unreadNotifications(), "RF-07"], ["Formatos", documents.filter(d=>d.category==="Formatos").length, "Disponibles"], ["Cobertura", "11/14", "78,6 % ≈ 80 %"]);
    el("welcome-title").textContent = "Recursos académicos para el trabajo docente";
    el("welcome-text").textContent = "Carga documentos autorizados, localízalos y revisa tus avisos.";
  } else {
    stats.push(["Registros", records.length, "Gestión académica"], ["Usuarios", users.length, "Control de roles"], ["Documentos", documents.length, "Repositorio"], ["Eventos", audit.length, "Bitácora"]);
    el("welcome-title").textContent = "Control académico con trazabilidad";
    el("welcome-text").textContent = "Gestiona registros, usuarios, reportes, búsqueda y auditoría desde un mismo panel.";
  }
  el("dashboard-stats").innerHTML = stats.map(s=>`<article class="stat-card"><span>${escapeHtml(s[0])}</span><strong>${escapeHtml(s[1])}</strong><small>${escapeHtml(s[2])}</small></article>`).join("");
  const events = audit.filter(a => currentUser.role === "admin" || a.actor === currentUser.email).slice(0,5);
  el("activity-list").innerHTML = events.length ? events.map(a=>`<li><span class="activity-icon">${a.result === "Correcto" ? "✓" : "!"}</span><span><strong>${escapeHtml(a.action)}</strong><small>${escapeHtml(a.actor)}</small></span><span class="activity-time">${escapeHtml(a.date)}</span></li>`).join("") : `<li><span class="muted">Sin actividad reciente.</span></li>`;
}

function renderAcademic() {
  const period = el("period-filter").value;
  const rows = U.filterAcademicByStudent(ACADEMIC_DATA, currentUser.id, period);
  el("academic-table").innerHTML = rows.length ? rows.map(r => `<tr><td><strong>${r.code}</strong></td><td>${escapeHtml(r.subject)}</td><td>${escapeHtml(r.schedule)}</td><td>${r.credits}</td><td><strong>${r.grade}</strong></td><td><span class="badge">${r.status}</span></td></tr>`).join("") : `<tr><td colspan="6" class="muted">No existen registros para este estudiante en el período seleccionado.</td></tr>`;
  el("average-stat").textContent = rows.length ? (rows.reduce((s,r)=>s+r.grade,0)/rows.length).toFixed(1) : "—";
  el("subjects-stat").textContent = rows.length;
  el("credits-stat").textContent = rows.reduce((s,r)=>s+r.credits,0);
}

function renderRecords() {
  const visible = U.filterRecords(records, el("record-search").value, el("record-period").value);
  el("record-count").textContent = `${visible.length} registros`;
  el("records-table").innerHTML = visible.length ? visible.map(r => `<tr><td><strong>${escapeHtml(r.code)}</strong></td><td>${escapeHtml(r.subject)}</td><td>${escapeHtml(r.teacher)}</td><td>${r.period}</td><td><span class="badge ${r.status === "Borrador" ? "draft" : r.status === "Inactivo" ? "inactive" : ""}">${r.status}</span></td><td class="right"><span class="table-actions"><button class="table-button" data-edit-record="${r.id}">Editar</button><button class="table-button danger" data-delete-record="${r.id}">Eliminar</button></span></td></tr>`).join("") : `<tr><td colspan="6" class="muted">No se encontraron registros con los filtros aplicados.</td></tr>`;
}

function openRecord(id = null) {
  el("record-form").reset(); el("record-error").hidden = true; el("record-id").value = "";
  el("record-dialog-title").textContent = id ? "Editar registro" : "Nuevo registro";
  if (id) { const r = records.find(x=>x.id===id); el("record-id").value=r.id; el("record-code").value=r.code; el("record-subject").value=r.subject; el("record-teacher").value=r.teacher; el("record-form-period").value=r.period; el("record-credits").value=r.credits; el("record-status").value=r.status; }
  el("record-dialog").showModal();
}

function saveRecord(event) {
  if (event.submitter?.value === "cancel") return;
  event.preventDefault();
  const candidate = { id: Number(el("record-id").value) || Date.now(), code: el("record-code").value.trim().toUpperCase(), subject: el("record-subject").value.trim(), teacher: el("record-teacher").value.trim(), period: el("record-form-period").value, credits: Number(el("record-credits").value), status: el("record-status").value };
  if (!candidate.code || !candidate.subject || !candidate.teacher) { el("record-error").textContent = "Completa los campos obligatorios."; el("record-error").hidden = false; return; }
  if (records.some(r => r.code === candidate.code && r.period === candidate.period && r.id !== candidate.id)) { el("record-error").textContent = "Ya existe ese código en el período seleccionado."; el("record-error").hidden = false; return; }
  const index = records.findIndex(r=>r.id===candidate.id); if (index >= 0) records[index] = candidate; else records.unshift(candidate);
  saveData("na_records", records); addAudit(currentUser.email, index >= 0 ? `Edición de registro ${candidate.code}` : `Creación de registro ${candidate.code}`);
  el("record-dialog").close(); renderRecords(); renderDashboard(); renderGlobalSearch(); renderReports(); showToast(index >= 0 ? "Registro actualizado correctamente." : "Registro creado correctamente.");
}

function deleteRecord(id) {
  const found = records.find(r=>r.id===id); if (!found || !confirm("¿Eliminar este registro del prototipo?")) return;
  records = records.filter(r=>r.id!==id); saveData("na_records",records); addAudit(currentUser.email, `Eliminación de registro ${found.code}`);
  renderRecords(); renderDashboard(); renderGlobalSearch(); renderReports(); showToast("Registro eliminado.");
}

function renderDocuments() {
  const visible = U.filterDocuments(documents, el("document-search").value, el("document-category").value);
  el("document-count").textContent = `${visible.length} documentos`;
  el("upload-document").hidden = currentUser.role === "student";
  el("documents-grid").innerHTML = visible.length ? visible.map(d => `<article class="document-card"><div class="document-top"><span class="file-type">${d.type}</span><span class="badge">${escapeHtml(d.category)}</span></div><h4>${escapeHtml(d.name)}</h4><p class="document-meta">${escapeHtml(d.owner)}<br>${escapeHtml(d.date)} · ${escapeHtml(d.size)}</p><div class="document-actions"><span class="muted">${d.sample ? "Archivo incluido" : "Archivo cargado"}</span><button class="download-button" data-download="${d.id}">Descargar</button></div></article>`).join("") : `<p class="muted">No se encontraron documentos con los filtros aplicados.</p>`;
}

function openDocumentDb() {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open("nube-academica-files", 1);
    req.onupgradeneeded = () => { if (!req.result.objectStoreNames.contains("files")) req.result.createObjectStore("files"); };
    req.onsuccess = () => resolve(req.result); req.onerror = () => reject(req.error);
  });
}
async function saveBlob(id, file) { const db = await openDocumentDb(); return new Promise((resolve,reject)=>{ const tx=db.transaction("files","readwrite"); tx.objectStore("files").put(file,String(id)); tx.oncomplete=()=>{db.close();resolve();}; tx.onerror=()=>reject(tx.error); }); }
async function getBlob(id) { const db = await openDocumentDb(); return new Promise((resolve,reject)=>{ const tx=db.transaction("files","readonly"); const req=tx.objectStore("files").get(String(id)); req.onsuccess=()=>{const v=req.result;db.close();resolve(v);}; req.onerror=()=>reject(req.error); }); }
async function clearBlobs() { const db=await openDocumentDb(); return new Promise((resolve,reject)=>{ const tx=db.transaction("files","readwrite"); tx.objectStore("files").clear(); tx.oncomplete=()=>{db.close();resolve();}; tx.onerror=()=>reject(tx.error); }); }

async function saveDocument(event) {
  if (event.submitter?.value === "cancel") return;
  event.preventDefault(); const file = el("document-file").files[0];
  if (!file) return documentError("Selecciona un archivo.");
  const ext = file.name.split(".").pop().toLowerCase();
  if (!["pdf","docx","xlsx"].includes(ext)) return documentError("Formato no permitido. Utiliza PDF, DOCX o XLSX.");
  if (file.size > 10*1024*1024) return documentError("El archivo supera el máximo de 10 MB.");
  const id = Date.now();
  try { await saveBlob(id, file); }
  catch { return documentError("No fue posible almacenar el archivo binario en el navegador."); }
  const meta = { id, name: file.name, type: ext.toUpperCase(), category: el("document-form-category").value, owner: currentUser.name, date: new Date().toLocaleDateString("es-NI"), size: file.size < 1024*1024 ? `${Math.max(1,Math.round(file.size/1024))} KB` : `${(file.size/1024/1024).toFixed(1)} MB`, sample: false };
  documents.unshift(meta); saveData("na_documents",documents); addAudit(currentUser.email, `Carga de documento ${file.name}`);
  el("document-form").reset(); el("document-dialog").close(); renderDocuments(); renderDashboard(); renderGlobalSearch(); showToast("Archivo y metadatos guardados en el navegador.");
}
function documentError(message) { el("document-error").textContent=message; el("document-error").hidden=false; }
async function downloadDocument(id) {
  const d=documents.find(x=>Number(x.id)===Number(id)); if (!d) return;
  if (d.sample && d.path) {
    const a=document.createElement("a"); a.href=d.path; a.download=d.name; document.body.appendChild(a); a.click(); a.remove();
  } else {
    const blob = await getBlob(d.id);
    if (!blob) return showToast("El archivo binario no está disponible en este navegador.");
    const a=document.createElement("a"); a.href=URL.createObjectURL(blob); a.download=d.name; document.body.appendChild(a); a.click(); a.remove(); setTimeout(()=>URL.revokeObjectURL(a.href),1000);
  }
  addAudit(currentUser.email, `Descarga de documento ${d.name}`); showToast("Descarga real iniciada.");
}

function renderGlobalSearch() {
  if (!currentUser) return;
  const results = U.buildGlobalSearch({ role: currentUser.role, userId: currentUser.id, query: el("global-search").value, type: el("global-type").value, period: el("global-period").value, records, documents, users, academicByStudent: ACADEMIC_DATA });
  el("global-result-count").textContent = `${results.length} resultados`;
  const labels = { academic:"Académico", documents:"Documento", records:"Registro", users:"Usuario" };
  el("global-results").innerHTML = results.length ? results.map(r=>`<article class="search-result"><span class="result-type">${labels[r.type]}</span><span><strong>${escapeHtml(r.title)}</strong><small>${escapeHtml(r.detail)}</small></span><span class="result-action">Acceso autorizado</span></article>`).join("") : `<p class="muted">No hay coincidencias autorizadas con los filtros actuales.</p>`;
}

function unreadNotifications() { return U.notificationsForUser(notifications, currentUser.id, "unread").length; }
function updateNotificationBadge() {
  if (!currentUser) return;
  const count = unreadNotifications();
  el("nav-notification-count").hidden = count === 0; el("nav-notification-count").textContent = count;
  el("top-notification").hidden = count === 0; el("top-notification").textContent = `${count} aviso${count===1?"":"s"} sin leer`;
}
function renderNotifications() {
  const items = U.notificationsForUser(notifications, currentUser.id, el("notification-filter").value);
  el("notification-count").textContent = `${items.length} avisos`;
  el("notifications-list").innerHTML = items.length ? items.map(n=>`<article class="notification-card ${n.read?"":"unread"}"><span class="read-dot"></span><div><h4>${escapeHtml(n.subject)}</h4><p>${escapeHtml(n.body)}</p><time>${escapeHtml(n.date)}</time></div><div class="notification-actions">${n.linkView?`<button data-notification-open="${n.id}" data-view-target="${n.linkView}">Abrir</button>`:""}${n.read?"":`<button data-notification-read="${n.id}">Marcar leída</button>`}</div></article>`).join("") : `<p class="muted">No hay notificaciones con este filtro.</p>`;
  updateNotificationBadge();
}
function markNotification(id) { notifications=U.markNotificationRead(notifications,id,currentUser.id); saveData("na_notifications",notifications); renderNotifications(); }
function markAllNotifications() { notifications=U.markAllNotificationsRead(notifications,currentUser.id); saveData("na_notifications",notifications); renderNotifications(); showToast("Tus notificaciones fueron marcadas como leídas."); }

function agendaVisible() {
  const filter=el("agenda-filter")?.value||"all";
  return agenda.filter(a => (a.ownerUserId===currentUser.id || a.ownerRole===currentUser.role) && (filter==="all" || (filter==="done"?a.done:!a.done))).sort((a,b)=>a.date.localeCompare(b.date));
}
function renderAgenda() {
  if(!currentUser || !["student","teacher"].includes(currentUser.role)) return;
  const rows=agendaVisible(), all=agenda.filter(a=>a.ownerUserId===currentUser.id || a.ownerRole===currentUser.role);
  const pending=all.filter(a=>!a.done).length, done=all.filter(a=>a.done).length;
  el("agenda-heading").textContent=currentUser.role==="teacher"?"Planificación y seguimiento docente":"Tareas, evaluaciones y recordatorios";
  el("agenda-count").textContent=`${rows.length} actividades`;
  el("agenda-stats").innerHTML=[["Pendientes",pending,"Por atender"],["Completadas",done,"Seguimiento"],["Próxima fecha",rows.find(a=>!a.done)?.date||"—","Agenda personal"]].map(x=>`<article class="stat-card"><span>${x[0]}</span><strong>${x[1]}</strong><small>${x[2]}</small></article>`).join("");
  el("agenda-list").innerHTML=rows.length?rows.map(a=>`<article class="agenda-card ${a.done?"done":""}"><div><span class="badge">${escapeHtml(a.type)}</span><h4>${escapeHtml(a.title)}</h4><p><strong>${escapeHtml(a.subject)}</strong> · ${escapeHtml(a.date)}</p><small>${escapeHtml(a.note||"Sin nota adicional")}</small></div><button class="table-button" data-agenda-toggle="${a.id}">${a.done?"Reabrir":"Completar"}</button></article>`).join(""):`<p class="muted">No hay actividades con este filtro.</p>`;
}
function saveAgenda(event){ if(event.submitter?.value==="cancel")return; event.preventDefault(); const item={id:Date.now(),ownerRole:currentUser.role,ownerUserId:currentUser.id,title:el("agenda-title").value.trim(),subject:el("agenda-subject").value.trim(),date:el("agenda-date").value,type:el("agenda-type").value,note:el("agenda-note").value.trim(),done:false}; if(!item.title||!item.subject||!item.date)return; agenda.push(item);saveData("na_agenda",agenda);addAudit(currentUser.email,`Creación de actividad: ${item.title}`);el("agenda-dialog").close();el("agenda-form").reset();renderAgenda();renderDashboard();showToast("Actividad agregada a tu agenda.");}
function toggleAgenda(id){const a=agenda.find(x=>x.id===id);if(!a)return;a.done=!a.done;saveData("na_agenda",agenda);addAudit(currentUser.email,`${a.done?"Completó":"Reabrió"} actividad: ${a.title}`);renderAgenda();renderDashboard();}
function exportBackup(){const payload={format:"NubeAcademicaBackup-v1",createdAt:new Date().toISOString(),users,records,documents,notifications,audit,agenda};const blob=new Blob([JSON.stringify(payload,null,2)],{type:"application/json"});const a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download=`nube-academica-respaldo-${new Date().toISOString().slice(0,10)}.json`;a.click();setTimeout(()=>URL.revokeObjectURL(a.href),1000);addAudit(currentUser.email,"Exportación de respaldo local");showToast("Respaldo exportado correctamente.");}
async function importBackup(event){const file=event.target.files[0];if(!file)return;try{const data=JSON.parse(await file.text());if(data.format!=="NubeAcademicaBackup-v1"||![data.users,data.records,data.documents,data.notifications,data.audit,data.agenda].every(Array.isArray))throw new Error();users=data.users;records=data.records;documents=data.documents;notifications=data.notifications;audit=data.audit;agenda=data.agenda;saveData("na_users",users);saveData("na_records",records);saveData("na_documents",documents);saveData("na_notifications",notifications);saveData("na_audit",audit);saveData("na_agenda",agenda);addAudit(currentUser.email,"Restauración de respaldo local");renderAll();showToast("Respaldo restaurado y validado.");}catch{showToast("El archivo no es un respaldo válido de Nube Académica.");}finally{event.target.value="";}}

function renderReports() {
  if (!currentUser || currentUser.role !== "admin") return;
  const report = U.buildReport(records, el("report-period").value);
  el("report-stats").innerHTML = [
    ["Registros", report.totals.total, "Filtro actual"], ["Créditos", report.totals.credits, "Total"], ["Publicados", report.totals.published, "Estado"], ["Borradores", report.totals.draft, "Estado"]
  ].map(s=>`<article class="stat-card"><span>${s[0]}</span><strong>${s[1]}</strong><small>${s[2]}</small></article>`).join("");
  el("report-count").textContent=`${report.rows.length} filas`;
  el("report-table").innerHTML = report.rows.length ? report.rows.map(r=>`<tr><td><strong>${escapeHtml(r.code)}</strong></td><td>${escapeHtml(r.subject)}</td><td>${escapeHtml(r.teacher)}</td><td>${r.period}</td><td>${r.credits}</td><td>${r.status}</td></tr>`).join("") : `<tr><td colspan="6" class="muted">Sin datos para el filtro.</td></tr>`;
}
function exportReport() {
  const period=el("report-period").value; const report=U.buildReport(records,period); const csv=U.recordsToCsv(report.rows);
  const blob=new Blob(["\uFEFF"+csv],{type:"text/csv;charset=utf-8"}); const a=document.createElement("a"); a.href=URL.createObjectURL(blob); a.download=`reporte-academico-${period}.csv`; a.click(); setTimeout(()=>URL.revokeObjectURL(a.href),1000);
  addAudit(currentUser.email, `Exportación CSV de reporte (${period})`); renderAudit(); showToast("Reporte CSV generado con los filtros visibles.");
}

function renderAudit() {
  if (!currentUser || currentUser.role !== "admin") return;
  const rows=U.filterAudit(audit,el("audit-search").value,el("audit-result").value); el("audit-count").textContent=`${rows.length} eventos`;
  el("audit-table").innerHTML=rows.length?rows.map(a=>`<tr><td>${escapeHtml(a.date)}</td><td>${escapeHtml(a.actor)}</td><td>${escapeHtml(a.action)}</td><td><span class="badge ${a.result==="Denegado"?"denied":""}">${a.result}</span></td><td>${escapeHtml(a.origin)}</td></tr>`).join(""):`<tr><td colspan="5" class="muted">No existen eventos con esos filtros.</td></tr>`;
}

function renderUsers() {
  const q=U.normalize(el("user-search").value); const visible=users.filter(u=>!q||[u.name,u.email].some(v=>U.normalize(v).includes(q)));
  el("user-count").textContent=`${visible.length} usuarios`;
  el("users-table").innerHTML=visible.map(u=>`<tr><td><strong>${escapeHtml(u.name)}</strong></td><td>${escapeHtml(u.email)}</td><td><select class="role-select" data-user-role="${u.id}" ${u.id===currentUser.id?"disabled":""}><option value="student" ${u.role==="student"?"selected":""}>Estudiante</option><option value="teacher" ${u.role==="teacher"?"selected":""}>Docente</option><option value="admin" ${u.role==="admin"?"selected":""}>Administrador académico</option></select></td><td><label class="switch-label"><input type="checkbox" data-user-active="${u.id}" ${u.active?"checked":""} ${u.id===currentUser.id?"disabled":""}> ${u.active?"Activo":"Inactivo"}</label></td><td>${escapeHtml(u.last)}</td></tr>`).join("");
}
function updateUser(id,key,value) { const u=users.find(x=>x.id===id); if(!u)return; u[key]=value; saveData("na_users",users); addAudit(currentUser.email, `Actualización de usuario ${u.email}`); renderUsers(); renderDashboard(); renderGlobalSearch(); showToast("Permisos del usuario actualizados."); }

async function resetDemo() {
  if(!confirm("¿Restablecer todos los datos de demostración?"))return;
  users=structuredClone(DEMO_USERS); records=structuredClone(DEFAULT_RECORDS); documents=structuredClone(DEFAULT_DOCUMENTS); notifications=structuredClone(DEFAULT_NOTIFICATIONS); audit=structuredClone(DEFAULT_AUDIT); agenda=structuredClone(DEFAULT_AGENDA);
  saveData("na_users",users);saveData("na_records",records);saveData("na_documents",documents);saveData("na_notifications",notifications);saveData("na_audit",audit);saveData("na_agenda",agenda); await clearBlobs().catch(()=>{});
  currentUser=users.find(u=>u.email===currentUser.email)||users[2]; configureSession(); showToast("Datos de demostración restablecidos.");
}

document.addEventListener("click", event => {
  const nav=event.target.closest(".nav-item"); if(nav) showView(nav.dataset.view);
  const demo=event.target.closest("[data-demo]"); if(demo){ const map={student:"estudiante@unanleon.edu.ni",teacher:"docente@unanleon.edu.ni",admin:"admin@unanleon.edu.ni"}; el("email").value=map[demo.dataset.demo]; el("password").value="Demo123!"; login(el("email").value,el("password").value); }
  const edit=event.target.closest("[data-edit-record]"); if(edit) openRecord(Number(edit.dataset.editRecord));
  const del=event.target.closest("[data-delete-record]"); if(del) deleteRecord(Number(del.dataset.deleteRecord));
  const download=event.target.closest("[data-download]"); if(download) downloadDocument(Number(download.dataset.download));
  const read=event.target.closest("[data-notification-read]"); if(read) markNotification(Number(read.dataset.notificationRead));
  const open=event.target.closest("[data-notification-open]"); if(open){ markNotification(Number(open.dataset.notificationOpen)); showView(open.dataset.viewTarget); }
  const ag=event.target.closest("[data-agenda-toggle]"); if(ag) toggleAgenda(Number(ag.dataset.agendaToggle));
});

el("login-form").addEventListener("submit", e=>{e.preventDefault();login(el("email").value,el("password").value);});
el("logout-button").addEventListener("click",()=>{if(currentUser)addAudit(currentUser.email,"Cierre de sesión");currentUser=null;el("app-view").hidden=true;el("login-view").hidden=false;el("login-form").reset();});
el("reset-button").addEventListener("click",resetDemo);
el("period-filter").addEventListener("change",()=>{renderAcademic();addAudit(currentUser.email,`Consulta académica ${el("period-filter").value}`);}); el("academic-print").addEventListener("click",()=>window.print());
el("record-search").addEventListener("input",renderRecords); el("record-period").addEventListener("change",renderRecords); el("new-record").addEventListener("click",()=>openRecord()); el("record-form").addEventListener("submit",saveRecord);
el("document-search").addEventListener("input",renderDocuments); el("document-category").addEventListener("change",renderDocuments); el("upload-document").addEventListener("click",()=>{el("document-error").hidden=true;el("document-dialog").showModal();}); el("document-form").addEventListener("submit",saveDocument);
el("global-search").addEventListener("input",renderGlobalSearch); el("global-type").addEventListener("change",renderGlobalSearch); el("global-period").addEventListener("change",renderGlobalSearch);
el("agenda-filter").addEventListener("change",renderAgenda); el("new-agenda-item").addEventListener("click",()=>el("agenda-dialog").showModal()); el("agenda-form").addEventListener("submit",saveAgenda); el("backup-export").addEventListener("click",exportBackup); el("backup-import").addEventListener("change",importBackup);
el("notification-filter").addEventListener("change",renderNotifications); el("mark-all-read").addEventListener("click",markAllNotifications);
el("report-period").addEventListener("change",renderReports); el("export-report").addEventListener("click",exportReport);
el("audit-search").addEventListener("input",renderAudit); el("audit-result").addEventListener("change",renderAudit);
el("user-search").addEventListener("input",renderUsers); el("users-table").addEventListener("change",e=>{if(e.target.matches("[data-user-role]"))updateUser(Number(e.target.dataset.userRole),"role",e.target.value);if(e.target.matches("[data-user-active]"))updateUser(Number(e.target.dataset.userActive),"active",e.target.checked);});

const params=new URLSearchParams(location.search); const demo=params.get("demo"); const requestedView=params.get("view");
if(demo){ const map={student:"estudiante@unanleon.edu.ni",teacher:"docente@unanleon.edu.ni",admin:"admin@unanleon.edu.ni",student2:"ana.castillo@unanleon.edu.ni"}; const account=users.find(u=>u.email===map[demo]); if(account){login(account.email,"Demo123!");if(requestedView)setTimeout(()=>showView(requestedView),30);} }
