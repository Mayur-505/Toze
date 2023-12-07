import React from "react";
import styles from "./css/DownloadWallet.module.scss";
import Image from "next/image";
import GooglePlay from "../../public/assets/Icons/google-play.svg";
import AppStore from "../../public/assets/Icons/app-store.svg";

const DownloadWallet = () => {
  return (
    <section
      className={`container  ${styles.DownloadWalletSec}`}
      id="downloadWallet"
    >
      <div className={styles.downloadWalletMain}>
        <div className={styles.downloadCardWrapper}>
          <span className={styles.circle}></span>
          <div className={styles.downloadCard}>
            <h2 className={styles.title}>Download Wallet</h2>
            <p className={styles.description}>
              After entering our ecosystem, you acquire the capability to
              oversee everything. Anyone with a smartphone and an internet
              connection can engage in the global marketplace.
            </p>
            <div className={styles.downloadBtn}>
              <Image src={GooglePlay} alt="GooglePlay" />
              <Image src={AppStore} alt="AppStore" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadWallet;
