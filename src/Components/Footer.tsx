"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";

export const Footer = () => {
  const t = useTranslations("Common");
  return (
    <motion.footer
      initial={{ y: 40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, type: "spring" }}
      className="w-full mx-auto px-12 py-8 md:px-20 md:py-10 bg-gradient-to-r from-fuchsia-700/80 via-pink-600/70 to-violet-700/80 backdrop-blur-md border-y-4 border-fuchsia-400/60 shadow-xl rounded-2xl text-white text-center"
    >
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8">
        <Image
          className="invert drop-shadow-[0_0_8px_#ec4899]"
          src="/icons8-linkedin.svg"
          alt="LinkedIn"
          width={40}
          height={40}
        />
        <p className="font-semibold">{t("footer")}</p>
        <a
          href="https://www.linkedin.com/in/marianella-gomez-luna/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-fuchsia-200 font-bold underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-400 px-2 py-1 rounded transition-all duration-300"
          aria-label="Ir al perfil de LinkedIn de Marianella Gomez Luna"
        >
          @MarianellaGL
        </a>
      </div>
    </motion.footer>
  );
};
