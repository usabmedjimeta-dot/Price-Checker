# TRIAX.NG PRICE CHECKER — FULL-STACK PLATFORM DOCUMENTATION

**PRD v1.0 Governance Standards Compliant**  
*Transparent, date-stamped market price intelligence across online e-commerce platforms and open-air physical markets in Nigeria.*

---

## 1. Executive Summary & Project Objective

The **Triax Price Checker** is a professional, scalable, and secure full-stack price intelligence platform designed for Nigerian consumers, contractors, and businesses. It eliminates market price opacity by aggregating, verifying, and date-stamping retail prices across top e-commerce stores (Jumia, Konga, Slot, Pointek, Jiji) and major physical open-air trading hubs (Computer Village Ikeja, Alaba International Market, Bodija Market Ibadan, Wuse/Utako Markets Abuja, and Berger Auto Hub).

The platform calculates fair market median benchmarks, highlights store price gaps, enforces strict 14-day data freshness SLAs, and is architected for future expansion into community receipt uploads, automated OCR processing, and airtime rewards.

---

## 2. Full-Stack System Architecture

```
Price Checker/
├── index.html                  # Responsive Single-Page Application (SPA)
├── styles.css                  # Design System, Glassmorphic UI & Ambient Mesh
├── app.js                      # Client Router, UI Engine & Fallback Benchmarks
├── api.js                      # RESTful API Client, Auth State & Token Management
│
└── server/                     # Full Node.js + TypeScript Backend
    ├── package.json            # Dependencies & Scripts
    ├── tsconfig.json           # TypeScript Strict Configuration
    ├── nodemon.json            # Hot-Reload Dev Configuration
    ├── .env.example            # Environment Configuration Blueprint
    │
    ├── src/
    │   ├── index.ts            # Express App Bootstrap & Security Middleware
    │   ├── config/
    │   │   ├── database.ts     # PostgreSQL Connection Pool (pg)
    │   │   └── env.ts          # Typed Environment Variables
    │   ├── middleware/
    │   │   ├── auth.ts         # JWT Bearer Authentication Guard
    │   │   ├── requireRole.ts  # Role-Based Access Control (RBAC)
    │   │   ├── validate.ts     # Zod Request Validation Wrapper
    │   │   └── errorHandler.ts # Centralized Error Handler & AppError Class
    │   ├── modules/
    │   │   ├── auth/           # Registration, Login, Token Rotation, Logout, Me
    │   │   ├── users/          # User Profiles & Administration
    │   │   ├── products/       # Canonical Products, Search & Full Details
    │   │   ├── categories/     # Category Taxonomy & Icons
    │   │   ├── stores/         # E-commerce & Open-Air Market Directory
    │   │   ├── prices/         # Price Submissions, Recency & History
    │   │   └── admin/          # Governance Dashboard KPIs & Queue Review
    │   └── db/
    │       ├── migrate.ts      # Transactional Migration Runner CLI
    │       └── migrations/
    │           ├── 001_init_schema.sql  # Normalized PostgreSQL Schema
    │           └── 002_seed_data.sql    # 9 Products, 20 Stores, Active Prices
```

---

## 3. Key Features & Recent Updates

### A. Live Location Detection ("Choose a Location")
* **Replaced Static Dropdown**: The header region dropdown was replaced with an interactive **"Choose a location"** live detection widget.
* **HTML5 Geolocation API**: Prompts for real device location when clicked or auto-detects silently when permission is previously granted.
* **Reverse Geocoding**: Integrates with OpenStreetMap Nominatim API to convert coordinates into human-readable Nigerian cities and states (e.g. *Ikeja, Lagos State*).
* **Local Persistence**: Automatically caches detected location in `localStorage` for instant reload.
* **Visual States**: Includes interactive loading spinner, pulsing locator border (`.locating`), success check (`.loc-success`), and error fallback states.

