/** Set mínimo de íconos SVG propios (no se reutilizan los íconos renderizados por Google Sites). */

type IconProps = {
  className?: string;
};

export function FacebookIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M13.5 21v-7.5h2.5l.4-3H13.5V8.4c0-.87.24-1.46 1.5-1.46h1.6V4.35A21 21 0 0 0 14.2 4.2c-2.3 0-3.9 1.4-3.9 4v2.3H8v3h2.3V21h3.2Z" />
    </svg>
  );
}

export function InstagramIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17" cy="7" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function YoutubeIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M21.6 7.5a2.7 2.7 0 0 0-1.9-1.9C18 5.1 12 5.1 12 5.1s-6 0-7.7.5A2.7 2.7 0 0 0 2.4 7.5 28 28 0 0 0 2 12a28 28 0 0 0 .4 4.5 2.7 2.7 0 0 0 1.9 1.9c1.7.5 7.7.5 7.7.5s6 0 7.7-.5a2.7 2.7 0 0 0 1.9-1.9A28 28 0 0 0 22 12a28 28 0 0 0-.4-4.5ZM10 15V9l5.2 3-5.2 3Z" />
    </svg>
  );
}

export function MailIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="m4 7 8 6 8-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function PhoneIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
      <path d="M5.5 4h3l1.5 4-2 1.5a11 11 0 0 0 5.5 5.5L15 13l4 1.5v3a1.5 1.5 0 0 1-1.6 1.5A15.5 15.5 0 0 1 4 5.6 1.5 1.5 0 0 1 5.5 4Z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function PinIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
      <path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21Z" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="9.5" r="2.5" />
    </svg>
  );
}

export function DocumentIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className={className} aria-hidden="true">
      <path d="M7 3.5h7l4 4V19a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 6 19V5A1.5 1.5 0 0 1 7 3.5Z" strokeLinejoin="round" />
      <path d="M14 3.5V8h4" strokeLinejoin="round" />
    </svg>
  );
}

export function SchoolIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className={className} aria-hidden="true">
      <path d="M12 3.5 21 8l-9 4.5L3 8Z" strokeLinejoin="round" />
      <path d="M6.5 10.3V16c0 1.1 2.5 2.5 5.5 2.5s5.5-1.4 5.5-2.5v-5.7" strokeLinejoin="round" />
      <path d="M21 8v6" strokeLinecap="round" />
    </svg>
  );
}

export function PeopleIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className={className} aria-hidden="true">
      <circle cx="9" cy="8" r="3" />
      <path d="M3.5 19c.7-3 2.8-4.5 5.5-4.5s4.8 1.5 5.5 4.5" strokeLinecap="round" />
      <circle cx="17" cy="8.5" r="2.3" />
      <path d="M15.8 14.7c2.1.3 3.5 1.7 4.1 4.3" strokeLinecap="round" />
    </svg>
  );
}

export function CalendarIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className={className} aria-hidden="true">
      <rect x="3.5" y="5" width="17" height="15" rx="2" />
      <path d="M3.5 9.5h17M8 3v4M16 3v4" strokeLinecap="round" />
    </svg>
  );
}

export function FormIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className={className} aria-hidden="true">
      <rect x="4.5" y="3.5" width="15" height="17" rx="2" />
      <path d="M8 8.5h8M8 12h8M8 15.5h5" strokeLinecap="round" />
    </svg>
  );
}

export function BookIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className={className} aria-hidden="true">
      <path d="M4 5.5c2-1 5-1 8 .5 3-1.5 6-1.5 8-.5v13c-2-1-5-1-8 .5-3-1.5-6-1.5-8-.5Z" strokeLinejoin="round" />
      <path d="M12 6v13" />
    </svg>
  );
}

export function CertificateIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className={className} aria-hidden="true">
      <rect x="3.5" y="4" width="17" height="12" rx="2" />
      <path d="M7 8h10M7 11.3h6" strokeLinecap="round" />
      <circle cx="12" cy="18.5" r="2.3" />
      <path d="m10.3 20.3-.8 2.7 2.5-1.2 2.5 1.2-.8-2.7" strokeLinejoin="round" />
    </svg>
  );
}

export function FolderIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className={className} aria-hidden="true">
      <path d="M3.5 6.5A1.5 1.5 0 0 1 5 5h4.5l2 2H19a1.5 1.5 0 0 1 1.5 1.5v9A1.5 1.5 0 0 1 19 19H5a1.5 1.5 0 0 1-1.5-1.5Z" strokeLinejoin="round" />
    </svg>
  );
}

export function SearchIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="m20 20-4.8-4.8" strokeLinecap="round" />
    </svg>
  );
}

/** Indicador de despliegue. Se rota 180° cuando el `<details>` que lo contiene está abierto. */
export function ChevronDownIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden="true">
      <path d="m6 9.5 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function MapIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className={className} aria-hidden="true">
      <path d="M9 4.5 4 6.5v13L9 17l6 2.5 5-2v-13l-5 2-6-2.5Z" strokeLinejoin="round" />
      <path d="M9 4.5V17M15 6.5v13" />
    </svg>
  );
}
