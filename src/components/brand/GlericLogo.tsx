import type { SVGProps } from "react";

interface GlericLogoProps extends SVGProps<SVGSVGElement> {
  variant?: "full" | "wordmark" | "icon";
  tone?: "light" | "dark";
}

export function GlericLogo({
  variant = "wordmark",
  tone = "light",
  className = "",
  ...svgProps
}: GlericLogoProps) {
  const isFull = variant === "full";
  const isIcon = variant === "icon";
  const color = tone === "light" ? "#f4f4f4" : "#0a0a0a";

  if (isIcon) {
    return (
      <svg
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-label="Gleric Studio"
        role="img"
        {...svgProps}
      >
        <g stroke={color} strokeWidth="16" strokeLinecap="round" strokeLinejoin="round" fill="none">
          <path d="M96 65H66C48 65 38 78 38 100C38 122 48 135 66 135H96" />
          <path d="M96 100H70" />
          <path d="M168 76C168 64 156 58 142 58C128 58 118 65 118 77C118 90 130 95 146 99C162 103 174 109 174 123C174 136 163 143 148 143C134 143 122 137 119 125" />
        </g>
      </svg>
    );
  }

  return (
    <svg
      viewBox={isFull ? "0 0 1400 300" : "0 0 870 260"}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Gleric Studio"
      role="img"
      {...svgProps}
    >
      <g stroke={color} strokeWidth="14" strokeLinecap="round" strokeLinejoin="round" fill="none">
        {/* G */}
        <path d="M120 95H60C35 95 22 112 22 145C22 178 35 195 60 195H120" />
        <path d="M120 145H82" />
        {/* L */}
        <path d="M190 95V195H265" />
        {/* E */}
        <path d="M340 95H430" />
        <path d="M340 145H410" />
        <path d="M340 195H430" />
        {/* R */}
        <path d="M500 195V95H580C610 95 625 108 625 132C625 156 610 168 580 168H500" />
        <path d="M575 168L625 195" />
        {/* I */}
        <path d="M705 95V195" />
        {/* C */}
        <path d="M850 95H790C765 95 752 112 752 145C752 178 765 195 790 195H850" />
      </g>

      <text x="435" y="250" fill={color}
        fontFamily="Inter, Arial, Helvetica, sans-serif" fontSize="34" fontWeight="400" letterSpacing="28">
        STUDIO
      </text>

      {isFull && (
        <>
          <line x1="960" y1="65" x2="960" y2="235" stroke={color} strokeWidth="2" opacity="0.5" />
          <text x="1010" y="95"  fill={color} fontFamily="Inter, Arial, Helvetica, sans-serif" fontSize="24" fontWeight="400" letterSpacing="12" opacity="0.85">WEB DESIGN</text>
          <text x="1010" y="145" fill={color} fontFamily="Inter, Arial, Helvetica, sans-serif" fontSize="24" fontWeight="400" letterSpacing="12" opacity="0.85">DEVELOPMENT</text>
          <text x="1010" y="195" fill={color} fontFamily="Inter, Arial, Helvetica, sans-serif" fontSize="24" fontWeight="400" letterSpacing="12" opacity="0.85">DIGITAL SOLUTIONS</text>
        </>
      )}
    </svg>
  );
}
