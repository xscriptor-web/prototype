import type { Metadata } from "next";
import ContactoClientPage from "@/app/contacto/ContactoClientPage";
import esMessages from "@/messages/es.json";
import { getMsg } from "@/app/lib/i18n-utils";

export const metadata: Metadata = {
  title: getMsg(esMessages, "ContactPage.metadataTitle"),
  description: getMsg(esMessages, "ContactPage.metadataDescription"),
  openGraph: {
    title: getMsg(esMessages, "ContactPage.metadataTitle"),
    description: getMsg(esMessages, "ContactPage.metadataDescription"),
    locale: getMsg(esMessages, "Meta.ogLocale"),
  },
};

export default function ContactoPage() {
  return <ContactoClientPage />;
}
