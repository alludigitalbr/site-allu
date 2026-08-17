"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { nuraSubNav } from "@/lib/nura-pages-data";

export default function NuraSubNav() {
  const pathname = usePathname();

  return (
    <div className="mt-20 sm:mt-24 border-b border-border-subtle bg-surface">
      <div className="mx-auto max-w-6xl px-5">
        <nav className="flex gap-1 overflow-x-auto py-2.5 scrollbar-none">
          {nuraSubNav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`whitespace-nowrap rounded-lg px-3.5 py-1.5 text-sm font-medium transition-colors ${
                  active
                    ? "bg-brand-500 text-white"
                    : "text-ink-700 dark:text-ink-200 hover:bg-surface-muted"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
