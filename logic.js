(function (root, factory) {
  const api = factory();
  if (typeof module === "object" && module.exports) module.exports = api;
  if (root) root.NAUtils = api;
})(typeof globalThis !== "undefined" ? globalThis : this, function () {
  function normalize(value = "") {
    return String(value).normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();
  }

  function calcCoverage(implemented, total) {
    return total ? Number(((implemented / total) * 100).toFixed(1)) : 0;
  }

  function filterAcademicByStudent(academicByStudent, userId, period = "all") {
    const rows = (academicByStudent[String(userId)] || academicByStudent[userId] || []);
    return rows.filter(r => period === "all" || r.period === period);
  }

  function filterRecords(records, query = "", period = "all") {
    const q = normalize(query);
    return records.filter(r => {
      const periodOk = period === "all" || r.period === period;
      const textOk = !q || [r.code, r.subject, r.teacher, r.status].some(v => normalize(v).includes(q));
      return periodOk && textOk;
    });
  }

  function filterDocuments(documents, query = "", category = "all") {
    const q = normalize(query);
    return documents.filter(d => {
      const categoryOk = category === "all" || d.category === category;
      const textOk = !q || [d.name, d.category, d.owner, d.type].some(v => normalize(v).includes(q));
      return categoryOk && textOk;
    });
  }

  function notificationsForUser(notifications, userId, filter = "all") {
    return notifications
      .filter(n => Number(n.recipientUserId) === Number(userId))
      .filter(n => filter === "all" || (filter === "read" ? n.read : !n.read))
      .sort((a, b) => Number(b.id) - Number(a.id));
  }

  function markNotificationRead(notifications, id, userId) {
    return notifications.map(n => Number(n.id) === Number(id) && Number(n.recipientUserId) === Number(userId) ? { ...n, read: true } : n);
  }

  function markAllNotificationsRead(notifications, userId) {
    return notifications.map(n => Number(n.recipientUserId) === Number(userId) ? { ...n, read: true } : n);
  }

  function upsertNotification(notifications, notification) {
    const exists = notifications.some(n => Number(n.recipientUserId) === Number(notification.recipientUserId) && n.eventKey === notification.eventKey);
    return exists ? notifications : [{ ...notification }, ...notifications];
  }

  function buildReport(records, period = "all") {
    const rows = filterRecords(records, "", period);
    return {
      rows,
      totals: {
        total: rows.length,
        credits: rows.reduce((sum, r) => sum + Number(r.credits || 0), 0),
        published: rows.filter(r => r.status === "Publicado").length,
        draft: rows.filter(r => r.status === "Borrador").length
      }
    };
  }

  function csvEscape(value) {
    const text = String(value ?? "");
    return /[",\n]/.test(text) ? `"${text.replace(/"/g, '""')}"` : text;
  }

  function recordsToCsv(rows) {
    const header = ["Código", "Asignatura", "Docente", "Período", "Créditos", "Estado"];
    const data = rows.map(r => [r.code, r.subject, r.teacher, r.period, r.credits, r.status]);
    return [header, ...data].map(row => row.map(csvEscape).join(",")).join("\n");
  }

  function filterAudit(audit, query = "", result = "all") {
    const q = normalize(query);
    return audit
      .filter(a => result === "all" || a.result === result)
      .filter(a => !q || [a.actor, a.action, a.result, a.origin].some(v => normalize(v).includes(q)))
      .sort((a, b) => Number(b.id) - Number(a.id));
  }

  function canAccessType(role, type) {
    const allowed = {
      student: new Set(["academic", "documents"]),
      teacher: new Set(["documents"]),
      admin: new Set(["records", "documents", "users"])
    };
    return allowed[role]?.has(type) || false;
  }

  function buildGlobalSearch({ role, userId, query = "", type = "all", period = "all", records = [], documents = [], users = [], academicByStudent = {} }) {
    const q = normalize(query);
    const wanted = type === "all" ? ["academic", "documents", "records", "users"] : [type];
    const results = [];

    if (wanted.includes("academic") && canAccessType(role, "academic")) {
      filterAcademicByStudent(academicByStudent, userId, period).forEach(r => {
        if (!q || [r.code, r.subject, r.schedule, r.status].some(v => normalize(v).includes(q))) {
          results.push({ type: "academic", title: `${r.code} · ${r.subject}`, detail: `${r.period} · ${r.schedule} · ${r.credits} créditos · Nota ${r.grade}` });
        }
      });
    }

    if (wanted.includes("documents") && canAccessType(role, "documents")) {
      filterDocuments(documents, query, "all").forEach(d => results.push({ type: "documents", id: d.id, title: d.name, detail: `${d.category} · ${d.owner} · ${d.type}` }));
    }

    if (wanted.includes("records") && canAccessType(role, "records")) {
      filterRecords(records, query, period).forEach(r => results.push({ type: "records", id: r.id, title: `${r.code} · ${r.subject}`, detail: `${r.period} · ${r.teacher} · ${r.status}` }));
    }

    if (wanted.includes("users") && canAccessType(role, "users")) {
      users.filter(u => !q || [u.name, u.email, u.role].some(v => normalize(v).includes(q))).forEach(u => results.push({ type: "users", id: u.id, title: u.name, detail: `${u.email} · ${u.role} · ${u.active ? "Activo" : "Inactivo"}` }));
    }

    return results;
  }

  return {
    normalize,
    calcCoverage,
    filterAcademicByStudent,
    filterRecords,
    filterDocuments,
    notificationsForUser,
    markNotificationRead,
    markAllNotificationsRead,
    upsertNotification,
    buildReport,
    recordsToCsv,
    filterAudit,
    canAccessType,
    buildGlobalSearch
  };
});
