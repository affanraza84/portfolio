import React from "react";

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg";
}

export function Logo({ className = "", showText = true, size = "md" }: LogoProps) {
  const sizeMap = {
    sm: {
      box: "w-8 h-8",
      icon: "w-4 h-4",
      text: "text-sm",
      dot: "w-1.5 h-1.5",
    },
    md: {
      box: "w-9 h-9",
      icon: "w-5 h-5",
      text: "text-base",
      dot: "w-1.5 h-1.5",
    },
    lg: {
      box: "w-11 h-11",
      icon: "w-6 h-6",
      text: "text-lg",
      dot: "w-2 h-2",
    },
  };

  const currentSize = sizeMap[size];

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* High-End Architectural "A" Emblem Container */}
      <div
        className={`relative ${currentSize.box} rounded-xl bg-gradient-to-b from-[#181822] to-[#0d0d12] border border-white/15 flex items-center justify-center shadow-lg shadow-black/60 group-hover:border-amber-500/60 group-hover:shadow-[0_0_20px_rgba(245,158,11,0.35)] transition-all duration-300 overflow-hidden shrink-0`}
      >
        {/* Ambient Amber Flare Glow */}
        <div className="absolute -top-3 -right-3 w-8 h-8 bg-amber-500/30 rounded-full blur-md opacity-40 group-hover:opacity-100 group-hover:scale-125 transition-all duration-300" />
        <div className="absolute -bottom-3 -left-3 w-8 h-8 bg-amber-400/20 rounded-full blur-md opacity-20 group-hover:opacity-80 transition-all duration-300" />

        {/* Diagonal Sheen Effect */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.07] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Precision Architectural "A" Vector Glyph */}
        <svg
          className={`${currentSize.icon} relative z-10 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]`}
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="affanGradPrimary" x1="4" y1="4" x2="28" y2="28" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="45%" stopColor="#FDE68A" />
              <stop offset="100%" stopColor="#F59E0B" />
            </linearGradient>
            <linearGradient id="affanGradAccent" x1="8" y1="18" x2="24" y2="18" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#F59E0B" />
              <stop offset="100%" stopColor="#D97706" />
            </linearGradient>
            <linearGradient id="affanGlow" x1="16" y1="6" x2="16" y2="26" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#B45309" stopOpacity="0.2" />
            </linearGradient>
          </defs>

          {/* Background Tech Geometry (Facet Lines) */}
          <path
            d="M16 4L27 10.5V21.5L16 28L5 21.5V10.5L16 4Z"
            stroke="url(#affanGlow)"
            strokeWidth="1.2"
            strokeDasharray="2 2"
            className="opacity-40 group-hover:opacity-80 transition-opacity"
          />

          {/* Main Architectural "A" Apex Struts */}
          <path
            d="M16 6.5L24.5 23.5H20.2L18.2 19H13.8L11.8 23.5H7.5L16 6.5Z"
            fill="url(#affanGradPrimary)"
          />

          {/* Modern Floating Tech Chevron / Crossbar */}
          <path
            d="M14.5 16.5H17.5L16 12.8L14.5 16.5Z"
            fill="#09090B"
          />
          <path
            d="M12.5 18H19.5L18.5 20.2H13.5L12.5 18Z"
            fill="url(#affanGradAccent)"
            className="group-hover:brightness-125 transition-all"
          />

          {/* Center Glowing Micro-Core */}
          <circle
            cx="16"
            cy="14.8"
            r="1.2"
            className="fill-amber-300 animate-pulse drop-shadow-[0_0_4px_#F59E0B]"
          />
        </svg>
      </div>

      {/* Brand Typography: Only "Affan" */}
      {showText && (
        <div className="flex items-center gap-1.5">
          <span
            className={`${currentSize.text} font-extrabold tracking-tight text-white group-hover:text-amber-300 transition-colors duration-200`}
          >
            Affan
          </span>
          <span
            className={`${currentSize.dot} rounded-full bg-amber-400 shadow-[0_0_8px_rgba(245,158,11,0.8)] group-hover:scale-125 group-hover:bg-amber-300 transition-all duration-200`}
          />
        </div>
      )}
    </div>
  );
}
