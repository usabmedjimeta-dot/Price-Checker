/* TRIAX PRICE CHECKER - ADVANCED ENGINE & MULTI-PAGE ROUTER
 * Client-side hash routing, genuine product imagery, ranked store comparisons & PRD compliance
 */

// ==========================================================================
// REALISTIC VECTOR SVG ICON LIBRARY
// ==========================================================================
const SVG_ICONS = {
    fire: `<svg class="ui-icon icon-fire" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>`,
    bolt: `<svg class="ui-icon icon-bolt" viewBox="0 0 24 24" width="14" height="14" fill="currentColor" stroke="none" aria-hidden="true"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>`,
    trendingDown: `<svg class="ui-icon icon-drop" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="23 18 13.5 8.5 8.5 13.5 1 21"/><polyline points="17 18 23 18 23 12"/></svg>`,
    crown: `<svg class="ui-icon icon-crown" viewBox="0 0 24 24" width="14" height="14" fill="currentColor" stroke="none" aria-hidden="true"><path d="M2 4l3 12h14l3-12-6 7-4-7-4 7-6-7zm3 14h14v2H5v-2z"/></svg>`,
    trophy: `<svg class="ui-icon icon-trophy" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.45 1-1 1H8c-.55 0-1 .45-1 1v1h10v-1c0-.55-.45-1-1-1h-1c-.55 0-1-.45-1-1v-2.34"/><path d="M6 4h12a2 2 0 0 1 2 2v5a6 6 0 0 1-12 0V6a2 2 0 0 1-2-2z"/></svg>`,
    check: `<svg class="ui-icon text-green" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="#10b981" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>`,
    checkCircle: `<svg class="ui-icon text-green" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#10b981" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>`,
    alert: `<svg class="ui-icon text-amber" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="#f59e0b" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`,
    lightbulb: `<svg class="ui-icon text-cyan" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="#06b6d4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>`,
    store: `<svg class="ui-icon" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7"/><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4"/><path d="M2 7h20"/></svg>`,
    flag: `<svg class="ui-icon" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" x2="4" y1="22" y2="15"/></svg>`,
    bell: `<svg class="ui-icon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>`,
    calc: `<svg class="ui-icon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect width="16" height="20" x="4" y="2" rx="2"/><line x1="8" x2="16" y1="6" y2="6"/><line x1="16" x2="16" y1="14" y2="14"/><path d="M16 10h.01M12 10h.01M8 10h.01M12 14h.01M8 14h.01M12 18h.01M8 18h.01"/></svg>`,
    searchEmpty: `<svg class="ui-icon" viewBox="0 0 24 24" width="44" height="44" fill="none" stroke="var(--text-muted)" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/><path d="m9.5 9.5 3 3M12.5 9.5l-3 3"/></svg>`,
    sun: `<svg class="ui-icon" viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>`,
    moon: `<svg class="ui-icon" viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>`,
    pin: `<svg class="ui-icon loc-svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg>`,
    loader: `<svg class="ui-icon icon-spin" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg>`
};

function getDealBadgeHtml(dealBadge) {
    if (!dealBadge) return "";
    let iconSvg = SVG_ICONS.bolt;
    let badgeClass = "badge-value";
    if (dealBadge.type === "hot") {
        iconSvg = SVG_ICONS.fire;
        badgeClass = "badge-hot";
    } else if (dealBadge.type === "drop") {
        iconSvg = SVG_ICONS.trendingDown;
        badgeClass = "badge-drop";
    } else if (dealBadge.type === "value") {
        iconSvg = SVG_ICONS.crown;
        badgeClass = "badge-value";
    }
    const cleanText = (dealBadge.text || "Best Deal").replace(/[\u{1F300}-\u{1F9FF}|\u{2600}-\u{26FF}|\u{2700}-\u{27BF}]/gu, '').trim();
    return `<span class="deal-badge ${badgeClass}">${iconSvg} <span>${cleanText}</span></span>`;
}

