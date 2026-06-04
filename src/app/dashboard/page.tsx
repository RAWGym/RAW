"use client";
import { BottomNav } from "@/components/layout/BottomNav";
import { StatusBar } from "@/components/ui/StatusBar";
import { RawLogo } from "@/components/ui/RawLogo";
import { BonusPill } from "@/components/ui/BonusPill";
import { CurrencySwitcher } from "@/components/ui/CurrencySwitcher";
import { useCurrencyStore } from "@/store/currencyStore";
import Link from "next/link";

const STATS = [
  { label: "Доход за месяц", value: 128450, sub: "+12% к прошлому", green: true },
  { label: "Клиентов", value: null, count: "47", sub: "3 новых за месяц", green: false },
  { label: "Предстоящих съёмок", value: null, count: "8", sub: "Ближайшая сегодня", green: false },
  { label: "Активных проектов", value: null, count: "5", sub: "2 ожидают оплаты", green: false },
];

const ACTIONS = [
  { icon: "📷", label: "Создать съёмку", href: "/calendar" },
  { icon: "👤", label: "Добавить клиента", href: "/clients" },
  { icon: "🏛", label: "Найти студию", href: "/studios" },
  { icon: "💸", label: "Доб. расход", href: "/finance" },
];

export default function DashboardPage() {
  const { format } = useCurrencyStore();

  return (
    <div style={{ background: "#FAF8F5", minHeight: "100%" }}>
      <StatusBar />

      {/* Top bar */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 16px 8px" }}>
        <RawLogo size={36} />
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <CurrencySwitcher />
          <BonusPill />
          <div style={{
            width: 32, height: 32, borderRadius: "50%",
            background: "#F0E8DC", border: "1.5px solid rgba(139,107,61,0.25)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 12, fontWeight: 600, color: "#8B6B3D", position: "relative",
          }}>
            М
            <span style={{
              position: "absolute", top: -1, right: -1,
              width: 8, height: 8, background: "#C44B2A",
              borderRadius: "50%", border: "1.5px solid #FAF8F5",
            }} />
          </div>
        </div>
      </div>

      <div className="page-scroll" style={{ paddingBottom: 20 }}>

        {/* Greeting */}
        <div style={{ padding: "6px 16px 14px" }}>
          <div style={{ fontSize: 22, fontWeight: 700, color: "#2C2418", lineHeight: 1.2 }}>
            Добро пожаловать,{" "}
            <span style={{ color: "#8B6B3D" }}>Максим</span> 👋
          </div>
          <div style={{ fontSize: 12, color: "#A89880", marginTop: 4 }}>
            У вас 3 съёмки на этой неделе
          </div>
        </div>

        {/* Stats grid */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, padding: "0 16px 16px" }}>
          {STATS.map((s, i) => (
            <div key={i} className="raw-card" style={{ padding: "12px 14px" }}>
              <div style={{ fontSize: 10, color: "#A89880", fontWeight: 500, marginBottom: 6, letterSpacing: "0.03em" }}>
                {s.label}
              </div>
              <div style={{
                fontSize: s.value ? 16 : 22,
                fontWeight: 700,
                color: s.green ? "#4A7C59" : "#2C2418",
                lineHeight: 1,
              }}>
                {s.value ? format(s.value) : s.count}
              </div>
              <div style={{ fontSize: 10, color: "#A89880", marginTop: 4 }}>{s.sub}</div>
            </div>
          ))}
        </div>

        {/* Upcoming shooting */}
        <div style={{ padding: "0 16px 16px" }}>
          <div style={{ fontSize: 13, fontWeight: 600, color: "#2C2418", marginBottom: 8 }}>
            Ближайшая съёмка
          </div>
          <div className="raw-card" style={{ padding: "12px 14px", display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{
              width: 52, height: 52, borderRadius: 14,
              background: "#EDE9E1", display: "flex",
              alignItems: "center", justifyContent: "center", fontSize: 22, flexShrink: 0,
            }}>
              🏛
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: "#2C2418" }}>Loft Hall · Зал Minimal</div>
              <div style={{ fontSize: 11, color: "#A89880", marginTop: 3 }}>Сегодня в 14:00 · Клиент: Анна</div>
            </div>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#A89880" strokeWidth="2" strokeLinecap="round"><polyline points="9 18 15 12 9 6"/></svg>
          </div>
        </div>

        {/* Quick actions */}
        <div style={{ padding: "0 16px 24px" }}>
          <div style={{ fontSize: 11, fontWeight: 600, color: "#7A6B55", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 10 }}>
            Быстрые действия
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 8 }}>
            {ACTIONS.map((a) => (
              <Link key={a.href} href={a.href} style={{ textDecoration: "none" }}>
                <div className="raw-card" style={{ padding: "10px 4px", textAlign: "center" }}>
                  <div style={{
                    width: 36, height: 36, background: "#F0E8DC",
                    borderRadius: 11, margin: "0 auto 6px",
                    display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16,
                  }}>
                    {a.icon}
                  </div>
                  <div style={{ fontSize: 9, color: "#7A6B55", fontWeight: 500, lineHeight: 1.3 }}>
                    {a.label}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Modules grid */}
        <div style={{ padding: "0 16px 16px" }}>
          <div style={{ fontSize: 13, fontWeight: 600, color: "#2C2418", marginBottom: 10 }}>Разделы</div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
            {[
              { emoji: "🏛", name: "Студии", desc: "Каталог и подборки", href: "/studios" },
              { emoji: "📅", name: "Календарь", desc: "Расписание съёмок", href: "/calendar" },
              { emoji: "👥", name: "Клиенты", desc: "База и история", href: "/clients" },
              { emoji: "💰", name: "Финансы", desc: "Доходы и расходы", href: "/finance" },
              { emoji: "💡", name: "Схемы света", desc: "Освещение и примеры", href: "/lighting" },
              { emoji: "🤖", name: "AI Ассистент", desc: "Помощник фотографа", href: "/ai" },
            ].map((m) => (
              <Link key={m.href} href={m.href} style={{ textDecoration: "none" }}>
                <div className="raw-card" style={{ padding: "12px 14px", height: "100%" }}>
                  <div style={{ fontSize: 20, marginBottom: 6 }}>{m.emoji}</div>
                  <div style={{ fontSize: 12, fontWeight: 600, color: "#2C2418" }}>{m.name}</div>
                  <div style={{ fontSize: 10, color: "#A89880", marginTop: 2 }}>{m.desc}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>

      </div>

      <BottomNav />
    </div>
  );
}
