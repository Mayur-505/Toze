import React from "react";
import styles from "./css/milestones.module.scss";
import Image from "next/image";
import BoxshadowImg from "../../public/assets/Icons/boxshadow.svg";
import BoxEffect from "../../public/assets/Images/boxEffect.svg";

const Milestones = () => {
  return (
    <section className={styles.MilestonesSec} id="roadmap">
      <div className={styles.MilestonesMain}>
        <div className={styles.MilestonesTextInner}>
          <h3 className={styles.MilestonesText}>Milestones</h3>
        </div>
      </div>
      <div className={styles.MilestonesStepper}>
        <div className={styles.wrapper}>
          <ol className={`${styles.c_timeline} ${styles.c_timeline_main}`}>
            <span className={styles.before}>
              <Image src={BoxEffect} alt="BoxEffect" />
            </span>
            <span className={styles.after}>
              <Image src={BoxEffect} alt="BoxEffect" />
            </span>
            <div className={styles.letSection}>
              <li className={styles.c_timeline__item}>
                <div
                  className={`${styles.content_card_left} ${styles.content_card_right}`}
                >
                  <div className={styles.content_card}>
                    <h3 className={styles.c_timeline__title}>2023 4Q</h3>
                    <ul className={styles.c_timeline__desc}>
                      <li>White paper 1.0</li>
                      <li>Toze.AI wallet release</li>
                      <li>Toze.AI beta Development</li>
                      <li>Private Sale</li>
                    </ul>
                  </div>
                  <div className={styles.timeLineYear}>
                    <span className={styles.BoxshadowImg}>
                      <Image
                        src={BoxshadowImg}
                        alt="BoxshadowImg"
                        className={styles.stepperImg}
                      />
                    </span>
                  </div>
                </div>
              </li>
              <li className={styles.c_timeline__item}>
                <div
                  className={`${styles.content_card_left} ${styles.content_card_right}`}
                >
                  <div className={styles.content_card}>
                    <h3 className={styles.c_timeline__title}>2024 2Q</h3>
                    <ul className={styles.c_timeline__desc}>
                      <li>Toze.AI officail launch</li>
                      <li>Establish Toze.AI community</li>
                      <li>More listings</li>
                    </ul>
                  </div>
                  <div className={styles.timeLineYear}>
                    <span className={styles.BoxshadowImg}>
                      <Image
                        src={BoxshadowImg}
                        alt="BoxshadowImg"
                        className={styles.stepperImg}
                      />
                    </span>
                  </div>
                </div>
              </li>
              <li className={styles.c_timeline__item}>
                <div
                  className={`${styles.content_card_left} ${styles.content_card_right}`}
                >
                  <div className={styles.content_card}>
                    <h3 className={styles.c_timeline__title}>2024 2Q</h3>
                    <ul className={styles.c_timeline__desc}>
                      <li>Continuous innovation</li>
                      <li>Release governance mechanisms</li>
                      <li>More listings</li>
                    </ul>
                  </div>
                  <div className={styles.timeLineYear}>
                    <span className={styles.BoxshadowImg}>
                      <Image
                        src={BoxshadowImg}
                        alt="BoxshadowImg"
                        className={styles.stepperImg}
                      />
                    </span>
                  </div>
                </div>
              </li>
            </div>
            <div className={styles.rightSection}>
              <li
                className={`${styles.c_timeline__item} ${styles.c_timeline__item_right}`}
              >
                <div className={`${styles.content_card_left}`}>
                  <div className={styles.content_card}>
                    <h3 className={styles.c_timeline__title}>2024 1Q</h3>
                    <ul className={styles.c_timeline__desc}>
                      <li>Toze.AI beta service launch</li>
                      <li>Listing at global Exchange</li>
                    </ul>
                  </div>
                  <div className={styles.timeLineYear}>
                    <span
                      className={`${styles.BoxshadowImg} ${styles.RightArrow}`}
                    >
                      <Image
                        src={BoxshadowImg}
                        alt="BoxshadowImg"
                        className={styles.stepperImg}
                      />
                    </span>
                  </div>
                </div>
              </li>
              <li
                className={`${styles.c_timeline__item} ${styles.c_timeline__item_right}`}
              >
                <div className={`${styles.content_card_left}`}>
                  <div className={styles.content_card}>
                    <h3 className={styles.c_timeline__title}>2024 1Q</h3>
                    <ul className={styles.c_timeline__desc}>
                      <li>Enhance AI capabilities</li>
                      <li>Introduce staking mechanisms</li>
                    </ul>
                  </div>
                  <div className={styles.timeLineYear}>
                    <span
                      className={`${styles.BoxshadowImg} ${styles.RightArrow}`}
                    >
                      <Image
                        src={BoxshadowImg}
                        alt="BoxshadowImg"
                        className={styles.stepperImg}
                      />
                    </span>
                  </div>
                </div>
              </li>
            </div>
          </ol>
        </div>
        <div className={styles.Mobilewrapper}>
          <ol className={`${styles.c_timeline} ${styles.c_timeline_main}`}>
            <span className={styles.before}>
              <Image src={BoxEffect} alt="BoxEffect" />
            </span>
            <span className={styles.after}>
              <Image src={BoxEffect} alt="BoxEffect" />
            </span>
            <li className={styles.c_timeline__item}>
              <div className={styles.content_card_left}>
                <div className={styles.content_card}>
                  <h3 className={styles.c_timeline__title}>2023 4Q</h3>
                  <ul className={styles.c_timeline__desc}>
                    <li>White paper 1.0</li>
                    <li>Toze.AI wallet release</li>
                    <li>Toze.AI beta Development</li>
                    <li>Private Sale</li>
                  </ul>
                </div>
                <div className={styles.timeLineYear}>
                  <span
                    className={`${styles.BoxshadowImg} ${styles.RightArrow}`}
                  >
                    <Image
                      src={BoxshadowImg}
                      alt="BoxshadowImg"
                      className={styles.stepperImg}
                    />
                  </span>
                </div>
              </div>
            </li>
            <li className={styles.c_timeline__item}>
              <div className={styles.content_card_left}>
                <div className={styles.content_card}>
                  <h3 className={styles.c_timeline__title}>2024 4Q</h3>
                  <ul className={styles.c_timeline__desc}>
                    <li>Imperial Assets beta launch</li>
                    <li>Listing at global Exchange</li>
                  </ul>
                </div>
                <div className={styles.timeLineYear}>
                  <span
                    className={`${styles.BoxshadowImg} ${styles.RightArrow}`}
                  >
                    <Image
                      src={BoxshadowImg}
                      alt="BoxshadowImg"
                      className={styles.stepperImg}
                    />
                  </span>
                </div>
              </div>
            </li>
            <li className={styles.c_timeline__item}>
              <div className={styles.content_card_left}>
                <div className={styles.content_card}>
                  <h3 className={styles.c_timeline__title}>2024 4Q</h3>
                  <ul className={styles.c_timeline__desc}>
                    <li>Enhance security measures</li>
                    <li>Introduce staking mechanisms</li>
                  </ul>
                </div>
                <div className={styles.timeLineYear}>
                  <span
                    className={`${styles.BoxshadowImg} ${styles.RightArrow}`}
                  >
                    <Image
                      src={BoxshadowImg}
                      alt="BoxshadowImg"
                      className={styles.stepperImg}
                    />
                  </span>
                </div>
              </div>
            </li>
            <li className={styles.c_timeline__item}>
              <div className={styles.content_card_left}>
                <div className={styles.content_card}>
                  <h3 className={styles.c_timeline__title}>2024 4Q</h3>
                  <ul className={styles.c_timeline__desc}>
                    <li>Enhance security measures</li>
                    <li>Introduce staking mechanisms</li>
                  </ul>
                </div>
                <div className={styles.timeLineYear}>
                  <span
                    className={`${styles.BoxshadowImg} ${styles.RightArrow}`}
                  >
                    <Image
                      src={BoxshadowImg}
                      alt="BoxshadowImg"
                      className={styles.stepperImg}
                    />
                  </span>
                </div>
              </div>
            </li>
            <li className={styles.c_timeline__item}>
              <div className={styles.content_card_left}>
                <div className={styles.content_card}>
                  <h3 className={styles.c_timeline__title}>2024 4Q</h3>
                  <ul className={styles.c_timeline__desc}>
                    <li>Continuous innovation</li>
                    <li>Community involvement</li>
                    <li>More listings</li>
                  </ul>
                </div>
                <div className={styles.timeLineYear}>
                  <span
                    className={`${styles.BoxshadowImg} ${styles.RightArrow}`}
                  >
                    <Image
                      src={BoxshadowImg}
                      alt="BoxshadowImg"
                      className={styles.stepperImg}
                    />
                  </span>
                </div>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Milestones;
