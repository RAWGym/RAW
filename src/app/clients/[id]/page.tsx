"use client";
import Link from "next/link";
import { BottomNav } from "@/components/layout/BottomNav";
import { StatusBar } from "@/components/ui/StatusBar";
import { useCurrencyStore } from "@/store/currencyStore";

const TABS = ["История", "Заметки", "Файлы", "Договоры"];

const CLIENTS: Record<string, { name: string; phone: string; email: string; totalSessions: number; totalRevenue: number }> = {
  "1": { name: "Анна Соколова", phone: "+7 916 123-45-67", email: "anna@example.com", totalSessions: 12, totalRevenue: 84000 },
  "2": { name: "Михаил Петров", phone: "+7 926 234-56-78", email: "mikhail@example.com", totalSessions: 8, totalRevenue: 56000 },
  "3": { name: "Елена Козлова", phone: "+7 936 345-67-89", email: "elena@example.com", totalSessions: 5, totalRevenue: 35000 },
};

export function generateStaticParams() {
  return Object.keys(CLIENTS).map((id) => ({ id }));
}

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
      <div style={{ padding: "16px 16px 0" }}>
        <div style={{ background: "#FFFFFF", borderRadius: 16, padding: 16, border: "1px solid rgba(139,115,85,0.15)", marginBottom: 12 }}>
          <div style={{ fontSize: 14, color: "#8B7355", marginBottom: 8 }}>Контакты</div>
          <div style={{ fontSize: 14, color: "#2C2418", marginBottom: 4 }}>📞 +7 916 123-45-67</div>
          <div style={{ fontSize: 14, color: "#2C2418" }}>✉️ anna@example.com</div>
        </div>
        <div style={{ display: "flex", gap: 8, marginBottom: 12 }}>
          {TABS.map((tab) => (
            <div key={tab} style={{ padding: "6px 12px", borderRadius: 20, background: tab === "История" ? "#2C2418" : "#FFFFFF", color: tab === "История" ? "#FAF8F5" : "#8B7355", fontSize: 13, border: "1px solid rgba(139,115,85,0.2)", cursor: "pointer" }}>
              {tab}
            </div>
          ))}
        </div>
        <div style={{ background: "#FFFFFF", borderRadius: 16, padding: 16, border: "1px solid rgba(139,115,85,0.15)" }}>
          <div style={{ fontSize: 14, color: "#8B7355", textAlign: "center", padding: 20 }}>История съёмок пуста</div>
        </div>
      </div>
      <BottomNav />
    </div>
  );
}