// ==========================================================================
// 1. CANONICAL PRODUCTS & MULTI-STORE OBSERVATIONS DATABASE (NIGERIA)
// ==========================================================================
const sampleProducts = [
    {
        id: "prod-001",
        name: "Luminous 220Ah 12V Tall Tubular Solar Battery",
        category: "solar",
        brand: "Luminous",
        model: "LPTT12220",
        condition: "Brand New (Factory Sealed)",
        pack_size: "1 Unit (60kg Heavy-Duty)",
        warranty: "24 Months Manufacturer Warranty",
        image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=600&q=80",
        dealBadge: { type: "drop", text: "⚡ 10% Solar Savings" },
        marketHigh: 310000,
        observations: [
            { id: "obs-103", source: "Alaba Int'l Market (Solar Hub)", storeType: "alaba", amount: 280000, currency: "NGN", date: "2026-10-27", location: "Lagos (Physical Market)", stock: "In Stock", fee: 0, url: "https://triax.ng/verify/alaba" },
            { id: "obs-105", source: "Simba Solar Direct Outlet", storeType: "fouani", amount: 288000, currency: "NGN", date: "2026-10-25", location: "Lagos / Ikeja", stock: "In Stock", fee: 2500, url: "https://triax.ng/verify/simba" },
            { id: "obs-101", source: "Jumia Nigeria (Official Store)", storeType: "jumia", amount: 295000, currency: "NGN", date: "2026-10-25", location: "Nationwide Delivery", stock: "In Stock", fee: 4500, url: "https://jumia.com.ng" },
            { id: "obs-104", source: "FCT Solar Supplies Wuse", storeType: "alaba", amount: 305000, currency: "NGN", date: "2026-10-22", location: "Abuja (Physical Walk-in)", stock: "In Stock", fee: 3000, url: "#" },
            { id: "obs-102", source: "Konga Online Shopping", storeType: "konga", amount: 310000, currency: "NGN", date: "2026-10-26", location: "Abuja / Express", stock: "In Stock", fee: 3500, url: "https://konga.com" }
        ],
        history: [
            { month: "May", avgPrice: 260000 },
            { month: "Jun", avgPrice: 265000 },
            { month: "Jul", avgPrice: 275000 },
            { month: "Aug", avgPrice: 285000 },
            { month: "Sep", avgPrice: 290000 },
            { month: "Oct", avgPrice: 295000 }
        ]
    },
    {
        id: "prod-002",
        name: "Apple iPhone 15 Pro Max (256GB, Natural Titanium)",
        category: "phones",
        brand: "Apple",
        model: "A3106",
        condition: "Brand New (Factory Unlocked)",
        pack_size: "1 Unit",
        warranty: "1 Year Official Apple Care",
        image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=600&q=80",
        dealBadge: { type: "hot", text: "🔥 Save ₦100k vs Jumia" },
        marketHigh: 1680000,
        observations: [
            { id: "obs-203", source: "Computer Village Merchant (Otigba)", storeType: "cvillage", amount: 1580000, currency: "NGN", date: "2026-10-28", location: "Lagos (Physical Hub)", stock: "In Stock", fee: 0, url: "#" },
            { id: "obs-202", source: "Pointek Online", storeType: "pointek", amount: 1620000, currency: "NGN", date: "2026-10-26", location: "Abuja & Lagos", stock: "In Stock", fee: 2000, url: "https://pointekonline.com" },
            { id: "obs-201", source: "Slot Systems Nigeria", storeType: "slot", amount: 1650000, currency: "NGN", date: "2026-10-27", location: "Lagos / Nationwide", stock: "In Stock", fee: 0, url: "https://slot.ng" },
            { id: "obs-204", source: "Jumia Official Apple Store", storeType: "jumia", amount: 1680000, currency: "NGN", date: "2026-10-24", location: "Nationwide Delivery", stock: "In Stock", fee: 5000, url: "https://jumia.com.ng" }
        ],
        history: [
            { month: "May", avgPrice: 1800000 },
            { month: "Jun", avgPrice: 1750000 },
            { month: "Jul", avgPrice: 1720000 },
            { month: "Aug", avgPrice: 1680000 },
            { month: "Sep", avgPrice: 1640000 },
            { month: "Oct", avgPrice: 1610000 }
        ]
    },
    {
        id: "prod-006",
        name: "Starlink Standard Actuated Satellite Internet Kit (Gen 2)",
        category: "solar",
        brand: "SpaceX Starlink",
        model: "UTA-212 Standard",
        condition: "Brand New Box Pack",
        pack_size: "1 Complete Kit (Dish, Router, Cable, Base)",
        warranty: "1 Year SpaceX Limited Warranty",
        image: "https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?auto=format&fit=crop&w=600&q=80",
        dealBadge: { type: "value", text: "⚡ High Demand Tech" },
        marketHigh: 680000,
        observations: [
            { id: "obs-601", source: "Starlink Official Nigeria Portal", storeType: "pointek", amount: 590000, currency: "NGN", date: "2026-10-27", location: "Nationwide DHL Direct", stock: "Pre-order / Ships in 7d", fee: 28000, url: "https://starlink.com" },
            { id: "obs-602", source: "Konga Express Delivery", storeType: "konga", amount: 625000, currency: "NGN", date: "2026-10-28", location: "Lagos / Abuja Same-day", stock: "In Stock", fee: 4000, url: "https://konga.com" },
            { id: "obs-603", source: "Computer Village Tech Depot", storeType: "cvillage", amount: 640000, currency: "NGN", date: "2026-10-26", location: "Ikeja (Physical Store)", stock: "In Stock", fee: 0, url: "#" },
            { id: "obs-604", source: "Jumia Verified Tech Vendor", storeType: "jumia", amount: 670000, currency: "NGN", date: "2026-10-25", location: "Nationwide", stock: "In Stock", fee: 5500, url: "https://jumia.com.ng" }
        ],
        history: [
            { month: "May", avgPrice: 450000 },
            { month: "Jun", avgPrice: 510000 },
            { month: "Jul", avgPrice: 560000 },
            { month: "Aug", avgPrice: 620000 },
            { month: "Sep", avgPrice: 615000 },
            { month: "Oct", avgPrice: 610000 }
        ]
    },
    {
        id: "prod-007",
        name: "Apple MacBook Air 13.6-Inch M2 (8GB RAM, 256GB SSD)",
        category: "phones",
        brand: "Apple",
        model: "MLXW3LL/A (Midnight)",
        condition: "Brand New Sealed",
        pack_size: "1 Unit",
        warranty: "1 Year Official Apple Warranty",
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=600&q=80",
        dealBadge: { type: "drop", text: "📉 -12% Price Drop" },
        marketHigh: 1540000,
        observations: [
            { id: "obs-701", source: "Computer Village Apple Specialist", storeType: "cvillage", amount: 1390000, currency: "NGN", date: "2026-10-28", location: "Lagos (Physical Walk-in)", stock: "In Stock", fee: 0, url: "#" },
            { id: "obs-702", source: "Slot Systems Nigeria", storeType: "slot", amount: 1440000, currency: "NGN", date: "2026-10-27", location: "Lagos / Abuja Stores", stock: "In Stock", fee: 0, url: "https://slot.ng" },
            { id: "obs-703", source: "Pointek Computer Store", storeType: "pointek", amount: 1470000, currency: "NGN", date: "2026-10-24", location: "Nationwide", stock: "In Stock", fee: 3500, url: "https://pointekonline.com" },
            { id: "obs-704", source: "Jumia Mall", storeType: "jumia", amount: 1520000, currency: "NGN", date: "2026-10-23", location: "Lagos Delivery", stock: "In Stock", fee: 5000, url: "https://jumia.com.ng" }
        ],
        history: [
            { month: "May", avgPrice: 1590000 },
            { month: "Jun", avgPrice: 1550000 },
            { month: "Jul", avgPrice: 1510000 },
            { month: "Aug", avgPrice: 1480000 },
            { month: "Sep", avgPrice: 1450000 },
            { month: "Oct", avgPrice: 1425000 }
        ]
    },
    {
        id: "prod-005",
        name: "Hisense 55-Inch 4K UHD Smart Frameless TV",
        category: "appliances",
        brand: "Hisense",
        model: "55A6K Series",
        condition: "Brand New with Wall Mount",
        pack_size: "1 Unit (55-Inch Panel)",
        warranty: "2 Years Fouani Official Warranty",
        image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=600&q=80",
        dealBadge: { type: "value", text: "👑 Best Value 4K" },
        marketHigh: 540000,
        observations: [
            { id: "obs-501", source: "Fouani Electronics Showroom", storeType: "fouani", amount: 480000, currency: "NGN", date: "2026-10-27", location: "Lagos / Abuja Outlets", stock: "In Stock", fee: 0, url: "https://fouanistore.com" },
            { id: "obs-502", source: "Alaba Int'l Electronics Market", storeType: "alaba", amount: 470000, currency: "NGN", date: "2026-10-26", location: "Lagos (Physical Market)", stock: "In Stock", fee: 0, url: "#" },
            { id: "obs-503", source: "Konga Electronics", storeType: "konga", amount: 495000, currency: "NGN", date: "2026-10-25", location: "Nationwide Delivery", stock: "In Stock", fee: 4500, url: "https://konga.com" },
            { id: "obs-504", source: "Jumia Verified Merchant", storeType: "jumia", amount: 510000, currency: "NGN", date: "2026-10-24", location: "Nationwide Delivery", stock: "In Stock", fee: 6000, url: "https://jumia.com.ng" }
        ],
        history: [
            { month: "May", avgPrice: 510000 },
            { month: "Jun", avgPrice: 495000 },
            { month: "Jul", avgPrice: 490000 },
            { month: "Aug", avgPrice: 485000 },
            { month: "Sep", avgPrice: 480000 },
            { month: "Oct", avgPrice: 478000 }
        ]
    },
    {
        id: "prod-003",
        name: "Dangote Portland Cement 42.5R (50kg Bag)",
        category: "building",
        brand: "Dangote",
        model: "Grade 42.5R Fast-Set",
        condition: "Factory Fresh Batch",
        pack_size: "50kg Bag (Trailer / Retail)",
        warranty: "SON Certified Standard",
        image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=600&q=80",
        dealBadge: { type: "drop", text: "📉 Stable Rate" },
        marketHigh: 8500,
        observations: [
            { id: "obs-303", source: "Ibadan Building Materials Depot", storeType: "bodija", amount: 7500, currency: "NGN", date: "2026-10-26", location: "Ibadan (Depot Pickup)", stock: "In Stock", fee: 0, url: "#" },
            { id: "obs-302", source: "Kugbo Building Materials Depot", storeType: "alaba", amount: 7650, currency: "NGN", date: "2026-10-27", location: "Abuja", stock: "In Stock", fee: 500, url: "#" },
            { id: "obs-301", source: "Dei-Dei Building Market Dealers", storeType: "cvillage", amount: 7800, currency: "NGN", date: "2026-10-27", location: "Abuja (Physical Yard)", stock: "In Stock", fee: 0, url: "#" }
        ],
        history: [
            { month: "May", avgPrice: 8500 },
            { month: "Jun", avgPrice: 8200 },
            { month: "Jul", avgPrice: 8000 },
            { month: "Aug", avgPrice: 7900 },
            { month: "Sep", avgPrice: 7700 },
            { month: "Oct", avgPrice: 7650 }
        ]
    },
    {
        id: "prod-004",
        name: "Mama Gold Premium Parboiled Rice (50kg Bag)",
        category: "groceries",
        brand: "Mama Gold",
        model: "Long Grain Parboiled Stone-Free",
        condition: "Standard Commercial Bag",
        pack_size: "50kg Sack",
        warranty: "NAFDAC Registered",
        image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80",
        dealBadge: { type: "hot", text: "🔥 High Grocery Volume" },
        marketHigh: 90000,
        observations: [
            { id: "obs-401", source: "Bodija Market Wholesale Dealer", storeType: "bodija", amount: 82000, currency: "NGN", date: "2026-10-27", location: "Ibadan (Open Market)", stock: "In Stock", fee: 0, url: "#" },
            { id: "obs-402", source: "Utako Market Wholesalers", storeType: "alaba", amount: 85000, currency: "NGN", date: "2026-10-25", location: "Abuja (Physical Walk-in)", stock: "In Stock", fee: 1000, url: "#" },
            { id: "obs-403", source: "Mile 12 Food Market", storeType: "cvillage", amount: 83500, currency: "NGN", date: "2026-10-26", location: "Lagos (Physical)", stock: "In Stock", fee: 1500, url: "#" }
        ],
        history: [
            { month: "May", avgPrice: 75000 },
            { month: "Jun", avgPrice: 78000 },
            { month: "Jul", avgPrice: 80000 },
            { month: "Aug", avgPrice: 83000 },
            { month: "Sep", avgPrice: 84000 },
            { month: "Oct", avgPrice: 83500 }
        ]
    },
    {
        id: "prod-008",
        name: "Sony PlayStation 5 Slim Digital Console (1TB SSD)",
        category: "appliances",
        brand: "Sony Interactive",
        model: "CFI-2000 Slim",
        condition: "Brand New Boxed with DualSense",
        pack_size: "1 Complete Console Bundle",
        warranty: "1 Year Sony Warranty",
        image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=600&q=80",
        dealBadge: { type: "drop", text: "⚡ Gaming Benchmark" },
        marketHigh: 850000,
        observations: [
            { id: "obs-801", source: "Computer Village Gaming Arena", storeType: "cvillage", amount: 740000, currency: "NGN", date: "2026-10-28", location: "Lagos (Physical Store)", stock: "In Stock", fee: 0, url: "#" },
            { id: "obs-802", source: "Slot Systems Nigeria", storeType: "slot", amount: 770000, currency: "NGN", date: "2026-10-26", location: "Lagos / Nationwide", stock: "In Stock", fee: 0, url: "https://slot.ng" },
            { id: "obs-803", source: "Konga Electronics", storeType: "konga", amount: 785000, currency: "NGN", date: "2026-10-27", location: "Abuja / Lagos", stock: "In Stock", fee: 3000, url: "https://konga.com" }
        ],
        history: [
            { month: "May", avgPrice: 820000 },
            { month: "Jun", avgPrice: 795000 },
            { month: "Jul", avgPrice: 780000 },
            { month: "Aug", avgPrice: 765000 },
            { month: "Sep", avgPrice: 755000 },
            { month: "Oct", avgPrice: 748000 }
        ]
    },
    {
        id: "prod-009",
        name: "Toyota Corolla 1.8L LE Sedan (2012 Model)",
        category: "vehicles",
        brand: "Toyota",
        model: "Corolla LE 2012",
        condition: "Nigerian-Used (Clean First-Body / Verified Papers)",
        pack_size: "1 Vehicle",
        warranty: "Pre-Purchase Mechanical Inspection Verified",
        image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=600&q=80",
        dealBadge: { type: "value", text: "🚗 Auto Benchmark" },
        marketHigh: 6800000,
        observations: [
            { id: "obs-901", source: "Berger Auto Market Hub", storeType: "berger", amount: 5900000, currency: "NGN", date: "2026-10-27", location: "Lagos (Physical Yard)", stock: "Available", fee: 0, url: "#" },
            { id: "obs-902", source: "Jiji Verified Top Seller", storeType: "jiji", amount: 6200000, currency: "NGN", date: "2026-10-26", location: "Abuja (Inspected)", stock: "Available", fee: 0, url: "https://jiji.ng" },
            { id: "obs-903", source: "Cars45 / Autochek Certified", storeType: "pointek", amount: 6450000, currency: "NGN", date: "2026-10-24", location: "Lagos & Abuja", stock: "Available", fee: 25000, url: "#" }
        ],
        history: [
            { month: "May", avgPrice: 6500000 },
            { month: "Jun", avgPrice: 6400000 },
            { month: "Jul", avgPrice: 6300000 },
            { month: "Aug", avgPrice: 6200000 },
            { month: "Sep", avgPrice: 6100000 },
            { month: "Oct", avgPrice: 6050000 }
        ]
    }
];

