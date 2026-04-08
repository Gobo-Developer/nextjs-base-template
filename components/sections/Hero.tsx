"use client";

import { motion, type Variants } from "framer-motion";
import Button from "@/components/ui/Button";

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
  },
};

const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.94,
  },
  show: {
    opacity: 1,
    scale: 1,
  },
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="grid min-h-screen items-center gap-16 py-20 lg:grid-cols-2"
    >
      <div>
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200 backdrop-blur-md"
        >
          <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_16px_rgba(103,232,249,0.95)]" />
          Plantilla base moderna y reusable
        </motion.div>

        <motion.h1
          initial="hidden"
          animate="show"
          variants={fadeUp}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          className="text-5xl font-black leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl"
        >
          Una base sólida para
          <span className="block bg-gradient-to-r from-fuchsia-400 via-violet-300 to-cyan-300 bg-clip-text text-transparent">
            futuros proyectos web
          </span>
        </motion.h1>

        <motion.p
          initial="hidden"
          animate="show"
          variants={fadeUp}
          transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
          className="mt-6 max-w-xl text-lg leading-8 text-white/65"
        >
          Incluye estructura típica de una página web: navegación, CTA,
          beneficios, métricas, planes, enlaces y cierre visual. Lista para
          adaptar a nuevos clientes o productos.
        </motion.p>

        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
          transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <Button variant="primary">CTA principal</Button>
          <Button variant="secondary">CTA secundario</Button>
        </motion.div>
      </div>

      <motion.div
        initial="hidden"
        animate="show"
        variants={scaleIn}
        transition={{ duration: 0.7, delay: 0.45, ease: "easeOut" }}
        className="relative"
      >
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-8 top-16 hidden h-28 w-28 rounded-3xl border border-white/10 bg-white/10 backdrop-blur-2xl lg:block"
        />

        <motion.div
          animate={{ y: [0, 14, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -right-8 bottom-20 hidden h-36 w-36 rounded-full bg-gradient-to-r from-fuchsia-500/30 to-cyan-400/30 blur-2xl lg:block"
        />

        <div className="relative rounded-[2rem] border border-white/10 bg-white/10 p-4 shadow-2xl shadow-black/40 backdrop-blur-2xl">
          <div className="rounded-[1.6rem] border border-white/10 bg-[#081120]/95 p-5">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <p className="text-sm text-white/50">Vista de ejemplo</p>
                <h2 className="text-xl font-bold">Landing Base Preview</h2>
              </div>

              <div className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-300">
                Ready
              </div>
            </div>

            <div className="mt-5 grid gap-4">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="rounded-3xl bg-gradient-to-r from-fuchsia-500/20 via-violet-500/20 to-cyan-400/20 p-5"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm text-white/60">Engagement</p>
                    <p className="mt-2 text-4xl font-black">87%</p>
                  </div>

                  <div className="rounded-2xl bg-white/10 px-3 py-2 text-sm font-semibold text-white/80">
                    +12.4%
                  </div>
                </div>

                <div className="mt-5 flex items-end gap-2">
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: 56 }}
                    transition={{ delay: 0.7, duration: 0.5 }}
                    className="w-8 rounded-t-xl bg-fuchsia-400/80"
                  />
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: 84 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                    className="w-8 rounded-t-xl bg-violet-400/80"
                  />
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: 64 }}
                    transition={{ delay: 0.9, duration: 0.5 }}
                    className="w-8 rounded-t-xl bg-cyan-400/80"
                  />
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: 100 }}
                    transition={{ delay: 1, duration: 0.5 }}
                    className="w-8 rounded-t-xl bg-emerald-400/80"
                  />
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: 116 }}
                    transition={{ delay: 1.1, duration: 0.5 }}
                    className="w-8 rounded-t-xl bg-white/80"
                  />
                </div>
              </motion.div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                  <p className="text-sm text-white/50">CTA</p>
                  <p className="mt-2 text-2xl font-bold">Listo para convertir</p>
                  <p className="mt-3 text-sm leading-6 text-white/60">
                    Estructura orientada a comunicar, guiar y cerrar acciones.
                  </p>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                  <p className="text-sm text-white/50">Diseño</p>
                  <p className="mt-2 text-2xl font-bold">Visual premium</p>
                  <p className="mt-3 text-sm leading-6 text-white/60">
                    Base moderna para productos, servicios o sitios corporativos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}