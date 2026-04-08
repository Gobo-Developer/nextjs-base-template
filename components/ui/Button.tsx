"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

export default function Button({
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const baseClasses =
    "rounded-2xl px-7 py-4 text-sm font-bold transition";

  const variantClasses = {
    primary: "btn-primary",
    secondary: "btn-secondary",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.04, y: -2 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {children}
    </motion.button>
  );
}