// Admin Reports Mock
let userReports = [
    { id: "REP-1001", productId: "prod-001", productName: "Luminous 220Ah Battery", reason: "Outdated Price", details: "FCT Solar Supplies changed price to ₦315,000 yesterday.", date: "2026-10-27", status: "Pending" }
];

// Global Router State
let currentPage = "home";
let currentDetailProductId = "prod-002";
let browseCategoryFilter = "all";
let browseSortOrder = "relevance";
let priceChartInstance = null;
const FRESHNESS_THRESHOLD_DAYS = 14;

// Carousel State
let carouselCurrentIndex = 0;
let carouselAutoplayInterval = null;
let isCarouselPlaying = true;
const CAROUSEL_SLIDE_DURATION = 4500;

// ==========================================================================
// 2. STATISTICAL & PRD ASSESSMENT FUNCTIONS
// ==========================================================================

function formatCurrency(amount) {
    return "₦" + Number(amount).toLocaleString('en-NG');
}

function calculateDaysAgo(dateStr) {
    const obsDate = new Date(dateStr);
    const today = new Date("2026-10-28"); // Fixed PRD anchor date
    const diffTime = Math.abs(today - obsDate);
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
}

// PRD Section 7.2 & 7.3: Robust Statistical Range Calculation Engine
function calculatePriceRange(observations) {
    const freshObs = observations.filter(o => calculateDaysAgo(o.date) <= FRESHNESS_THRESHOLD_DAYS);
    
    // PRD Rule: Minimum 2 fresh observations required for a valid assessment (FR-06)
    if (freshObs.length < 2) {
        return {
            status: "INSUFFICIENT_DATA",
            label: "Insufficient Data",
            explanation: "Not enough recent, comparable prices (minimum 2 fresh observations within 14 days required) to estimate a reliable market range.",
            median: null,
            min: null,
            max: null,
            sampleSize: freshObs.length
        };
    }

    const prices = freshObs.map(o => o.amount).sort((a, b) => a - b);
    
    // Calculate Median
    const mid = Math.floor(prices.length / 2);
    const median = prices.length % 2 !== 0 ? prices[mid] : (prices[mid - 1] + prices[mid]) / 2;

    const min = prices[0];
    const max = prices[prices.length - 1];

    return {
        status: "VALID_RANGE",
        label: "Within Observed Range",
        median: median,
        min: min,
        max: max,
        sampleSize: prices.length,
        explanation: `Based on ${prices.length} verified price observations collected across Nigerian retailers within the last 14 days.`
    };
}

// ==========================================================================
// 3. MULTI-PAGE ROUTER (SPA HASH ROUTING)
// ==========================================================================

