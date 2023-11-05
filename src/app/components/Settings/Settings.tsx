import { useEffect, useState } from "react";
import css from "./Settings.module.scss";
import { motion } from "framer-motion";
import classNames from "classnames";
import Image from "next/image";

interface SettingsProps {}

export default function Settings(props: SettingsProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    console.log(document.body.scrollTop);
    if (document.body.scrollTop >= 1000) {
      document.getElementById("settings")!.style.backgroundColor = "white";
    } else {
    }
  });

  return (
    <motion.div
      id="settings"
      className={classNames(css.settings, {
        [css.isExpanded]: isExpanded,
      })}
      whileHover={{ scale: 1.125, transition: { type: "spring", duration: 0.6, bounce: 0.6 } }}
    >
      {!isExpanded ? (
        <Image
          className={css.settingsIcon}
          alt="Settings"
          src={require("../../../resources/images/settings.png")}
          height="36"
          width="36"
        />
      ) : (
        <div className={css.expandedContent}></div>
      )}
    </motion.div>
  );
}
