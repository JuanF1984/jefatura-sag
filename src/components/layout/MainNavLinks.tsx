"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { mainNav, isNavItemActive } from "@/data/navigation";
import { cn } from "@/lib/utils";

export function MainNavLinks({ variant }: { variant: "desktop" | "mobile" }) {
  const pathname = usePathname();
  const listRef = useRef<HTMLUListElement>(null);

  // El menú móvil es un <details>/<summary> nativo (ver Header.tsx), para que
  // funcione sin JavaScript. Como mejora progresiva, lo cerramos al navegar:
  // tanto de forma inmediata al click como al confirmarse el cambio de ruta
  // (cubre también navegación por atrás/adelante del navegador).
  useEffect(() => {
    if (variant !== "mobile") return;
    const details = listRef.current?.closest("details");
    if (details) details.open = false;
  }, [variant, pathname]);

  if (variant === "mobile") {
    return (
      <ul ref={listRef} className="flex flex-col divide-y divide-border text-sm font-medium">
        {mainNav.map((item) => {
          const active = isNavItemActive(item.href, pathname);
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={active ? "page" : undefined}
                onClick={(e) => {
                  const details = e.currentTarget.closest("details");
                  if (details) details.open = false;
                }}
                className={cn(
                  "block min-h-11 rounded-md border-l-4 px-2 py-3 transition-colors duration-200",
                  active
                    ? "border-brand-teal-darker bg-brand-teal-tint font-semibold text-brand-teal-darker"
                    : "border-transparent text-ink hover:border-brand-teal-light hover:bg-brand-teal-tint hover:text-brand-teal-dark",
                )}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    );
  }

  return (
    <ul className="flex flex-wrap items-center gap-x-5 gap-y-1 text-sm font-medium">
      {mainNav.map((item) => {
        const active = isNavItemActive(item.href, pathname);
        return (
          <li key={item.href}>
            <Link
              href={item.href}
              aria-current={active ? "page" : undefined}
              className={cn(
                "inline-block border-b-2 py-1 transition-colors duration-200",
                active
                  ? "border-brand-teal-darker font-semibold text-brand-teal-darker"
                  : "border-transparent text-ink hover:border-brand-teal-light hover:text-brand-teal-dark",
              )}
            >
              {item.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
