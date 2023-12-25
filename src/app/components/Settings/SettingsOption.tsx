import * as React from "react";
import { motion } from "framer-motion";
import css from "./Settings.module.scss";

interface SettingsOptionProps {
  children: any;
}

export default function SettingsOption(props: SettingsOptionProps) {
  const { children } = props;

  return (
    <motion.button
      whileHover={{
        scale: 1.07,
        transition: { type: "spring", duration: 0.6, bounce: 0.6 },
      }}
      className={css.settingsOption}
    >
      {children}
    </motion.button>
  );
}
