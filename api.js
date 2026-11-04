/**
 * TRIAX PRICE CHECKER — Frontend API Client
 * ==========================================
 * Thin wrapper around fetch() that communicates with the Node.js backend.
 * All app.js rendering functions remain unchanged — only the data source
 * switches from the hardcoded sampleProducts array to these async calls.
 *
 * Base URL is auto-detected:
 *   - Development: http://localhost:3001
 *   - Production:  same origin as the HTML file
 */

const API_BASE_URL =
  window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1"
    ? "http://localhost:3001"
    : window.location.origin;

// ─── Token Management ────────────────────────────────────────────────────────

const TokenStore = {
  getAccess() {
    return localStorage.getItem("triax_access_token");
  },
  setAccess(token) {
    localStorage.setItem("triax_access_token", token);
  },
  getRefresh() {
    return localStorage.getItem("triax_refresh_token");
  },
  setRefresh(token) {
    localStorage.setItem("triax_refresh_token", token);
  },
  clear() {
    localStorage.removeItem("triax_access_token");
    localStorage.removeItem("triax_refresh_token");
    localStorage.removeItem("triax_user");
  },
  getUser() {
    try {
      const raw = localStorage.getItem("triax_user");
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  },
  setUser(user) {
    localStorage.setItem("triax_user", JSON.stringify(user));
  },
};

// ─── Core fetch wrapper ───────────────────────────────────────────────────────

let _refreshPromise = null; // prevent concurrent refresh races

async function apiFetch(path, options = {}) {
  const url = `${API_BASE_URL}${path}`;
  const accessToken = TokenStore.getAccess();

  const headers = {
    "Content-Type": "application/json",
    ...(accessToken ? { Authorization: `Bearer ${accessToken}` } : {}),
    ...(options.headers || {}),
  };

  let response = await fetch(url, { ...options, headers });

  // Auto-refresh on 401
  if (response.status === 401 && TokenStore.getRefresh()) {
    if (!_refreshPromise) {
      _refreshPromise = AuthAPI.refresh().finally(() => {
        _refreshPromise = null;
      });
    }
    const refreshed = await _refreshPromise;
    if (refreshed) {
      // Retry original request with new token
      headers["Authorization"] = `Bearer ${TokenStore.getAccess()}`;
      response = await fetch(url, { ...options, headers });
    }
  }

  const json = await response.json().catch(() => ({ success: false, message: "Invalid server response" }));

  if (!response.ok) {
    const err = new Error(json.message || `HTTP ${response.status}`);
    err.status = response.status;
    err.errors = json.errors || [];
    throw err;
  }

  return json;
}

// ─── Auth API ─────────────────────────────────────────────────────────────────

const AuthAPI = {
  async register({ email, password, firstName, lastName, phone }) {
    const res = await apiFetch("/api/auth/register", {
      method: "POST",
      body: JSON.stringify({ email, password, firstName, lastName, phone }),
    });
    if (res.data?.accessToken) {
      TokenStore.setAccess(res.data.accessToken);
      TokenStore.setRefresh(res.data.refreshToken);
      TokenStore.setUser(res.data.user);
    }
    return res.data;
  },

  async login({ email, password }) {
    const res = await apiFetch("/api/auth/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });
    if (res.data?.accessToken) {
      TokenStore.setAccess(res.data.accessToken);
      TokenStore.setRefresh(res.data.refreshToken);
      TokenStore.setUser(res.data.user);
    }
    return res.data;
  },

  async refresh() {
    const refreshToken = TokenStore.getRefresh();
    if (!refreshToken) return false;
    try {
      const res = await apiFetch("/api/auth/refresh", {
        method: "POST",
        body: JSON.stringify({ refreshToken }),
      });
      if (res.data?.accessToken) {
        TokenStore.setAccess(res.data.accessToken);
        TokenStore.setRefresh(res.data.refreshToken);
        return true;
      }
    } catch {
      TokenStore.clear();
    }
    return false;
  },

  async logout() {
    try {
      await apiFetch("/api/auth/logout", { method: "POST" });
    } catch {
      // logout even if server fails
    }
    TokenStore.clear();
    updateAuthUI();
  },

  async me() {
    const res = await apiFetch("/api/auth/me");
    return res.data;
  },

  isLoggedIn() {
    return !!TokenStore.getAccess() && !!TokenStore.getUser();
  },

  currentUser() {
    return TokenStore.getUser();
  },
};

// ─── Products API ─────────────────────────────────────────────────────────────

const ProductsAPI = {
  /**
   * List products — maps backend response to the shape app.js expects
   * (same shape as sampleProducts array items)
   */
  async list({ category = "all", search = "", sort = "relevance", page = 1, limit = 50 } = {}) {
    const params = new URLSearchParams({ page, limit, sort });
    if (category && category !== "all") params.set("category", category);
    if (search) params.set("search", search);

    const res = await apiFetch(`/api/products?${params}`);
    return {
      products: (res.data || []).map(mapProductListItem),
      pagination: res.pagination,
    };
  },

  /**
   * Get single product detail — maps to the shape renderProductDetailPage expects
   */
  async get(productId) {
    const res = await apiFetch(`/api/products/${productId}`);
    return mapProductDetail(res.data);
  },

  /** Admin: create product */
  async create(payload) {
    const res = await apiFetch("/api/products", {
      method: "POST",
      body: JSON.stringify(payload),
    });
    return res.data;
  },

  /** Admin: update product */
  async update(productId, payload) {
    const res = await apiFetch(`/api/products/${productId}`, {
      method: "PUT",
      body: JSON.stringify(payload),
    });
    return res.data;
  },
};

// ─── Categories API ───────────────────────────────────────────────────────────

const CategoriesAPI = {
  async list() {
    const res = await apiFetch("/api/categories");
    return res.data || [];
  },
};

// ─── Stores API ───────────────────────────────────────────────────────────────

const StoresAPI = {
  async list() {
    const res = await apiFetch("/api/stores");
    return res.data || [];
  },
};

// ─── Prices API ───────────────────────────────────────────────────────────────

const PricesAPI = {
  async getForProduct(productId) {
    const res = await apiFetch(`/api/products/${productId}/prices`);
    return res.data || [];
  },

  async getHistory(productId) {
    const res = await apiFetch(`/api/products/${productId}/history`);
    return res.data || [];
  },

  /** Admin: submit new price observation */
  async submit(payload) {
    const res = await apiFetch("/api/prices", {
      method: "POST",
      body: JSON.stringify(payload),
    });
    return res.data;
  },
};

// ─── Admin API ────────────────────────────────────────────────────────────────

const AdminAPI = {
  async getStats() {
    const res = await apiFetch("/api/admin/stats");
    return res.data;
  },

  async getReports() {
    const res = await apiFetch("/api/admin/reports");
    return res.data || [];
  },

  async resolveReport(reportId, action) {
    const res = await apiFetch(`/api/admin/reports/${reportId}`, {
      method: "PUT",
      body: JSON.stringify({ action }),
    });
    return res.data;
  },
};

// ─── Response Mappers ─────────────────────────────────────────────────────────
// Map backend response shapes → the exact shape app.js rendering expects

function mapProductListItem(p) {
  return {
    id: p.id,
    name: p.name,
    category: p.category?.slug || p.category || "phones",
    brand: p.brand,
    model: p.model_sku,
    condition: p.condition || "Brand New",
    pack_size: p.pack_size || "1 Unit",
    warranty: p.warranty || "",
    image: p.primary_image || "https://images.unsplash.com/photo-1526738549149-8e07eca6c147?auto=format&fit=crop&w=600&q=80",
    dealBadge: p.deal_badge || null,
    marketHigh: p.price_range?.max || 0,
    // Lightweight placeholder observations (full detail loaded on product page)
    observations: buildObservationsFromRange(p),
    history: [],
    _fromApi: true,
  };
}

function mapProductDetail(p) {
  if (!p) return null;
  return {
    id: p.id,
    name: p.name,
    category: p.category?.slug || p.category || "phones",
    brand: p.brand,
    model: p.model_sku,
    condition: p.condition || "Brand New",
    pack_size: p.pack_size || "1 Unit",
    warranty: p.warranty || "",
    description: p.description || "",
    specifications: p.specifications || {},
    image: (p.images?.find((i) => i.is_primary) || p.images?.[0])?.url ||
      "https://images.unsplash.com/photo-1526738549149-8e07eca6c147?auto=format&fit=crop&w=600&q=80",
    dealBadge: p.deal_badge || null,
    marketHigh: p.price_range?.max || 0,
    observations: (p.observations || []).map(mapObservation),
    history: (p.history || []).map((h) => ({ month: h.month, avgPrice: h.avg_price })),
    _fromApi: true,
  };
}

function mapObservation(o) {
  return {
    id: o.id,
    source: o.source,
    storeType: o.store_type,
    amount: o.amount,
    currency: o.currency || "NGN",
    date: o.date,
    location: o.location,
    stock: o.stock_status || "In Stock",
    fee: o.fee || 0,
    url: o.url || "#",
  };
}

function buildObservationsFromRange(p) {
  // Minimal placeholder so price range cards render before full data loads
  if (!p.price_range || !p.price_range.min) return [];
  return [
    { id: "ph-min", source: "Best Price Store", storeType: "jumia", amount: p.price_range.min, currency: "NGN", date: new Date().toISOString().split("T")[0], location: "Nigeria", stock: "In Stock", fee: 0, url: "#" },
    { id: "ph-max", source: "Highest Price Store", storeType: "konga", amount: p.price_range.max, currency: "NGN", date: new Date().toISOString().split("T")[0], location: "Nigeria", stock: "In Stock", fee: 0, url: "#" },
  ];
}

// ─── API Health Check ─────────────────────────────────────────────────────────

const APIHealth = {
  _isOnline: false,
  _checked: false,

  async check() {
    if (this._checked) return this._isOnline;
    try {
      const res = await fetch(`${API_BASE_URL}/health`, { signal: AbortSignal.timeout(3000) });
      this._isOnline = res.ok;
    } catch {
      this._isOnline = false;
    }
    this._checked = true;
    return this._isOnline;
  },

  isOnline() {
    return this._isOnline;
  },
};

// ─── Auth UI Helpers ──────────────────────────────────────────────────────────

function updateAuthUI() {
  const user = TokenStore.getUser();
  const loginBtn = document.getElementById("auth-login-btn");
  const userPill = document.getElementById("auth-user-pill");
  const userNameEl = document.getElementById("auth-user-name");

  if (user) {
    if (loginBtn) loginBtn.classList.add("hidden");
    if (userPill) userPill.classList.remove("hidden");
    if (userNameEl) userNameEl.textContent = user.firstName || user.email.split("@")[0];
  } else {
    if (loginBtn) loginBtn.classList.remove("hidden");
    if (userPill) userPill.classList.add("hidden");
  }
}

// ─── Auth Modal ───────────────────────────────────────────────────────────────

function openAuthModal(defaultTab = "login") {
  const modal = document.getElementById("auth-modal");
  if (!modal) return;
  modal.classList.remove("hidden");
  switchAuthTab(defaultTab);
  document.body.style.overflow = "hidden";
  // Focus first input
  setTimeout(() => {
    const firstInput = modal.querySelector("input:not([type=hidden])");
    if (firstInput) firstInput.focus();
  }, 100);
}

function closeAuthModal() {
  const modal = document.getElementById("auth-modal");
  if (!modal) return;
  modal.classList.add("hidden");
  document.body.style.overflow = "";
  clearAuthErrors();
}

function switchAuthTab(tab) {
  const loginForm = document.getElementById("auth-login-form");
  const registerForm = document.getElementById("auth-register-form");
  const tabs = document.querySelectorAll(".auth-tab-btn");

  tabs.forEach((t) => t.classList.toggle("active", t.dataset.tab === tab));
  if (loginForm) loginForm.classList.toggle("hidden", tab !== "login");
  if (registerForm) registerForm.classList.toggle("hidden", tab !== "register");
}

function clearAuthErrors() {
  document.querySelectorAll(".auth-error-msg").forEach((el) => {
    el.textContent = "";
    el.classList.add("hidden");
  });
  document.querySelectorAll(".auth-input-error").forEach((el) => {
    el.classList.remove("auth-input-error");
  });
}

function showAuthError(formId, message) {
  const el = document.getElementById(`${formId}-error`);
  if (el) {
    el.textContent = message;
    el.classList.remove("hidden");
  }
}

async function handleLogin(e) {
  e.preventDefault();
  clearAuthErrors();
  const email = document.getElementById("login-email")?.value.trim();
  const password = document.getElementById("login-password")?.value;
  const btn = document.getElementById("login-submit-btn");

  if (!email || !password) {
    showAuthError("login-form", "Please fill in all fields.");
    return;
  }

  if (btn) { btn.disabled = true; btn.textContent = "Signing in…"; }

  try {
    await AuthAPI.login({ email, password });
    closeAuthModal();
    updateAuthUI();
    // Show welcome toast
    if (typeof showToast === "function") {
      const user = TokenStore.getUser();
      showToast("Welcome back! 👋", `Signed in as ${user?.firstName || email}`, "✅");
    }
  } catch (err) {
    showAuthError("login-form", err.message || "Login failed. Check your credentials.");
  } finally {
    if (btn) { btn.disabled = false; btn.textContent = "Sign In"; }
  }
}

async function handleRegister(e) {
  e.preventDefault();
  clearAuthErrors();
  const firstName = document.getElementById("reg-firstname")?.value.trim();
  const lastName = document.getElementById("reg-lastname")?.value.trim();
  const email = document.getElementById("reg-email")?.value.trim();
  const password = document.getElementById("reg-password")?.value;
  const confirmPassword = document.getElementById("reg-confirm-password")?.value;
  const btn = document.getElementById("register-submit-btn");

  if (!firstName || !lastName || !email || !password) {
    showAuthError("register-form", "Please fill in all required fields.");
    return;
  }

  if (password !== confirmPassword) {
    showAuthError("register-form", "Passwords do not match.");
    return;
  }

  if (password.length < 8) {
    showAuthError("register-form", "Password must be at least 8 characters.");
    return;
  }

  if (btn) { btn.disabled = true; btn.textContent = "Creating account…"; }

  try {
    await AuthAPI.register({ email, password, firstName, lastName });
    closeAuthModal();
    updateAuthUI();
    if (typeof showToast === "function") {
      showToast("Account Created! 🎉", `Welcome to Triax, ${firstName}!`, "✅");
    }
  } catch (err) {
    showAuthError("register-form", err.message || "Registration failed. Please try again.");
  } finally {
    if (btn) { btn.disabled = false; btn.textContent = "Create Account"; }
  }
}

// ─── Data source: API-first with fallback to sampleProducts ──────────────────
// This is the bridge that makes app.js work with the backend.
// The existing rendering functions call these instead of sampleProducts directly.

const TriaxDataSource = {
  _cache: new Map(),
  _cacheTimeout: 5 * 60 * 1000, // 5 minutes

  _cached(key, data) {
    this._cache.set(key, { data, ts: Date.now() });
  },

  _fromCache(key) {
    const entry = this._cache.get(key);
    if (!entry) return null;
    if (Date.now() - entry.ts > this._cacheTimeout) {
      this._cache.delete(key);
      return null;
    }
    return entry.data;
  },

  async getAllProducts(filters = {}) {
    if (!APIHealth.isOnline()) return window.sampleProducts || [];

    const cacheKey = `products:${JSON.stringify(filters)}`;
    const cached = this._fromCache(cacheKey);
    if (cached) return cached;

    try {
      const { products } = await ProductsAPI.list(filters);
      this._cached(cacheKey, products);
      return products;
    } catch (err) {
      console.warn("[Triax API] Falling back to sampleProducts:", err.message);
      return window.sampleProducts || [];
    }
  },

  async getProduct(productId) {
    if (!APIHealth.isOnline()) {
      return (window.sampleProducts || []).find((p) => p.id === productId) || null;
    }

    const cacheKey = `product:${productId}`;
    const cached = this._fromCache(cacheKey);
    if (cached) return cached;

    try {
      const product = await ProductsAPI.get(productId);
      if (product) this._cached(cacheKey, product);
      return product;
    } catch (err) {
      console.warn("[Triax API] Product fetch failed, using local data:", err.message);
      return (window.sampleProducts || []).find((p) => p.id === productId) || null;
    }
  },

  invalidateCache(productId) {
    if (productId) {
      this._cache.delete(`product:${productId}`);
    } else {
      this._cache.clear();
    }
  },
};

// ─── Init ─────────────────────────────────────────────────────────────────────

async function initAPILayer() {
  // 1. Check if backend is reachable
  const online = await APIHealth.check();

  // 2. Update nav with auth state
  updateAuthUI();

  // 3. Show/hide API status indicator
  const apiIndicator = document.getElementById("api-status-indicator");
  if (apiIndicator) {
    apiIndicator.textContent = online ? "🟢 Live API" : "🟡 Offline Mode";
    apiIndicator.title = online
      ? `Connected to ${API_BASE_URL}`
      : "Using local data — backend not reachable";
  }

  if (online) {
    console.info(`[Triax API] Connected to ${API_BASE_URL}`);
  } else {
    console.warn(`[Triax API] Backend unreachable at ${API_BASE_URL} — using sampleProducts fallback`);
  }
}

// Expose to global scope for app.js and inline handlers
window.TriaxAPI = {
  Auth: AuthAPI,
  Products: ProductsAPI,
  Categories: CategoriesAPI,
  Stores: StoresAPI,
  Prices: PricesAPI,
  Admin: AdminAPI,
  Data: TriaxDataSource,
  Health: APIHealth,
  TokenStore,
  openAuthModal,
  closeAuthModal,
  switchAuthTab,
  handleLogin,
  handleRegister,
  updateAuthUI,
  initAPILayer,
};

// Auto-initialize when DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initAPILayer);
} else {
  initAPILayer();
}


