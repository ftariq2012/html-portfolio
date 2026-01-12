const THEME_KEY = "site-theme-mode";
const root = document.documentElement;

function applyTheme(theme) {
  if (theme !== "day" && theme != "night") theme = "day";
  root.setAttribute("data-theme", theme);
  localStorage.setItem(THEME_KEY, theme);
  const btn = document.getElementById("themeToggle");
  if (btn) {
    btn.setAttribute("aria-pressed", String(theme === "night"));
    if (theme === "night") {
      btn.textContent = "🌙 Night";
    } else {
      btn.textContent = "🌞 Day";
    }
  }
}

function toggleTheme() {
  const current = root.getAttribute("data-theme") || "day";
  applyTheme(current === "night" ? "day" : "night");
}

document.addEventListener("DOMContentLoaded", () => {
  applyTheme(localStorage.getItem(THEME_KEY));

  const btn = document.getElementById("themeToggle");
  if (btn) {
    btn.addEventListener("click", toggleTheme);
  }
});
