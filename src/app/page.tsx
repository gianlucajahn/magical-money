"use client";

import css from "./page.module.scss";
import NavBar from "./components/NavBar/NavBar";
import { Gradient } from "./lib/Gradient";
import { useEffect } from "react";
import Image from "next/image";
import Arrow from "@/resources/images/arrow";
import Manifest from "./components/Manifest/Manifest";
import Footer from "./components/Footer/Footer";
import Settings from "./components/Settings/Settings";

export default function Home() {
  const gradient = new Gradient();

  useEffect(() => {
    // @ts-ignore
    gradient.initGradient("#gradient-canvas");
  }, []);

  return (
    <>
      <NavBar />
      <main className={css.main}>
        <canvas
          id="gradient-canvas"
          className={css.canvas}
          data-transition-in
        />
        <div className={css.hero}>
          <h1 className={css.blend}>We own the finish line</h1>
          <Image
            className={css.heroText}
            src={require("../resources/images/hero.png")}
            alt="Hero Text"
          />
          <div className={css.heroInfo}>
            <div className={css.divider} />
            <p>
              The most precise calculators for compound interest in the stock
              market, personalized withdrawal plans and financial education.
              Built on top of a state-of-the-art technology stack - now
              available for free on the web.
            </p>
            <div className={css.heroButtons}>
              <a className={css.cta}>
                Convince yourself
                <Arrow color='#fff' />
              </a>
              <a className={css.contact}>
                Personal Consulting
                <Arrow color='#0A2540' />
                </a>
            </div>
          </div>
        </div>
        <div className={css.curtain} />
        <Manifest />
        <Footer />
      </main>
      <Settings />
    </>
  );
}
