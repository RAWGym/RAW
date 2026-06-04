"use client";
import { useState } from "react";
import { BottomNav } from "@/components/layout/BottomNav";
import { StatusBar } from "@/components/ui/StatusBar";

type Msg = { role: "user" | "bot"; text: string };

const SUGGESTIONS = [
  { icon: "💡", text: "Подобрать схему освещения" },
  { icon: "📷", text: "Настройки камеры под задачу" },
  { icon: "💬", text: "Написать сообщение клиенту" },
  { icon: "🧮", text: "Рассчитать стоимость съёмки" },
  { icon: "🎨", text: "Идеи для съёмки" },
];

const INITIAL: Msg[] = [
  { role: "bot", text: "Привет! Я AI-ассистент RAW. Помогу подобрать схему света, настроить камеру, написать клиенту или рассчитать стоимость. Чем займёмся?" },
];

export default function AIPage() {
  const [messages, setMessages] = useState<Msg[]>(INITIAL);
  const [input, setInput] = useState("");

  const send = (text: string) => {
    if (!text.trim()) return;
    setMessages((m) => [
      ...m,
      { role: "user", text },
      { role: "bot", text: "Это демо-версия. Функционал AI будет доступен после подключения API. Выберите один из вариантов выше или напишите свой вопрос." },
    ]);
    setInput("");
  };

  return (
    <div style={{ background: "#FAF8F5", minHeight: "100%", display: "flex", flexDirection: "column" }}>
      <StatusBar />

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 16px 8px" }}>
        <div>
          <div style={{ fontSize: 20, fontWeight: 700, color: "#2C2418" }}>AI Ассистент</div>
          <div style={{ fontSize: 10, color: "#4A7C59", marginTop: 2 }}>● В сети</div>
        </div>
        <div style={{ width: 32, height: 32, background: "#2C2418", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <span style={{ fontSize: 14 }}>🤖</span>
        </div>
      </div>

      {/* Suggestions */}
      <div style={{ padding: "0 16px 10px", display: "flex", flexDirection: "column", gap: 6 }}>
        {SUGGESTIONS.map((s, i) => (
          <button key={i} onClick={() => send(s.text)} style={{
            background: "#FFFFFF", border: "1px solid rgba(139,115,85,0.15)",
            borderRadius: 12, padding: "8px 12px",
            display: "flex", alignItems: "center", gap: 10,
            cursor: "pointer", textAlign: "left",
          }}>
            <span style={{ fontSize: 16 }}>{s.icon}</span>
            <span style={{ fontSize: 12, color: "#7A6B55", fontWeight: 500 }}>{s.text}</span>
          </button>
        ))}
      </div>

      <div style={{ height: 1, background: "rgba(139,115,85,0.12)", margin: "0 16px 8px" }} />

      {/* Chat */}
      <div style={{ flex: 1, overflowY: "auto", padding: "0 16px", display: "flex", flexDirection: "column", gap: 10, scrollbarWidth: "none" }}>
        {messages.map((m, i) => (
          <div key={i} style={{
            alignSelf: m.role === "user" ? "flex-end" : "flex-start",
            maxWidth: "85%",
          }}>
            <div style={{
              background: m.role === "user" ? "#2C2418" : "#FFFFFF",
              color: m.role === "user" ? "#FFFFFF" : "#2C2418",
              borderRadius: m.role === "user" ? "14px 14px 4px 14px" : "14px 14px 14px 4px",
              padding: "10px 12px",
              fontSize: 12,
              lineHeight: 1.6,
              border: m.role === "bot" ? "1px solid rgba(139,115,85,0.15)" : "none",
              boxShadow: "0 1px 6px rgba(139,115,85,0.08)",
            }}>
              {m.text}
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <div style={{ padding: "10px 16px 16px" }}>
        <div style={{
          background: "#FFFFFF", border: "1px solid rgba(139,115,85,0.2)",
          borderRadius: 24, padding: "8px 8px 8px 16px",
          display: "flex", alignItems: "center", gap: 8,
          boxShadow: "0 2px 12px rgba(139,115,85,0.10)",
        }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#A89880" strokeWidth="1.8" strokeLinecap="round"><path d="M12 2a3 3 0 0 1 3 3v7a3 3 0 0 1-6 0V5a3 3 0 0 1 3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && send(input)}
            placeholder="Спросите что-нибудь..."
            style={{
              flex: 1, border: "none", outline: "none",
              fontSize: 13, color: "#2C2418", background: "transparent",
            }}
          />
          <button onClick={() => send(input)} style={{
            width: 34, height: 34, borderRadius: "50%",
            background: "#2C2418", border: "none", cursor: "pointer",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round"><line x1="12" y1="19" x2="12" y2="5"/><polyline points="5 12 12 5 19 12"/></svg>
          </button>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
