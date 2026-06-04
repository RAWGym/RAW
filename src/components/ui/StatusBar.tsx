"use client";

export function StatusBar() {
  const time = new Date().toLocaleTimeString("ru-RU", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "12px 20px 4px",
        background: "#FAF8F5",
      }}
    >
      <span style={{ fontSize: 12, fontWeight: 600, color: "#2C2418" }}>
        {time}
      </span>
      <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
        {/* Signal */}
        <svg width="16" height="12" viewBox="0 0 16 12" fill="#2C2418">
          <rect x="0" y="8" width="3" height="4" rx="1"/>
          <rect x="4.5" y="5" width="3" height="7" rx="1"/>
          <rect x="9" y="2" width="3" height="10" rx="1"/>
          <rect x="13.5" y="0" width="2.5" height="12" rx="1" opacity="0.3"/>
        </svg>
        {/* WiFi */}
        <svg width="16" height="12" viewBox="0 0 24 18" fill="none" stroke="#2C2418" strokeWidth="2.2" strokeLinecap="round">
          <path d="M1 7c3-4 6-5.5 11-5.5S20 3 23 7" opacity="0.3"/>
          <path d="M4.5 11c2-2.5 4.5-3.5 7.5-3.5s5.5 1 7.5 3.5"/>
          <path d="M8.5 14.5c1-1.5 2-2 3.5-2s2.5.5 3.5 2"/>
          <circle cx="12" cy="17" r="1.5" fill="#2C2418" stroke="none"/>
        </svg>
        {/* Battery */}
        <svg width="22" height="12" viewBox="0 0 22 12" fill="none">
          <rect x="0.5" y="0.5" width="18" height="11" rx="2.5" stroke="#2C2418" strokeOpacity="0.35"/>
          <rect x="2" y="2" width="14" height="8" rx="1.5" fill="#2C2418"/>
          <path d="M19.5 4v4a2 2 0 0 0 0-4z" fill="#2C2418" opacity="0.4"/>
        </svg>
      </div>
    </div>
  );
}
