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
            <a
              href="https://toze.gitbook.io/whitepaper"
              target="_black"
              rel="noopener noreferrer"
              className={styles.white_paper_btn}
            >
              Whitepaper 1.00
            </a>
            <button className={styles.white_paper_btn}>Buy TOZE</button>
          </div>
          <div className={styles.download_wallet}>
            <Image src={downArrow} alt="downArrow" />
            <a href="#downloadWallet">Download wallet ios + android button</a>
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
