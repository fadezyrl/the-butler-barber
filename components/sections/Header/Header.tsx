"use client";

import { useEffect, useState } from "react";

import { BookLink } from "@/components/ui/BookLink";
import { BrandMark } from "@/components/ui/BrandMark";
import { useLanguage } from "@/context/LanguageContext";
import type { Locale } from "@/data/dictionary";

export const Header = (): React.JSX.Element => {
  const { dictionary, locale, setLocale } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = (): void => {
      setScrolled(window.scrollY > 40);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent): void => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
    return () => document.body.classList.remove("menu-open");
  }, [menuOpen]);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 1001px)");
    const onChange = (event: MediaQueryListEvent | MediaQueryList): void => {
      if (event.matches) setMenuOpen(false);
    };
    onChange(media);
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  const closeMenu = (): void => setMenuOpen(false);

  const switchLocale = (next: Locale): void => {
    setLocale(next);
  };

  return (
    <header
      className={["nav", scrolled ? "scrolled" : "", menuOpen ? "menu-open" : ""]
        .filter(Boolean)
        .join(" ")}
    >
      <a className="brand" href="#top" aria-label={dictionary.brand.homeAria}>
        <BrandMark />
      </a>
      <button
        className="menu-btn"
        type="button"
        aria-label={menuOpen ? dictionary.a11y.closeMenu : dictionary.a11y.openMenu}
        aria-expanded={menuOpen}
        aria-controls="navLinks"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span />
        <span />
      </button>
      <nav className="nav-links" id="navLinks" aria-label={dictionary.a11y.mainNav}>
        <a href="#story" onClick={closeMenu}>
          {dictionary.nav.story}
        </a>
        <a href="#services" onClick={closeMenu}>
          {dictionary.nav.services}
        </a>
        <a href="#work" onClick={closeMenu}>
          {dictionary.nav.work}
        </a>
        <a href="#contact" onClick={closeMenu}>
          {dictionary.nav.contact}
        </a>
        <div className="lang-switch" role="group" aria-label={dictionary.lang.switchTo}>
          <button
            type="button"
            aria-pressed={locale === "en"}
            onClick={() => switchLocale("en")}
          >
            {dictionary.lang.en}
          </button>
          <span aria-hidden="true">/</span>
          <button
            type="button"
            aria-pressed={locale === "ur"}
            onClick={() => switchLocale("ur")}
          >
            {dictionary.lang.ur}
          </button>
        </div>
        <BookLink className="book" />
      </nav>
    </header>
  );
};
