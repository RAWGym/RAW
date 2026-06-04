"use client";
import Link from "next/link";
import { BottomNav } from "@/components/layout/BottomNav";
import { StatusBar } from "@/components/ui/StatusBar";
import { useCurrencyStore } from "@/store/currencyStore";
import { CurrencySwitcher } from "@/components/ui/CurrencySwitcher";

const MENU = [
  { emoji: "⭐", label: "RAW Pro", href: "/subscription", badge: "Активна", badgeColor: "#4A7C59" },
  { emoji: "✦", label: "Бонусный баланс", href: "#", value: "2 450 б." },
  { emoji: "📋", label: "История платежей", href: "#" },
  { emoji: "⚙️", label: "Настройки", href: "#" },
  { emoji: "💬", label: "Поддержка", href: "#" },
  { emoji: "🔔", label: "Уведомления", href: "#" },
];

export default function ProfilePage() {
  const { format } = useCurrencyStore();

  return (
    <div style={{ background: "#FAF8F5", minHeight: "100%" }}>
      <StatusBar />

      {/* Currency switcher in header */}
      <div style={{ display: "flex", justifyContent: "flex-end", padding: "8px 16px 0" }}>
        <CurrencySwitcher />
      </div>

      {/* Avatar */}
      <div style={{ textAlign: "center", padding: "16px 16px 12px" }}>
        <div style={{
          width: 72, height: 72, borderRadius: 22,
          background: "#F0E8DC", border: "2px solid rgba(139,107,61,0.2)",
          margin: "0 auto 10px",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 28, fontWeight: 700, color: "#8B6B3D",
        }}>
          М
        </div>
        <div style={{ fontSize: 20, fontWeight: 700, color: "#2C2418" }}>Максим Орлов</div>
        <div style={{ fontSize: 12, color: "#A89880", marginTop: 4 }}>📍 Алматы</div>
        <div style={{ fontSize: 12, color: "#C4965A", marginTop: 4 }}>★★★★★ 4.9</div>
      </div>

      {/* Stats */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8, padding: "0 16px 16px" }}>
        {[
          { val: "47", lbl: "Клиентов" },
          { val: "142", lbl: "Съёмок" },
          { val: format(1200000).replace(" ₽", "").replace(" ₸", ""), lbl: "Доход / год" },
        ].map((s) => (
          <div key={s.lbl} className="raw-card" style={{ padding: "10px", textAlign: "center" }}>
            <div style={{ fontSize: 18, fontWeight: 800, color: "#2C2418" }}>{s.val}</div>
            <div style={{ fontSize: 9, color: "#A89880", marginTop: 2 }}>{s.lbl}</div>
          </div>
        ))}
      </div>

      <div className="page-scroll" style={{ paddingBottom: 20 }}>
        <div style={{ padding: "0 16px", display: "flex", flexDirection: "column", gap: 8 }}>
          {MENU.map((m) => (
            <Link key={m.label} href={m.href} style={{ textDecoration: "none" }}>
              <div className="raw-card" style={{ padding: "12px 14px", display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{
                  width: 36, height: 36, borderRadius: 10,
                  background: "#F0E8DC", display: "flex", alignItems: "center",
                  justifyContent: "center", fontSize: 16, flexShrink: 0,
                }}>
                  {m.emoji}
                </div>
                <div style={{ flex: 1, fontSize: 13, fontWeight: 500, color: "#2C2418" }}>{m.label}</div>
                {m.badge && (
                  <div style={{ background: "#EAF3DE", borderRadius: 8, padding: "2px 9px", fontSize: 10, fontWeight: 600, color: m.badgeColor }}>
                    {m.badge}
                  </div>
                )}
                {m.value && (
                  <div style={{ fontSize: 12, fontWeight: 700, color: "#8B6B3D" }}>{m.value}</div>
                )}
                {!m.badge && !m.value && (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#A89880" strokeWidth="2" strokeLinecap="round"><polyline points="9 18 15 12 9 6"/></svg>
                )}
              </div>
            </Link>
          ))}

          {/* Sign out */}
          <button style={{
            background: "transparent", border: "1px solid rgba(196,75,42,0.2)",
            borderRadius: 14, padding: "12px 14px", cursor: "pointer",
            fontSize: 13, fontWeight: 500, color: "#C44B2A", width: "100%", marginTop: 4,
          }}>
            Выйти из аккаунта
          </button>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
