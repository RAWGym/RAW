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

export function generateStaticParams() {
  return Object.keys(STUDIOS).map((id) => ({ id }));
}

export default function StudioDetailPage() {
  const { id } = useParams<{ id: string }>();
  const s = STUDIOS[id as string] ?? STUDIOS["1"];
  const { format } = useCurrencyStore();

  return (
    <div style={{ background: "#FAF8F5", minHeight: "100%" }}>
      <StatusBar />
      <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 16px 0" }}>
        <Link href="/studios" style={{ width: 36, height: 36, borderRadius: 12, background: "#FFFFFF", border: "1px solid rgba(139,115,85,0.15)", display: "flex", alignItems: "center", justifyContent: "center", textDecoration: "none" }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2C2418" strokeWidth="2" strokeLinecap="round"><polyline points="15 18 9 12 15 6"/></svg>
        </Link>
        <div style={{ fontSize: 18, fontWeight: 700, color: "#2C2418" }}>{s.emoji} {s.name}</div>
      </div>
      <div style={{ padding: "16px 16px 0" }}>
        <div style={{ background: "#FFFFFF", borderRadius: 16, padding: 16, border: "1px solid rgba(139,115,85,0.15)", marginBottom: 12 }}>
          <div style={{ color: "#8B7355", fontSize: 13, marginBottom: 4 }}>{s.addr}</div>
          <div style={{ color: "#2C2418", fontSize: 14, lineHeight: 1.5 }}>{s.desc}</div>
          <div style={{ display: "flex", gap: 8, marginTop: 12, alignItems: "center" }}>
            <span style={{ fontSize: 13, color: "#8B7355" }}>⭐ {s.rating}</span>
            <span style={{ fontSize: 13, color: "#8B7355" }}>· {s.reviews} отзывов</span>
          </div>
        </div>
        {s.halls.map((hall) => (
          <div key={hall.name} style={{ background: "#FFFFFF", borderRadius: 16, padding: 16, border: "1px solid rgba(139,115,85,0.15)", marginBottom: 12, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ fontSize: 15, fontWeight: 600, color: "#2C2418" }}>{hall.name}</div>
            <div style={{ fontSize: 15, fontWeight: 700, color: "#2C2418" }}>{format(hall.price)}/ч</div>
          </div>
        ))}
      </div>
      <BottomNav />
    </div>
  );
}
