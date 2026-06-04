"use client";
import Image from "next/image";

interface LogoProps {
  size?: number;
  className?: string;
}

export function RawLogo({ size = 40, className = "" }: LogoProps) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <Image
        src="/logo.png"
        alt="RAW"
        width={size}
        height={size}
        className="object-contain"
        style={{ filter: "invert(0.15) sepia(0.3) saturate(0.8)" }}
        priority
      />
      <span
        style={{
          fontSize: 9,
          fontWeight: 400,
          letterSpacing: "0.14em",
          color: "#A89880",
          textTransform: "uppercase",
          lineHeight: 1,
          marginTop: 2,
        }}
      >
        PHOTOGRAPHY
      </span>
    </div>
  );
}
