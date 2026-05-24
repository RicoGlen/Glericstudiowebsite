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
  const strokeBase = tone === "light" ? "url(#gleric-chrome)" : "url(#gleric-chrome-dark)";
  const strokeMid  = tone === "light" ? "#e5e6eb" : "#3a3a3a";
  const strokeDim  = tone === "light" ? "#86878b" : "#606060";
  const textFill   = tone === "light" ? "url(#gleric-soft)" : "#0a0a0a";

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
        <defs>
          <linearGradient id="gleric-chrome-icon" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"  stopColor={tone === "light" ? "#ffffff" : "#1a1a1a"} />
            <stop offset="55%" stopColor={tone === "light" ? "#c9ccd4" : "#404040"} />
            <stop offset="100%" stopColor={tone === "light" ? "#8d9098" : "#606060"} />
          </linearGradient>
        </defs>
        <path d="M148 62H88C63 62 50 79 50 112C50 145 63 162 88 162H148"
          stroke="url(#gleric-chrome-icon)" strokeWidth="14" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M148 112H110" stroke={strokeMid} strokeWidth="14" strokeLinecap="round" />
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
      <defs>
        <linearGradient id="gleric-chrome" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#ffffff" />
          <stop offset="35%"  stopColor="#f6f7fa" />
          <stop offset="55%"  stopColor="#c9ccd4" />
          <stop offset="100%" stopColor="#8d9098" />
        </linearGradient>
        <linearGradient id="gleric-chrome-dark" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#1a1a1a" />
          <stop offset="35%"  stopColor="#0a0a0a" />
          <stop offset="100%" stopColor="#404040" />
        </linearGradient>
        <linearGradient id="gleric-soft" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#ffffff" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#b8bcc4" stopOpacity="0.8"  />
        </linearGradient>
      </defs>

      <g stroke={strokeBase} strokeWidth="14" strokeLinecap="round" strokeLinejoin="round" fill="none">
        {/* G */}
        <path d="M120 95H60C35 95 22 112 22 145C22 178 35 195 60 195H120" />
        <path d="M120 145H82" stroke={strokeMid} />
        {/* L */}
        <path d="M190 95V195H265" />
        {/* E */}
        <path d="M340 95H430" />
        <path d="M340 145H410" stroke={strokeMid} />
        <path d="M340 195H430" stroke={strokeMid} />
        {/* R */}
        <path d="M500 195V95H580C610 95 625 108 625 132C625 156 610 168 580 168H500" />
        <path d="M575 168L625 195" />
        {/* I */}
        <path d="M705 95V195" stroke={strokeDim} />
        {/* C */}
        <path d="M850 95H790C765 95 752 112 752 145C752 178 765 195 790 195H850" />
      </g>

      <text x="435" y="250" fill={textFill}
        fontFamily="Inter, Arial, Helvetica, sans-serif" fontSize="34" fontWeight="400" letterSpacing="28">
        STUDIO
      </text>

      {isFull && (
        <>
          <line x1="960" y1="65" x2="960" y2="235" stroke={textFill} strokeWidth="2" opacity="0.55" />
          <text x="1010" y="95"  fill={textFill} fontFamily="Inter, Arial, Helvetica, sans-serif" fontSize="24" fontWeight="400" letterSpacing="12">WEB DESIGN</text>
          <text x="1010" y="145" fill={textFill} fontFamily="Inter, Arial, Helvetica, sans-serif" fontSize="24" fontWeight="400" letterSpacing="12">DEVELOPMENT</text>
          <text x="1010" y="195" fill={textFill} fontFamily="Inter, Arial, Helvetica, sans-serif" fontSize="24" fontWeight="400" letterSpacing="12">DIGITAL SOLUTIONS</text>
        </>
      )}
    </svg>
  );
}
