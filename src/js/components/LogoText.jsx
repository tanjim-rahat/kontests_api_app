function LogoText({ className = "" }) {
  return (
    <a href="/">
      <button
        aria-label="logo"
        role="hyperlink"
        className={`uppercase text-xl tracking-wide font-medium p-2 ${className}`}
      >
        Kontests
      </button>
    </a>
  );
}

export default LogoText;
