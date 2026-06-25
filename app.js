const STORE = "moje-rostliny-v1";
const DB_NAME = `${STORE}-db`;
const DB_STORE = "state";
const UNLOCK_SECRET = "moje-rostliny-osobni-kody-2026";
const UNLOCK_APP_ID = "moje-rostliny-v1";
const DEVICE_KEY = `${STORE}-device-id`;
const LICENSE_KEY = `${STORE}-license`;
const CODE_ALPHABET = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";

const defaults = {
  settings: {
    title: "My Plant Collection",
    subtitle: "Private collection",
    theme: "forest",
    themeMode: "dark",
    customColor: "#53cb7f",
    categories: ["Begonie", "Coleusy", "Jiřiny", "Moje semenáčky"],
    categoryIcons: {},
    language: "cs",
    showPrices: false,
    showGallery: true,
    showSeedlings: true,
    showCustomers: false,
  },
  plants: [
    {
      id: "demo-1",
      type: "plant",
      name: "Ukázková rostlina",
      category: "Coleusy",
      price: "",
      note: "Tady může být krátká poznámka k rostlině.",
      photos: [],
      seed: true,
    },
  ],
  albums: [],
  customers: [],
};

const SEEDLING_CATEGORY = "Moje semenáčky";
const THEMES = [
  ["forest", "Zelená", "#53cb7f"],
  ["rose", "Růžová", "#ff6fa2"],
  ["cream", "Světlá", "#f5c76b"],
  ["violet", "Fialová", "#9c7cff"],
  ["sky", "Modrá", "#65b7ff"],
  ["terra", "Terakota", "#e47b55"],
  ["olive", "Olivová", "#a8c66c"],
  ["berry", "Malinová", "#d84b7d"],
  ["mint", "Mátová", "#68dfc5"],
  ["sunset", "Západ", "#ff9f5a"],
  ["dark", "Tmavá", "#3bd6b0"],
];

const PLANT_EMOJIS = [
  "🌿", "🌱", "🪴", "🍃", "☘️", "🍀", "🌾", "🌵", "🪷", "🌸", "🌺", "🌼",
  "🌻", "🌷", "🥀", "💐", "🏵️", "🪻", "🌹", "🌲", "🌳", "🌴", "🍂", "🍁",
  "🍄", "🌰", "🍓", "🫐", "🍅", "🌶️", "🥕", "🧄", "🧅", "🥔", "🍋", "🍊",
  "🍎", "🍐", "🍑", "🍒", "🍇", "🫛", "🥬", "🥦", "🧺", "🪹", "✨", "💚",
];

const TEXT = {
  cs: {
    plants: "Rostliny",
    gallery: "Galerie",
    customers: "Zákazníci",
    settings: "Nastavení",
    add: "Přidat",
    all: "Vše",
    seedlings: "Semenáčky",
    search: "Hledat podle názvu...",
    empty: "Nic tu zatím není.",
    appTitle: "Název aplikace",
    subtitle: "Podnadpis",
    language: "Jazyk",
    colors: "Barvy",
    customColor: "Vlastní barva",
    mode: "Režim",
    auto: "Auto",
    light: "Světlý",
    dark: "Tmavý",
    categories: "Kategorie",
    categoryIcons: "Ikony kategorií",
    showPrices: "Zobrazovat ceny",
    showGallery: "Galerie fotek",
    showSeedlings: "Moje semenáčky",
    showCustomers: "Zákazníci a objednávky",
    saveSettings: "Uložit nastavení",
    newPlant: "Nová rostlina",
    newSeedling: "Nový semenáček",
    newAlbum: "Nové album",
    newCustomer: "Nový zákazník",
  },
  sk: {
    plants: "Rastliny",
    gallery: "Galéria",
    customers: "Zákazníci",
    settings: "Nastavenia",
    add: "Pridať",
    all: "Všetko",
    seedlings: "Semenáčky",
    search: "Hľadať podľa názvu...",
    empty: "Zatiaľ tu nič nie je.",
    appTitle: "Názov aplikácie",
    subtitle: "Podnadpis",
    language: "Jazyk",
    colors: "Farby",
    customColor: "Vlastná farba",
    mode: "Režim",
    auto: "Auto",
    light: "Svetlý",
    dark: "Tmavý",
    categories: "Kategórie",
    categoryIcons: "Ikony kategórií",
    showPrices: "Zobrazovať ceny",
    showGallery: "Galéria fotiek",
    showSeedlings: "Moje semenáčky",
    showCustomers: "Zákazníci a objednávky",
    saveSettings: "Uložiť nastavenia",
    newPlant: "Nová rastlina",
    newSeedling: "Nový semenáček",
    newAlbum: "Nový album",
    newCustomer: "Nový zákazník",
  },
  en: {
    plants: "Plants",
    gallery: "Gallery",
    customers: "Customers",
    settings: "Settings",
    add: "Add",
    all: "All",
    seedlings: "Seedlings",
    search: "Search by name...",
    empty: "Nothing here yet.",
    appTitle: "App name",
    subtitle: "Subtitle",
    language: "Language",
    colors: "Colors",
    customColor: "Custom color",
    mode: "Mode",
    auto: "Auto",
    light: "Light",
    dark: "Dark",
    categories: "Categories",
    categoryIcons: "Category icons",
    showPrices: "Show prices",
    showGallery: "Photo gallery",
    showSeedlings: "My seedlings",
    showCustomers: "Customers and orders",
    saveSettings: "Save settings",
    newPlant: "New plant",
    newSeedling: "New seedling",
    newAlbum: "New album",
    newCustomer: "New customer",
  },
  pl: {
    plants: "Rośliny",
    gallery: "Galeria",
    customers: "Klienci",
    settings: "Ustawienia",
    add: "Dodaj",
    all: "Wszystko",
    seedlings: "Siewki",
    search: "Szukaj według nazwy...",
    empty: "Na razie nic tu nie ma.",
    appTitle: "Nazwa aplikacji",
    subtitle: "Podtytuł",
    language: "Język",
    colors: "Kolory",
    customColor: "Własny kolor",
    mode: "Tryb",
    auto: "Auto",
    light: "Jasny",
    dark: "Ciemny",
    categories: "Kategorie",
    categoryIcons: "Ikony kategorii",
    showPrices: "Pokazuj ceny",
    showGallery: "Galeria zdjęć",
    showSeedlings: "Moje siewki",
    showCustomers: "Klienci i zamówienia",
    saveSettings: "Zapisz ustawienia",
    newPlant: "Nowa roślina",
    newSeedling: "Nowa siewka",
    newAlbum: "Nowy album",
    newCustomer: "Nowy klient",
  },
};

let storageWrite = Promise.resolve();
let storageErrorShown = false;

const state = {
  view: "plants",
  category: "all",
  search: "",
  addOpen: false,
  editing: null,
  detail: null,
  detailMode: "view",
  viewer: null,
  viewerIndex: 0,
  touchX: 0,
  zoomScale: 1,
  pinchDistance: 0,
  pinchStartScale: 1,
  isPinching: false,
  suppressViewerTap: false,
  lastViewerTap: 0,
  viewerLongPressTimer: 0,
  viewerLongPressFired: false,
  unlocked: false,
  license: null,
  deviceId: "",
  data: structuredClone(defaults),
};

