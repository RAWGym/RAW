"use client";
import { useState } from "react";
import { BottomNav } from "@/components/layout/BottomNav";
import { StatusBar } from "@/components/ui/StatusBar";
import { useCurrencyStore } from "@/store/currencyStore";

const PLANS = [
  {
    id: "basic",
    name: "RAW Basic",
    price: 0,
    period: "Бесплатно",
    features: ["До 5 клиентов", "Календарь съёмок", "Базовые финансы", "Каталог студий"],
    cta: "Текущий план",
    dark: false,
    founders: false,
  },
  {
    id: "pro",
    name: "RAW Pro",
    price: 499,
    period: "в месяц",
    popular: true,
    features: ["Неограниченно клиентов", "AI Ассистент", "CRM + договоры", "Подборки студий", "Расширенная аналитика", "Push-уведомления"],
    cta: "Подключить RAW Pro",
    dark: true,
    founders: false,
  },
  {
    id: "pro_year",
    name: "RAW Pro Год",
    price: 2290,
    period: "в год · экономия 36%",
    features: ["Всё из Pro", "Приоритетная поддержка", "Ранний доступ к функциям"],
    cta: "Выбрать",
    dark: false,
    founders: false,
  },
  {
    id: "founders",
    name: "RAW Founders",
    price: 4990,
    period: "навсегда · единоразово",
    features: ["Всё из Pro навсегда", "Бейдж Founder", "Влияние на продукт", "Личный чат с командой"],
    cta: "Стать Founders",
    dark: true,
    founders: true,
  },
];

export default function SubscriptionPage() {
  const { format } = useCurrencyStore();
  const [selected, setSelected] = useState("pro");

  return (
    <div style={{ background: "#FAF8F5", minHeight: "100%" }}>
      <StatusBar />

      <div style={{ padding: "10px 16px 8px" }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: "#2C2418" }}>Тарифы</div>
        <div style={{ fontSize: 12, color: "#A89880", marginTop: 2 }}>Выберите подходящий план</div>
      </div>

      <div className="page-scroll" style={{ paddingBottom: 20 }}>
        <div style={{ padding: "0 16px", display: "flex", flexDirection: "column", gap: 10 }}>
          {PLANS.map((plan) => (
            <div
              key={plan.id}
              onClick={() => setSelected(plan.id)}
              style={{
                borderRadius: 20,
                padding: "16px 18px",
                cursor: "pointer",
                transition: "all 0.2s",
                background: plan.founders
                  ? "linear-gradient(135deg, #2C2418 60%, #4A3520)"
                  : plan.dark
                  ? "#2C2418"
                  : "#FFFFFF",
                border: selected === plan.id && !plan.dark
                  ? "2px solid #2C2418"
                  : plan.dark
                  ? "none"
                  : "1px solid rgba(139,115,85,0.2)",
                boxShadow: selected === plan.id
                  ? "0 4px 20px rgba(139,115,85,0.18)"
                  : "0 1px 6px rgba(139,115,85,0.08)",
              }}
            >
              {plan.popular && (
                <div style={{
                  display: "inline-block",
                  background: "#C4965A", color: "#FFFFFF",
                  fontSize: 9, fontWeight: 700, letterSpacing: "0.06em",
                  borderRadius: 6, padding: "2px 9px", marginBottom: 8,
                }}>
                  ПОПУЛЯРНЫЙ
                </div>
              )}
              {plan.founders && (
                <div style={{
                  display: "inline-block",
                  background: "rgba(232,185,106,0.25)", color: "#E8B96A",
                  fontSize: 9, fontWeight: 700, letterSpacing: "0.06em",
                  borderRadius: 6, padding: "2px 9px", marginBottom: 8,
                  border: "1px solid rgba(232,185,106,0.3)",
                }}>
                  LIMITED EDITION
                </div>
              )}

              <div style={{
                fontSize: 16, fontWeight: 700,
                color: plan.dark ? "#FFFFFF" : "#2C2418",
                marginBottom: 4,
              }}>
                {plan.name}
              </div>

              <div style={{
                fontSize: 28, fontWeight: 800,
                color: plan.founders ? "#E8B96A" : plan.dark ? "#F0C87A" : "#8B6B3D",
                lineHeight: 1,
              }}>
                {plan.price === 0 ? "0 ₽" : format(plan.price)}
              </div>

              <div style={{
                fontSize: 11,
                color: plan.dark ? "rgba(255,255,255,0.5)" : "#A89880",
                marginTop: 2, marginBottom: 12,
              }}>
                {plan.period}
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 5, marginBottom: 14 }}>
                {plan.features.map((f) => (
                  <div key={f} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <div style={{
                      width: 5, height: 5, borderRadius: "50%",
                      background: plan.founders ? "#E8B96A" : plan.dark ? "#F0C87A" : "#C4965A",
                      flexShrink: 0,
                    }} />
                    <span style={{ fontSize: 12, color: plan.dark ? "rgba(255,255,255,0.75)" : "#7A6B55" }}>
                      {f}
                    </span>
                  </div>
                ))}
              </div>

              <div style={{
                borderRadius: 12, padding: "10px 0", textAlign: "center",
                fontSize: 12, fontWeight: 600,
                background: plan.founders
                  ? "rgba(232,185,106,0.2)"
                  : plan.dark
                  ? "rgba(255,255,255,0.12)"
                  : "#F0E8DC",
                color: plan.founders ? "#E8B96A" : plan.dark ? "#FFFFFF" : "#8B6B3D",
              }}>
                {plan.cta}
              </div>
            </div>
          ))}
        </div>
      </div>
      <BottomNav />
    </div>
  );
}
