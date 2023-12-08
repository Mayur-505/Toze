"use client";
import React, { useEffect, useState } from "react";
import styles from "./css/tokenDistribution.module.scss";
import Image from "next/image";
import tokenImage from "../../public/assets/Icons/tokenDistribution.svg";
import tokensubImage from "../../public/assets/Icons/tozeAiLines.svg";
import responsiveTokenmainImage from "../../public/assets/Icons/responsiveTokenmainImage.svg";

function TokenDistribution() {
  const [windowWidth, setWindowWidth] = useState(() => {
    if (typeof window !== "undefined") {
      return window.innerWidth;
    }
    return null;
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  console.log("windowWidth", windowWidth);

  return (
    <div className={`container ${styles.Token_distribution_main}`}>
      <div className={styles.Token_distribution_sub}>
        <div className={styles.Token_distribution_title}>
          <h3>
            <span>NO-CODE </span>AI SOLUTION FOR ALL
          </h3>
          <h2>Token Distribution</h2>
          <p>Total Supply: 1,000,000,000 TOZE</p>
        </div>
        <div className={styles.Token_distribution_image}>
          <Image
            src={tokenImage}
            alt="tokenImage"
            className={styles.tokenImage}
          />
          {/* <div className={styles.Token_distribution_subimage}>
            <Image src={tokensubImage} alt="tokensubImage" />
          </div> */}
          <div className={styles.Token_distribution_image_dis}>
            <div className={styles.dis1}>
              <p>
                Ecosystem Fund (20%) <br /> 200M TOZE
              </p>
            </div>
            <div className={styles.dis2}>
              <p>
                Staking and Rewards (15%) <br /> 150M TOZE
              </p>
            </div>
            <div className={styles.dis3}>
              <p>
                Staking and Rewards (15%) <br />
                150M TOZE
              </p>
            </div>
            <div className={styles.dis4}>
              <p>
                Public Sale <br /> (15%) <br /> 150M TOZE
              </p>
            </div>
            <div className={styles.dis5}>
              <p>
                Team and Advisors (10%) <br /> 100M TOZE
              </p>
            </div>
            <div className={styles.dis6}>
              <p>
                Platform Reserve (5%) <br />
                50M TOZE
              </p>
            </div>
            <div className={styles.dis7}>
              <p>
                Initial Users and Airdrops (5%) <br /> 50M TOZE
              </p>
            </div>
            <div className={styles.dis8}>
              <p>
                Token Burning Mechanism (5%) <br /> 50M TOZE
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.responsive_token_said_dis}>
        <h3>
          <span>NO-CODE</span> AI SOLUTION FOR ALL
        </h3>
        <h2>Token Distribution</h2>
        <p>Total Supply: 1,000,000,000 TOZE</p>
      </div>
      <div className={styles.token_distribution_p}>
        <div className={styles.responsive_token_said}>
          <div className={styles.responsive_token_Image}>
            <Image
              src={responsiveTokenmainImage}
              alt="responsiveTokenmainImage"
              className={styles.tokenmainImage}
            />
            <div className={styles.responsive_token_Image_dis}>
              <div className={styles.dis1}>
                <p>
                  Public Sale (15%) <br /> 150M TOZE
                </p>
              </div>
              <div
                className={styles.dis2}
                style={{ left: `${windowWidth / 2 - 169}px` }}
              >
                <p>
                  Staking and Rewards (15%) <br /> 150M TOZE
                </p>
              </div>
              <div
                className={styles.dis3}
                style={{ left: `${windowWidth / 2 - 5}px` }}
              >
                <p>
                  Staking and Rewards (15%) <br />
                  150M TOZE
                </p>
              </div>
              <div className={styles.dis4}>
                <p>
                  Public Sale <br /> (15%) <br /> 150M TOZE
                </p>
              </div>
              <div
                className={styles.dis5}
                style={{ left: `${windowWidth / 2 - 169}px` }}
              >
                <p>
                  Team and Advisors (10%) <br /> 100M TOZE
                </p>
              </div>
              <div
                className={styles.dis6}
                style={{ left: `${windowWidth / 2 - 5}px` }}
              >
                <p>
                  Platform Reserve (5%) <br />
                  50M TOZE
                </p>
              </div>
              <div className={styles.dis7}>
                <p>
                  Initial Users and Airdrops (5%) <br /> 50M TOZE
                </p>
              </div>
              <div className={styles.dis8}>
                <p>
                  Token Burning Mechanism (5%) <br /> 50M TOZE
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TokenDistribution;
