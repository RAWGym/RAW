"use client";
import { useCurrencyStore, type Currency } from "@/store/currencyStore";

export function CurrencySwitcher() {
  const { currency, setCurrency } = useCurrencyStore();

  const options: { value: Currency; label: string }[] = [
    { value: "RUB", label: "₽" },
    { value: "KZT", label: "₸" },
  ];

  return (
    <div
      style={{
        display: "flex",
        background: "#F5F2EC",
        borderRadius: 20,
        padding: 2,
        gap: 2,
        border: "1px solid rgba(139,115,85,0.15)",
      }}
    >
      {options.map((opt) => (
        <button
          key={opt.value}
          onClick={() => setCurrency(opt.value)}
          style={{
            padding: "3px 10px",
            borderRadius: 16,
            fontSize: 11,
            fontWeight: 600,
            border: "none",
            cursor: "pointer",
            transition: "all 0.18s ease",
            background: currency === opt.value ? "#2C2418" : "transparent",
            color: currency === opt.value ? "#FFFFFF" : "#7A6B55",
          }}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}
