// Set di icone SVG inline, tema industriale/tecnico.
// Nessuna libreria esterna: ogni icona è un componente React leggero.

const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

export function GearIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z" />
      <path d="M19.4 13.9a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V20a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 18.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 14 1.65 1.65 0 0 0 3.17 13H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 8a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 3.68 1.65 1.65 0 0 0 10 2.17V2a2 2 0 1 1 4 0v.09c0 .69.4 1.32 1 1.51.6.25 1.34.12 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06c-.45.48-.58 1.22-.33 1.82.19.6.82 1 1.51 1H21a2 2 0 1 1 0 4h-.09c-.69 0-1.32.4-1.51 1Z" />
    </svg>
  );
}

export function CraneIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M3 21h9" />
      <path d="M5 21V9l7-6 7 6" />
      <path d="M12 3v6" />
      <path d="M19 9v6" />
      <path d="M15 21v-6h4v6" />
      <path d="M19 15l2-2" />
    </svg>
  );
}

export function WeldIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M4 20 14 10" />
      <path d="M12.5 5.5 18.5 11.5" />
      <path d="M17 3l4 4-2 2-4-4Z" />
      <path d="M3 21l1.5-4L7 19.5Z" />
      <circle cx="15.2" cy="8.2" r="0.4" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function PhoneIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M15.05 5A5 5 0 0 1 19 8.95" />
      <path d="M15.05 1A9 9 0 0 1 23 8.94" />
      <path d="M21 16.9v2a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 1.11 3.18 2 2 0 0 1 3.1 1h2a2 2 0 0 1 2 1.72c.13.99.36 1.96.68 2.89a2 2 0 0 1-.45 2.11L6.09 8.9a16 16 0 0 0 6 6l1.18-1.24a2 2 0 0 1 2.11-.45c.93.32 1.9.55 2.89.68A2 2 0 0 1 21 16.9Z" />
    </svg>
  );
}

export function ShieldIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M12 2 4 5v6c0 5 3.4 8.7 8 11 4.6-2.3 8-6 8-11V5Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

export function ClipboardIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <rect x="6" y="4" width="12" height="17" rx="1.5" />
      <path d="M9 4V3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1" />
      <path d="M9 11h6M9 15h6M9 19h3" />
    </svg>
  );
}

export function TargetIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function HandshakeIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M2 12h4l3-3 4 4 3-3h4" />
      <path d="M9 13l2 2 4-4" />
      <path d="M2 12v3a2 2 0 0 0 2 2h1" />
      <path d="M22 12v3a2 2 0 0 1-2 2h-1" />
    </svg>
  );
}

export function MapPinIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export function ClockIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </svg>
  );
}

export function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <rect x="2.5" y="4.5" width="19" height="15" rx="2" />
      <path d="m3 6 9 7 9-7" />
    </svg>
  );
}

export function CheckIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export function ArrowRightIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M5 12h14" />
      <path d="m13 5 7 7-7 7" />
    </svg>
  );
}

export function MenuIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M3 6h18M3 12h18M3 18h18" />
    </svg>
  );
}

export function CloseIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  );
}

export function UploadIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M12 16V4M7 9l5-5 5 5" />
      <path d="M4 16v3a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-3" />
    </svg>
  );
}

export const SERVICE_ICONS = {
  gear: GearIcon,
  crane: CraneIcon,
  weld: WeldIcon,
  phone: PhoneIcon,
  shield: ShieldIcon,
  clipboard: ClipboardIcon,
  target: TargetIcon,
  handshake: HandshakeIcon,
};
