// search.js — simple helpers for search/filtering UI
function getQueryParam(name) {
  const params = new URLSearchParams(window.location.search);
  return params.get(name) || "";
}

function applyInitialSearch(renderFn) {
  const q = getQueryParam("q").trim();
  if (!q) return false;
  // merge products + services so header searches find both types
  const dataset = [].concat(window.products || [], window.services || []);
  const filtered = dataset.filter((p) => {
    return (
      (p.name || "").toLowerCase().includes(q.toLowerCase()) ||
      (p.category || "").toLowerCase().includes(q.toLowerCase())
    );
  });
  renderFn(filtered);
  // Highlight the active filter UI if present
  const searchInput = document.querySelector('input[name="q"]');
  if (searchInput) searchInput.value = q;
  return true;
}

// small helper to bind header form (if present)
function bindHeaderSearch() {
  const forms = document.querySelectorAll('form[data-search="site"]');
  forms.forEach((f) => {
    f.addEventListener("submit", (e) => {
      // allow normal submit to san-pham.html?q=...
    });
  });
}

// auto-run binding on load
document.addEventListener("DOMContentLoaded", () => bindHeaderSearch());
