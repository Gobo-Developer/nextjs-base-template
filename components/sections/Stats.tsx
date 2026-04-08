"use client";

import { motion, type Variants } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";

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

const stats = [
  {
    value: "+320%",
    label: "Mayor impacto visual",
  },
  {
    value: "24/7",
    label: "Lista para adaptarse",
  },
  {
    value: "99%",
    label: "Base reutilizable",
  },
];

export default function Stats() {
  return (
    <section id="stats" className="py-28">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
        transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
      >
        <SectionTitle
          tag="Resultados"
          title="Una base pensada para presentar y reutilizar"
          description="Las métricas aquí son de ejemplo, pero la sección sirve para mostrar resultados, confianza, indicadores o cualquier dato que ayude a reforzar credibilidad."
        />
      </motion.div>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {stats.map((item, index) => (
          <motion.div
            key={item.label}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            variants={fadeUp}
            transition={{
              duration: 0.6,
              delay: index * 0.08,
              ease: "easeOut",
            }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="rounded-[2rem] border border-white/10 bg-white/5 p-8 text-center backdrop-blur-xl"
          >
            <p className="text-5xl font-black">{item.value}</p>
            <p className="mt-3 text-white/60">{item.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}