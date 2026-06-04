"use client";
import { useState } from "react";
import { BottomNav } from "@/components/layout/BottomNav";
import { StatusBar } from "@/components/ui/StatusBar";
import { BonusPill } from "@/components/ui/BonusPill";

const DAYS = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];
const MONTH = "Июнь 2026";

// June 2026 starts on Monday
const WEEKS = [
  [1,2,3,4,5,6,7],
  [8,9,10,11,12,13,14],
  [15,16,17,18,19,20,21],
  [22,23,24,25,26,27,28],
  [29,30,0,0,0,0,0],
];
const EVENTS_DAYS = new Set([3,5,11,13,15,17,20,24,26]);
const TODAY = 4;

const EVENTS = [
  { date: "4 июня, среда", count: 2, items: [
    { time: "14:00\n–16:00", name: "Loft Hall · Зал Minimal", sub: "Клиент: Анна", dot: "#C4965A", thumb: "🏛" },
    { time: "18:00\n–20:00", name: "Light Studio · Soft", sub: "Клиент: Мария", dot: "#6B9ED4", thumb: "🌅" },
  ]},
  { date: "5 июня, четверг", count: 1, items: [
    { time: "12:00\n–14:00", name: "White Room · Pure", sub: "Клиент: Игорь", dot: "#4A7C59", thumb: "🤍" },
  ]},
];

export default function CalendarPage() {
  const [view, setView] = useState<"month"|"week"|"day">("month");

  return (
    <div style={{ background: "#FAF8F5", minHeight: "100%" }}>
      <StatusBar />

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 16px 8px" }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: "#2C2418" }}>Календарь</div>
        <BonusPill />
      </div>

      {/* View tabs */}
      <div style={{ display: "flex", margin: "0 16px 10px", background: "#EDE9E1", borderRadius: 12, padding: 3, gap: 2 }}>
        {(["month","week","day"] as const).map((v) => (
          <button key={v} onClick={() => setView(v)} style={{
            flex: 1, padding: "6px 0", borderRadius: 10, border: "none", cursor: "pointer",
            fontSize: 12, fontWeight: 600,
            background: view === v ? "#FFFFFF" : "transparent",
            color: view === v ? "#2C2418" : "#A89880",
            boxShadow: view === v ? "0 1px 4px rgba(139,115,85,0.12)" : "none",
            transition: "all 0.18s",
          }}>
            {v === "month" ? "Месяц" : v === "week" ? "Неделя" : "День"}
          </button>
        ))}
      </div>

      <div className="page-scroll" style={{ paddingBottom: 20 }}>

        {/* Month nav */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "4px 20px 8px" }}>
          <button style={{ background: "none", border: "none", fontSize: 18, color: "#7A6B55", cursor: "pointer" }}>‹</button>
          <span style={{ fontSize: 15, fontWeight: 600, color: "#2C2418" }}>{MONTH}</span>
          <button style={{ background: "none", border: "none", fontSize: 18, color: "#7A6B55", cursor: "pointer" }}>›</button>
        </div>

        {/* Calendar grid */}
        <div style={{ padding: "0 14px 10px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", marginBottom: 4 }}>
            {DAYS.map((d) => (
              <div key={d} style={{ textAlign: "center", fontSize: 10, color: "#A89880", fontWeight: 500, padding: "2px 0" }}>{d}</div>
            ))}
          </div>
          {WEEKS.map((week, wi) => (
            <div key={wi} style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 2, marginBottom: 2 }}>
              {week.map((day, di) => (
                <div key={di} style={{
                  textAlign: "center", padding: "4px 0",
                  fontSize: 12,
                  borderRadius: 8,
                  background: day === TODAY ? "#2C2418" : "transparent",
                  color: day === TODAY ? "#FFFFFF" : day === 0 ? "transparent" : "#2C2418",
                  fontWeight: day === TODAY ? 700 : 400,
                  cursor: day ? "pointer" : "default",
                  position: "relative",
                }}>
                  {day || ""}
                  {day !== 0 && EVENTS_DAYS.has(day) && day !== TODAY && (
                    <span style={{
                      display: "block", width: 4, height: 4,
                      background: "#C4965A", borderRadius: "50%",
                      margin: "1px auto 0",
                    }} />
                  )}
                  {day !== 0 && !EVENTS_DAYS.has(day) && day !== TODAY && (
                    <span style={{ display: "block", height: 5 }} />
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>

        <div style={{ height: 1, background: "rgba(139,115,85,0.12)", margin: "0 16px 12px" }} />

        {/* Events */}
        {EVENTS.map((group) => (
          <div key={group.date} style={{ padding: "0 16px 12px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
              <span style={{ fontSize: 12, fontWeight: 600, color: "#2C2418" }}>{group.date}</span>
              <span style={{ fontSize: 10, color: "#A89880" }}>{group.count} съёмки</span>
            </div>
            {group.items.map((ev, i) => (
              <div key={i} className="raw-card" style={{ padding: "10px 12px", display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: ev.dot, flexShrink: 0, marginTop: 2 }} />
                <div style={{ fontSize: 10, color: "#A89880", minWidth: 36, whiteSpace: "pre", lineHeight: 1.5 }}>{ev.time}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 11, fontWeight: 600, color: "#2C2418" }}>{ev.name}</div>
                  <div style={{ fontSize: 10, color: "#A89880", marginTop: 1 }}>{ev.sub}</div>
                </div>
                <div style={{ width: 38, height: 38, background: "#EDE9E1", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}>
                  {ev.thumb}
                </div>
              </div>
            ))}
          </div>
        ))}

      </div>
      <BottomNav />
    </div>
  );
}
