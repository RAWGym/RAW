"use client";
import Link from "next/link";
import { BottomNav } from "@/components/layout/BottomNav";
import { StatusBar } from "@/components/ui/StatusBar";
import { useCurrencyStore } from "@/store/currencyStore";

const TABS = ["История", "Заметки", "Файлы", "Договоры"];

export default function ClientDetailPage() {
  const { format } = useCurrencyStore();

  return (
    <div style={{ background: "#FAF8F5", minHeight: "100%" }}>
      <StatusBar />
      <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 16px 0" }}>
        <Link href="/clients" style={{ width: 36, height: 36, borderRadius: 12, background: "#FFFFFF", border: "1px solid rgba(139,115,85,0.15)", display: "flex", alignItems: "center", justifyContent: "center", textDecoration: "none" }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2C2418" strokeWidth="2" strokeLinecap="round"><polyline points="15 18 9 12 15 6"/></svg>
        </Link>
        <div style={{ fontSize: 18, fontWeight: 700, color: "#2C2418" }}>Анна Соколова</div>
      </div>

      <div className="page-scroll" style={{ paddingBottom: 20 }}>
        <div style={{ padding: "14px 16px" }}>
          <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
            <div style={{ width: 60, height: 60, borderRadius: 18, background: "#F0E8DC", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, fontWeight: 700, color: "#8B6B3D", flexShrink: 0 }}>АС</div>
            <div>
              <div style={{ fontSize: 16, fontWeight: 700, color: "#2C2418" }}>Анна Соколова</div>
              <div style={{ fontSize: 11, color: "#A89880", marginTop: 2 }}>@anna_photo</div>
              <div style={{ fontSize: 11, color: "#A89880" }}>+7 999 123-45-67</div>
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginTop: 14 }}>
            <div className="raw-card" style={{ padding: "10px 12px" }}>
              <div style={{ fontSize: 9, color: "#A89880", marginBottom: 4 }}>Всего съёмок</div>
              <div style={{ fontSize: 18, fontWeight: 700, color: "#2C2418" }}>12</div>
            </div>
            <div className="raw-card" style={{ padding: "10px 12px" }}>
              <div style={{ fontSize: 9, color: "#A89880", marginBottom: 4 }}>Потрачено</div>
              <div style={{ fontSize: 14, fontWeight: 700, color: "#4A7C59" }}>{format(86400)}</div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", padding: "0 16px", gap: 0, borderBottom: "1px solid rgba(139,115,85,0.12)" }}>
          {TABS.map((t, i) => (
            <div key={t} style={{ flex: 1, textAlign: "center", padding: "8px 0", fontSize: 11, fontWeight: 600, color: i === 0 ? "#2C2418" : "#A89880", borderBottom: i === 0 ? "2px solid #2C2418" : "2px solid transparent" }}>
              {t}
            </div>
          ))}
        </div>

        {/* History stub */}
        <div style={{ padding: "12px 16px" }}>
          {[
            { date: "4 июня 2026", studio: "Loft Hall · Minimal", amount: 8000 },
            { date: "15 мая 2026", studio: "White Room Studio", amount: 7500 },
            { date: "2 апреля 2026", studio: "Light Studio", amount: 6000 },
          ].map((s, i) => (
            <div key={i} className="raw-card" style={{ padding: "12px 14px", marginBottom: 8, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div>
                <div style={{ fontSize: 12, fontWeight: 600, color: "#2C2418" }}>{s.studio}</div>
                <div style={{ fontSize: 10, color: "#A89880", marginTop: 2 }}>{s.date}</div>
              </div>
              <div style={{ fontSize: 13, fontWeight: 700, color: "#4A7C59" }}>{format(s.amount)}</div>
            </div>
          ))}
        </div>

        {/* Message templates */}
        <div style={{ padding: "0 16px 20px" }}>
          <div style={{ fontSize: 13, fontWeight: 600, color: "#2C2418", marginBottom: 8 }}>Шаблоны сообщений</div>
          {["Подтверждение съёмки", "Напоминание за день", "Готовы фото"].map((t, i) => (
            <div key={i} className="raw-card" style={{ padding: "10px 14px", marginBottom: 6, display: "flex", alignItems: "center", gap: 10 }}>
              <span style={{ fontSize: 14 }}>💬</span>
              <span style={{ fontSize: 12, color: "#7A6B55", fontWeight: 500 }}>{t}</span>
              <svg style={{ marginLeft: "auto" }} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#A89880" strokeWidth="2" strokeLinecap="round"><polyline points="9 18 15 12 9 6"/></svg>
            </div>
          ))}
        </div>
      </div>
      <BottomNav />
    </div>
  );
}
