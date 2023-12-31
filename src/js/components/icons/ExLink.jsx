function ExLinkIcon({ size = 24, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.6667 0V2.66667H19.4533L6.34667 15.7733L8.22667 17.6533L21.3333 4.54667V9.33333H24V0M21.3333 21.3333H2.66667V2.66667H12V0H2.66667C1.95942 0 1.28115 0.280951 0.781048 0.781048C0.280951 1.28115 0 1.95942 0 2.66667V21.3333C0 22.0406 0.280951 22.7189 0.781048 23.219C1.28115 23.719 1.95942 24 2.66667 24H21.3333C22.0406 24 22.7189 23.719 23.219 23.219C23.719 22.7189 24 22.0406 24 21.3333V12H21.3333V21.3333Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default ExLinkIcon;