const $ = (selector) => document.querySelector(selector);
const els = {
  title: $("#appTitle"),
  subtitle: $("#appSubtitle"),
  search: $("#searchInput"),
  kicker: $("#sectionKicker"),
  sectionTitle: $("#sectionTitle"),
  categoryStrip: $("#categoryStrip"),
  editPanel: $("#editPanel"),
  cardGrid: $("#cardGrid"),
  albumGrid: $("#albumGrid"),
  customerList: $("#customerList"),
  settingsPanel: $("#settingsPanel"),
  empty: $("#emptyState"),
  addSheet: $("#addSheet"),
  detailSheet: $("#detailSheet"),
  detailContent: $("#detailContent"),
  viewer: $("#viewer"),
  viewerImage: $("#viewerImage"),
  viewerCaption: $("#viewerCaption"),
  lockScreen: $("#lockScreen"),
  lockDeviceId: $("#lockDeviceId"),
  lockForm: $("#unlockForm"),
  lockInput: $("#unlockCodeInput"),
  lockError: $("#lockError"),
  copyDeviceId: $("#copyDeviceId"),
  licenseNote: $("#licenseNote"),
};

function clone(value) {
  return typeof structuredClone === "function" ? structuredClone(value) : JSON.parse(JSON.stringify(value));
}

function esc(value = "") {
  return String(value).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}

function norm(value = "") {
  return String(value).normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

function normalizeLicenseValue(value = "") {
  return String(value)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/gi, "-")
    .replace(/^-+|-+$/g, "")
    .toUpperCase();
}

function base32(bytes, length = 8) {
  let out = "";
  for (let i = 0; i < length; i += 1) out += CODE_ALPHABET[bytes[i] % CODE_ALPHABET.length];
  return out;
}

function randomCode(length = 8) {
  const bytes = new Uint8Array(length);
  crypto.getRandomValues(bytes);
  return base32(bytes, length);
}

function getDeviceId() {
  let id = localStorage.getItem(DEVICE_KEY);
  if (!id) {
    id = `${randomCode(4)}-${randomCode(4)}`;
    localStorage.setItem(DEVICE_KEY, id);
  }
  return normalizeLicenseValue(id);
}

async function hmacBytes(message) {
  const encoder = new TextEncoder();
  const key = await crypto.subtle.importKey(
    "raw",
    encoder.encode(UNLOCK_SECRET),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const signature = await crypto.subtle.sign("HMAC", key, encoder.encode(message));
  return new Uint8Array(signature);
}

async function makeUnlockCode(owner, deviceId) {
  const safeOwner = normalizeLicenseValue(owner);
  const safeDevice = normalizeLicenseValue(deviceId);
  const signature = await hmacBytes(`${UNLOCK_APP_ID}|${safeOwner}|${safeDevice}`);
  return `${safeOwner}-${safeDevice}-${base32(signature, 8)}`;
}

async function verifyUnlockCode(code, deviceId) {
  const safeCode = normalizeLicenseValue(code);
  const safeDevice = normalizeLicenseValue(deviceId);
  const parts = safeCode.split("-").filter(Boolean);
  const check = parts.pop() || "";
  const body = parts.join("-");
  if (!check || !body.endsWith(safeDevice)) return null;
  const owner = body.slice(0, Math.max(0, body.length - safeDevice.length)).replace(/-+$/g, "");
  if (!owner) return null;
  const expected = await makeUnlockCode(owner, safeDevice);
  if (expected !== safeCode) return null;
  return { owner, deviceId: safeDevice, unlockedAt: new Date().toISOString() };
}

function readLicense() {
  try {
    const license = JSON.parse(localStorage.getItem(LICENSE_KEY) || "null");
    return license?.deviceId === state.deviceId && license?.owner ? license : null;
  } catch {
    return null;
  }
}

function writeLicense(license) {
  localStorage.setItem(LICENSE_KEY, JSON.stringify(license));
}

async function copyText(text, fallbackLabel = "Copy this text:") {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    prompt(fallbackLabel, text);
    return false;
  }
}

function renderLock() {
  document.body.dataset.locked = state.unlocked ? "false" : "true";
  els.lockScreen.hidden = state.unlocked;
  if (!state.unlocked) {
    els.lockDeviceId.textContent = state.deviceId;
    els.lockError.hidden = true;
  }
  if (els.licenseNote) {
    els.licenseNote.hidden = !state.license?.owner;
    els.licenseNote.textContent = state.license?.owner ? `Unlocked for: ${state.license.owner}` : "";
  }
}

function t(key) {
  const lang = state.data?.settings?.language || "cs";
  return TEXT[lang]?.[key] || TEXT.cs[key] || key;
}

function categoryIcon(category) {
  return state.data.settings.categoryIcons?.[category] || (category === SEEDLING_CATEGORY ? "🌱" : "🌿");
}

function categoryLabel(category) {
  return `<span class="cat-emoji">${esc(categoryIcon(category))}</span><span>${esc(category)}</span>`;
}

function normalizeHex(value, fallback = "#53cb7f") {
  const hex = String(value || "").trim();
  return /^#[0-9a-f]{6}$/i.test(hex) ? hex : fallback;
}

function hexToRgb(hex) {
  const safe = normalizeHex(hex).slice(1);
  return {
    r: parseInt(safe.slice(0, 2), 16),
    g: parseInt(safe.slice(2, 4), 16),
    b: parseInt(safe.slice(4, 6), 16),
  };
}

function applyTheme(settings = state.data.settings) {
  const theme = settings.theme || "forest";
  document.body.dataset.theme = theme;
  document.body.dataset.mode = settings.themeMode || "dark";
  if (theme === "custom") {
    const color = normalizeHex(settings.customColor);
    const { r, g, b } = hexToRgb(color);
    document.body.style.setProperty("--green", color);
    document.body.style.setProperty("--green2", `rgb(${Math.min(255, r + 44)} ${Math.min(255, g + 38)} ${Math.min(255, b + 38)})`);
    document.body.style.setProperty("--theme-glow", `rgba(${r},${g},${b},.42)`);
    document.body.style.setProperty("--theme-soft", `rgba(${Math.min(255, r + 44)},${Math.min(255, g + 38)},${Math.min(255, b + 38)},.18)`);
  } else {
    ["--green", "--green2", "--theme-glow", "--theme-soft"].forEach((name) => document.body.style.removeProperty(name));
  }
}

