import React from "react";

interface LogoProps {
  scrolled?: boolean;
  isFooter?: boolean;
}

export function Logo({ scrolled = true, isFooter = false }: LogoProps) {
  // Determine text and icon colors based on scroll state and placement (header vs footer)
  const colorClass = isFooter
    ? "text-white"
    : scrolled
    ? "text-[color:var(--color-brand)]"
    : "text-white drop-shadow-sm";

  return (
    <div className={`flex items-center gap-3 transition-colors duration-500 ${colorClass}`}>
      {/* The Logo (Tooth + Arabic text) */}
      <div className="flex items-center gap-2.5 h-12 md:h-14">
        {/* Tooth SVG */}
        <svg
          viewBox="0 0 100 100"
          className="h-full w-auto shrink-0"
          fill="none"
          stroke="currentColor"
        >
          {/* Stylized Tooth outline with rounded stroke */}
          <path
            d="M32 30 C22 25 14 32 14 48 C14 62 20 74 34 82 C38 85 42 86 44 86 C46 86 48 83 49 76 C50 68 50 68 51 76 C52 83 54 86 56 86 C58 86 62 85 66 82 C80 74 86 62 86 48 C86 32 78 25 68 30 C62 33 58 35 50 30 C42 35 38 33 32 30 Z"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* The Tree Trunk */}
          <path
            d="M50 70 L50 48"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          {/* Tree leaves / branches */}
          <path
            d="M50 56 Q42 54 38 46"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M50 52 Q58 50 62 42"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
          />
          {/* Leaf shapes as filled paths */}
          <path d="M38 46 C36 43 37 39 41 41 C41 45 39 47 38 46 Z" fill="currentColor" stroke="none" />
          <path d="M62 42 C64 39 63 35 59 37 C59 41 61 43 62 42 Z" fill="currentColor" stroke="none" />
          <path d="M50 44 C48 40 50 36 52 38 C52 42 51 44 50 44 Z" fill="currentColor" stroke="none" />
          
          {/* Since 1991 Text */}
          <text
            x="50"
            y="94"
            textAnchor="middle"
            fontSize="8.5"
            fontWeight="700"
            fill="currentColor"
            fontFamily="'Inter', system-ui, sans-serif"
            letterSpacing="0.5"
            stroke="none"
          >
            Since 1991
          </text>
          
          {/* Curve of dots at the bottom */}
          <path
            d="M16 88 A 38 38 0 0 0 84 88"
            strokeWidth="4.5"
            strokeDasharray="1 7.5"
            strokeLinecap="round"
            fill="none"
          />
        </svg>
        
        {/* Arabic text */}
        <span 
          className="font-heading font-semibold text-[17px] md:text-xl tracking-wide leading-none whitespace-nowrap pt-1" 
          dir="rtl"
          style={{ fontFamily: "'Cairo', 'Poppins', sans-serif" }}
        >
          مركز بن عرب لطب الأسنان
        </span>
      </div>

      {/* Divider */}
      <div className={`h-8 w-px bg-current opacity-20 hidden md:block`} />

      {/* English Text */}
      <span className="font-heading font-semibold text-sm md:text-base tracking-tight whitespace-nowrap pt-0.5">
        Bin Arab Dental Centre
      </span>
    </div>
  );
}
