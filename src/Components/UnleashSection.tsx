import React from "react";
import styles from "./css/UnleashSection.module.scss";

function UnleashSection() {
  return (
    <div className={`container ${styles.unleash_section_main}`}>
      <div className={styles.unleash_section_sub}>
        <div className={styles.unleash_section_dis}>
          <h2>Unleash Your Creativity Join us now!</h2>
          <button>Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default UnleashSection;
