"use client";
import { BottomNav } from "@/components/layout/BottomNav";
import { StatusBar } from "@/components/ui/StatusBar";
import { useCurrencyStore } from "@/store/currencyStore";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const CHART_DATA = [
  { m: "Янв", v: 85000 },
  { m: "Фев", v: 92000 },
  { m: "Мар", v: 78000 },
  { m: "Апр", v: 110000 },
  { m: "Май", v: 115000 },
  { m: "Июн", v: 128450 },
];

const EXPENSES = [
  { label: "Студии",       pct: 41, amount: 21000 },
  { label: "Оборудование", pct: 24, amount: 12500 },
  { label: "Транспорт",    pct: 15, amount: 7800  },
  { label: "Реклама",      pct: 12, amount: 6250  },
  { label: "Прочее",       pct: 8,  amount: 4000  },
];

const TRANSACTIONS = [
  { icon: "🏛", name: "Аренда студии Loft Hall", date: "4 июня, 13:45",  amount: -3500,  income: false },
  { icon: "📸", name: "Оплата съёмки",            date: "4 июня, 12:30",  amount: 15000,  income: true  },
  { icon: "🎞", name: "Покупка фильтра",           date: "3 июня, 18:20",  amount: -2450,  income: false },
];

export default function FinancePage() {
  const { format } = useCurrencyStore();

  return (
    <div style={{ background: "#FAF8F5", minHeight: "100%" }}>
      <StatusBar />

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 16px 6px" }}>
        <div>
          <div style={{ fontSize: 20, fontWeight: 700, color: "#2C2418" }}>Финансы</div>
          <div style={{ fontSize: 11, color: "#A89880", marginTop: 2 }}>Июнь 2026</div>
        </div>
      </div>

      <div className="page-scroll" style={{ paddingBottom: 24 }}>

        {/* Profit hero */}
        <div style={{ padding: "4px 16px 12px" }}>
          <div style={{ background: "#2C2418", borderRadius: 20, padding: "18px 20px" }}>
            <div style={{ fontSize: 11, color: "rgba(255,255,255,0.5)", marginBottom: 6 }}>Чистая прибыль</div>
            <div style={{ fontSize: 30, fontWeight: 800, color: "#FFFFFF", letterSpacing: "-0.5px" }}>
              {format(128450)}
            </div>
            <div style={{ fontSize: 11, color: "#4A7C59", marginTop: 6 }}>+12% к маю ↑</div>
          </div>
        </div>

        {/* Income / Expense */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, padding: "0 16px 12px" }}>
          <div className="raw-card" style={{ padding: "14px" }}>
            <div style={{ fontSize: 10, color: "#A89880", marginBottom: 6 }}>Доходы</div>
            <div style={{ fontSize: 17, fontWeight: 700, color: "#2C2418" }}>{format(180000)}</div>
            <div style={{ fontSize: 10, color: "#4A7C59", marginTop: 4 }}>+8%</div>
          </div>
          <div className="raw-card" style={{ padding: "14px" }}>
            <div style={{ fontSize: 10, color: "#A89880", marginBottom: 6 }}>Расходы</div>
            <div style={{ fontSize: 17, fontWeight: 700, color: "#C44B2A" }}>{format(51550)}</div>
            <div style={{ fontSize: 10, color: "#A89880", marginTop: 4 }}>–3%</div>
          </div>
        </div>

        {/* Chart */}
        <div className="raw-card" style={{ margin: "0 16px 14px", padding: "14px 12px" }}>
          <div style={{ fontSize: 11, fontWeight: 600, color: "#7A6B55", marginBottom: 12 }}>
            Динамика за 6 месяцев
          </div>
          <ResponsiveContainer width="100%" height={88}>
            <LineChart data={CHART_DATA} margin={{ top: 4, right: 4, left: -28, bottom: 0 }}>
              <XAxis
                dataKey="m"
                tick={{ fontSize: 10, fill: "#A89880" }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis hide />
              <Tooltip
                formatter={(v: number) => [format(v), "Доход"]}
                contentStyle={{
                  background: "#2C2418",
                  border: "none",
                  borderRadius: 10,
                  fontSize: 11,
                  color: "#fff",
                  padding: "6px 10px",
                }}
                labelStyle={{ color: "rgba(255,255,255,0.55)", fontSize: 10 }}
                cursor={{ stroke: "rgba(196,150,90,0.25)", strokeWidth: 1 }}
              />
              <Line
                type="monotone"
                dataKey="v"
                stroke="#C4965A"
                strokeWidth={2.5}
                dot={false}
                activeDot={{ r: 4, fill: "#C4965A", stroke: "none" }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Expenses by category */}
        <div style={{ padding: "0 16px 14px" }}>
          <div style={{ fontSize: 13, fontWeight: 600, color: "#2C2418", marginBottom: 10 }}>
            Расходы по категориям
          </div>
          <div className="raw-card" style={{ padding: "14px" }}>
            {EXPENSES.map((e, i) => (
              <div
                key={e.label}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  marginBottom: i < EXPENSES.length - 1 ? 12 : 0,
                }}
              >
                <div style={{ fontSize: 11, color: "#7A6B55", minWidth: 90 }}>{e.label}</div>
                <div style={{ flex: 1, height: 6, background: "#EDE9E1", borderRadius: 3, overflow: "hidden" }}>
                  <div style={{ width: `${e.pct}%`, height: "100%", background: "#C4965A", borderRadius: 3 }} />
                </div>
                <div style={{ fontSize: 10, color: "#7A6B55", minWidth: 60, textAlign: "right" }}>
                  {format(e.amount)}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent transactions */}
        <div style={{ padding: "0 16px 20px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
            <div style={{ fontSize: 13, fontWeight: 600, color: "#2C2418" }}>Последние операции</div>
            <div style={{ fontSize: 11, color: "#8B6B3D", fontWeight: 500 }}>Все →</div>
          </div>
          {TRANSACTIONS.map((t, i) => (
            <div
              key={i}
              className="raw-card"
              style={{ padding: "12px 14px", display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}
            >
              <div style={{
                width: 40, height: 40, background: "#F0E8DC", borderRadius: 12,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 18, flexShrink: 0,
              }}>
                {t.icon}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 12, fontWeight: 600, color: "#2C2418" }}>{t.name}</div>
                <div style={{ fontSize: 10, color: "#A89880", marginTop: 2 }}>{t.date}</div>
              </div>
              <div style={{ fontSize: 13, fontWeight: 700, color: t.income ? "#4A7C59" : "#C44B2A" }}>
                {t.income ? "+" : "–"}{format(Math.abs(t.amount))}
              </div>
            </div>
          ))}
        </div>

      </div>
      <BottomNav />
    </div>
  );
}
