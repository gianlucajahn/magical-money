import * as React from "react";
import css from "./Subheading.module.scss";
import { motion } from "framer-motion";

interface SubheadingProps {
  children: string;
  color: string;
}

export default function Subheading(props: SubheadingProps) {
  return (
    <motion.h1
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 100 },
      }}
      initial="hidden"
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={css.subheading}
      style={{ color: props.color }}
    >
      {props.children}
    </motion.h1>
  );
}
