import { useEffect, useState } from "react";
import css from "./Settings.module.scss";
import { motion } from "framer-motion";
import classNames from "classnames";
import Image from "next/image";
import SettingsOption from "./SettingsOption";

interface SettingsProps {}

export default function Settings(props: SettingsProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [languageVisible, setLanguageVisible] = useState(false);
  const [colormodeVisible, setColormodeVisible] = useState(false);
  const [currencyVisible, setCurrencyVisible] = useState(false);

  const toggleSettings = () => {
    if (isExpanded) {
      return;
    }
    setIsExpanded(true);
  };

  useEffect(() => {
    if (isExpanded) {
      setTimeout(() => {
        setCurrencyVisible(true);
      }, 115);

      setTimeout(() => {
        setColormodeVisible(true);
      }, 230);

      setTimeout(() => {
        setLanguageVisible(true);
      }, 345);
    } else {
      setLanguageVisible(false);
      setColormodeVisible(false);
      setCurrencyVisible(false);
    }
  }, [isExpanded]);

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
          <motion.div
            className={css.settingsRow}
            id="languageOption"
            style={{ opacity: 1 }}
            initial={{ scale: 0 }}
            animate={{
              scale: 1,
              transition: {
                type: "spring",
                duration: 0.45,
                bounce: 0.3,
                delay: 0.345,
              },
            }}
          >
            <h3>Language</h3>
            <div className={css.settingsOptions}>
              <SettingsOption>English</SettingsOption>
              <SettingsOption>German</SettingsOption>
            </div>
          </motion.div>

          <motion.div
            className={css.settingsRow}
            id="colorOption"
            style={{ opacity: 1 }}
            initial={{ scale: 0 }}
            animate={{
              scale: 1,
              transition: {
                type: "spring",
                duration: 0.45,
                bounce: 0.3,
                delay: 0.23,
              },
            }}
          >
            <h3>Color Mode</h3>
            <div className={css.settingsOptions}>
              <SettingsOption>Light Mode</SettingsOption>
              <SettingsOption>Dark Mode</SettingsOption>
            </div>
          </motion.div>

          <motion.div
            className={css.settingsRow}
            id="currencyOption"
            style={{ opacity: 1 }}
            initial={{ scale: 0 }}
            animate={{
              scale: 1,
              transition: {
                type: "spring",
                duration: 0.45,
                bounce: 0.3,
                delay: 0.115,
              },
            }}
          >
            <h3>Currency</h3>
            <div className={css.settingsOptions}>
              <SettingsOption>Euro</SettingsOption>
              <SettingsOption>CHF</SettingsOption>
              <SettingsOption>USD</SettingsOption>
            </div>
          </motion.div>
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