### B. Community Price Contribution System ("Coming Soon")
* **Dedicated Home Page Section**: Introduced a high-impact presentation card titled *"Help Us Track Real Market Prices"*.
* **Strictly Non-Functional (Governance Safe)**: Built purely as a frontend preview marked with animated pulsing `COMING SOON` badges and disabled CTA buttons (`disabled`, `aria-disabled="true"`, `cursor: not-allowed`), ensuring zero premature uploads or mock incentives before executive approval.
* **3-Step Workflow Preview**: Visual explanation cards:
  1. 📸 **Upload Receipt**: Photo or scan of store or market receipt.
  2. ✅ **Verified & Published**: Administrative and statistical price verification.
  3. 🎁 **Earn Airtime Rewards**: Reward points redeemable for mobile airtime (MTN, Airtel, Glo, 9mobile).
* **Reward Dashboard Preview Card**: Visual mock of the future points system displaying `—` values, points conversion rules (e.g., *500 pts = ₦200*), and trust indicators.
* **Database Preparedness**: Dedicated PostgreSQL tables (`community_submissions`, `reward_points`, `price_alerts`) are defined in schema migrations ready for activation once approved.

### C. Enterprise-Grade Node.js + TypeScript Backend
* **Modular Clean Architecture**: Pure TypeScript implementation organized into domain modules (`auth`, `users`, `products`, `categories`, `stores`, `prices`, `admin`).
* **PostgreSQL Normalized Relational Database**:
  * `roles`: Role definitions with granular permissions array (`admin`, `customer`).
  * `users`: Customer & admin accounts with bcrypt-hashed passwords.
  * `categories`: Slugs, icons, hierarchy, and ordering.
  * `products`: Canonical products with specifications (JSONB), brands, models, and conditions.
  * `product_images`: Multi-image support with primary flags and order indices.
  * `stores`: Stores categorized by type (`ecommerce`, `retail_chain`, `open_market`, `distributor`, `marketplace`, `auto_market`).
  * `product_prices`: Date-stamped active price observations with delivery fees and stock status.
  * `price_history`: 6-month historical audit records.
  * `refresh_tokens`: Secure SHA-256 hashed refresh tokens supporting rotation and revocation.
* **Kobo Integer Storage**: All prices and fees are stored as **integer kobo** (`BIGINT`, NGN × 100) in PostgreSQL to prevent IEEE-754 floating-point rounding errors. Responses convert dynamically to Naira for frontend consumption.
* **Statistical Market Assessment Engine**:
  * Sorts active observations and calculates the median fair market price.
  * Enforces the **FR-06 SLA**: requires at least 2 observations within the 14-day threshold to establish high confidence.
  * Outdated observations (>14 days) are tagged as stale and excluded from median calculations.
* **Security & Token Management**:
  * Short-lived JWT Access Tokens (15-minute validity).
  * Long-lived Refresh Tokens (7-day validity) stored as SHA-256 hashes in DB with automatic rotation on refresh.
  * Passwords salted and hashed with `bcrypt` (12 rounds).
  * Role-based access control middleware (`requireRole('admin')`).
  * Strict request validation with `zod`.
  * Security headers via `helmet`, granular `cors`, and authentication brute-force protection via `express-rate-limit`.

### D. Frontend API Layer (`api.js`) & Hybrid Offline Fallback
* **Zero Disruption Migration**: The frontend `index.html` and `app.js` maintain complete backward compatibility.
* **Dynamic Connectivity Detection**: The frontend automatically pings `http://localhost:3001/health`. If the server is offline or not yet configured, the UI smoothly falls back to local canonical data.
* **Status Indicator**: An unobtrusive pill in the navigation bar highlights connection health (`🟢 Live API` vs `🟡 Offline Mode`).
* **Integrated Authentication Modal**: Full Sign In and Account Registration modals accessible directly from the header navigation, equipped with form validation and instant toast feedback.

---

