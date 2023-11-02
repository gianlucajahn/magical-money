import React from 'react';
import css from './Footer.module.scss';
import Image from 'next/image';

export interface FooterProps {
}

export default function Footer (props: FooterProps) {
  return (
    <div className={css.footer}>
      <div className={`${css.footerSection} ${css.companySection}`}>
        <Image
            className={css.logoImage}
            alt="Logo"
            src={require("../../../resources/images/logo.png")}
          />
        <h3>© 2023 Magical Money</h3>
      </div>
      <div className={css.footerSection}>
        <h3>Calculators</h3>
        <p><b>Compounding</b></p>
        <p>Compound Interest</p>
        <p>Compounding with Stocks</p>
        <p>Compounding Duration</p>
        <p>Saving Ratios</p>
        <p><b>Withdrawal Plans</b></p>
        <p>Withdrawal Amount</p>
        <p>Withdrawal Period</p>
        <p>Inflation Adjustment</p>
      </div>
      <div className={css.footerSection}>
        <h3>Personal Plans</h3>
        <p>Financial Freedom Plan</p>
        <p>Diversification Plan</p>
        <p>Statutory Pension</p>
      </div>
      <div className={css.footerSection}>
        <h3>Personal Consulting</h3>
        <p>Contact</p>
        <p>Book Now</p>
      </div>
    </div>
  );
}
