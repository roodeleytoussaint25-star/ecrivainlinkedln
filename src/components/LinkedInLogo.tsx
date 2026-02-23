interface LinkedInLogoProps {
  className?: string;
}

const LinkedInLogo = ({ className = "h-5" }: LinkedInLogoProps) => (
  <svg
    viewBox="0 0 76 22"
    className={`inline-block align-middle ${className}`}
    aria-label="LinkedIn"
    style={{ verticalAlign: "baseline" }}
  >
    <text
      x="0"
      y="17"
      style={{
        fontSize: "18px",
        fill: "#0A66C2",
        fontFamily: "system-ui, sans-serif",
        fontWeight: 700,
      }}
    >
      Linked
    </text>
    <rect x="49" y="2" width="22" height="18" rx="3" fill="#0A66C2" />
    <text
      x="52"
      y="17"
      style={{
        fontSize: "18px",
        fill: "white",
        fontFamily: "system-ui, sans-serif",
        fontWeight: 700,
      }}
    >
      in
    </text>
  </svg>
);

export default LinkedInLogo;