function handleRouting() {
    const hash = window.location.hash || "#home";
    let route = "home";
    let params = {};

    if (hash.startsWith("#")) {
        const parts = hash.substring(1).split("?");
        route = parts[0] || "home";
        if (parts[1]) {
            const searchParams = new URLSearchParams(parts[1]);
            searchParams.forEach((val, key) => {
                params[key] = val;
            });
        }
    }

    // Hide all pages
    document.querySelectorAll(".page-view").forEach(page => page.classList.add("hidden"));

    // Update active nav link
    document.querySelectorAll(".nav-link").forEach(link => {
        const linkRoute = link.dataset.route;
        link.classList.toggle("active", linkRoute === route || (route === "product-detail" && linkRoute === "browse"));
    });

    // Route views
    if (route === "home") {
        document.getElementById("page-home").classList.remove("hidden");
        currentPage = "home";
        renderCarousel();
        renderHomeFeaturedProducts();
    } else if (route === "browse") {
        document.getElementById("page-browse").classList.remove("hidden");
        currentPage = "browse";
        if (params.cat) {
            browseCategoryFilter = params.cat;
            const filterEl = document.getElementById("browse-cat-filter");
            if (filterEl) filterEl.value = params.cat;
        }
        renderBrowseProducts();
    } else if (route === "product-detail") {
        document.getElementById("page-product-detail").classList.remove("hidden");
        currentPage = "product-detail";
        const productId = params.id || currentDetailProductId || "prod-002";
        currentDetailProductId = productId;
        renderProductDetailPage(productId);
    } else if (route === "deals") {
        document.getElementById("page-deals").classList.remove("hidden");
        currentPage = "deals";
        renderDealsPage();
    } else if (route === "admin") {
        document.getElementById("page-admin").classList.remove("hidden");
        currentPage = "admin";
        renderAdminReports();
    } else {
        // Fallback to home
        document.getElementById("page-home").classList.remove("hidden");
        currentPage = "home";
        renderHomeFeaturedProducts();
    }

    // Scroll to top on page change
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function navigateTo(routeWithParams) {
    window.location.hash = routeWithParams;
}

function navigateToProduct(productId) {
    navigateTo(`product-detail?id=${productId}`);
}

function navigateToCategory(category) {
    browseCategoryFilter = category;
    navigateTo(`browse?cat=${category}`);
}

// ==========================================================================
// 4. CAROUSEL ENGINE (FEATURING REAL PRODUCT PICTURES)
// ==========================================================================

function getTopDealsForCarousel() {
    return sampleProducts.slice(0, 5);
}

function renderCarousel() {
    const track = document.getElementById("deals-carousel-track");
    const indicatorsBar = document.getElementById("carousel-indicators-bar");
    if (!track || !indicatorsBar) return;

    const deals = getTopDealsForCarousel();
    track.innerHTML = "";
    indicatorsBar.innerHTML = "";

    deals.forEach((product, idx) => {
        const range = calculatePriceRange(product.observations);
        const minPrice = range.min || product.observations[0].amount;
        const highestPrice = product.marketHigh || (range.max ? Math.round(range.max * 1.08) : minPrice);
        const savings = Math.max(0, highestPrice - minPrice);
        
        const sortedObs = [...product.observations].sort((a, b) => (a.amount + (a.fee || 0)) - (b.amount + (b.fee || 0)));
        const bestStore = sortedObs[0];

        const card = document.createElement("div");
        card.className = "deal-slide-card";
        card.innerHTML = `
            <div>
                <div class="slide-badge-row">
                    <span class="deal-badge ${product.dealBadge?.type === 'hot' ? 'badge-hot' : product.dealBadge?.type === 'drop' ? 'badge-drop' : 'badge-value'}">
                        ${product.dealBadge?.text || '🔥 Best Deal'}
                    </span>
                    <span class="slide-category-tag">${product.category}</span>
                </div>

                <div class="slide-content-grid">
                    <div>
                        <h3 class="slide-prod-title">${product.name}</h3>
                        <div class="slide-prod-meta">${product.brand} • ${product.condition}</div>
                    </div>
                    <div class="slide-img-box">
                        <img src="${product.image}" alt="${product.name}" loading="lazy" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1526738549149-8e07eca6c147?auto=format&fit=crop&w=300&q=80';">
                    </div>
                </div>

                <div class="slide-price-container">
                    <div>
                        <div class="lowest-price-label">Lowest Observed Price</div>
                        <div class="lowest-price-val">${formatCurrency(minPrice)}</div>
                    </div>
                    <div style="text-align: right;">
                        <div class="market-high-strike">${formatCurrency(highestPrice)}</div>
                        <span class="savings-tag">Save ${formatCurrency(savings)}!</span>
                    </div>
                </div>
            </div>

            <div>
                <div class="slide-action-row">
                    <div class="store-win-badge">
                        <span class="store-circle ${bestStore.storeType || 'cvillage'}"></span>
                        <span>Cheapest at <strong>${bestStore.source.split('(')[0]}</strong></span>
                    </div>
                    <button class="slide-cta-btn" onclick="navigateToProduct('${product.id}')">
                        <span>Compare All Stores</span>
                        <span>&rarr;</span>
                    </button>
                </div>
            </div>
        `;

        card.addEventListener("click", (e) => {
            if (!e.target.closest(".slide-cta-btn")) {
                navigateToProduct(product.id);
            }
        });

        track.appendChild(card);

        const dot = document.createElement("div");
        dot.className = `indicator-dot ${idx === carouselCurrentIndex ? 'active' : ''}`;
        dot.title = `Go to slide ${idx + 1}`;
        dot.addEventListener("click", () => {
            goToCarouselSlide(idx);
        });
        indicatorsBar.appendChild(dot);
    });

    updateCarouselPosition();
}

function updateCarouselPosition() {
    const track = document.getElementById("deals-carousel-track");
    const dots = document.querySelectorAll(".indicator-dot");
    if (!track) return;

    const isMobile = window.innerWidth <= 840;
    const slideOffset = isMobile ? carouselCurrentIndex * 100 : carouselCurrentIndex * 50;
    track.style.transform = `translateX(-${slideOffset}%)`;

    dots.forEach((dot, idx) => {
        dot.classList.toggle("active", idx === carouselCurrentIndex);
    });
}

function nextCarouselSlide() {
    const deals = getTopDealsForCarousel();
    const maxIndex = window.innerWidth <= 840 ? deals.length - 1 : Math.max(0, deals.length - 2);
    carouselCurrentIndex = carouselCurrentIndex >= maxIndex ? 0 : carouselCurrentIndex + 1;
    updateCarouselPosition();
}

function prevCarouselSlide() {
    const deals = getTopDealsForCarousel();
    const maxIndex = window.innerWidth <= 840 ? deals.length - 1 : Math.max(0, deals.length - 2);
    carouselCurrentIndex = carouselCurrentIndex <= 0 ? maxIndex : carouselCurrentIndex - 1;
    updateCarouselPosition();
}

function goToCarouselSlide(index) {
    carouselCurrentIndex = index;
    updateCarouselPosition();
}

function startCarouselAutoplay() {
    if (carouselAutoplayInterval) clearInterval(carouselAutoplayInterval);
    carouselAutoplayInterval = setInterval(() => {
        if (isCarouselPlaying) {
            nextCarouselSlide();
        }
    }, CAROUSEL_SLIDE_DURATION);
}

function toggleCarouselAutoplay() {
    const playToggleBtn = document.getElementById("carousel-play-toggle");
    isCarouselPlaying = !isCarouselPlaying;
    if (playToggleBtn) {
        playToggleBtn.innerHTML = isCarouselPlaying ? "&#10074;&#10074;" : "&#9658;";
        playToggleBtn.title = isCarouselPlaying ? "Pause Autoplay" : "Resume Autoplay";
    }
}

// ==========================================================================
// 5. HOME PAGE & BROWSE PAGE PRODUCT CARDS (WITH REAL PICTURES)
// ==========================================================================

function createProductCardHtml(product) {
    const range = calculatePriceRange(product.observations);
    let rangeDisplay = range.status === "VALID_RANGE" 
        ? `${formatCurrency(range.min)} - ${formatCurrency(range.max)}`
        : "Data Pending";

    const sortedObs = [...product.observations].sort((a, b) => (a.amount + (a.fee || 0)) - (b.amount + (b.fee || 0)));
    const cheapest = sortedObs[0];

    return `
        <div class="catalog-item-card" onclick="navigateToProduct('${product.id}')">
            <div class="product-img-wrapper">
                <img src="${product.image}" alt="${product.name}" class="product-card-img" loading="lazy" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1526738549149-8e07eca6c147?auto=format&fit=crop&w=400&q=80';">
                <span class="card-category-pill">${product.category}</span>
                ${product.dealBadge ? `<span class="card-savings-pill">${product.dealBadge.text}</span>` : ''}
            </div>

            <div class="product-card-body">
                <div>
                    <div class="card-brand-row">
                        <span>${product.brand}</span>
                        <span>${product.model}</span>
                    </div>
                    <h3 class="card-title">${product.name}</h3>
                </div>

                <div>
                    <div class="card-pricing-row">
                        <div>
                            <div class="card-price-label">Observed Range</div>
                            <div class="card-price-val">${rangeDisplay}</div>
                        </div>
                        <div style="text-align: right;">
                            <span style="font-size: 0.7rem; color: var(--text-muted); display: block;">Cheapest At:</span>
                            <strong style="font-size: 0.825rem; color: var(--brand-emerald);">${cheapest.source.split('(')[0]}</strong>
                        </div>
                    </div>

                    <div class="card-footer-action">
                        <span class="card-store-count">🔍 ${product.observations.length} Verified Stores</span>
                        <button class="btn-card-compare" onclick="event.stopPropagation(); navigateToProduct('${product.id}')">
                            Compare Stores &rarr;
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function renderHomeFeaturedProducts(searchQuery = "") {
    const grid = document.getElementById("home-featured-grid");
    if (!grid) return;
    grid.innerHTML = "";

    const query = (searchQuery || "").toLowerCase().trim();
    let productsToShow = [];

    if (query) {
        productsToShow = sampleProducts.filter(p => 
            p.name.toLowerCase().includes(query) || 
            p.brand.toLowerCase().includes(query) || 
            p.model.toLowerCase().includes(query) || 
            p.category.toLowerCase().includes(query)
        );
    } else {
        // Default first 6 products
        productsToShow = sampleProducts.slice(0, 6);
    }

    if (productsToShow.length === 0) {
        grid.innerHTML = `
            <div style="grid-column: 1 / -1; padding: 2.5rem 1rem; text-align: center; color: var(--text-muted); background: var(--bg-surface); border-radius: var(--radius-md); border: 1px solid var(--border-glass);">
                <div style="font-size: 2rem; margin-bottom: 0.5rem;">🔍</div>
                <h4 style="color: var(--text-primary); font-size: 1.1rem; margin-bottom: 0.25rem;">No comparison matches found for "${searchQuery}"</h4>
                <p style="font-size: 0.85rem;">Click the cancel button (&times;) to reset your search.</p>
            </div>
        `;
        return;
    }

    productsToShow.forEach(prod => {
        grid.innerHTML += createProductCardHtml(prod);
    });
}

function renderBrowseProducts() {
    const grid = document.getElementById("browse-product-grid");
    const countEl = document.getElementById("browse-count");
    const searchInput = document.getElementById("browse-search-input");
    const searchVal = searchInput ? searchInput.value.toLowerCase().trim() : "";
    if (!grid) return;

    let filtered = sampleProducts.filter(p => {
        const matchesCat = browseCategoryFilter === "all" || p.category === browseCategoryFilter;
        const matchesSearch = !searchVal || 
            p.name.toLowerCase().includes(searchVal) || 
            p.brand.toLowerCase().includes(searchVal) || 
            p.model.toLowerCase().includes(searchVal) ||
            p.category.toLowerCase().includes(searchVal);
        return matchesCat && matchesSearch;
    });

    // Apply Sorting
    filtered.sort((a, b) => {
        const rangeA = calculatePriceRange(a.observations);
        const rangeB = calculatePriceRange(b.observations);
        const priceA = rangeA.median || a.observations[0].amount;
        const priceB = rangeB.median || b.observations[0].amount;

        if (browseSortOrder === "price-asc") return priceA - priceB;
        if (browseSortOrder === "price-desc") return priceB - priceA;
        if (browseSortOrder === "obs-count") return b.observations.length - a.observations.length;
        if (browseSortOrder === "name") return a.name.localeCompare(b.name);
        return 0; // relevance
    });

    if (countEl) countEl.textContent = filtered.length;
    grid.innerHTML = "";

    if (filtered.length === 0) {
        grid.innerHTML = `
            <div style="grid-column: 1 / -1; padding: 3rem 1rem; text-align: center; color: var(--text-muted); background: var(--bg-surface); border-radius: var(--radius-lg); border: 1px solid var(--border-glass);">
                <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">🔍</div>
                <h3 style="font-size: 1.25rem; font-weight: 800; color: var(--text-primary); margin-bottom: 0.25rem;">No products match your criteria</h3>
                <p style="font-size: 0.9rem;">Try searching for "iPhone", "Solar", "Cement", or clearing the category filter.</p>
            </div>
        `;
        return;
    }

    filtered.forEach(prod => {
        grid.innerHTML += createProductCardHtml(prod);
    });
}

// ==========================================================================
// 6. DEDICATED PRODUCT DETAIL & MULTI-STORE COMPARISON PAGE (#product-detail)
// ==========================================================================

function renderProductDetailPage(productId) {
    const product = sampleProducts.find(p => p.id === productId);
    const container = document.getElementById("dedicated-product-container");
    const breadcrumbTitle = document.getElementById("detail-breadcrumb-title");

    if (!product || !container) return;

    if (breadcrumbTitle) breadcrumbTitle.textContent = product.name;

    const range = calculatePriceRange(product.observations);

    // Assessment card HTML
    let assessmentHtml = "";
    if (range.status === "INSUFFICIENT_DATA") {
        assessmentHtml = `
            <div class="assessment-card insufficient">
                <div class="assessment-badge-row">
                    <span class="assessment-status">⚠️ Insufficient Fresh Data</span>
                    <span class="assessment-confidence">Rule FR-06 Triggered</span>
                </div>
                <div class="assessment-main-price">Range Pending</div>
                <div class="assessment-explanation">${range.explanation}</div>
            </div>
        `;
    } else {
        assessmentHtml = `
            <div class="assessment-card within">
                <div class="assessment-badge-row">
                    <span class="assessment-status">✓ Verified Market Benchmark</span>
                    <span class="assessment-confidence">High Confidence (Median Model)</span>
                </div>
                <div class="assessment-main-price">${formatCurrency(range.median)} <span>(Fair Market Median)</span></div>
                <div class="assessment-explanation">
                    <strong>Observed Range Bounds:</strong> ${formatCurrency(range.min)} — ${formatCurrency(range.max)}<br>
                    <span>${range.explanation} Only observations dated within the past ${FRESHNESS_THRESHOLD_DAYS} days are admitted.</span>
                </div>
            </div>
        `;
    }

    // Sort observations: Lowest total cost first (Rank #1 = Best Deal)
    const sortedObs = [...product.observations].sort((a, b) => {
        const totalA = a.amount + (a.fee || 0);
        const totalB = b.amount + (b.fee || 0);
        return totalA - totalB;
    });

    const lowestTotalCost = sortedObs[0].amount + (sortedObs[0].fee || 0);

    // Build Ranked Observations Table Rows
    let tableRows = sortedObs.map((obs, rankIdx) => {
        const daysAgo = calculateDaysAgo(obs.date);
        const isStale = daysAgo > FRESHNESS_THRESHOLD_DAYS;
        const totalCost = obs.amount + (obs.fee || 0);
        const delta = totalCost - lowestTotalCost;
        const isWinner = rankIdx === 0 && !isStale;

        let deltaHtml = "";
        if (isWinner) {
            deltaHtml = `<span class="price-delta-badge delta-cheapest">🏆 Best Price</span>`;
        } else {
            deltaHtml = `<span class="price-delta-badge delta-higher">+${formatCurrency(delta)}</span>`;
        }

        return `
            <tr class="${isWinner ? 'best-deal-row' : ''} ${isStale ? 'stale-row' : ''}">
                <td>
                    <div style="display: flex; align-items: center;">
                        <span class="store-rank-badge ${rankIdx === 0 ? 'rank-1' : 'rank-other'}">${rankIdx + 1}</span>
                        <div>
                            <strong>${obs.source}</strong>
                            ${isWinner ? '<span class="best-deal-crown">👑 Lowest Price</span>' : ''}
                            <div style="font-size: 0.75rem; color: var(--text-muted);">${obs.location}</div>
                        </div>
                    </div>
                </td>
                <td>
                    <strong style="font-family: 'JetBrains Mono', monospace; font-size: 0.95rem;">${formatCurrency(obs.amount)}</strong>
                </td>
                <td>${obs.fee > 0 ? formatCurrency(obs.fee) : '<span style="color: var(--brand-emerald); font-weight: 600;">Free / Included</span>'}</td>
                <td>
                    <strong style="color: var(--brand-teal-light); font-family: 'JetBrains Mono', monospace;">${formatCurrency(totalCost)}</strong>
                </td>
                <td>${deltaHtml}</td>
                <td>
                    <span class="freshness-tag ${isStale ? 'freshness-stale' : 'freshness-fresh'}">
                        ${isStale ? `Stale (${daysAgo}d ago)` : `Fresh (${daysAgo}d ago)`}
                    </span>
                </td>
                <td>
                    <a href="${obs.url}" target="_blank" rel="noopener noreferrer" class="btn-store-link">
                        <span>Go to Store</span>
                        <span>&rarr;</span>
                    </a>
                </td>
            </tr>
        `;
    }).join("");

    container.innerHTML = `
        <div class="detail-page-grid">
            <!-- Left Column: Genuine Product Photo & Technical Specs -->
            <div class="detail-img-card">
                <div class="detail-main-img-box">
                    <img src="${product.image}" alt="${product.name}" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1526738549149-8e07eca6c147?auto=format&fit=crop&w=600&q=80';">
                </div>

                <div class="detail-meta-specs">
                    <div class="detail-spec-row">
                        <span class="detail-spec-label">Brand</span>
                        <span class="detail-spec-value">${product.brand}</span>
                    </div>
                    <div class="detail-spec-row">
                        <span class="detail-spec-label">Model SKU</span>
                        <span class="detail-spec-value">${product.model}</span>
                    </div>
                    <div class="detail-spec-row">
                        <span class="detail-spec-label">Condition</span>
                        <span class="detail-spec-value">${product.condition}</span>
                    </div>
                    <div class="detail-spec-row">
                        <span class="detail-spec-label">Pack Unit</span>
                        <span class="detail-spec-value">${product.pack_size}</span>
                    </div>
                    <div class="detail-spec-row">
                        <span class="detail-spec-label">Warranty / Standard</span>
                        <span class="detail-spec-value">${product.warranty || 'Verified Seller Guarantee'}</span>
                    </div>
                </div>

                <div style="margin-top: 1.25rem;">
                    <button class="btn-report" style="width: 100%; text-align: center;" onclick="openReportModal('${product.id}', '${product.name}')">
                        🚩 Report Price Mismatch
                    </button>
                </div>
            </div>

            <!-- Right Column: Benchmark Assessment, Price Alert, Multi-Store Comparison -->
            <div class="detail-content-col">
                <div>
                    <h1 class="page-heading" style="margin-bottom: 0.25rem;">${product.name}</h1>
                    <p style="color: var(--text-muted); font-size: 0.9rem;">
                        Verified market benchmarks across <strong>${product.observations.length}</strong> active Nigerian stores and open-air markets.
                    </p>
                </div>

                ${assessmentHtml}

                <!-- Price Drop Alert Subscription -->
                <div class="price-alert-card">
                    <div class="alert-bell-icon">🔔</div>
                    <div class="alert-text-content">
                        <div class="alert-title">Want a better price on this item?</div>
                        <div class="alert-sub">Set your target price and we'll alert you the moment a seller drops below it.</div>
                    </div>
                    <div class="alert-form-inline">
                        <input type="number" id="target-alert-price" placeholder="Target ₦ (e.g. ${range.median ? Math.round(range.median * 0.95) : 300000})">
                        <input type="text" id="target-alert-contact" placeholder="Email or WhatsApp">
                        <button class="btn-alert-subscribe" onclick="subscribeToPriceAlert('${product.name}')">Set Free Alert</button>
                    </div>
                </div>

                <!-- Interactive Quote Checker Widget -->
                <div class="quote-checker-box">
                    <div class="quote-checker-header">
                        <span>🧮</span>
                        <h4>Test a Seller's Price Quote Against This Benchmark</h4>
                    </div>
                    <div class="quote-input-group">
                        <input type="number" id="user-quote-input" placeholder="Enter seller price in ₦ (e.g. ${range.median || 290000})">
                        <button class="btn-primary" onclick="assessUserQuote('${product.id}')">Assess Quote</button>
                    </div>
                    <div id="quote-result-output"></div>
                </div>
            </div>
        </div>

        <!-- Full-Width Multi-Store Comparison Breakdown Table -->
        <div class="section-title-sm">
            <span>Verified Market Sellers Ranked by Total Cost</span>
            <span style="font-size: 0.775rem; color: var(--text-muted); font-weight: normal;">Ranked #1 is Lowest Net Price</span>
        </div>
        <div class="table-container">
            <table class="data-table">
                <thead>
                    <tr>
                        <th>Store / Seller & Hub</th>
                        <th>Listed Price</th>
                        <th>Est. Delivery</th>
                        <th>Net Total Cost</th>
                        <th>Price Gap</th>
                        <th>Recency</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    ${tableRows}
                </tbody>
            </table>
        </div>

        <!-- Historical Trend Chart -->
        <div class="chart-container">
            <div class="chart-header">
                <div>
                    <h4>6-Month Observed Price Trend (NGN Median)</h4>
                    <span style="font-size: 0.75rem; color: var(--text-muted);">Historical time series audit from verified Nigerian transactions</span>
                </div>
            </div>
            <canvas id="priceTrendChart" height="110"></canvas>
        </div>
    `;

    renderChart(product.history);
}

// Assess Quote Tool
function assessUserQuote(productId) {
    const product = sampleProducts.find(p => p.id === productId);
    const input = document.getElementById("user-quote-input").value;
    const output = document.getElementById("quote-result-output");
    
    if (!input || isNaN(input) || Number(input) <= 0) {
        output.innerHTML = `<span style="color: var(--brand-rose);">⚠️ Please enter a valid numeric price quote in ₦.</span>`;
        return;
    }

    const quote = Number(input);
    const range = calculatePriceRange(product.observations);

    if (range.status === "INSUFFICIENT_DATA") {
        output.innerHTML = `<span style="color: var(--brand-amber);">⚠️ Insufficient fresh market observations to evaluate this quote against benchmarks.</span>`;
        return;
    }

    if (quote > range.max) {
        const diff = quote - range.max;
        output.innerHTML = `
            <div style="background: rgba(244, 63, 94, 0.12); padding: 0.65rem 0.9rem; border-radius: var(--radius-sm); border: 1px solid rgba(244, 63, 94, 0.3); color: var(--brand-rose); margin-top: 0.5rem;">
                ⚠️ <strong>Above Observed Range:</strong> This quote of ${formatCurrency(quote)} is ${formatCurrency(diff)} higher than our highest observed benchmark (${formatCurrency(range.max)}). You may be significantly overpaying.
            </div>
        `;
    } else if (quote < range.min) {
        output.innerHTML = `
            <div style="background: rgba(6, 182, 212, 0.12); padding: 0.65rem 0.9rem; border-radius: var(--radius-sm); border: 1px solid rgba(6, 182, 212, 0.3); color: var(--brand-cyan); margin-top: 0.5rem;">
                💡 <strong>Below Observed Range:</strong> This quote of ${formatCurrency(quote)} is below the minimum verified market price (${formatCurrency(range.min)}). Verify warranty, packaging condition, and merchant authenticity before paying.
            </div>
        `;
    } else {
        output.innerHTML = `
            <div style="background: rgba(16, 185, 129, 0.12); padding: 0.65rem 0.9rem; border-radius: var(--radius-sm); border: 1px solid rgba(16, 185, 129, 0.3); color: var(--brand-emerald); margin-top: 0.5rem;">
                ✓ <strong>Fair Market Price:</strong> Quote of ${formatCurrency(quote)} falls squarely within current verified benchmarks (${formatCurrency(range.min)} — ${formatCurrency(range.max)}).
            </div>
        `;
    }
}

// Subscribe to Price Alert
function subscribeToPriceAlert(productName) {
    const priceInput = document.getElementById("target-alert-price");
    const contactInput = document.getElementById("target-alert-contact");
    const price = priceInput?.value;
    const contact = contactInput?.value;

    if (!price || !contact) {
        showToast("Missing Details", "Please enter both a target price and your contact info.", "⚠️");
        return;
    }

    showToast("Price Alert Active! 🔔", `We'll monitor ${productName} and alert ${contact} when prices drop to ${formatCurrency(price)}.`, "✅");
    if (priceInput) priceInput.value = "";
    if (contactInput) contactInput.value = "";
}

function showToast(title, message, icon = "🔔") {
    const toast = document.getElementById("alert-toast");
    const titleEl = document.getElementById("toast-title");
    const msgEl = document.getElementById("toast-message");
    if (!toast) return;

    if (titleEl) titleEl.textContent = title;
    if (msgEl) msgEl.textContent = message;
    
    toast.classList.remove("hidden");

    setTimeout(() => {
        toast.classList.add("hidden");
    }, 4500);
}

// Chart.js Historical Render
function renderChart(historyData) {
    const canvas = document.getElementById("priceTrendChart");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (priceChartInstance) {
        priceChartInstance.destroy();
    }

    const isDarkMode = document.documentElement.getAttribute("data-theme") === "dark";
    const labels = historyData.map(h => h.month);
    const dataPoints = historyData.map(h => h.avgPrice);

    const gradient = ctx.createLinearGradient(0, 0, 0, 200);
    gradient.addColorStop(0, isDarkMode ? 'rgba(210, 55, 59, 0.4)' : 'rgba(210, 55, 59, 0.25)');
    gradient.addColorStop(1, 'rgba(210, 55, 59, 0.0)');

    priceChartInstance = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Median Price (₦)',
                data: dataPoints,
                borderColor: '#d2373b',
                backgroundColor: gradient,
                fill: true,
                tension: 0.35,
                borderWidth: 3,
                pointBackgroundColor: '#e84e52',
                pointBorderColor: isDarkMode ? '#0f172a' : '#ffffff',
                pointBorderWidth: 2,
                pointRadius: 5,
                pointHoverRadius: 7
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: { display: false },
                tooltip: {
                    backgroundColor: isDarkMode ? '#1e293b' : '#ffffff',
                    titleColor: isDarkMode ? '#f8fafc' : '#0f172a',
                    bodyColor: isDarkMode ? '#94a3b8' : '#475569',
                    borderColor: 'rgba(210, 55, 59, 0.3)',
                    borderWidth: 1,
                    padding: 10,
                    callbacks: {
                        label: function(context) {
                            return 'Median: ₦' + context.parsed.y.toLocaleString('en-NG');
                        }
                    }
                }
            },
            scales: {
                x: {
                    grid: {
                        color: isDarkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)'
                    },
                    ticks: {
                        color: isDarkMode ? '#94a3b8' : '#64748b'
                    }
                },
                y: {
                    grid: {
                        color: isDarkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)'
                    },
                    ticks: {
                        color: isDarkMode ? '#94a3b8' : '#64748b',
                        callback: function(value) { return '₦' + (value >= 1000000 ? (value/1000000).toFixed(1) + 'M' : (value/1000).toFixed(0) + 'k'); }
                    }
                }
            }
        }
    });
}

