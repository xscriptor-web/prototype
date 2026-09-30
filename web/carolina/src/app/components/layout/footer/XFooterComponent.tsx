"use client";

import { XMinimalFooter } from "@/app/components/xcomponents";
import { useT } from "@/app/i18n-provider";

export default function XFooterComponent() {
  const t = useT("Footer");

  const year = new Date().getFullYear();

  const links = [
    { label: t("contacto"), href: "/contacto" },
    { label: t("terms"), href: "/terminos-y-condiciones" },
    { label: t("dev"), href: "https://xscriptor.com" },
  ];

  return (
    <XMinimalFooter
      copyright={`© ${year} ${t("copyright")} · ${t("rights")}`}
      links={links}
    />
  );
}

export { XFooterComponent };
