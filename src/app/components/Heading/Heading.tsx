import * as React from "react";
import css from "./Heading.module.scss";
import { motion } from "framer-motion";

interface HeadingProps {
  children: string;
  delay?: number;
}

export default function Heading(props: HeadingProps) {
  return (
    <motion.h1
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 100 },
      }}
      initial="hidden"
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={css.heading}
      transition={{ delay: props.delay || 0 }}
    >
      {props.children}
    </motion.h1>
  );
}
