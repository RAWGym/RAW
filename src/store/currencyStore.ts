import { create } from "zustand";
import { persist } from "zustand/middleware";

export type Currency = "RUB" | "KZT";

interface CurrencyState {
  currency: Currency;
  setCurrency: (c: Currency) => void;
  format: (amount: number) => string;
}

const RATES: Record<Currency, number> = {
  RUB: 1,
  KZT: 5.5, // 1 RUB ≈ 5.5 KZT (актуализируйте при необходимости)
};

const SYMBOLS: Record<Currency, string> = {
  RUB: "₽",
  KZT: "₸",
};

export const useCurrencyStore = create<CurrencyState>()(
  persist(
    (set, get) => ({
      currency: "RUB",
      setCurrency: (currency) => set({ currency }),
      format: (amount: number) => {
        const { currency } = get();
        const converted = Math.round(amount * RATES[currency]);
        return (
          new Intl.NumberFormat("ru-RU").format(converted) +
          " " +
          SYMBOLS[currency]
        );
      },
    }),
    { name: "raw-currency" }
  )
);
