"use client";

import { motion, type Variants } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";
import { featuresContent } from "@/lib/content";

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

export default function Features() {
  return (
    <section id="features" className="py-8">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
        transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
      >
        <SectionTitle
          tag={featuresContent.tag}
          title={featuresContent.title}
          description={featuresContent.description}
        />
      </motion.div>

      <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {featuresContent.items.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            variants={fadeUp}
            transition={{
              duration: 0.6,
              delay: index * 0.08,
              ease: "easeOut",
            }}
            whileHover={{ y: -8, scale: 1.015 }}
          >
            <Card>
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-fuchsia-500/30 via-violet-500/30 to-cyan-400/30 text-lg font-black text-white">
                {index + 1}
              </div>

              <h3 className="text-xl font-bold">{feature.title}</h3>
              <p className="mt-3 text-sm leading-7 text-white/60">
                {feature.description}
              </p>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}