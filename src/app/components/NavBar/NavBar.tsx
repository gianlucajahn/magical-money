"use client";

import * as React from "react";
import css from "./NavBar.module.scss";
import Image from "next/image";
import { motion } from "framer-motion";

export default function NavBar() {
  return (
    <section className={css.navbar}>
      <div className={css.left}>
        <motion.div
          className={css.logo}
          animate={{ y: 0 }}
          initial={{ y: -70 }}
          transition={{ duration: 0.7, type: "spring", bounce: 0.25 }}
        >
          <Image
            className={css.logoImage}
            alt="Logo"
            src={require("../../../resources/images/logo.png")}
          />
        </motion.div>
      </div>

      <motion.div className={css.divider} initial={{ width: "1px" }} animate={{ width: "518px" }} transition={{ duration: 0.4 }} />

      <div className={css.right}>
        <motion.h3
          animate={{ y: 0 }}
          initial={{ y: -70 }}
          transition={{ duration: 0.7, type: "spring", bounce: 0.25 }}
          className={css.personalPlan}
        >
          Personal Plan
        </motion.h3>
        <motion.h3
          animate={{ y: 0 }}
          initial={{ y: -70 }}
          transition={{ duration: 0.7, type: "spring", bounce: 0.25 }}
        >
          Calculators
        </motion.h3>
        <motion.h3
          animate={{ y: 0 }}
          initial={{ y: -70 }}
          transition={{ duration: 0.7, type: "spring", bounce: 0.25 }}
        >
          Education
        </motion.h3>
      </div>
    </section>
  );
}
