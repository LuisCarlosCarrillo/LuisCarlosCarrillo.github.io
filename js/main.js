/* ===== Theme (light / dark) ===== */
const THEME_KEY = "theme";
const DARK = "dark";
const LIGHT = "light";

const root = document.documentElement;
const toggleButton = document.querySelector(".theme-toggle");
const systemDarkQuery = window.matchMedia("(prefers-color-scheme: dark)");

function getStoredTheme() {
  try {
    return localStorage.getItem(THEME_KEY);
  } catch {
    return null;
  }
}

function storeTheme(theme) {
  try {
    localStorage.setItem(THEME_KEY, theme);
  } catch {}
}

function applyTheme(theme) {
  const isDark = theme === DARK;
  root.classList.toggle(DARK, isDark);
  toggleButton.setAttribute("aria-pressed", String(isDark));
}

function handleToggleClick() {
  const nextTheme = root.classList.contains(DARK) ? LIGHT : DARK;
  applyTheme(nextTheme);
  storeTheme(nextTheme);
}

function handleSystemThemeChange(event) {
  if (!getStoredTheme()) {
    applyTheme(event.matches ? DARK : LIGHT);
  }
}

function initTheme() {
  applyTheme(root.classList.contains(DARK) ? DARK : LIGHT);
  toggleButton.addEventListener("click", handleToggleClick);
  systemDarkQuery.addEventListener("change", handleSystemThemeChange);
}

initTheme();
