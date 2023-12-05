import React from "react";
import styles from "./css/awakenSection.module.scss";
import downArrow from "../../public/assets/Icons/downArrow.svg";
import blogSvg from "../../public/assets/Icons/blogSvg.svg";
import headerCard from "../../public/assets/Icons/headerCard.svg";
import bannerCircleImage from "../../public/assets/Icons/bannerCircle.svg";
import bannerCircleImagemobile from "../../public/assets/Icons/bannerCircle-mobile.svg";
import Image from "next/image";

function AwakenSection() {
  
  return (
    <div className={styles.awaken_main_section} id="about-us">
      <Image
        src={bannerCircleImage}
        className={styles.bannerCircleImage}
        alt="bannerCircleImage"
      />
      <Image
        src={bannerCircleImagemobile}
        className={styles.bannerCircleImagemobile}
        alt="bannerCircleImagemobile"
      />
      <div className={styles.awaken_sub_div1}>
        <div className={styles.awaken_titles}>
          <h1>
            Awaken the Potential of AI with{" "}
            <span>
              Toze.<span className={styles.aiLoworcase}>AI</span>
            </span>
          </h1>
          <p>
            Now anyone can seamlessly develop AI applications and use the
            transformative capabilities of artificial intelligence.
          </p>
          <div className={styles.Whitepaper}>
            <button>Whitepaper 1.00</button>
            <button>Buy TOZE</button>
          </div>
          <div className={styles.download_wallet}>
            <Image src={downArrow} alt="downArrow" />
            <p>Download wallet ios + android button</p>
          </div>
        </div>
      </div>
      <div className={styles.awaken_sub_div2}>
        <div className={styles.awaken_aiAgents_div}>
          <div className={styles.awaken_aiAgents_point}>
            <Image src={headerCard} alt="headerCard" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AwakenSection;
