import type { Metadata } from "next";
import LibrosClientPage from "@/app/libros/LibrosClientPage";
import esMessages from "@/messages/es.json";
import { getMsg } from "@/app/lib/i18n-utils";

export const metadata: Metadata = {
  title: getMsg(esMessages, "LibrosPage.metadataTitle"),
  description: getMsg(esMessages, "LibrosPage.metadataDescription"),
  openGraph: {
    title: getMsg(esMessages, "LibrosPage.metadataTitle"),
    description: getMsg(esMessages, "LibrosPage.metadataDescription"),
    locale: getMsg(esMessages, "Meta.ogLocale"),
  },
};

export default function LibrosPage() {
  return <LibrosClientPage />;
}
