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

export default function FinalCta() {
  return (
    <section id="contact" className="pb-24">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
        transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
        className="rounded-[2.2rem] border border-white/10 bg-white/5 px-8 py-14 text-center backdrop-blur-2xl"
      >
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-violet-300/80">
          CTA Final
        </p>

        <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
          Una base lista para evolucionar
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/60">
          Esta plantilla te sirve como punto de arranque para nuevas páginas web,
          landings o sitios comerciales. Lo bueno no es solo que se vea bien,
          sino que ya está separada por componentes y pensada para reutilizar.
        </p>

        <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
          <Button variant="primary">Solicitar demo</Button>
          <Button variant="secondary">Hablar con ventas</Button>
        </div>
      </motion.div>
    </section>
  );
}