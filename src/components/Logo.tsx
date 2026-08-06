import React from "react";

interface LogoProps {
  scrolled?: boolean;
  isFooter?: boolean;
}

export function Logo({ scrolled = true, isFooter = false }: LogoProps) {
  return (
    <div className="flex items-center shrink-0">
      <img
        src="/images/logo.png"
        alt="Bin Arab Dental Centre"
        className="h-10 md:h-[52px] w-auto object-contain transition-all duration-300"
      />
    </div>
  );
}
