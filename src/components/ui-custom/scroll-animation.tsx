"use client";

import { motion, Variants, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

// 1. Ekstraksi Interface untuk Clean Code
interface ScrollAnimationProps {
  children: ReactNode;
  direction?: "up" | "down" | "left" | "right" | "in";
  delay?: number;
  className?: string;
}

export function ScrollAnimation({
  children,
  direction = "up",
  delay = 0,
  className,
}: ScrollAnimationProps) {
  // 2. Aksesibilitas: Mendeteksi pengaturan OS pengguna apakah mereka mengurangi animasi
  const shouldReduceMotion = useReducedMotion();

  const variants: Variants = {
    hidden: {
      opacity: 0,
      // Jika user memilih 'reduce motion', matikan efek translasi (x, y) dan skala
      y: shouldReduceMotion
        ? 0
        : direction === "up"
          ? 40
          : direction === "down"
            ? -40
            : 0,
      x: shouldReduceMotion
        ? 0
        : direction === "left"
          ? 40
          : direction === "right"
            ? -40
            : 0,
      scale: shouldReduceMotion ? 1 : direction === "in" ? 0.8 : 1,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }} // Animasi hanya berjalan sekali saat elemen muncul 20% di layar
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}
