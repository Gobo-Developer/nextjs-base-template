"use client";

import { motion, type Variants } from "framer-motion";
import { theme } from "@/lib/theme";

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
  },
};

export default function Navbar() {
  return (
    <motion.header
      initial="hidden"
      animate="show"
      variants={fadeUp}
      transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
      className="sticky top-0 z-50 mt-4 flex items-center justify-between rounded-full border border-white/10 bg-white/10 px-5 py-3 backdrop-blur-xl"
    >
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-fuchsia-500 via-violet-500 to-cyan-400 text-sm font-black shadow-lg shadow-fuchsia-500/30">
          X
        </div>

        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-white/50">
            {theme.brandTag}
          </p>
          <p className="text-sm font-bold">{theme.brandName}</p>
        </div>
      </div>

      <nav className="hidden items-center gap-8 text-sm text-white/70 md:flex">
        <a href="#hero" className="transition hover:text-white">
          Inicio
        </a>
        <a href="#features" className="transition hover:text-white">
          Beneficios
        </a>
        <a href="#stats" className="transition hover:text-white">
          Resultados
        </a>
        <a href="#pricing" className="transition hover:text-white">
          Planes
        </a>
        <a href="#contact" className="transition hover:text-white">
          Contacto
        </a>
      </nav>

      <button className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold transition hover:bg-white/15">
        {theme.ctaPrimary}
      </button>
    </motion.header>
  );
}