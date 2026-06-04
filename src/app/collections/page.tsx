"use client";
import { BottomNav } from "@/components/layout/BottomNav";
import { StatusBar } from "@/components/ui/StatusBar";
import { useCurrencyStore } from "@/store/currencyStore";

const COLLECTIONS = [
  {
    id: 1,
    client: "Анна Соколова",
    title: "Подборка для Анны",
    count: 3,
    date: "4 июня 2026",
    studios: ["🏛", "🤍", "🌅"],
  },
  {
    id: 2,
    client: "Мария Климова",
    title: "Лофты для Марии",
    count: 2,
    date: "2 июня 2026",
    studios: ["🏛", "🖼"],
  },
];

const STUDIO_CARDS = [
  { emoji: "🏛", name: "Loft Hall", price: 1800 },
  { emoji: "🤍", name: "White Room", price: 2200 },
  { emoji: "🌅", name: "Light Studio", price: 1500 },
  { emoji: "🖼", name: "Art Space", price: 2500 },
];

export default function CollectionsPage() {
  const { format } = useCurrencyStore();

  return (
    <div style={{ background: "#FAF8F5", minHeight: "100%" }}>
      <StatusBar />
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 16px 8px" }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: "#2C2418" }}>Подборки</div>
        <button style={{ background: "#2C2418", color: "#fff", border: "none", borderRadius: 12, padding: "7px 14px", fontSize: 12, fontWeight: 600, cursor: "pointer" }}>
          + Создать
        </button>
      </div>

      <div className="page-scroll" style={{ paddingBottom: 20 }}>
        {/* Existing collections */}
        <div style={{ padding: "0 16px 16px" }}>
          <div style={{ fontSize: 12, fontWeight: 600, color: "#7A6B55", letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: 10 }}>Мои подборки</div>
          {COLLECTIONS.map((c) => (
            <div key={c.id} className="raw-card" style={{ padding: "14px", marginBottom: 10 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: "#2C2418" }}>{c.title}</div>
                  <div style={{ fontSize: 11, color: "#A89880", marginTop: 2 }}>Клиент: {c.client} · {c.date}</div>
                </div>
                <div style={{ display: "flex", gap: -4 }}>
                  {c.studios.map((s, i) => (
                    <div key={i} style={{ width: 28, height: 28, borderRadius: 8, background: "#EDE9E1", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, marginLeft: i > 0 ? -6 : 0, border: "2px solid #FAF8F5" }}>{s}</div>
                  ))}
                </div>
              </div>
              <div style={{ display: "flex", gap: 8, marginTop: 12 }}>
                <div style={{ flex: 1, background: "#F0E8DC", borderRadius: 10, padding: "8px 0", textAlign: "center", fontSize: 11, fontWeight: 600, color: "#8B6B3D" }}>
                  Открыть
                </div>
                <div style={{ flex: 1, background: "#2C2418", borderRadius: 10, padding: "8px 0", textAlign: "center", fontSize: 11, fontWeight: 600, color: "#FFFFFF" }}>
                  Отправить клиенту
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pinterest-style grid */}
        <div style={{ padding: "0 16px 16px" }}>
          <div style={{ fontSize: 12, fontWeight: 600, color: "#7A6B55", letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: 10 }}>Добавить студии</div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
            {STUDIO_CARDS.map((s, i) => (
              <div key={i} className="raw-card" style={{ overflow: "hidden" }}>
                <div style={{ height: 80, background: "#EDE9E1", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 32, position: "relative" }}>
                  {s.emoji}
                  <div style={{ position: "absolute", top: 6, right: 6, width: 20, height: 20, background: "#8B6B3D", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <span style={{ color: "white", fontSize: 11, fontWeight: 700 }}>+</span>
                  </div>
                </div>
                <div style={{ padding: "8px 10px" }}>
                  <div style={{ fontSize: 11, fontWeight: 600, color: "#2C2418" }}>{s.name}</div>
                  <div style={{ fontSize: 10, color: "#A89880", marginTop: 2 }}>от {format(s.price)}/ч</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <BottomNav />
    </div>
  );
}
