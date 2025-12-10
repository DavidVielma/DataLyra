import React from "react";

export function Logo({ className = "", size = 40 }: { className?: string; size?: number }) {
  return (
    <svg
      width={size * 1.28} // Aspect ratio 180/140 ~= 1.28
      height={size}
      viewBox="0 0 180 140"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Nodo central */}
      <circle cx="95" cy="70" r="6" fill="#0EA5E9" />
      {/* Nodos */}
      <circle cx="55" cy="30" r="7" fill="#38BDF8" />
      <circle cx="140" cy="45" r="6" fill="#06B6D4" />
      <circle cx="155" cy="100" r="7" fill="#22D3EE" />
      <circle cx="80" cy="115" r="6" fill="#0EA5E9" />
      <circle cx="30" cy="75" r="7" fill="#38BDF8" />
      {/* Conexiones externas */}
      <line x1="55" y1="30" x2="140" y2="45" stroke="#38BDF8" strokeWidth="3.5" strokeLinecap="round" />
      <line x1="140" y1="45" x2="155" y2="100" stroke="#06B6D4" strokeWidth="3.5" strokeLinecap="round" />
      <line x1="155" y1="100" x2="80" y2="115" stroke="#22D3EE" strokeWidth="3.5" strokeLinecap="round" />
      <line x1="80" y1="115" x2="30" y2="75" stroke="#0EA5E9" strokeWidth="3.5" strokeLinecap="round" />
      <line x1="30" y1="75" x2="55" y2="30" stroke="#0EA5E9" strokeWidth="3.5" strokeLinecap="round" />
      {/* Conexiones internas */}
      <line x1="95" y1="70" x2="55" y2="30" stroke="#0EA5E9" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="95" y1="70" x2="140" y2="45" stroke="#06B6D4" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="95" y1="70" x2="155" y2="100" stroke="#22D3EE" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="95" y1="70" x2="80" y2="115" stroke="#38BDF8" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="95" y1="70" x2="30" y2="75" stroke="#0EA5E9" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}
