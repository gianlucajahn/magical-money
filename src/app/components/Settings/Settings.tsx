import { useEffect, useState } from "react";
import css from "./Settings.module.scss";
import { motion } from "framer-motion";
import classNames from "classnames";
import Image from "next/image";
import SettingsOption from "./SettingsOption";

interface SettingsProps {}

export default function Settings(props: SettingsProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleSettings = () => {
    if (isExpanded) {
      return;
    }
    setIsExpanded(true);
  };

  return (
    <motion.div
      id="settings"
      onClick={toggleSettings}
      className={classNames(css.settings, {
        [css.isExpanded]: isExpanded,
      })}
      whileHover={{
        scale: isExpanded ? 1 : 1.125,
        transition: { type: "spring", duration: 0.6, bounce: 0.6 },
      }}
      whileTap={{
        scale: 1,
        transition: { type: "none" },
      }}
    >
      {isExpanded ? (
        <div className={css.settingsContent}>
          <div className={css.settingsRow}>
            <h3>Language</h3>
            <div className={css.settingsOptions}>
              <SettingsOption>English</SettingsOption>
              <SettingsOption>German</SettingsOption>
            </div>
          </div>

          <div className={css.settingsRow}>
            <h3>Color Mode</h3>
            <div className={css.settingsOptions}>
              <SettingsOption>Light Mode</SettingsOption>
              <SettingsOption>Dark Mode</SettingsOption>
            </div>
          </div>

          <div className={css.settingsRow}>
            <h3>Currency</h3>
            <div className={css.settingsOptions}>
              <SettingsOption>Euro</SettingsOption>
              <SettingsOption>CHF</SettingsOption>
              <SettingsOption>USD</SettingsOption>
            </div>
          </div>
        </div>
      ) : null}
      {!isExpanded ? (
        <Image
          className={`${css.settingsIcon} ${css.wheelIcon}`}
          onClick={() => setIsExpanded(!isExpanded)}
          alt="Settings"
          src={require(`../../../resources/images/${
            isExpanded ? "check" : "settings"
          }.png`)}
          height="36"
          width="36"
        />
      ) : (
        <Image
          className={`${css.settingsIcon} ${css.checkIcon}`}
          onClick={() => setIsExpanded(!isExpanded)}
          alt="Settings"
          src={require(`../../../resources/images/${
            isExpanded ? "check" : "settings"
          }.png`)}
          height="28"
          width="36"
        />
      )}
    </motion.div>
  );
}
