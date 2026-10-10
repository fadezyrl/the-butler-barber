"use client";

import type { JSX, ReactNode } from "react";

import { useLanguage } from "@/context/LanguageContext";
import {
  getBookingHref,
  isExternalBooking,
  SITE_CONFIG,
} from "@/data/site-config";

type BookLinkProps = {
  className?: string;
  children?: ReactNode;
};

export const BookLink = ({
  className,
  children,
}: BookLinkProps): JSX.Element => {
  const { dictionary } = useLanguage();
  const href = getBookingHref(SITE_CONFIG);
  const external = isExternalBooking(SITE_CONFIG);

  return (
    <a
      className={className}
      href={href}
      {...(external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
    >
      {children ?? dictionary.nav.book}
    </a>
  );
};
