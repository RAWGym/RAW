"use client";
import { useParams } from "next/navigation";
import Link from "next/link";
import { BottomNav } from "@/components/layout/BottomNav";
import { StatusBar } from "@/components/ui/StatusBar";
import { useCurrencyStore } from "@/store/currencyStore";

const STUDIOS: Record<string, { emoji: string; name: string; addr: string; price: number; rating: number; reviews: number; desc: string; halls: { name: string; price: number }[] }> = {
  "1": { emoji: "🏛", name: "Loft Hall", addr: "Москва, Красная Пресня", price: 1800, rating: 4.9, reviews: 124, desc: "Просторный лофт с высокими потолками и кирпичными стенами. Идеально для портретных, фэшн и коммерческих съёмок.", halls: [{ name: "Зал Minimal", price: 1800 }, { name: "Зал Industrial", price: 2200 }] },
  "2": { emoji: "🤍", name: "White Room Studio", addr: "Москва, Таганская", price: 2200, rating: 4.7, reviews: 89, desc: "Полностью белое пространство с идеальным естественным освещением.", halls: [{ name: "Основной зал", price: 2200 }] },
  "3": { emoji: "🌅", name: "Light Studio", addr: "Москва, Арбат", price: 1500, rating: 4.8, reviews: 41, desc: "Новая студия с профессиональным оборудованием и мягким светом.", halls: [{ name: "Soft Room", price: 1500 }] },
  "4": { emoji: "🖼", name: "Art Space", addr: "Москва, Измайлово", price: 2500, rating: 4.6, reviews: 67, desc: "Арт-пространство с уникальными декорациями и фонами.", halls: [{ name: "Gallery", price: 2500 }] },
};

export default function StudioDetailPage() {
  const { id } = useParams<{ id: string }>();
  const s = STUDIOS[id] ?? STUDIOS["1"];
  const { format } = useCurrencyStore();

  return (
    <div style={{ background: "#FAF8F5", minHeight: "100%" }}>
      <StatusBar />
      <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 16px 0" }}>
        <Link href="/studios" style={{ width: 36, height: 36, borderRadius: 12, background: "#FFFFFF", border: "1px solid rgba(139,115,85,0.15)", display: "flex", alignItems: "center", justifyContent: "center", textDecoration: "none" }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2C2418" strokeWidth="2" strokeLinecap="round"><polyline points="15 18 9 12 15 6"/></svg>
        </Link>
        <div style={{ fontSize: 18, fontWeight: 700, color: "#2C2418" }}>{s.name}</div>
      </div>

      <div className="page-scroll" style={{ paddingBottom: 20 }}>
        <div style={{ height: 180, background: "#EDE9E1", margin: "12px 16px 0", borderRadius: 18, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 64 }}>
          {s.emoji}
        </div>

        <div style={{ padding: "14px 16px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
            <div>
              <div style={{ fontSize: 18, fontWeight: 700, color: "#2C2418" }}>{s.name}</div>
              <div style={{ fontSize: 12, color: "#A89880", marginTop: 3 }}>📍 {s.addr}</div>
            </div>
            <div style={{ fontSize: 18, fontWeight: 800, color: "#8B6B3D" }}>{format(s.price)}/ч</div>
          </div>
          <div style={{ fontSize: 12, color: "#C4965A", marginTop: 6 }}>{"★".repeat(Math.floor(s.rating))} {s.rating} · {s.reviews} отзывов</div>
          <div style={{ fontSize: 13, color: "#7A6B55", lineHeight: 1.6, marginTop: 10 }}>{s.desc}</div>
        </div>

        {/* Halls */}
        <div style={{ padding: "0 16px 14px" }}>
          <div style={{ fontSize: 13, fontWeight: 600, color: "#2C2418", marginBottom: 8 }}>Залы</div>
          {s.halls.map((h, i) => (
            <div key={i} className="raw-card" style={{ padding: "12px 14px", marginBottom: 8, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ fontSize: 13, fontWeight: 500, color: "#2C2418" }}>{h.name}</div>
              <div style={{ fontSize: 13, fontWeight: 700, color: "#8B6B3D" }}>{format(h.price)}/ч</div>
            </div>
          ))}
        </div>

        <div style={{ padding: "0 16px", display: "flex", gap: 10 }}>
          <div style={{ flex: 1, background: "#F0E8DC", borderRadius: 14, padding: "12px 0", textAlign: "center", fontSize: 13, fontWeight: 600, color: "#8B6B3D", cursor: "pointer" }}>
            В подборку
          </div>
          <div style={{ flex: 1, background: "#2C2418", borderRadius: 14, padding: "12px 0", textAlign: "center", fontSize: 13, fontWeight: 600, color: "#FFFFFF", cursor: "pointer" }}>
            Забронировать
          </div>
        </div>
      </div>
      <BottomNav />
    </div>
  );
}