// ==========================================================================
// 7. DEALS PAGE & ADMIN DATA OPS
// ==========================================================================

function renderDealsPage() {
    const grid = document.getElementById("deals-page-grid");
    if (!grid) return;
    grid.innerHTML = "";

    // Render deals carousel in the deals wrap if present
    const dealsTrack = document.getElementById("deals-page-carousel-track");
    if (dealsTrack && dealsTrack.children.length === 0) {
        const topDeals = getTopDealsForCarousel();
        topDeals.forEach(product => {
            const range = calculatePriceRange(product.observations);
            const minPrice = range.min || product.observations[0].amount;
            const highestPrice = product.marketHigh || minPrice;
            const savings = Math.max(0, highestPrice - minPrice);

            const card = document.createElement("div");
            card.className = "deal-slide-card";
            card.innerHTML = `
                <div>
                    <div class="slide-badge-row">
                        <span class="deal-badge badge-hot">${product.dealBadge?.text || '🔥 Best Deal'}</span>
                        <span class="slide-category-tag">${product.category}</span>
                    </div>
                    <div class="slide-content-grid">
                        <div>
                            <h3 class="slide-prod-title">${product.name}</h3>
                            <div class="slide-prod-meta">${product.brand} • ${product.condition}</div>
                        </div>
                        <div class="slide-img-box">
                            <img src="${product.image}" alt="${product.name}">
                        </div>
                    </div>
                    <div class="slide-price-container">
                        <div>
                            <div class="lowest-price-label">Best Price</div>
                            <div class="lowest-price-val">${formatCurrency(minPrice)}</div>
                        </div>
                        <div style="text-align: right;">
                            <span class="savings-tag">Save ${formatCurrency(savings)}!</span>
                        </div>
                    </div>
                </div>
                <div class="slide-action-row">
                    <button class="slide-cta-btn" onclick="navigateToProduct('${product.id}')">
                        <span>View Deal Breakdown</span> <span>&rarr;</span>
                    </button>
                </div>
            `;
            dealsTrack.appendChild(card);
        });
    }

    // Render all deal-badged products in grid
    sampleProducts.forEach(prod => {
        grid.innerHTML += createProductCardHtml(prod);
    });
}

