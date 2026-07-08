interface WordmarkProps {
  compressed?: boolean;
  className?: string;
  textColor?: string;
}

export default function Wordmark({
  compressed = false,
  className = "",
  textColor = "var(--mcg-green)",
}: WordmarkProps) {
  // "MISSION CLARITY" at 32px with 0.34em letter-spacing needs ~530px.
  // Using 540px wide viewBox with text centered at 270.
  const w = 540;
  const cx = w / 2;

  if (compressed) {
    // Compressed lockup: top rule, MISSION CLARITY, bottom rule (no GROUP line)
    // Height: 1 (rule) + 18 (gap) + 32 (text) + 18 (gap) + 1 (rule) = 70
    return (
      <svg
        viewBox={`0 0 ${w} 70`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Mission Clarity"
        className={className}
        style={{ overflow: "visible" }}
      >
        <line
          x1="0"
          y1="0.75"
          x2={w}
          y2="0.75"
          stroke="var(--mcg-gold)"
          strokeWidth="1.5"
        />
        <text
          x={cx}
          y="43"
          textAnchor="middle"
          fill={textColor}
          fontFamily="var(--font-cormorant-garamond), 'Cormorant Garamond', serif"
          fontSize="32"
          fontWeight="600"
          letterSpacing="0.34em"
        >
          MISSION CLARITY
        </text>
        <line
          x1="0"
          y1="69.25"
          x2={w}
          y2="69.25"
          stroke="var(--mcg-gold)"
          strokeWidth="1.5"
        />
      </svg>
    );
  }

  // Full lockup: top rule, MISSION CLARITY, GROUP, bottom rule
  // Bottom rule sits ~19px below the GROUP baseline to visually match the
  // ~19px gap between the top rule and the MISSION CLARITY cap height.
  // Rules shortened to ~440px, centered within the 540px viewBox
  const ruleX1 = 50;
  const ruleX2 = w - 50;

  return (
    <svg
      viewBox={`0 0 ${w} 90`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Mission Clarity Group"
      className={className}
      style={{ overflow: "visible" }}
    >
      <line
        x1={ruleX1}
        y1="0.75"
        x2={ruleX2}
        y2="0.75"
        stroke="var(--mcg-gold)"
        strokeWidth="1.5"
      />
      <text
        x={cx}
        y="43"
        textAnchor="middle"
        fill={textColor}
        fontFamily="var(--font-cormorant-garamond), 'Cormorant Garamond', serif"
        fontSize="32"
        fontWeight="600"
        letterSpacing="0.34em"
      >
        MISSION CLARITY
      </text>
      <text
        x={cx}
        y="69"
        textAnchor="middle"
        fill={textColor}
        fontFamily="var(--font-cormorant-garamond), 'Cormorant Garamond', serif"
        fontSize="16"
        fontWeight="500"
        letterSpacing="0.5em"
      >
        GROUP
      </text>
      <line
        x1={ruleX1}
        y1="89.25"
        x2={ruleX2}
        y2="89.25"
        stroke="var(--mcg-gold)"
        strokeWidth="1.5"
      />
    </svg>
  );
}
