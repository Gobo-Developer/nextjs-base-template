"use client";

import { motion, type Variants } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";

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

const plans = [
  {
    name: "Básico",
    price: "$0",
    description: "Útil como estructura de ejemplo o prototipo inicial.",
    items: ["Navbar", "Hero", "CTA", "Footer"],
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$29",
    description: "Ideal para una presentación más completa y comercial.",
    items: ["Features", "Stats", "Pricing", "Animaciones"],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "$99",
    description: "Pensado para marcas que quieran una base más robusta.",
    items: ["Secciones escalables", "Diseño premium", "Mayor adaptación"],
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-28">
      <SectionTitle
        tag="Planes"
        title="Una sección típica en webs comerciales o SaaS"
        description="No siempre será necesaria, pero es muy común en sitios de producto, software o servicios, así que vale la pena tenerla lista en la base."
      />

      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.name}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            variants={scaleIn}
            transition={{
              duration: 0.6,
              delay: index * 0.08,
              ease: "easeOut",
            }}
            whileHover={{ y: -10 }}
            className={`rounded-[2rem] border p-7 backdrop-blur-xl ${
              plan.highlighted
                ? "border-fuchsia-400/40 bg-gradient-to-b from-fuchsia-500/15 to-cyan-400/10 shadow-2xl shadow-fuchsia-500/10"
                : "border-white/10 bg-white/5"
            }`}
          >
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-black">{plan.name}</h3>
              {plan.highlighted ? (
                <span className="rounded-full border border-fuchsia-300/30 bg-fuchsia-400/15 px-3 py-1 text-xs font-semibold text-fuchsia-200">
                  Recomendado
                </span>
              ) : null}
            </div>

            <p className="mt-5 text-5xl font-black">{plan.price}</p>
            <p className="mt-3 text-sm leading-7 text-white/60">
              {plan.description}
            </p>

            <div className="mt-8 space-y-3">
              {plan.items.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/8 bg-white/5 px-4 py-3 text-sm text-white/75"
                >
                  {item}
                </div>
              ))}
            </div>

            <button
              className={`mt-8 w-full rounded-2xl px-5 py-4 text-sm font-bold ${
                plan.highlighted
                  ? "bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-400 shadow-xl shadow-fuchsia-500/20"
                  : "border border-white/15 bg-white/10"
              }`}
            >
              Elegir plan
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}