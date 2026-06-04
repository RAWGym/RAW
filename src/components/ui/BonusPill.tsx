export function BonusPill({ amount = 2450 }: { amount?: number }) {
  return (
    <div
      style={{
        background: "#F0E8DC",
        border: "1px solid rgba(139,107,61,0.2)",
        borderRadius: 20,
        padding: "4px 10px",
        display: "flex",
        alignItems: "center",
        gap: 4,
        fontSize: 10,
        fontWeight: 600,
        color: "#8B6B3D",
      }}
    >
      <span style={{ color: "#C4965A", fontSize: 10 }}>✦</span>
      {amount.toLocaleString("ru-RU")} бонусов
    </div>
  );
}
