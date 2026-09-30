import type { Metadata } from "next";
import { getSortedArticles } from "@/app/lib/articles";
import BlogListClient from "@/app/components/blog/BlogListClient";
import esMessages from "@/messages/es.json";
import { getMsg } from "@/app/lib/i18n-utils";

export const metadata: Metadata = {
  title: getMsg(esMessages, "BlogPage.metadataTitle"),
  description: getMsg(esMessages, "BlogPage.metadataDescription"),
  openGraph: {
    title: getMsg(esMessages, "BlogPage.metadataTitle"),
    description: getMsg(esMessages, "BlogPage.metadataDescription"),
    locale: getMsg(esMessages, "Meta.ogLocale"),
  },
};

export default function BlogPage() {
  const articles = getSortedArticles("es");
  return <BlogListClient articles={articles} />;
}
