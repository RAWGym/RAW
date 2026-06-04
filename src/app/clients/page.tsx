"use client";
import { BottomNav } from "@/components/layout/BottomNav";
import { StatusBar } from "@/components/ui/StatusBar";
import { useCurrencyStore } from "@/store/currencyStore";

const CLIENTS = [
  { initials: "АС", name: "Анна Соколова", ig: "@anna_photo", phone: "+7 999 123-45-67", sessions: 12, spent: 86400 },
  { initials: "МК", name: "Мария Климова", ig: "@masha.k", phone: "+7 916 234-56-78", sessions: 7, spent: 48200 },
  { initials: "ИП", name: "Игорь Петров", ig: "@igorpetrov", phone: "+7 926 345-67-89", sessions: 5, spent: 32500 },
  { initials: "НВ", name: "Наталья Власова", ig: "@nat_vlasova", phone: "+7 903 456-78-90", sessions: 4, spent: 24000 },
  { initials: "ДМ", name: "Дмитрий Медведев", ig: "@d.medv", phone: "+7 985 567-89-01", sessions: 2, spent: 14800 },
  { initials: "ЕК", name: "Елена Козлова", ig: "@elena_k", phone: "+7 906 678-90-12", sessions: 1, spent: 8500 },
];

export default function ClientsPage() {
  const { format } = useCurrencyStore();

  return (
    <div style={{ background: "#FAF8F5", minHeight: "100%" }}>
      <StatusBar />

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 16px 8px" }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: "#2C2418" }}>Клиенты</div>
        <button style={{
          background: "#2C2418", color: "#FFFFFF",
          border: "none", borderRadius: 12, padding: "7px 14px",
          fontSize: 12, fontWeight: 600, cursor: "pointer",
        }}>
          + Клиент
        </button>
      </div>

      {/* Search */}
      <div style={{ padding: "0 16px 12px" }}>
        <div style={{ background: "#FFFFFF", borderRadius: 14, border: "1px solid rgba(139,115,85,0.15)", padding: "10px 14px", display: "flex", alignItems: "center", gap: 10, boxShadow: "0 1px 6px rgba(139,115,85,0.08)" }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#A89880" strokeWidth="2" strokeLinecap="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
          <span style={{ fontSize: 13, color: "#A89880" }}>Поиск по имени или телефону...</span>
        </div>
      </div>

      <div className="page-scroll" style={{ paddingBottom: 20 }}>
        <div style={{ padding: "0 16px", display: "flex", flexDirection: "column", gap: 8 }}>
          {CLIENTS.map((c, i) => (
            <div key={i} className="raw-card" style={{ padding: "12px 14px", display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{
                width: 44, height: 44, borderRadius: 14,
                background: "#F0E8DC", border: "1.5px solid rgba(139,107,61,0.15)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 14, fontWeight: 700, color: "#8B6B3D", flexShrink: 0,
              }}>
                {c.initials}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 13, fontWeight: 600, color: "#2C2418" }}>{c.name}</div>
                <div style={{ fontSize: 10, color: "#A89880", marginTop: 2 }}>{c.ig} · {c.phone}</div>
              </div>
              <div style={{ textAlign: "right", flexShrink: 0 }}>
                <div style={{ fontSize: 12, fontWeight: 700, color: "#2C2418" }}>{c.sessions} съёмок</div>
                <div style={{ fontSize: 10, color: "#A89880", marginTop: 2 }}>{format(c.spent)}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <BottomNav />
    </div>
  );
}
