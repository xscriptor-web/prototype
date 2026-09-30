"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState, type ReactNode } from "react";
import { useT } from "@/app/i18n-provider";
import styles from "./Navbar.module.css";

interface NavLink {
  url: string;
  title: string;
}

interface NavbarProps {
  links: NavLink[];
  logo: ReactNode;
  storageKey?: string;
}

function isActive(pathname: string, url: string): boolean {
  if (url === "/") return pathname === "/";
  return pathname === url || pathname.startsWith(`${url}/`);
}

function useTheme(storageKey: string) {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    queueMicrotask(() => {
      const stored = window.localStorage.getItem(storageKey);
      setTheme(stored === "dark" ? "dark" : "light");
      setReady(true);
    });
  }, [storageKey]);

  const toggle = useCallback(() => {
    setTheme((prev) => {
      const next = prev === "dark" ? "light" : "dark";
      try {
        window.localStorage.setItem(storageKey, next);
      } catch {
        /* noop */
      }
      if (next === "dark") {
        document.documentElement.setAttribute("data-theme", "dark");
      } else {
        document.documentElement.removeAttribute("data-theme");
      }
      return next;
    });
  }, [storageKey]);

  return { theme, ready, toggle };
}

export default function Navbar({
  links,
  logo,
  storageKey = "theme",
}: NavbarProps) {
  const pathname = usePathname();
  const t = useT("Navbar");
  const { theme, ready, toggle } = useTheme(storageKey);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    queueMicrotask(() => setMenuOpen(false));
  }, [pathname]);

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }
    return () => document.body.classList.remove("menu-open");
  }, [menuOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className={styles.header}>
      <nav aria-label={t("navLabel")} className={styles.nav}>
        <div className={styles.logoRow}>
          <button
            type="button"
            onClick={toggle}
            className={styles.logo}
            aria-label={theme === "dark" ? t("labelLight") : t("labelDark")}
            title={theme === "dark" ? t("labelLight") : t("labelDark")}
            aria-pressed={theme === "dark"}
            disabled={!ready}
          >
            {logo}
          </button>

          <div className={styles.logoActions}>
            <button
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              className={styles.menuButton}
              aria-expanded={menuOpen}
              aria-controls="site-menu"
              aria-label={menuOpen ? t("labelClose") : t("labelOpen")}
            >
              <span
                className={`${styles.menuBar} ${menuOpen ? styles.menuBarTop : ""}`}
              />
              <span
                className={`${styles.menuBar} ${menuOpen ? styles.menuBarMiddle : ""}`}
              />
              <span
                className={`${styles.menuBar} ${menuOpen ? styles.menuBarBottom : ""}`}
              />
            </button>
          </div>
        </div>

        <div className={styles.desktopLinks}>
          {links.map((link) => (
            <Link
              key={link.url}
              href={link.url}
              className={`${styles.link} ${
                isActive(pathname, link.url) ? styles.linkActive : ""
              }`}
              aria-current={isActive(pathname, link.url) ? "page" : undefined}
            >
              {link.title}
            </Link>
          ))}
        </div>
      </nav>

      <div
        id="site-menu"
        className={`${styles.overlay} ${menuOpen ? styles.overlayOpen : ""}`}
        aria-hidden={!menuOpen}
      >
        <div className={styles.overlayLinks}>
          {links.map((link, index) => (
            <Link
              key={link.url}
              href={link.url}
              tabIndex={menuOpen ? 0 : -1}
              className={`${styles.overlayLink} ${
                isActive(pathname, link.url) ? styles.overlayLinkActive : ""
              }`}
              style={{ animationDelay: `${0.06 * index}s` }}
              aria-current={isActive(pathname, link.url) ? "page" : undefined}
            >
              {link.title}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
