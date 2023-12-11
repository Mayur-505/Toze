import React from "react";
import styles from "./css/tozeTokens.module.scss";
import Image from "next/image";
import TozeTokenImg from "../../public/assets/Icons/png/tozetokens.png";

const TozeTokens = () => {
  return (
    <section className={`container ${styles.TozeTokensSec}`} id="token">
      <div className={styles.mainTozeTokens}>
        <div className={styles.TozeTokensInner}>
          <div className={styles.TozeTokensTextsec}>
            <div className={styles.TozeTokensSubButton}>
              Secure, Transparent,{" "}
              <span className={styles.TozeTokensspan}>and</span> Future-Ready
            </div>
            <h1 className={styles.TozeTokenstext}>TOZE Tokens</h1>
            <p className={styles.TozeTokensSubtext}>
              TOZE Token, the dynamic force within our AI ecosystem.
              Transforming user engagement and providing versatile monetization
              options. TOZE Token guarantees a personalized and enriched
              experience, harmonizing technology and creativity to shape a
              democratized AI landscape.
            </p>
          </div>
          <div className={styles.TozeTokensMobileImgSec}>
            <Image
              src={TozeTokenImg}
              alt="TozeTokenImg"
              className={styles.TozeTokenImg}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TozeTokens;