function renderAdminReports() {
    const tbody = document.getElementById("admin-reports-tbody");
    if (!tbody) return;
    tbody.innerHTML = "";

    userReports.forEach(rep => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td><strong>${rep.id}</strong></td>
            <td>${rep.productName}</td>
            <td><span class="freshness-tag freshness-stale">${rep.reason}</span></td>
            <td>${rep.details}</td>
            <td>${rep.date}</td>
            <td><span style="font-weight: 700; color: ${rep.status === 'Resolved' ? 'var(--brand-emerald)' : 'var(--brand-amber)'}">${rep.status}</span></td>
            <td>
                ${rep.status === 'Pending' 
                    ? `<button class="btn-secondary btn-sm" onclick="resolveReport('${rep.id}')">Verify & Resolve</button>` 
                    : `<span style="color: var(--brand-emerald); font-weight: 600;">✓ Audited</span>`}
            </td>
        `;
        tbody.appendChild(tr);
    });

    const pendingEl = document.getElementById("pending-reports-count");
    if (pendingEl) {
        pendingEl.textContent = userReports.filter(r => r.status === 'Pending').length;
    }
}

function resolveReport(reportId) {
    const rep = userReports.find(r => r.id === reportId);
    if (rep) {
        rep.status = "Resolved";
        renderAdminReports();
        showToast("Report Resolved", `Audit ticket ${reportId} marked verified and closed.`, "🛡️");
    }
}

// Modal Handlers
function openReportModal(productId, productName) {
    document.getElementById("report-product-id").value = productId;
    document.getElementById("report-product-name").value = productName;
    document.getElementById("report-modal").classList.remove("hidden");
}

function closeReportModal() {
    document.getElementById("report-modal").classList.add("hidden");
    document.getElementById("report-form").reset();
}

// ==========================================================================
// 8. SEARCH & AUTOCOMPLETION (HOME & BROWSE)
// ==========================================================================

function setupHomeSearch() {
    const input = document.getElementById("home-search-input");
    const dropdown = document.getElementById("home-search-suggestions");
    const clearBtn = document.getElementById("home-clear-search-btn");
    const searchBtn = document.getElementById("home-search-btn");

    if (!input || !dropdown) return;

    function clearHomeSearch() {
        input.value = "";
        if (clearBtn) clearBtn.classList.add("hidden");
        dropdown.classList.add("hidden");
        dropdown.innerHTML = "";
        renderHomeFeaturedProducts(""); // Clears and resets comparison results immediately
        input.focus();
    }

    input.addEventListener("input", (e) => {
        const val = e.target.value.toLowerCase().trim();
        if (clearBtn) clearBtn.classList.toggle("hidden", val.length === 0);

        // Real-time comparison grid filtering on Home page
        renderHomeFeaturedProducts(val);

        if (val.length < 2) {
            dropdown.classList.add("hidden");
            dropdown.innerHTML = "";
            return;
        }

        const matches = sampleProducts.filter(p => 
            p.name.toLowerCase().includes(val) || 
            p.brand.toLowerCase().includes(val) || 
            p.model.toLowerCase().includes(val) ||
            p.category.toLowerCase().includes(val)
        );

        if (matches.length > 0) {
            dropdown.innerHTML = matches.map(m => `
                <div onclick="navigateToProduct('${m.id}')">
                    <div>
                        <strong>${m.name}</strong>
                        <div style="font-size: 0.75rem; color: var(--text-muted);">${m.brand} • in ${m.category}</div>
                    </div>
                    <span style="font-size: 0.8rem; font-weight: 700; color: var(--brand-teal-light);">Compare ➔</span>
                </div>
            `).join("");
            dropdown.classList.remove("hidden");
        } else {
            dropdown.classList.add("hidden");
            dropdown.innerHTML = "";
        }
    });

    input.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            clearHomeSearch();
        }
    });

    if (clearBtn) {
        clearBtn.addEventListener("click", (e) => {
            e.preventDefault();
            clearHomeSearch();
        });
    }

    if (searchBtn) {
        searchBtn.addEventListener("click", () => {
            const query = input.value.trim();
            if (query) {
                dropdown.classList.add("hidden");
                navigateTo(`browse?cat=all`);
                setTimeout(() => {
                    const browseInput = document.getElementById("browse-search-input");
                    const browseClearBtn = document.getElementById("browse-clear-search-btn");
                    if (browseInput) {
                        browseInput.value = query;
                        if (browseClearBtn) browseClearBtn.classList.remove("hidden");
                        renderBrowseProducts();
                    }
                }, 50);
            } else {
                navigateTo("browse");
            }
        });
    }

    document.addEventListener("click", (e) => {
        if (!input.contains(e.target) && !dropdown.contains(e.target)) {
            dropdown.classList.add("hidden");
        }
    });
}

function setupBrowseSearch() {
    const input = document.getElementById("browse-search-input");
    const clearBtn = document.getElementById("browse-clear-search-btn");
    const catFilter = document.getElementById("browse-cat-filter");
    const sortSelect = document.getElementById("browse-sort-select");

    function clearBrowseSearch() {
        if (input) input.value = "";
        if (clearBtn) clearBtn.classList.add("hidden");
        renderBrowseProducts(); // Resets catalog comparison list immediately
        if (input) input.focus();
    }

    if (input) {
        input.addEventListener("input", (e) => {
            const val = e.target.value.trim();
            if (clearBtn) {
                clearBtn.classList.toggle("hidden", val.length === 0);
            }
            renderBrowseProducts();
        });

        input.addEventListener("keydown", (e) => {
            if (e.key === "Escape") {
                clearBrowseSearch();
            }
        });
    }

    if (clearBtn) {
        clearBtn.addEventListener("click", (e) => {
            e.preventDefault();
            clearBrowseSearch();
        });
    }

    if (catFilter) {
        catFilter.addEventListener("change", (e) => {
            browseCategoryFilter = e.target.value;
            renderBrowseProducts();
        });
    }

    if (sortSelect) {
        sortSelect.addEventListener("change", (e) => {
            browseSortOrder = e.target.value;
            renderBrowseProducts();
        });
    }
}

// ==========================================================================
// 9. INITIALIZATION & GLOBAL LISTENERS
// ==========================================================================

document.addEventListener("DOMContentLoaded", () => {
    // Hash Routing Listener
    window.addEventListener("hashchange", handleRouting);

    // Initial Routing Call
    handleRouting();

    // Start Carousel
    startCarouselAutoplay();

    // Carousel Navigation Controls
    const prevBtn = document.getElementById("carousel-prev-btn");
    const nextBtn = document.getElementById("carousel-next-btn");
    const playToggleBtn = document.getElementById("carousel-play-toggle");
    const carouselViewport = document.getElementById("deals-carousel-viewport");

    if (prevBtn) prevBtn.addEventListener("click", prevCarouselSlide);
    if (nextBtn) nextBtn.addEventListener("click", nextCarouselSlide);
    if (playToggleBtn) playToggleBtn.addEventListener("click", toggleCarouselAutoplay);

    if (carouselViewport) {
        carouselViewport.addEventListener("mouseenter", () => { isCarouselPlaying = false; });
        carouselViewport.addEventListener("mouseleave", () => {
            const playToggle = document.getElementById("carousel-play-toggle");
            if (!playToggle || playToggle.innerHTML.includes("10074") || playToggle.textContent.includes("⏸")) {
                isCarouselPlaying = true;
            }
        });

        // Mobile touch swipe
        let touchStartX = 0;
        let touchEndX = 0;

        carouselViewport.addEventListener("touchstart", (e) => {
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });

        carouselViewport.addEventListener("touchend", (e) => {
            touchEndX = e.changedTouches[0].screenX;
            if (touchStartX - touchEndX > 50) {
                nextCarouselSlide();
            } else if (touchEndX - touchStartX > 50) {
                prevCarouselSlide();
            }
        }, { passive: true });
    }

    // Trending Tags Click (Home)
    document.querySelectorAll(".trend-pill").forEach(pill => {
        pill.addEventListener("click", (e) => {
            const query = e.target.dataset.query;
            const homeInput = document.getElementById("home-search-input");
            const homeClearBtn = document.getElementById("home-clear-search-btn");
            if (homeInput && query) {
                homeInput.value = query;
                if (homeClearBtn) homeClearBtn.classList.remove("hidden");
                renderHomeFeaturedProducts(query);
                const featuredSection = document.querySelector(".home-products-section");
                if (featuredSection) {
                    featuredSection.scrollIntoView({ behavior: "smooth", block: "start" });
                }
            }
        });
    });

    // Setup Searches
    setupHomeSearch();
    setupBrowseSearch();

    // Dark Mode Theme Toggle
    const themeBtn = document.getElementById("theme-toggle-btn");
    const themeIcon = document.getElementById("theme-icon");
    if (themeBtn) {
        themeBtn.addEventListener("click", () => {
            const currentTheme = document.documentElement.getAttribute("data-theme");
            const nextTheme = currentTheme === "dark" ? "light" : "dark";
            document.documentElement.setAttribute("data-theme", nextTheme);
            if (themeIcon) {
                themeIcon.textContent = nextTheme === "dark" ? "☀️" : "🌙";
            }
            // Re-render chart with new theme colors if on detail page
            if (currentPage === "product-detail") {
                const product = sampleProducts.find(p => p.id === currentDetailProductId);
                if (product) renderChart(product.history);
            }
        });
    }

    // Report Form Submission
    const reportForm = document.getElementById("report-form");
    if (reportForm) {
        reportForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const pId = document.getElementById("report-product-id").value;
            const pName = document.getElementById("report-product-name").value;
            const reason = document.getElementById("report-reason").value;
            const details = document.getElementById("report-details").value;

            const newReport = {
                id: `REP-${Math.floor(1000 + Math.random() * 9000)}`,
                productId: pId,
                productName: pName,
                reason: reason,
                details: details,
                date: "2026-10-28",
                status: "Pending"
            };

            userReports.unshift(newReport);
            renderAdminReports();
            closeReportModal();
            showToast("Report Submitted", "Your price discrepancy report has been logged into the audit moderation queue.", "🛡️");
        });
    }

    // Modal Close Triggers
    const closeModalBtn = document.getElementById("close-modal");
    const cancelReportBtn = document.getElementById("cancel-report-btn");
    const toastCloseBtn = document.getElementById("toast-close");

    if (closeModalBtn) closeModalBtn.addEventListener("click", closeReportModal);
    if (cancelReportBtn) cancelReportBtn.addEventListener("click", closeReportModal);
    if (toastCloseBtn) {
        toastCloseBtn.addEventListener("click", () => {
            const toast = document.getElementById("alert-toast");
            if (toast) toast.classList.add("hidden");
        });
    }

    // Window Resize
    window.addEventListener("resize", () => {
        updateCarouselPosition();
    });

    // ── Live Location Widget ──────────────────────────────────────────────────
    initLiveLocation();
});

/**
 * Initialises the "Choose a location" live-location widget in the header.
 * - On first click it requests the browser's Geolocation API.
 * - Resolves coordinates to a human-readable city/region via
 *   the free OpenStreetMap Nominatim reverse-geocoding API (no key needed).
 * - Stores the last-known result in localStorage so it reloads instantly.
 */
function initLiveLocation() {
    const picker   = document.getElementById("location-picker");
    const display  = document.getElementById("loc-display");
    const spinner  = document.getElementById("loc-spinner");
    const icon     = document.getElementById("loc-icon");

    if (!picker || !display) return;

    // Restore cached location immediately
    const cached = localStorage.getItem("triax_location");
    if (cached) {
        display.textContent = cached;
        picker.classList.add("loc-success");
    } else {
        display.textContent = "Tap to detect";
    }

    async function fetchLocation() {
        if (!navigator.geolocation) {
            display.textContent = "Not supported";
            picker.classList.add("loc-error");
            return;
        }

        // Show loading state
        picker.classList.remove("loc-success", "loc-error");
        picker.classList.add("locating");
        spinner.classList.remove("hidden");
        icon.textContent = "🔄";
        display.textContent = "Locating…";

        navigator.geolocation.getCurrentPosition(
            async (pos) => {
                const { latitude, longitude } = pos.coords;
                try {
                    const res  = await fetch(
                        `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`,
                        { headers: { "Accept-Language": "en" } }
                    );
                    const data = await res.json();
                    const addr = data.address || {};

                    // Build a concise label: "City, State" or fallback
                    const city  = addr.city || addr.town || addr.village || addr.county || "";
                    const state = addr.state || addr.region || "";
                    const label = city && state ? `${city}, ${state}` : (city || state || "Location found");

                    display.textContent = label;
                    localStorage.setItem("triax_location", label);
                    picker.classList.remove("locating");
                    picker.classList.add("loc-success");
                    icon.textContent = "📍";
                } catch {
                    display.textContent = `${latitude.toFixed(2)}°, ${longitude.toFixed(2)}°`;
                    picker.classList.remove("locating");
                    picker.classList.add("loc-success");
                    icon.textContent = "📍";
                }
                spinner.classList.add("hidden");
            },
            (err) => {
                const messages = {
                    1: "Permission denied",
                    2: "Unavailable",
                    3: "Timed out",
                };
                display.textContent = messages[err.code] || "Try again";
                picker.classList.remove("locating");
                picker.classList.add("loc-error");
                icon.textContent = "📍";
                spinner.classList.add("hidden");
            },
            { timeout: 10000, maximumAge: 300000 }
        );
    }

    // Click or keyboard activation
    picker.addEventListener("click", fetchLocation);
    picker.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); fetchLocation(); }
    });

    // Auto-detect on page load (silent — won't prompt unless already granted)
    if (navigator.permissions) {
        navigator.permissions.query({ name: "geolocation" }).then((perm) => {
            if (perm.state === "granted") fetchLocation();
        });
    }
}
