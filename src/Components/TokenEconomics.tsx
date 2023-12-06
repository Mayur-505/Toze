import React from "react";
import styles from "./css/tokenEconomics.module.scss";
import Image from "next/image";
import TokenEconomicsImg from "../../public/assets/Images/TokenEconomics.svg";
import TokenEconomicsMobileImg from "../../public/assets/Images/TokenEconomics-mobile.svg";

const TokenEconomics = () => {
  return (
    <section className={`container ${styles.TokenEconomicsSec}`} id="plan">
      <div className={styles.TokenEconomicsSecWrapper}>
        <div className={styles.TokenEconomicsSecOuter}>
          <div className={styles.TokenEconomicsTitle}>
            SECURE, TRANSPARENT, <span className={styles.span}>AND</span>{" "}
            FUTURE-READY
          </div>
          <div className={styles.TokenEconomicsText}>Token Economics</div>
          <p className={styles.TokenEconomicsSubText}>
            Backed by blockchain technology, TOZE Tokens ensure security,
            transparency, and traceability in every transaction. As we usher in
            a new era of AI innovation, TOZE Tokens are the catalysts propelling
            individuals and businesses towards a future where the limitless
            possibilities of no-code AI are within reach. Join the TOZE
            ecosystem, where innovation meets empowerment.
          </p>
        </div>
        <div className={styles.TokenEconomicsSecInner}>
          <Image
            src={TokenEconomicsImg}
            alt="TokenEconomicsImg"
            width={1240}
            className={styles.TokenEconomicsImg}
          />
          <Image
            src={TokenEconomicsMobileImg}
            alt="TokenEconomicsMobileImg"
            width={350}
            className={styles.TokenEconomicsMobileImg}
          />
        </div>
      </div>
    </section>
  );
};

export default TokenEconomics;
