"use client";
import { useState } from "react";
import { BottomNav } from "@/components/layout/BottomNav";
import { StatusBar } from "@/components/ui/StatusBar";

const FILTERS = ["Все", "Портрет", "Мода", "Предмет", "Бьюти"];

const SCHEMES = [
  { emoji: "💡", name: "Рембрандт", cat: "Портрет", sources: "2 источника", settings: "f/5.6 · ISO 100 · 1/160s", level: "Профи" },
  { emoji: "🔆", name: "Бабочка", cat: "Мода", sources: "1 источник", settings: "f/8 · ISO 100 · 1/200s", level: "Начинающий" },
  { emoji: "✨", name: "Flat Lay", cat: "Предмет", sources: "Рассеянный", settings: "f/11 · ISO 50 · 1/250s", level: "Средний" },
  { emoji: "🌟", name: "Сплит", cat: "Бьюти", sources: "2 источника", settings: "f/4 · ISO 200 · 1/125s", level: "Профи" },
  { emoji: "🕯", name: "Свеча", cat: "Портрет", sources: "1 источник", settings: "f/2.8 · ISO 800 · 1/60s", level: "Средний" },
  { emoji: "🌤", name: "Окно", cat: "Портрет", sources: "Естественный", settings: "f/3.5 · ISO 400 · 1/100s", level: "Начинающий" },
];

export default function LightingPage() {
  const [active, setActive] = useState("Все");

  return (
    <div style={{ background: "#FAF8F5", minHeight: "100%" }}>
      <StatusBar />

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 16px 8px" }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: "#2C2418" }}>Схемы света</div>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#7A6B55" strokeWidth="2" strokeLinecap="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
      </div>

      <div style={{ display: "flex", gap: 6, padding: "0 16px 12px", overflowX: "auto", scrollbarWidth: "none" }}>
        {FILTERS.map((f) => (
          <button key={f} onClick={() => setActive(f)} style={{
            flexShrink: 0,
            background: active === f ? "#2C2418" : "#FFFFFF",
            color: active === f ? "#FFFFFF" : "#7A6B55",
            border: active === f ? "1px solid #2C2418" : "1px solid rgba(139,115,85,0.2)",
            borderRadius: 20, padding: "5px 12px", fontSize: 11, fontWeight: 500, cursor: "pointer",
          }}>
            {f}
          </button>
        ))}
      </div>

      <div className="page-scroll" style={{ paddingBottom: 20 }}>
        <div style={{ padding: "0 16px", display: "flex", flexDirection: "column", gap: 10 }}>
          {SCHEMES.map((s, i) => (
            <div key={i} className="raw-card" style={{ overflow: "hidden" }}>
              <div style={{
                height: 90, background: "#EDE9E1",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 40, position: "relative",
              }}>
                {s.emoji}
                <div style={{
                  position: "absolute", bottom: 8, left: 8, right: 8,
                  background: "rgba(44,36,24,0.35)", backdropFilter: "blur(4px)",
                  borderRadius: 8, padding: "3px 8px",
                  display: "flex", justifyContent: "space-between",
                }}>
                  <span style={{ fontSize: 10, color: "rgba(255,255,255,0.9)" }}>{s.settings}</span>
                  <span style={{ fontSize: 9, color: "rgba(255,255,255,0.6)" }}>{s.sources}</span>
                </div>
              </div>
              <div style={{ padding: "10px 14px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div style={{ fontSize: 13, fontWeight: 600, color: "#2C2418" }}>{s.name}</div>
                  <div style={{
                    background: "#F0E8DC", borderRadius: 6, padding: "2px 8px",
                    fontSize: 9, fontWeight: 600, color: "#8B6B3D",
                  }}>
                    {s.level}
                  </div>
                </div>
                <div style={{ display: "flex", gap: 6, marginTop: 6 }}>
                  <div style={{ background: "#F0E8DC", borderRadius: 6, padding: "2px 8px", fontSize: 10, color: "#8B6B3D" }}>{s.cat}</div>
                  <div style={{ background: "#F5F2EC", borderRadius: 6, padding: "2px 8px", fontSize: 10, color: "#7A6B55" }}>{s.sources}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <BottomNav />
    </div>
  );
}
