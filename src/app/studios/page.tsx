"use client";
import { useState } from "react";
import Link from "next/link";
import { BottomNav } from "@/components/layout/BottomNav";
import { StatusBar } from "@/components/ui/StatusBar";
import { useCurrencyStore } from "@/store/currencyStore";

const FILTERS = ["Все", "Лофт", "Циклорама", "Интерьер", "Минимализм", "Свет"];

const STUDIOS = [
  { id: 1, emoji: "🏛", name: "Loft Hall", addr: "Москва, Красная Пресня", price: 1800, rating: 4.9, reviews: 124, badge: "–15%", badgeColor: "#C44B2A" },
  { id: 2, emoji: "🤍", name: "White Room Studio", addr: "Москва, Таганская", price: 2200, rating: 4.7, reviews: 89, badge: null, badgeColor: null },
  { id: 3, emoji: "🌅", name: "Light Studio", addr: "Москва, Арбат", price: 1500, rating: 4.8, reviews: 41, badge: "Новая", badgeColor: "#4A7C59" },
  { id: 4, emoji: "🖼", name: "Art Space", addr: "Москва, Измайлово", price: 2500, rating: 4.6, reviews: 67, badge: null, badgeColor: null },
];

export default function StudiosPage() {
  const [active, setActive] = useState("Все");
  const { format } = useCurrencyStore();

  return (
    <div style={{ background: "#FAF8F5", minHeight: "100%" }}>
      <StatusBar />
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 16px 8px" }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: "#2C2418" }}>Студии</div>
        <Link href="/collections" style={{ textDecoration: "none", background: "#F0E8DC", border: "1px solid rgba(139,107,61,0.2)", borderRadius: 10, padding: "5px 10px", fontSize: 11, fontWeight: 600, color: "#8B6B3D" }}>
          Подборки
        </Link>
      </div>

      {/* Search */}
      <div style={{ padding: "0 16px 8px" }}>
        <div style={{ background: "#FFFFFF", borderRadius: 14, border: "1px solid rgba(139,115,85,0.15)", padding: "10px 14px", display: "flex", alignItems: "center", gap: 10, boxShadow: "0 1px 6px rgba(139,115,85,0.08)" }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#A89880" strokeWidth="2" strokeLinecap="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
          <span style={{ fontSize: 13, color: "#A89880" }}>Поиск по городу или названию...</span>
        </div>
      </div>

      {/* Filters */}
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
          {STUDIOS.map((s) => (
            <Link key={s.id} href={`/studios/${s.id}`} style={{ textDecoration: "none" }}>
              <div className="raw-card" style={{ overflow: "hidden" }}>
                <div style={{
                  height: 100, background: "#EDE9E1",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 40, position: "relative",
                }}>
                  {s.emoji}
                  {s.badge && (
                    <div style={{
                      position: "absolute", top: 8, right: 8,
                      background: "rgba(255,255,255,0.92)", borderRadius: 8,
                      padding: "2px 9px", fontSize: 11, fontWeight: 600, color: s.badgeColor!,
                    }}>
                      {s.badge}
                    </div>
                  )}
                </div>
                <div style={{ padding: "12px 14px" }}>
                  <div style={{ fontSize: 14, fontWeight: 600, color: "#2C2418" }}>{s.name}</div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 4 }}>
                    <div style={{ fontSize: 11, color: "#A89880" }}>📍 {s.addr}</div>
                    <div style={{ fontSize: 13, fontWeight: 700, color: "#8B6B3D" }}>{format(s.price)}/ч</div>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 6 }}>
                    <div style={{ fontSize: 11, color: "#7A6B55" }}>
                      {"★".repeat(Math.floor(s.rating))}{"☆".repeat(5-Math.floor(s.rating))} {s.rating} · {s.reviews} отзывов
                    </div>
                    <div style={{
                      background: "#F0E8DC", borderRadius: 8, padding: "3px 10px",
                      fontSize: 10, fontWeight: 600, color: "#8B6B3D",
                    }}>
                      В подборку
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <BottomNav />
    </div>
  );
}
