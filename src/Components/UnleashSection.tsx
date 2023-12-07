import React from "react";
import styles from "./css/UnleashSection.module.scss";
import Image from "next/image";
import GooglePlay from "../../public/assets/Icons/google-play.svg";
import AppStore from "../../public/assets/Icons/app-store.svg";

function UnleashSection() {
  return (
    <div className={`container ${styles.unleash_section_main}`}>
      <div className={styles.unleash_section_sub}>
        <div className={styles.unleash_section_dis}>
          <h2>Unleash Your Creativity Join us now!</h2>
          <button>Get Started</button>
          <div className={styles.downloadBtn}>
            <Image
              src={GooglePlay}
              className={styles.downloadIcons}
              alt="GooglePlay"
            />
            <Image
              src={AppStore}
              className={styles.downloadIcons}
              alt="AppStore"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default UnleashSection;
