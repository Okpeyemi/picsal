"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { PageLoader } from "@/components/ui/loader";

function getAnchorFromEvent(event: MouseEvent): HTMLAnchorElement | null {
  let el = event.target as HTMLElement | null;
  while (el && el !== document.body) {
    if (el instanceof HTMLAnchorElement) return el;
    el = el.parentElement;
  }
  return null;
}

function isModifiedEvent(e: MouseEvent) {
  return e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button === 1;
}

export function NavigationLoader() {
  const pathname = usePathname();
  const search = useSearchParams();
  const [loading, setLoading] = useState(false);
  const startedAt = useRef<number | null>(null);
  const minDuration = 300;    // ms (éviter le clignotement)
  const showDelay = 80;       // ms (ne pas afficher si navigation instantanée)
  const showTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Démarre le loader sur clics de liens internes
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (isModifiedEvent(e)) return;
      const a = getAnchorFromEvent(e);
      if (!a) return;

      // ignorer liens externes / ancres / pas de href
      const href = a.getAttribute("href");
      if (!href || href.startsWith("#") || a.target === "_blank" || a.hasAttribute("download") || a.rel === "external" || a.dataset.noLoader === "true") {
        return;
      }
      try {
        const next = new URL(href, location.href);
        if (next.origin !== location.origin) return;
        if (next.href === location.href) return;

        // planifier l’affichage (évite flash)
        showTimer.current = setTimeout(() => {
          startedAt.current = Date.now();
          setLoading(true);
        }, showDelay);
      } catch {
        // ignore parsing errors
      }
    };

    const onBeforeUnload = () => {
      // navigation full page
      startedAt.current = Date.now();
      setLoading(true);
    };

    window.addEventListener("click", onClick, true);
    window.addEventListener("beforeunload", onBeforeUnload);
    return () => {
      window.removeEventListener("click", onClick, true);
      window.removeEventListener("beforeunload", onBeforeUnload);
      if (showTimer.current) clearTimeout(showTimer.current);
    };
  }, []);

  // Arrête le loader quand l’URL a changé (pathname ou query)
  useEffect(() => {
    if (showTimer.current) {
      clearTimeout(showTimer.current);
      showTimer.current = null;
    }
    if (!loading) return;

    const elapsed = startedAt.current ? Date.now() - startedAt.current : 0;
    const remaining = Math.max(0, minDuration - elapsed);
    const t = setTimeout(() => {
      setLoading(false);
      startedAt.current = null;
    }, remaining);
    return () => clearTimeout(t);
  }, [pathname, search, loading]); // changement de route

  return loading ? <PageLoader message="Chargement de la page..." /> : null;
}