function uid(prefix = "id") {
  return `${prefix}-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function formatPrice(value) {
  const n = Number(String(value || "").replace(",", "."));
  if (!Number.isFinite(n) || n <= 0) return "";
  return `${Math.round(n)} Kč`;
}

function initials(name = "") {
  const parts = String(name).trim().split(/\s+/).filter(Boolean);
  return ((parts[0]?.[0] || "") + (parts[1]?.[0] || parts[0]?.[1] || "")).toUpperCase();
}

function photo(src, name) {
  return src ? `<img src="${esc(src)}" alt="${esc(name)}">` : `<span class="placeholder">${esc(initials(name))}</span>`;
}

function openDb() {
  return new Promise((resolve, reject) => {
    if (!window.indexedDB) return reject(new Error("IndexedDB není dostupná."));
    const request = indexedDB.open(DB_NAME, 1);
    request.onupgradeneeded = () => {
      if (!request.result.objectStoreNames.contains(DB_STORE)) request.result.createObjectStore(DB_STORE);
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error || new Error("Databázi nelze otevřít."));
  });
}

async function readStoredState() {
  const db = await openDb();
  try {
    return await new Promise((resolve, reject) => {
      const request = db.transaction(DB_STORE, "readonly").objectStore(DB_STORE).get("app");
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error || new Error("Data nelze načíst."));
    });
  } finally {
    db.close();
  }
}

async function writeStoredState(data) {
  const db = await openDb();
  try {
    await new Promise((resolve, reject) => {
      const tx = db.transaction(DB_STORE, "readwrite");
      tx.objectStore(DB_STORE).put(data, "app");
      tx.oncomplete = () => resolve();
      tx.onerror = () => reject(tx.error || new Error("Data nelze uložit."));
      tx.onabort = () => reject(tx.error || new Error("Ukládání bylo přerušeno."));
    });
  } finally {
    db.close();
  }
}

function normalizeData(data) {
  const merged = {
    settings: { ...defaults.settings, ...(data?.settings || {}) },
    plants: Array.isArray(data?.plants) ? data.plants : defaults.plants,
    albums: Array.isArray(data?.albums) ? data.albums : [],
    customers: Array.isArray(data?.customers) ? data.customers : [],
  };
  if (merged.settings.title === "Moje rostliny") merged.settings.title = "My Plant Collection";
  if (merged.settings.subtitle === "Soukromá sbírka") merged.settings.subtitle = "Private collection";
  merged.settings.categories = cleanCategories(merged.settings.categories);
  merged.settings.language = ["cs", "sk", "en", "pl"].includes(merged.settings.language) ? merged.settings.language : "cs";
  merged.settings.themeMode = ["auto", "light", "dark"].includes(merged.settings.themeMode) ? merged.settings.themeMode : "dark";
  merged.settings.customColor = normalizeHex(merged.settings.customColor);
  merged.settings.categoryIcons = typeof merged.settings.categoryIcons === "object" && merged.settings.categoryIcons ? merged.settings.categoryIcons : {};
  merged.settings.showGallery = merged.settings.showGallery !== false;
  merged.settings.showSeedlings = merged.settings.showSeedlings !== false;
  merged.settings.categories = merged.settings.categories.filter((category) => category !== SEEDLING_CATEGORY);
  merged.plants = merged.plants.map((item) => ({
    ...item,
    type: "plant",
    seedling: item.seedling === true || item.seed === true || item.category === SEEDLING_CATEGORY,
    category: item.category === SEEDLING_CATEGORY ? (merged.settings.categories[0] || "Rostliny") : item.category,
    photos: Array.isArray(item.photos) ? item.photos : [],
  }));
  merged.albums = merged.albums.map((item) => ({ ...item, type: "album", photos: Array.isArray(item.photos) ? item.photos : [] }));
  merged.customers = merged.customers.map((item) => ({ ...item, type: "customer", wants: Array.isArray(item.wants) ? item.wants : [], fees: Array.isArray(item.fees) ? item.fees : [] }));
  return merged;
}

async function hydrate() {
  try {
    const stored = await readStoredState();
    state.data = normalizeData(stored || defaults);
    save();
    render();
  } catch (error) {
    showStorageError(error);
  }
}

function snapshot() {
  return clone(state.data);
}

function showStorageError(error) {
  console.error(error);
  if (storageErrorShown) return;
  storageErrorShown = true;
  alert("Data nebo fotky se nepodařilo uložit. Zkontroluj volné místo v telefonu a zkus to znovu.");
  setTimeout(() => { storageErrorShown = false; }, 3000);
}

function save() {
  const data = snapshot();
  storageWrite = storageWrite.catch(() => {}).then(() => writeStoredState(data)).catch(showStorageError);
}

function cleanCategories(value) {
  const raw = Array.isArray(value) ? value : String(value || "").split(/[\n,;]/);
  const categories = [...new Set(raw.map((entry) => String(entry || "").trim()).filter(Boolean))];
  return categories.length ? categories : ["Rostliny"];
}

function activePlants() {
  let list = state.data.plants.filter((item) => !item.seedling);
  if (state.category !== "all") list = list.filter((item) => item.category === state.category);
  const needle = norm(state.search);
  if (needle) list = list.filter((item) => norm(item.name).includes(needle));
  return [...list].sort((a, b) => a.name.localeCompare(b.name, "cs"));
}

function activeSeedlings() {
  const needle = norm(state.search);
  let list = state.data.plants.filter((item) => item.seedling);
  if (needle) list = list.filter((item) => norm(item.name).includes(needle));
  return [...list].sort((a, b) => a.name.localeCompare(b.name, "cs"));
}

function activeAlbums() {
  const needle = norm(state.search);
  const list = needle ? state.data.albums.filter((item) => norm(item.name).includes(needle)) : state.data.albums;
  return [...list].sort((a, b) => a.name.localeCompare(b.name, "cs"));
}

function activeCustomers() {
  const needle = norm(state.search);
  const list = needle ? state.data.customers.filter((item) => norm(item.name).includes(needle)) : state.data.customers;
  return [...list].sort((a, b) => a.name.localeCompare(b.name, "cs"));
}

function categoryOptions(selected = "") {
  return state.data.settings.categories.map((category) => `<option value="${esc(category)}" ${category === selected ? "selected" : ""}>${esc(categoryIcon(category))} ${esc(category)}</option>`).join("");
}

function photoManager(item) {
  if (!item?.photos?.length) return "";
  return `<div class="photo-manager">
    <p>${item.type === "album" ? "Fotky v albu" : "Fotky u rostliny"}</p>
    <div class="photo-sort">
      ${item.photos.map((src, index) => `<div class="photo-tile" data-photo-index="${index}">
        <img src="${esc(src)}" alt="${esc(item.name)} ${index + 1}">
        ${index === 0 ? `<span class="photo-main-label">Hlavní</span>` : `<button type="button" class="photo-main-button" data-photo-main="${index}">Hlavní</button>`}
        <button type="button" class="photo-delete-button" data-photo-delete="${index}" aria-label="Vymazat fotku">×</button>
      </div>`).join("")}
    </div>
  </div>`;
}

function plantForm(item = null, seedling = false) {
  const isSeedling = seedling || item?.seedling === true;
  const title = item ? "Upravit rostlinu" : isSeedling ? t("newSeedling") : t("newPlant");
  const category = item?.category || state.data.settings.categories[0] || "Rostliny";
  return `<form id="editForm" class="edit-card" data-kind="plant" data-id="${esc(item?.id || "")}">
    <div class="edit-head"><h3>${esc(title)}</h3><button type="button" class="soft-close" data-cancel-edit>×</button></div>
    <label>Název<input name="name" value="${esc(item?.name || "")}" autocomplete="off" required></label>
    <input type="hidden" name="seedling" value="${isSeedling ? "1" : "0"}">
    ${isSeedling ? "" : `<label>Kategorie<select name="category">${categoryOptions(category)}</select></label>`}
    ${state.data.settings.showPrices ? `<label>Cena<input name="price" inputmode="decimal" value="${esc(item?.price || "")}" placeholder="např. 45"></label>` : ""}
    <label>Poznámka<textarea name="note" rows="3">${esc(item?.note || "")}</textarea></label>
    <label>Fotky<input name="photos" type="file" accept="image/*" multiple></label>
    ${photoManager(item)}
    <button class="save-pill" type="submit">Uložit</button>
    ${item ? `<button type="button" class="delete-bottom" data-delete-current>Vymazat rostlinu</button>` : ""}
  </form>`;
}

function albumForm(item = null) {
  return `<form id="editForm" class="edit-card" data-kind="album" data-id="${esc(item?.id || "")}">
    <div class="edit-head"><h3>${item ? "Upravit album" : "Nové album"}</h3><button type="button" class="soft-close" data-cancel-edit>×</button></div>
    <label>Název<input name="name" value="${esc(item?.name || "")}" autocomplete="off" required></label>
    <label>Poznámka<textarea name="note" rows="3">${esc(item?.note || "")}</textarea></label>
    <label>Fotky<input name="photos" type="file" accept="image/*" multiple></label>
    ${photoManager(item)}
    <button class="save-pill" type="submit">Uložit</button>
    ${item ? `<button type="button" class="delete-bottom" data-delete-current>Vymazat album</button>` : ""}
  </form>`;
}

function customerForm(item = null) {
  const wants = new Map((item?.wants || []).map((want) => [want.id, want]));
  const feeRows = [...(item?.fees || []), { label: "", price: "" }];
  return `<form id="editForm" class="edit-card" data-kind="customer" data-id="${esc(item?.id || "")}">
    <div class="edit-head"><h3>${item ? "Upravit zákazníka" : "Nový zákazník"}</h3><button type="button" class="soft-close" data-cancel-edit>×</button></div>
    <label>Jméno<input name="name" value="${esc(item?.name || "")}" autocomplete="off" required></label>
    <label>Kontakt<input name="contact" value="${esc(item?.contact || "")}" autocomplete="off" placeholder="telefon, e-mail, adresa"></label>
    <label>Poznámka<textarea name="note" rows="3">${esc(item?.note || "")}</textarea></label>
    <fieldset class="choice-box">
      <legend>Rostliny, které chce</legend>
      ${state.data.plants.length ? state.data.plants.map((plant) => {
        const want = wants.get(plant.id);
        const checked = want ? "checked" : "";
        const price = want?.price ?? plant.price ?? "";
        return `<label class="wanted-row">
          <input type="checkbox" name="want" value="${esc(plant.id)}" ${checked}>
          <span>${esc(plant.name)}</span>
          ${state.data.settings.showPrices ? `<input name="want-price-${esc(plant.id)}" inputmode="decimal" value="${esc(price)}" placeholder="Kč">` : ""}
        </label>`;
      }).join("") : `<p class="muted">Nejdřív přidej rostliny.</p>`}
    </fieldset>
    ${state.data.settings.showPrices ? `<fieldset class="choice-box">
      <legend>Poplatky navíc</legend>
      ${feeRows.map((fee, index) => `<div class="fee-row">
        <input name="fee-label-${index}" value="${esc(fee.label || "")}" placeholder="např. Zásilkovna">
        <input name="fee-price-${index}" inputmode="decimal" value="${esc(fee.price || "")}" placeholder="Kč">
      </div>`).join("")}
    </fieldset>` : ""}
    <button class="save-pill" type="submit">Uložit</button>
    ${item ? `<button type="button" class="delete-bottom" data-delete-current>Vymazat zákazníka</button>` : ""}
  </form>`;
}

function editForm() {
  const editing = state.editing;
  if (!editing) return "";
  if (editing.kind === "plant") return plantForm(findPlant(editing.id));
  if (editing.kind === "album") return albumForm(findAlbum(editing.id));
  if (editing.kind === "customer") return customerForm(findCustomer(editing.id));
  if (editing.kind === "new-plant") return plantForm();
  if (editing.kind === "new-seedling") return plantForm(null, true);
  if (editing.kind === "new-album") return albumForm();
  if (editing.kind === "new-customer") return customerForm();
  return "";
}

function findPlant(id) {
  return state.data.plants.find((item) => item.id === id) || null;
}

function findAlbum(id) {
  return state.data.albums.find((item) => item.id === id) || null;
}

function findCustomer(id) {
  return state.data.customers.find((item) => item.id === id) || null;
}

function plantCard(item) {
  return `<article class="plant-card" data-open-plant="${esc(item.id)}">
    <div class="plant-photo">${photo(item.photos?.[0], item.name)}</div>
    <div class="plant-body">
      <h3>${esc(item.name)}</h3>
      <div class="card-tags">
        <span>${item.seedling ? `🌱 ${esc(t("seedlings"))}` : `${esc(categoryIcon(item.category || ""))} ${esc(item.category || "Rostlina")}`}</span>
        ${state.data.settings.showPrices && item.price ? `<b>${esc(formatPrice(item.price))}</b>` : ""}
      </div>
      ${item.note ? `<p class="card-note">${esc(item.note)}</p>` : `<p class="card-note"></p>`}
      <div class="card-actions">
        <button class="card-cta" type="button" data-open-plant="${esc(item.id)}">Detail</button>
        <button class="card-edit" type="button" data-edit-plant="${esc(item.id)}">✎</button>
      </div>
    </div>
  </article>`;
}

function albumCard(item) {
  return `<article class="album-card" data-open-album="${esc(item.id)}">
    <div class="album-cover">${photo(item.photos?.[0], item.name)}<span>${item.photos?.length || 0} fotek</span></div>
    <div class="album-body">
      <h3>${esc(item.name)}</h3>
      ${item.note ? `<p>${esc(item.note)}</p>` : ""}
      <div class="card-actions">
        <button class="card-cta" type="button" data-open-album="${esc(item.id)}">Otevřít</button>
        <button class="card-edit" type="button" data-edit-album="${esc(item.id)}">✎</button>
      </div>
    </div>
  </article>`;
}

function customerTotal(customer) {
  const wants = customer.wants || [];
  const plants = new Map(state.data.plants.map((item) => [item.id, item]));
  const plantTotal = wants.reduce((sum, want) => sum + (Number(want.price || plants.get(want.id)?.price || 0) || 0), 0);
  const feeTotal = (customer.fees || []).reduce((sum, fee) => sum + (Number(fee.price || 0) || 0), 0);
  return plantTotal + feeTotal;
}

function customerCard(item) {
  const plantNames = (item.wants || []).map((want) => findPlant(want.id)?.name).filter(Boolean);
  return `<article class="customer-card">
    <div>
      <h3>${esc(item.name)}</h3>
      ${state.data.settings.showPrices ? `<b>${esc(formatPrice(customerTotal(item)))}</b>` : ""}
    </div>
    ${plantNames.length ? `<p>${plantNames.map(esc).join(", ")}</p>` : `<p class="muted">Bez vybraných rostlin</p>`}
    ${item.contact ? `<p>${esc(item.contact)}</p>` : ""}
    <button class="card-edit" type="button" data-edit-customer="${esc(item.id)}">✎</button>
  </article>`;
}

function plantDetail(item) {
  const thumbs = (item.photos || []).map((src, index) => `<button type="button" data-photo-open="${index}"><img src="${esc(src)}" alt="${esc(item.name)} ${index + 1}"></button>`).join("");
  return `<div class="detail-top"><button class="soft-close" type="button" data-detail-close>×</button></div>
    <button class="detail-hero" type="button" data-photo-open="0">${photo(item.photos?.[0], item.name)}</button>
    <div class="detail-body">
      <h2>${esc(item.name)}</h2>
      <div class="card-tags detail-tags"><span>${item.seedling ? `🌱 ${esc(t("seedlings"))}` : `${esc(categoryIcon(item.category || ""))} ${esc(item.category || "Rostlina")}`}</span>${state.data.settings.showPrices && item.price ? `<b>${esc(formatPrice(item.price))}</b>` : ""}</div>
      ${item.note ? `<p class="detail-note">${esc(item.note)}</p>` : ""}
      ${thumbs ? `<div class="detail-thumbs">${thumbs}</div>` : ""}
      <button class="detail-edit-bottom" type="button" data-detail-edit>✎ Upravit</button>
    </div>`;
}

function settingsView() {
  const theme = state.data.settings.theme || "forest";
  const mode = state.data.settings.themeMode || "dark";
  const language = state.data.settings.language || "cs";
  const categories = cleanCategories(state.data.settings.categories);
  return `<form id="settingsForm" class="settings-card">
    <label>${t("appTitle")}<input name="title" value="${esc(state.data.settings.title)}" autocomplete="off"></label>
    <label>${t("subtitle")}<input name="subtitle" value="${esc(state.data.settings.subtitle || "")}" autocomplete="off" placeholder="např. Moje sbírka"></label>
    <fieldset class="mode-picker">
      <legend>${t("language")}</legend>
      ${[["cs", "CZ"], ["sk", "SK"], ["en", "EN"], ["pl", "PL"]].map(([value, label]) => `<label class="mode-choice">
        <input type="radio" name="language" value="${value}" ${language === value ? "checked" : ""}>
        <span>${label}</span>
      </label>`).join("")}
    </fieldset>
    <fieldset class="theme-picker">
      <legend>${t("colors")}</legend>
      ${THEMES.map(([value, label, color]) => `<label class="theme-choice">
        <input type="radio" name="theme" value="${value}" ${theme === value ? "checked" : ""}>
        <span style="--swatch:${color}"></span>
        <b>${label}</b>
      </label>`).join("")}
      <label class="custom-theme-row">
        <span>${t("customColor")}</span>
        <input name="customColor" type="color" value="${esc(normalizeHex(state.data.settings.customColor))}" aria-label="${t("customColor")}">
      </label>
      <input type="radio" name="theme" value="custom" ${theme === "custom" ? "checked" : ""} hidden>
    </fieldset>
    <fieldset class="mode-picker">
      <legend>${t("mode")}</legend>
      ${[["auto", t("auto")], ["light", t("light")], ["dark", t("dark")]].map(([value, label]) => `<label class="mode-choice">
        <input type="radio" name="themeMode" value="${value}" ${mode === value ? "checked" : ""}>
        <span>${label}</span>
      </label>`).join("")}
    </fieldset>
    <label>${t("categories")}<textarea name="categories" rows="5" placeholder="Begonie&#10;Coleusy&#10;Jiřiny">${esc(categories.join("\n"))}</textarea></label>
    <fieldset class="icon-picker">
      <legend>${t("categoryIcons")}</legend>
      ${categories.map((category) => `<label>
        <span>${esc(category)}</span>
        <select data-category-icon="${esc(category)}">${PLANT_EMOJIS.map((emoji) => `<option value="${esc(emoji)}" ${categoryIcon(category) === emoji ? "selected" : ""}>${esc(emoji)}</option>`).join("")}</select>
      </label>`).join("")}
    </fieldset>
    <label class="toggle-row"><span>${t("showPrices")}</span><input name="showPrices" type="checkbox" ${state.data.settings.showPrices ? "checked" : ""}></label>
    <label class="toggle-row"><span>${t("showGallery")}</span><input name="showGallery" type="checkbox" ${state.data.settings.showGallery ? "checked" : ""}></label>
    <label class="toggle-row"><span>${t("showSeedlings")}</span><input name="showSeedlings" type="checkbox" ${state.data.settings.showSeedlings ? "checked" : ""}></label>
    <label class="toggle-row"><span>${t("showCustomers")}</span><input name="showCustomers" type="checkbox" ${state.data.settings.showCustomers ? "checked" : ""}></label>
    <button class="save-pill" type="submit">${t("saveSettings")}</button>
  </form>`;
}

function renderCategories() {
  if (state.view !== "plants") {
    els.categoryStrip.innerHTML = "";
    return;
  }
  const buttons = state.data.settings.categories
    .map((category) => `<button type="button" class="${state.category === category ? "active" : ""}" data-category="${esc(category)}">${categoryLabel(category)}</button>`)
    .concat(`<button type="button" class="${state.category === "all" ? "active" : ""}" data-category="all">${t("all")}</button>`);
  els.categoryStrip.innerHTML = buttons.join("");
}

function renderDetail() {
  const item = state.detail?.kind === "plant" ? findPlant(state.detail.id) : null;
  els.detailSheet.hidden = !item;
  els.detailContent.innerHTML = item ? plantDetail(item) : "";
}

function render() {
  renderLock();
  if (!state.unlocked) return;
  if (!state.data.settings.showGallery && state.view === "gallery") state.view = "plants";
  if (!state.data.settings.showSeedlings && state.view === "seedlings") state.view = "plants";
  if (!state.data.settings.showCustomers && state.view === "customers") state.view = "plants";
  if (state.category !== "all" && !state.data.settings.categories.includes(state.category)) state.category = "all";
  els.title.textContent = state.data.settings.title || "My Plant Collection";
  els.subtitle.textContent = state.data.settings.subtitle || "Private collection";
  els.search.placeholder = t("search");
  els.empty.textContent = t("empty");
  applyTheme();
  const labels = {
    plants: t("plants"),
    seedlings: t("seedlings"),
    gallery: t("gallery"),
    customers: t("customers"),
    settings: t("settings"),
  };
  els.kicker.textContent = labels[state.view] || "Rostliny";
  els.sectionTitle.textContent = "";
  renderCategories();

  els.editPanel.hidden = !state.editing;
  els.editPanel.innerHTML = state.editing ? editForm() : "";

  const plants = activePlants();
  const seedlings = activeSeedlings();
  const albums = activeAlbums();
  const customers = activeCustomers();
  els.cardGrid.hidden = state.view !== "plants" && state.view !== "seedlings";
  els.albumGrid.hidden = state.view !== "gallery";
  els.customerList.hidden = state.view !== "customers";
  els.settingsPanel.hidden = state.view !== "settings";
  els.cardGrid.innerHTML = state.view === "plants" ? plants.map(plantCard).join("") : state.view === "seedlings" ? seedlings.map(plantCard).join("") : "";
  els.albumGrid.innerHTML = state.view === "gallery" ? albums.map(albumCard).join("") : "";
  els.customerList.innerHTML = state.view === "customers" ? customers.map(customerCard).join("") : "";
  els.settingsPanel.innerHTML = state.view === "settings" ? settingsView() : "";

  document.querySelectorAll("[data-gallery-nav], [data-gallery-choice]").forEach((el) => { el.hidden = !state.data.settings.showGallery; });
  document.querySelectorAll("[data-seedling-nav], [data-seedling-choice]").forEach((el) => { el.hidden = !state.data.settings.showSeedlings; });
  document.querySelectorAll("[data-customer-nav], [data-customer-choice]").forEach((el) => { el.hidden = !state.data.settings.showCustomers; });
  const visibleNav = 3 + (state.data.settings.showSeedlings ? 1 : 0) + (state.data.settings.showGallery ? 1 : 0) + (state.data.settings.showCustomers ? 1 : 0);
  document.querySelector("#bottomDock").style.setProperty("--dock-count", visibleNav);
  document.querySelector("[data-view='plants'] span:not(.dock-icon)").textContent = t("plants");
  document.querySelector("[data-view='seedlings'] span:not(.dock-icon)").textContent = t("seedlings");
  document.querySelector("[data-view='gallery'] span:not(.dock-icon)").textContent = t("gallery");
  document.querySelector("[data-view='customers'] span:not(.dock-icon)").textContent = t("customers");
  document.querySelector("[data-view='settings'] span:not(.dock-icon)").textContent = t("settings");
  document.querySelector("[data-add-main] span:not(.dock-icon)").textContent = t("add");
  document.querySelector("[data-add-choice='plant'] strong").textContent = t("newPlant");
  document.querySelector("[data-add-choice='seedling'] strong").textContent = t("newSeedling");
  document.querySelector("[data-add-choice='album'] strong").textContent = t("newAlbum");
  document.querySelector("[data-add-choice='customer'] strong").textContent = t("newCustomer");
  document.querySelectorAll("[data-view]").forEach((button) => button.classList.toggle("active", button.dataset.view === state.view));
  const emptyCount = state.view === "plants" ? plants.length : state.view === "seedlings" ? seedlings.length : state.view === "gallery" ? albums.length : state.view === "customers" ? customers.length : 1;
  els.empty.hidden = emptyCount > 0 || !!state.editing;
  els.addSheet.hidden = !state.addOpen;
  renderDetail();
}

function readFiles(input) {
  const files = [...(input?.files || [])];
  return Promise.all(files.map(readPhoto));
}

function readPhoto(file) {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = () => compressPhoto(String(reader.result || ""), resolve);
    reader.readAsDataURL(file);
  });
}

function compressPhoto(src, resolve) {
  const img = new Image();
  img.onload = () => {
    const max = 2600;
    const scale = Math.min(1, max / Math.max(img.width, img.height));
    const canvas = document.createElement("canvas");
    canvas.width = Math.max(1, Math.round(img.width * scale));
    canvas.height = Math.max(1, Math.round(img.height * scale));
    canvas.getContext("2d").drawImage(img, 0, 0, canvas.width, canvas.height);
    resolve(canvas.toDataURL("image/jpeg", 0.92));
  };
  img.onerror = () => resolve(src);
  img.src = src;
}

async function submitEdit(form) {
  const kind = form.dataset.kind;
  const id = form.dataset.id || "";
  const fields = form.elements;
  const name = fields.name?.value.trim();
  if (!name) {
    fields.name?.focus();
    alert("Nejdřív vyplň název.");
    return;
  }
  const photos = await readFiles(fields.photos);

  if (kind === "plant") {
    let item = findPlant(id);
    if (!item) {
      item = { id: uid("plant"), type: "plant", photos: [] };
      state.data.plants.push(item);
    }
    const isSeedling = fields.seedling?.value === "1";
    item.name = name;
    item.seedling = isSeedling;
    item.category = isSeedling ? (item.category && item.category !== SEEDLING_CATEGORY ? item.category : state.data.settings.categories[0] || "Rostliny") : fields.category?.value || state.data.settings.categories[0] || "Rostliny";
    item.price = fields.price?.value.trim() || "";
    item.note = fields.note?.value.trim() || "";
    item.photos = [...(item.photos || []), ...photos];
    state.view = isSeedling ? "seedlings" : "plants";
  }

  if (kind === "album") {
    let item = findAlbum(id);
    if (!item) {
      item = { id: uid("album"), type: "album", photos: [] };
      state.data.albums.push(item);
    }
    item.name = name;
    item.note = fields.note?.value.trim() || "";
    item.photos = [...(item.photos || []), ...photos];
    state.view = "gallery";
  }

  if (kind === "customer") {
    let item = findCustomer(id);
    if (!item) {
      item = { id: uid("customer"), type: "customer", wants: [], fees: [] };
      state.data.customers.push(item);
    }
    item.name = name;
    item.contact = fields.contact?.value.trim() || "";
    item.note = fields.note?.value.trim() || "";
    item.wants = [...form.querySelectorAll("input[name='want']:checked")].map((input) => ({ id: input.value, price: fields[`want-price-${input.value}`]?.value.trim() || "" }));
    item.fees = [...form.querySelectorAll(".fee-row")].map((row, index) => ({ label: fields[`fee-label-${index}`]?.value.trim() || "", price: fields[`fee-price-${index}`]?.value.trim() || "" })).filter((fee) => fee.label || fee.price);
    state.view = "customers";
  }

  state.editing = null;
  state.detailMode = "view";
  save();
  render();
}

function submitSettings(form) {
  state.data.settings.title = form.elements.title.value.trim() || "My Plant Collection";
  state.data.settings.subtitle = form.elements.subtitle.value.trim() || "Private collection";
  state.data.settings.theme = form.elements.theme.value || "forest";
  state.data.settings.themeMode = form.elements.themeMode.value || "dark";
  state.data.settings.customColor = normalizeHex(form.elements.customColor.value);
  state.data.settings.language = form.elements.language.value || "cs";
  state.data.settings.categories = cleanCategories(form.elements.categories.value);
  state.data.settings.showSeedlings = form.elements.showSeedlings.checked;
  state.data.settings.categories = state.data.settings.categories.filter((category) => category !== SEEDLING_CATEGORY);
  const icons = {};
  form.querySelectorAll("[data-category-icon]").forEach((select) => {
    const category = select.dataset.categoryIcon;
    if (state.data.settings.categories.includes(category)) icons[category] = select.value || categoryIcon(category);
  });
  state.data.settings.categoryIcons = icons;
  state.data.settings.showPrices = form.elements.showPrices.checked;
  state.data.settings.showGallery = form.elements.showGallery.checked;
  state.data.settings.showCustomers = form.elements.showCustomers.checked;
  if (!state.data.settings.showGallery && state.view === "gallery") state.view = "plants";
  if (!state.data.settings.showSeedlings && state.view === "seedlings") state.view = "plants";
  if (!state.data.settings.showCustomers && state.view === "customers") state.view = "plants";
  state.data.plants.forEach((plant) => {
    if (!state.data.settings.categories.includes(plant.category)) plant.category = state.data.settings.categories[0];
  });
  state.view = "plants";
  state.editing = null;
  state.addOpen = false;
  save();
  render();
}

function currentEditItem() {
  if (!state.editing) return null;
  if (state.editing.kind === "plant") return findPlant(state.editing.id);
  if (state.editing.kind === "album") return findAlbum(state.editing.id);
  return null;
}

function deletePhoto(index) {
  const item = currentEditItem();
  if (!item?.photos?.[index]) return;
  if (!confirm("Opravdu vymazat tuto fotku?")) return;
  item.photos.splice(index, 1);
  save();
  render();
}

function makePhotoMain(index) {
  const item = currentEditItem();
  if (!item?.photos?.[index] || index === 0) return;
  const [src] = item.photos.splice(index, 1);
  item.photos.unshift(src);
  save();
  render();
}

function deleteCurrent() {
  if (!state.editing?.id) return;
  if (state.editing.kind === "plant") {
    const item = findPlant(state.editing.id);
    if (!item || !confirm(`Opravdu vymazat ${item.name}?`)) return;
    state.data.plants = state.data.plants.filter((plant) => plant.id !== item.id);
    state.data.customers.forEach((customer) => { customer.wants = (customer.wants || []).filter((want) => want.id !== item.id); });
  }
  if (state.editing.kind === "album") {
    const item = findAlbum(state.editing.id);
    if (!item || !confirm(`Opravdu vymazat ${item.name}?`)) return;
    state.data.albums = state.data.albums.filter((album) => album.id !== item.id);
  }
  if (state.editing.kind === "customer") {
    const item = findCustomer(state.editing.id);
    if (!item || !confirm(`Opravdu vymazat ${item.name}?`)) return;
    state.data.customers = state.data.customers.filter((customer) => customer.id !== item.id);
  }
  state.editing = null;
  save();
  render();
}

function openAdd(kind) {
  if (kind === "customer" && !state.data.settings.showCustomers) return;
  if (kind === "album" && !state.data.settings.showGallery) return;
  if (kind === "seedling" && !state.data.settings.showSeedlings) return;
  state.addOpen = false;
  state.detail = null;
  state.editing = { kind: kind === "seedling" ? "new-seedling" : kind === "plant" ? "new-plant" : kind === "album" ? "new-album" : "new-customer" };
  state.view = kind === "seedling" ? "seedlings" : kind === "album" ? "gallery" : kind === "customer" ? "customers" : "plants";
  render();
}

function openViewer(source, index = 0) {
  const item = source.kind === "plant" ? findPlant(source.id) : findAlbum(source.id);
  if (!item?.photos?.length) return;
  state.viewer = source;
  state.viewerIndex = Math.max(0, Math.min(index, item.photos.length - 1));
  resetViewerZoom();
  updateViewer();
  els.viewer.hidden = false;
}

function viewerItem() {
  if (!state.viewer) return null;
  return state.viewer.kind === "plant" ? findPlant(state.viewer.id) : findAlbum(state.viewer.id);
}

function updateViewer() {
  const item = viewerItem();
  if (!item?.photos?.length) return;
  els.viewerImage.src = item.photos[state.viewerIndex];
  els.viewerCaption.textContent = `${item.name} · ${state.viewerIndex + 1}/${item.photos.length}`;
}

function moveViewer(step) {
  const item = viewerItem();
  if (!item?.photos?.length) return;
  resetViewerZoom();
  state.viewerIndex = (state.viewerIndex + step + item.photos.length) % item.photos.length;
  updateViewer();
}

function closeViewer() {
  resetViewerZoom();
  state.viewer = null;
  els.viewer.hidden = true;
}

function applyViewerZoom() {
  els.viewerImage.style.transform = `scale(${state.zoomScale})`;
}

function resetViewerZoom() {
  clearViewerLongPress();
  state.zoomScale = 1;
  state.pinchDistance = 0;
  state.pinchStartScale = 1;
  state.isPinching = false;
  state.suppressViewerTap = false;
  applyViewerZoom();
}

function clearViewerLongPress() {
  if (state.viewerLongPressTimer) clearTimeout(state.viewerLongPressTimer);
  state.viewerLongPressTimer = 0;
}

function startViewerLongPress() {
  clearViewerLongPress();
  state.viewerLongPressFired = false;
  state.viewerLongPressTimer = setTimeout(() => {
    state.viewerLongPressFired = true;
    state.suppressViewerTap = true;
    shareViewerPhoto();
  }, 650);
}

function touchDistance(touches) {
  const dx = touches[0].clientX - touches[1].clientX;
  const dy = touches[0].clientY - touches[1].clientY;
  return Math.hypot(dx, dy);
}

function toggleViewerZoom() {
  state.zoomScale = state.zoomScale > 1.05 ? 1 : 2.5;
  applyViewerZoom();
}

function dataUrlToBlob(dataUrl) {
  const [head, body] = String(dataUrl).split(",");
  const mime = head.match(/data:([^;]+)/)?.[1] || "image/jpeg";
  const binary = atob(body || "");
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i += 1) bytes[i] = binary.charCodeAt(i);
  return new Blob([bytes], { type: mime });
}

function safeFileName(name = "rostlina") {
  return `${String(name || "rostlina").normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/gi, "-").replace(/^-+|-+$/g, "").toLowerCase() || "rostlina"}.jpg`;
}

async function shareViewerPhoto() {
  const item = viewerItem();
  const src = item?.photos?.[state.viewerIndex];
  if (!src) return;
  try {
    const blob = src.startsWith("data:") ? dataUrlToBlob(src) : await fetch(src).then((response) => response.blob());
    const file = new File([blob], safeFileName(`${item.name}-${state.viewerIndex + 1}`), { type: blob.type || "image/jpeg" });
    if (navigator.canShare?.({ files: [file] })) {
      await navigator.share({ title: item.name, files: [file] });
      return;
    }
  } catch (error) {
    console.warn(error);
  }
}

function bind() {
  els.copyDeviceId.addEventListener("click", async () => {
    await copyText(state.deviceId, "Copy device ID:");
    els.copyDeviceId.textContent = "ID copied";
    setTimeout(() => { els.copyDeviceId.textContent = "Copy ID"; }, 1400);
  });

  els.lockForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    els.lockError.hidden = true;
    const license = await verifyUnlockCode(els.lockInput.value, state.deviceId);
    if (!license) {
      els.lockError.hidden = false;
      els.lockInput.focus();
      return;
    }
    writeLicense(license);
    state.license = license;
    state.unlocked = true;
    renderLock();
    render();
    hydrate();
  });

  els.search.addEventListener("input", (event) => {
    state.search = event.target.value;
    render();
  });

  document.querySelectorAll("[data-view]").forEach((button) => {
    button.addEventListener("click", () => {
      state.view = button.dataset.view || "plants";
      state.editing = null;
      state.detail = null;
      state.addOpen = false;
      render();
    });
  });

  document.querySelector("[data-add-main]").addEventListener("click", () => {
    state.addOpen = true;
    state.editing = null;
    render();
  });

  document.addEventListener("click", (event) => {
    if (event.target.closest("[data-add-close]")) {
      state.addOpen = false;
      render();
      return;
    }
    const choice = event.target.closest("[data-add-choice]");
    if (choice) return openAdd(choice.dataset.addChoice);
    const category = event.target.closest("[data-category]");
    if (category) {
      state.category = category.dataset.category || "all";
      render();
      return;
    }
    const editPlant = event.target.closest("[data-edit-plant]");
    if (editPlant) {
      state.editing = { kind: "plant", id: editPlant.dataset.editPlant };
      render();
      return;
    }
    const editAlbum = event.target.closest("[data-edit-album]");
    if (editAlbum) {
      state.editing = { kind: "album", id: editAlbum.dataset.editAlbum };
      render();
      return;
    }
    const editCustomer = event.target.closest("[data-edit-customer]");
    if (editCustomer) {
      state.editing = { kind: "customer", id: editCustomer.dataset.editCustomer };
      render();
      return;
    }
    const openPlant = event.target.closest("[data-open-plant]");
    if (openPlant) {
      state.detail = { kind: "plant", id: openPlant.dataset.openPlant };
      render();
      return;
    }
    const openAlbum = event.target.closest("[data-open-album]");
    if (openAlbum) return openViewer({ kind: "album", id: openAlbum.dataset.openAlbum }, 0);
    const photoOpen = event.target.closest("[data-photo-open]");
    if (photoOpen && state.detail) return openViewer(state.detail, Number(photoOpen.dataset.photoOpen || 0));
    if (event.target.closest("[data-detail-close]")) {
      state.detail = null;
      render();
      return;
    }
    if (event.target.closest("[data-detail-edit]") && state.detail?.kind === "plant") {
      state.editing = { kind: "plant", id: state.detail.id };
      state.detail = null;
      render();
      return;
    }
    if (event.target.closest("[data-cancel-edit]")) {
      state.editing = null;
      render();
      return;
    }
    const photoDelete = event.target.closest("[data-photo-delete]");
    if (photoDelete) return deletePhoto(Number(photoDelete.dataset.photoDelete));
    const photoMain = event.target.closest("[data-photo-main]");
    if (photoMain) return makePhotoMain(Number(photoMain.dataset.photoMain));
    if (event.target.closest("[data-delete-current]")) return deleteCurrent();
  });

  document.addEventListener("submit", (event) => {
    if (event.target?.id === "editForm") {
      event.preventDefault();
      submitEdit(event.target);
    }
    if (event.target?.id === "settingsForm") {
      event.preventDefault();
      submitSettings(event.target);
    }
  });

  document.addEventListener("input", (event) => {
    const form = event.target.closest("#settingsForm");
    if (!form) return;
    if (event.target.name === "customColor") {
      form.elements.theme.value = "custom";
      state.data.settings.theme = "custom";
      state.data.settings.customColor = normalizeHex(event.target.value);
      applyTheme();
    }
  });

  document.addEventListener("change", (event) => {
    const form = event.target.closest("#settingsForm");
    if (!form) return;
    if (event.target.name === "theme" || event.target.name === "themeMode") {
      state.data.settings.theme = form.elements.theme.value || "forest";
      state.data.settings.themeMode = form.elements.themeMode.value || "dark";
      state.data.settings.customColor = normalizeHex(form.elements.customColor.value);
      applyTheme();
    }
    if (event.target.name === "language") {
      state.data.settings.language = form.elements.language.value || "cs";
      render();
    }
  });

  $("#viewerClose").addEventListener("click", closeViewer);
  $("#viewerPrev").addEventListener("click", () => moveViewer(-1));
  $("#viewerNext").addEventListener("click", () => moveViewer(1));

  els.viewer.addEventListener("touchstart", (event) => {
    if (event.touches.length === 2) {
      clearViewerLongPress();
      state.isPinching = true;
      state.suppressViewerTap = true;
      state.pinchDistance = touchDistance(event.touches);
      state.pinchStartScale = state.zoomScale;
      return;
    }
    state.touchX = event.changedTouches[0].clientX;
    startViewerLongPress();
  }, { passive: true });

  els.viewer.addEventListener("touchmove", (event) => {
    if (event.touches.length === 2 && state.isPinching && state.pinchDistance) {
      event.preventDefault();
      const ratio = touchDistance(event.touches) / state.pinchDistance;
      state.zoomScale = Math.min(4, Math.max(1, state.pinchStartScale * ratio));
      applyViewerZoom();
      return;
    }
    if (state.viewerLongPressTimer && event.changedTouches?.length) {
      const dx = event.changedTouches[0].clientX - state.touchX;
      if (Math.abs(dx) > 12) clearViewerLongPress();
    }
  }, { passive: false });

  els.viewer.addEventListener("touchend", (event) => {
    clearViewerLongPress();
    if (state.viewerLongPressFired) {
      state.viewerLongPressFired = false;
      return;
    }
    if (state.isPinching || state.suppressViewerTap) {
      if (event.touches.length === 0) {
        state.isPinching = false;
        state.suppressViewerTap = false;
      }
      return;
    }
    const dx = event.changedTouches[0].clientX - state.touchX;
    if (state.zoomScale <= 1.05 && Math.abs(dx) > 40) moveViewer(dx < 0 ? 1 : -1);
  }, { passive: true });

  els.viewerImage.addEventListener("dblclick", toggleViewerZoom);
  window.addEventListener("keydown", (event) => {
    if (els.viewer.hidden) return;
    if (event.key === "ArrowLeft") moveViewer(-1);
    if (event.key === "ArrowRight") moveViewer(1);
    if (event.key === "Escape") closeViewer();
  });
}

function init() {
  state.deviceId = getDeviceId();
  state.license = readLicense();
  state.unlocked = !!state.license;
  bind();
  renderLock();
  if (state.unlocked) {
    render();
    hydrate();
  }
}

init();