## 4. PostgreSQL Database Schema Diagram

```mermaid
erDiagram
    users {
        uuid id PK
        varchar email UK
        varchar password_hash
        varchar first_name
        varchar last_name
        varchar phone
        uuid role_id FK
        boolean is_active
        timestamptz created_at
        timestamptz updated_at
    }
    roles {
        uuid id PK
        varchar name UK
        text[] permissions
        timestamptz created_at
    }
    categories {
        uuid id PK
        varchar slug UK
        varchar name
        varchar icon
        uuid parent_id FK
        int sort_order
    }
    products {
        uuid id PK
        varchar slug UK
        varchar name
        varchar brand
        varchar model_sku
        text description
        jsonb specifications
        uuid category_id FK
        varchar condition
        varchar pack_size
        varchar warranty
        boolean is_active
        timestamptz created_at
        timestamptz updated_at
    }
    product_images {
        uuid id PK
        uuid product_id FK
        varchar url
        boolean is_primary
        int sort_order
    }
    stores {
        uuid id PK
        varchar slug UK
        varchar name
        varchar store_type
        varchar location_city
        varchar location_state
        varchar website_url
        boolean is_active
        timestamptz created_at
    }
    product_prices {
        uuid id PK
        uuid product_id FK
        uuid store_id FK
        bigint amount_kobo
        varchar currency
        bigint delivery_fee_kobo
        varchar stock_status
        varchar source_url
        timestamptz observed_at
        timestamptz expires_at
        boolean is_active
    }
    price_history {
        uuid id PK
        uuid product_id FK
        uuid store_id FK
        bigint amount_kobo
        bigint delivery_fee_kobo
        timestamptz recorded_at
        varchar change_reason
    }
    refresh_tokens {
        uuid id PK
        uuid user_id FK
        varchar token_hash UK
        timestamptz expires_at
        boolean is_revoked
        timestamptz created_at
        varchar ip_address
    }
    community_submissions {
        uuid id PK
        uuid user_id FK
        uuid product_id FK
        varchar store_name
        varchar location
        bigint amount_kobo
        date purchase_date
        text receipt_url
        varchar status
        uuid reviewed_by FK
        timestamptz reviewed_at
        timestamptz created_at
    }
    reward_points {
        uuid id PK
        uuid user_id FK
        int points
        varchar reason
        uuid submission_id FK
        timestamptz created_at
    }

    users }o--|| roles : "has role"
    products }o--|| categories : "belongs to"
    products ||--o{ product_images : "has images"
    products ||--o{ product_prices : "has prices"
    products ||--o{ price_history : "has history"
    product_prices }o--|| stores : "from store"
    price_history }o--|| stores : "from store"
    users ||--o{ refresh_tokens : "owns"
    users ||--o{ community_submissions : "submits"
    users ||--o{ reward_points : "earns"
```

---

## 5. RESTful API Endpoint Reference

All endpoints return standardized JSON responses:
* **Success**: `{ "success": true, "message": "...", "data": { ... } }`
* **Error**: `{ "success": false, "message": "...", "errors": [ ... ] }`

### Authentication (`/api/auth`)
| Method | Path | Auth Required | Description |
|---|---|---|---|
| `POST` | `/api/auth/register` | Public | Create new customer account |
| `POST` | `/api/auth/login` | Public | Authenticate user; returns tokens & user profile |
| `POST` | `/api/auth/refresh` | Cookie / Bearer | Rotate refresh token and issue new access token |
| `POST` | `/api/auth/logout` | Optional | Revoke refresh token in database & clear cookie |
| `GET` | `/api/auth/me` | Customer / Admin | Fetch authenticated user profile |

