"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { contact, navLinks, whatsappLink } from "@/lib/site-data";
import ThemeToggle from "@/components/ThemeToggle";

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [open, setOpen] = useState(false);

  const hrefFor = (href: string) => (isHome ? href : `/${href}`);

  return (
    <header className="fixed top-0 left-0 w-full z-50 glass-panel border-b">
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex items-center justify-between py-3">
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <Image
              src="/images/brand/allu-logo.png"
              alt="Allu Digital"
              width={780}
              height={368}
              className="h-14 sm:h-16 w-auto"
              priority
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={hrefFor(link.href)}
                className="text-sm font-medium text-ink-700 dark:text-ink-200 hover:text-brand-500 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <Link
              href="/nura"
              className="flex items-center gap-1.5 text-sm font-semibold gradient-brand-text hover:opacity-80 transition-opacity"
            >
              <Image
                src="/images/brand/nura/nura-icon.svg"
                alt=""
                width={20}
                height={20}
                className="h-5 w-5"
              />
              Nura
            </Link>
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <ThemeToggle />
            <a
              href={whatsappLink("Olá! Gostaria de falar com o time da Allu Digital.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-lg gradient-brand px-5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-brand-600/30 hover:-translate-y-0.5 transition-transform"
            >
              Falar com o time
            </a>
          </div>

          <div className="lg:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              type="button"
              aria-label="Abrir menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="inline-flex flex-col justify-center gap-1.5 w-10 h-10 items-center"
            >
              <span
                className={`block h-0.5 w-6 bg-ink-900 dark:bg-white transition-transform ${open ? "translate-y-2 rotate-45" : ""}`}
              />
              <span
                className={`block h-0.5 w-6 bg-ink-900 dark:bg-white transition-opacity ${open ? "opacity-0" : ""}`}
              />
              <span
                className={`block h-0.5 w-6 bg-ink-900 dark:bg-white transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`}
              />
            </button>
          </div>
        </div>

        {open && (
          <nav className="lg:hidden flex flex-col gap-1 pb-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={hrefFor(link.href)}
                onClick={() => setOpen(false)}
                className="py-2 text-sm font-medium text-ink-700 dark:text-ink-200 hover:text-brand-500"
              >
                {link.label}
              </a>
            ))}
            <Link
              href="/nura"
              onClick={() => setOpen(false)}
              className="py-2 text-sm font-semibold gradient-brand-text"
            >
              Nura
            </Link>
            <a
              href={whatsappLink("Olá! Gostaria de falar com o time da Allu Digital.")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center rounded-lg gradient-brand px-5 py-2.5 text-sm font-semibold text-white"
            >
              Falar com o time
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
