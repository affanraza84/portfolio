import React from "react";

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg";
}

export function Logo({ className = "", showText = true, size = "md" }: LogoProps) {
  const sizeMap = {
    sm: {
      box: "w-7 h-7",
      icon: "w-4 h-4",
      text: "text-sm",
      dot: "w-1 h-1",
    },
    md: {
      box: "w-8 h-8",
      icon: "w-4.5 h-4.5",
      text: "text-[15px]",
      dot: "w-1.5 h-1.5",
    },
    lg: {
      box: "w-10 h-10",
      icon: "w-5.5 h-5.5",
      text: "text-base",
      dot: "w-1.5 h-1.5",
    },
  };

  const currentSize = sizeMap[size];

  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      {/* Precision Geometric Monogram Glyph Frame */}
      <div
        className={`relative ${currentSize.box} rounded-md bg-white border border-[#D9D9D4] flex items-center justify-center shadow-xs group-hover:border-[#2457FF] transition-all duration-200 overflow-hidden shrink-0`}
      >
        {/* Architectural Monogram 'A' */}
        <svg
          className={`${currentSize.icon} relative z-10`}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Subtle Grid Intersect Line */}
          <line
            x1="2"
            y1="12"
            x2="22"
            y2="12"
            stroke="#E8E8E3"
            strokeWidth="0.75"
            strokeDasharray="1.5 1.5"
          />
          {/* Precision Architectural 'A' Geometry */}
          <path
            d="M12 4L18 19.5H15.2L13.8 15.5H10.2L8.8 19.5H6L12 4Z"
            fill="#171717"
            className="group-hover:fill-[#2457FF] transition-colors"
          />
          {/* Inset Triangle */}
          <polygon
            points="12,8.8 13.3,13 10.7,13"
            fill="white"
          />
          {/* Precision Cobalt Dot Calibration Mark */}
          <circle cx="12" cy="17.5" r="1" fill="#2457FF" />
        </svg>
      </div>

      {/* Brand Typography: Clean Swiss Grotesk */}
      {showText && (
        <div className="flex items-center gap-1.5">
          <span
            className={`${currentSize.text} font-bold tracking-tight text-[#171717] group-hover:text-[#2457FF] transition-colors duration-200`}
          >
            Affan
          </span>
          <span
            className={`${currentSize.dot} rounded-full bg-[#2457FF] group-hover:scale-125 transition-all duration-200`}
          />
        </div>
      )}
    </div>
  );
}