### Products (`/api/products`)
| Method | Path | Auth Required | Description |
|---|---|---|---|
| `GET` | `/api/products` | Public | Paginated list with search, category & sort filters |
| `GET` | `/api/products/:id` | Public | Product details, store prices, price range, and history |
| `POST` | `/api/products` | Admin | Create a canonical product entry |
| `PUT` | `/api/products/:id` | Admin | Update product information |
| `DELETE`| `/api/products/:id` | Admin | Soft-delete product (`is_active = false`) |

### Prices & History (`/api/prices`)
| Method | Path | Auth Required | Description |
|---|---|---|---|
| `POST` | `/api/prices` | Admin | Submit a verified price observation & append to history |
| `GET` | `/api/prices/products/:id/prices` | Public | All active observations for a product |
| `GET` | `/api/prices/products/:id/history` | Public | 6-month monthly historical price points |

### Categories & Stores
| Method | Path | Auth Required | Description |
|---|---|---|---|
| `GET` | `/api/categories` | Public | List all product categories |
| `POST` | `/api/categories` | Admin | Add new product category |
| `GET` | `/api/stores` | Public | Directory of online stores and physical market hubs |
| `POST` | `/api/stores` | Admin | Register new store/market |

### Governance & Administration (`/api/admin`)
| Method | Path | Auth Required | Description |
|---|---|---|---|
| `GET` | `/api/admin/stats` | Admin | System KPIs (Freshness Index, store counts, observations) |
| `GET` | `/api/admin/reports` | Admin | Crowdsourced feedback & price mismatch review queue |
| `PUT` | `/api/admin/reports/:id` | Admin | Approve, reject, or mark reports as in-review |

---

## 6. How to Run the Platform

### Option A: Static Frontend Only (Instant Preview)
1. Double click or open `index.html` in any web browser.
2. The frontend runs completely standalone with embedded canonical benchmarks, responsive theme toggling, live geolocation, deals carousel, interactive quote calculator, and the Community Price Contribution coming soon preview.

### Option B: Full-Stack Mode (Node.js + TypeScript + PostgreSQL)

#### 1. Setup Environment
Navigate to the `server/` directory and configure the environment variables:
```bash
cd "server"
cp .env.example .env
```
Edit `.env` to configure your PostgreSQL credentials:
```env
PORT=3001
DATABASE_URL=postgresql://postgres:your_password@localhost:5432/triax_price_checker
JWT_SECRET=super_secret_jwt_key_at_least_64_characters_long_for_security_123456
JWT_EXPIRES_IN=15m
REFRESH_TOKEN_EXPIRES_DAYS=7
CORS_ORIGIN=http://localhost:3000
BCRYPT_ROUNDS=12
```

#### 2. Install Server Dependencies
```bash
npm install
```

#### 3. Run Database Migrations & Seeds
Run the automated migration runner to create tables and seed 9 canonical products, 20 stores, active prices, and 6-month price histories:
```bash
npm run migrate
```
*(To completely reset and rebuild the database from scratch: `npm run migrate:reset`)*

#### 4. Start the Backend API Server
For development with hot-reload:
```bash
npm run dev
```
For production build and execution:
```bash
npm run build
npm start
```
The API will start at `http://localhost:3001`. You can verify operational status by opening:
`http://localhost:3001/health`

#### 5. Open Frontend
Open `index.html` in your browser. The navigation pill will switch to **`🟢 Live API`**, signaling that all product queries, authentication requests, and price comparisons are streaming live from PostgreSQL!

---

## 7. Future Expansion Roadmap (Pending Stakeholder Approval)

1. **OCR / AI Receipt Parsing**: Automated parsing of receipt images to extract store name, total paid, items purchased, and transaction dates.
2. **Community Airtime Rewards Engine**: Automated VTU (Virtual Top-Up) API integration to credit Nigerian mobile lines upon submission approval.
3. **Automated E-Commerce Crawlers**: Scheduled background jobs to pull live daily prices from Jumia and Konga APIs.
4. **Physical Market Agent Network**: Field agent mobile portal for price auditors in Computer Village (Ikeja) and Alaba International Market.
