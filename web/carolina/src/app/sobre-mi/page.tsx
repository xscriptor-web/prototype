import type { Metadata } from "next";
import SobreMiClientPage from "@/app/sobre-mi/SobreMiClientPage";
import esMessages from "@/messages/es.json";
import { getMsg } from "@/app/lib/i18n-utils";

export const metadata: Metadata = {
  title: getMsg(esMessages, "SobreMiPage.metadataTitle"),
  description: getMsg(esMessages, "SobreMiPage.metadataDescription"),
  openGraph: {
    title: getMsg(esMessages, "SobreMiPage.metadataTitle"),
    description: getMsg(esMessages, "SobreMiPage.metadataDescription"),
    locale: getMsg(esMessages, "Meta.ogLocale"),
  },
};

export default function SobreMiPage() {
  return <SobreMiClientPage />;
}
