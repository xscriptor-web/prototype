"use client";

import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "@/app/components/navbar/Navbar";
import { useT } from "@/app/i18n-provider";
import styles from "./transitionProvider.module.css";

export default function TransitionProvider() {
  const pathname = usePathname();
  const t = useT("Navbar");

  const links = [
    { url: "/", title: t("home") },
    { url: "/blog", title: t("blog") },
    { url: "/libros", title: t("libros") },
    { url: "/sobre-mi", title: t("sobreMi") },
    { url: "/contacto", title: t("contacto") },
  ];

  return (
    <>
      <Navbar
        links={links}
        logo={<span className={styles.logoMonogram}>CM</span>}
      />

      <AnimatePresence mode="wait">
        <motion.div
          key={`transition-${pathname}`}
          className={styles.curtain}
          initial={{ opacity: 1, visibility: "visible" }}
          animate={{ opacity: 0, transitionEnd: { visibility: "hidden" } }}
          exit={{ opacity: 1, visibility: "visible" }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
          aria-hidden="true"
        >
          <motion.span
            className={styles.mark}
            initial={{ opacity: 0, scale: 0.85, rotate: -18 }}
            animate={{ opacity: [0, 1, 0], scale: [0.85, 1, 1], rotate: [-18, 0, 0] }}
            transition={{ duration: 0.65, times: [0, 0.4, 1] }}
          >
            <svg
              width="42"
              height="42"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.9"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M12 20h9" />
              <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
            </svg>
          </motion.span>
        </motion.div>
      </AnimatePresence>
    </>
  );
}
