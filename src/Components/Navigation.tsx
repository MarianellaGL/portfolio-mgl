"use client";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LanguageSwitcherButton from "./LanguageSwitcherButton";
import { useLocale, useTranslations } from "next-intl";

export const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const locale = useLocale();
  const t = useTranslations("Common");

  const links = [
    { label: t("home"), route: "/" },
    { label: t("portfolio"), route: "/portfolio" },
    { label: t("stack"), route: "/stack" },
  ];

  return (
    <header className="z-50 w-full sticky top-0">
      <div className="w-full px-0">
        <motion.nav
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, type: "spring" }}
          className="w-full flex items-center justify-between px-4 py-3 sm:px-8 md:px-16 md:py-7 min-h-[60px] sm:min-h-[72px] bg-gradient-to-r from-fuchsia-700/70 via-pink-600/60 to-violet-700/70 backdrop-blur-md border-y-4 border-fuchsia-400/60 shadow-xl rounded-none lg:rounded-none"
          aria-label="Barra de navegación principal"
        >
          <div className="w-full max-w-screen-xl mx-auto flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-400 rounded-full select-none"
            >
              <motion.span
                initial={{
                  textShadow: "0 0 16px #ec4899, 0 0 32px #a21caf",
                  paddingLeft: "24px",
                }}
                whileHover={{
                  scale: 1.12,
                  color: "#f0abfc",
                  textShadow: "0 0 32px #ec4899, 0 0 64px #a21caf",
                }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-widest text-white drop-shadow-[0_1px_8px_rgba(236,72,153,0.7)] group-hover:text-fuchsia-300 transition-colors"
                aria-label="Ir al inicio"
              >
                MGL
              </motion.span>
            </Link>
            <div className="flex items-center gap-x-2 sm:gap-x-4 md:gap-x-6">
              <div className="hidden lg:flex lg:items-center">
                <ul className="text-lg flex gap-8">
                  {links.map(({ label, route }) => (
                    <li key={route}>
                      <Link
                        href={route}
                        className="relative px-3 py-2 rounded-lg text-white font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-400 hover:bg-fuchsia-700/30 hover:shadow-[0_0_8px_2px_rgba(236,72,153,0.4)]"
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <LanguageSwitcherButton className="relative hidden lg:inline-flex items-center px-2 py-1 sm:px-3 sm:py-2 rounded-lg border-2 border-fuchsia-300 bg-fuchsia-800/60 text-white text-xs sm:text-sm font-semibold shadow-md shadow-fuchsia-500/20 focus-visible:ring-2 focus-visible:ring-fuchsia-400 transition-all duration-300 hover:bg-fuchsia-700/80" />
              <div className="flex justify-center">
                <a
                  href="/marianellaGomezLuna.pdf"
                  download={
                    locale === "en"
                      ? "MarianellaGomezLuna-Resume.pdf"
                      : "MarianellaGomezLuna-CV.pdf"
                  }
                  className="bg-gradient-to-r from-fuchsia-500 via-pink-500 to-violet-500 text-white font-bold px-3 py-2 sm:px-4 sm:py-3 md:px-6 md:py-4 rounded-lg border-2 border-fuchsia-300 shadow-lg shadow-fuchsia-500/30 hover:from-pink-600 hover:to-fuchsia-600 focus-visible:ring-2 focus-visible:ring-fuchsia-400 transition-all duration-300 text-sm sm:text-base"
                  aria-label={t("downloadCvAria")}
                >
                  {t("cv")}
                </a>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-400 rounded p-2"
              aria-label={
                isOpen
                  ? "Cerrar menú de navegación"
                  : "Abrir menú de navegación"
              }
              aria-expanded={isOpen}
              aria-controls="main-menu"
            >
              <motion.span
                initial={false}
                animate={{ rotate: isOpen ? 90 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isOpen && (
                  <svg
                    className="h-7 w-7"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
                {!isOpen && (
                  <svg
                    className="h-7 w-7"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                )}
              </motion.span>
            </button>
          </div>
        </motion.nav>
        <AnimatePresence>
          {isOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
                onClick={() => setIsOpen(false)}
                aria-hidden="true"
              />

              <motion.div
                id="main-menu"
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ duration: 0.4, type: "spring", damping: 25 }}
                className="lg:hidden fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-gradient-to-br from-fuchsia-900/95 via-pink-800/90 to-violet-900/95 backdrop-blur-xl shadow-2xl border-l-2 border-fuchsia-400/60 z-50"
                role="menu"
                aria-label="Menú de navegación móvil"
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between p-6 border-b border-fuchsia-400/30">
                    <h2 className="text-xl font-bold text-white">Menú</h2>
                    <button
                      onClick={() => setIsOpen(false)}
                      className="text-white hover:text-fuchsia-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-400 rounded p-2"
                      aria-label="Cerrar menú"
                    >
                      <svg
                        className="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>

                  <div className="flex-1 overflow-y-auto">
                    <ul className="flex flex-col gap-2 py-6 px-6">
                      {links.map(({ label, route }) => (
                        <li key={route}>
                          <Link
                            href={route}
                            className="block px-4 py-4 rounded-lg text-white font-semibold text-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-400 hover:bg-fuchsia-700/30 hover:shadow-[0_0_8px_2px_rgba(236,72,153,0.4)] transition-all duration-300"
                            role="menuitem"
                            tabIndex={0}
                            onClick={() => setIsOpen(false)}
                          >
                            {label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-6 border-t border-fuchsia-400/30">
                    <LanguageSwitcherButton className="w-full flex items-center justify-center px-4 py-4 rounded-lg border-2 border-fuchsia-300 bg-fuchsia-800/60 text-white font-semibold text-lg shadow-md shadow-fuchsia-500/20 focus-visible:ring-2 focus-visible:ring-fuchsia-400 transition-all duration-300 hover:bg-fuchsia-700/80" />
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};
