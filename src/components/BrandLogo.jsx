import React from "react";

function BrandLogo({ compact = false }) {
  return (
    <div className="inline-flex items-center gap-3 select-none">
      {/* Custom SVG matching the Samagram Technologies rounded-square dark-theme mark */}
      <svg
        width="40"
        height="40"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
      >
        <rect
          x="8"
          y="8"
          width="84"
          height="84"
          rx="24"
          stroke="#FFFFFF"
          strokeWidth="9"
        />
        {/* Upper-left copper arc */}
        <path
          d="M52 24C37 24 27 35 27 49C27 63 37 73 51 73"
          stroke="#C67D3B"
          strokeWidth="12"
          strokeLinecap="round"
        />
        {/* Lower-right white interlocking arc */}
        <path
          d="M48 47C62 47 73 56 73 67C73 78 63 85 49 85"
          stroke="#FFFFFF"
          strokeWidth="12"
          strokeLinecap="round"
        />
      </svg>

      {!compact && (
        <div className="leading-none">
          <span className="block text-xl font-extrabold tracking-tight text-white">
            Samagram
          </span>
          <span className="block text-[9px] font-semibold tracking-[0.28em] text-slate-400 mt-1">
            TECHNOLOGIES
          </span>
        </div>
      )}
    </div>
  );
}

export default BrandLogo;
