import { contact } from "@/lib/site-data";

export function InstagramIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function LinkedinIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M4.98 3.5a2.5 2.5 0 11-.02 5 2.5 2.5 0 01.02-5zM3 9.75h4v11.5H3V9.75zm6.5 0h3.84v1.57h.05c.54-1.01 1.84-2.07 3.79-2.07 4.05 0 4.8 2.67 4.8 6.14v5.86h-4v-5.2c0-1.24-.02-2.84-1.73-2.84-1.73 0-2 1.35-2 2.75v5.29h-4V9.75z" />
    </svg>
  );
}

export function WhatsappIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12.04 2a9.9 9.9 0 00-8.43 15.12L2 22l5-1.58A9.9 9.9 0 1012.04 2zm0 1.8a8.1 8.1 0 11-4.3 14.96l-.3-.18-2.97.94.97-2.9-.2-.31A8.1 8.1 0 0112.04 3.8zm-3.1 3.9c-.2 0-.5.07-.77.37-.26.3-1 .98-1 2.4s1.03 2.78 1.17 2.97c.15.2 2 3.2 4.95 4.36 2.45.96 2.95.77 3.48.72.53-.05 1.7-.7 1.94-1.37.24-.68.24-1.26.17-1.38-.07-.12-.27-.2-.57-.35-.3-.15-1.7-.84-1.97-.94-.27-.1-.47-.15-.67.15-.2.3-.77.94-.94 1.13-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57z" />
    </svg>
  );
}

export function SocialLinks({ className = "" }: { className?: string }) {
  const linkClass =
    "inline-flex h-10 w-10 items-center justify-center rounded-full border border-current/20 hover:border-brand-600 hover:text-brand-600 transition-colors";
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <a
        href={contact.instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram da Allu Digital"
        className={linkClass}
      >
        <InstagramIcon />
      </a>
      <a
        href={contact.linkedinUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn de Marcelo Viviani Junior"
        className={linkClass}
      >
        <LinkedinIcon />
      </a>
    </div>
  );
}
