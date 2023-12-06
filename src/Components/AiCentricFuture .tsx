"use client";
import React from "react";
import styles from "./css/AiCentricFuture.module.scss";
import Slider from "react-slick";
import AiCentricImage1 from "../../public/assets/Icons/AiCentricImage1.svg";
import AiCentricImage2 from "../../public/assets/Icons/AiCentricImage2.svg";
import AiCentricImage3 from "../../public/assets/Icons/AiCentricImage3.svg";
import AiCentricImage4 from "../../public/assets/Icons/AiCentricImage4.svg";
import AiCentricImage5 from "../../public/assets/Icons/AiCentricImage5.svg";
import Image from "next/image";

const AiCentricFuture = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    style: { borderRadius: "100px" },
  };

  return (
    <section
      className={`${styles.AiCentricFutureSec} ${styles.container}`}
      id="service"
    >
      <div className={styles.AiCentricFutureWrapper}>
        <div className={styles.AiCentricFutureOuter}>
          <div className={styles.AiCentricFutureText}>Toze.AI</div>
          <div className={styles.AiCentricFutureSubTextMain}>
            <p className={styles.AiCentricFutureSubText}>
              TOZE.AI anticipates an AI-centric future. We equip individuals
              with the essential skills and knowlege needed to thrive in an
              increasingly AI-driven world.
            </p>
          </div>
        </div>
        <div className={styles.AiCentricFutureSlider}>
          <Slider {...settings}>
            <div className={styles.AiCentricFutureSliderSub1}>
              <h3>No-Code App Development</h3>
              <p>
                Experience the future of app creation with our no-code platform.
                No technical expertise required. Build, iterate, and launch
                applications effortlessly. Empower your ideas and transform them
                into reality with the simplicity of no-code app development.
              </p>
              <div className={styles.AiCentricImage}>
                <Image src={AiCentricImage1} alt="AiCentricImage1" />
              </div>
            </div>
            <div className={styles.AiCentricFutureSliderSub2}>
              <h3>Task Automation</h3>
              <p>
                Experience the future of app creation with our no-code platform.
                No technical expertise required. Build, iterate, and launch
                applications effortlessly. Empower your ideas and transform them
                into reality with the simplicity of no-code app development.
              </p>
              <div className={styles.AiCentricImage}>
                <Image src={AiCentricImage2} alt="AiCentricImage2" />
              </div>
            </div>
            <div className={styles.AiCentricFutureSliderSub3}>
              <h3>No-Code App Development</h3>
              <p>
                Experience the future of app creation with our no-code platform.
                No technical expertise required. Build, iterate, and launch
                applications effortlessly. Empower your ideas and transform them
                into reality with the simplicity of no-code app development.
              </p>
              <div className={styles.AiCentricImage}>
                <Image src={AiCentricImage3} alt="AiCentricImage3" />
              </div>
            </div>
            <div className={styles.AiCentricFutureSliderSub1}>
              <h3>No-Code App Development</h3>
              <p>
                Experience the future of app creation with our no-code platform.
                No technical expertise required. Build, iterate, and launch
                applications effortlessly. Empower your ideas and transform them
                into reality with the simplicity of no-code app development.
              </p>
              <div className={styles.AiCentricImage}>
                <Image src={AiCentricImage1} alt="AiCentricImage1" />
              </div>
            </div>
          </Slider>
        </div>
        <div className={styles.responsiveAiCentricFutureSlider}>
          <div className={styles.AiCentricFutureSliderSub1}>
            <h3>No-Code App Development</h3>
            <p>
              Experience the future of app creation with our no-code platform.
              No technical expertise required. Build, iterate, and launch
              applications effortlessly. Empower your ideas and transform them
              into reality with the simplicity of no-code app development.
            </p>
            <div className={styles.AiCentricImage}>
              <Image src={AiCentricImage1} alt="AiCentricImage1" />
            </div>
          </div>
          <div className={styles.AiCentricFutureSliderSub2}>
            <h3>Task Automation</h3>
            <p>
              Revolutionize your workflow with TOZE.AI. Simplify repetitive
              processes, boost productivity, and focus on what matters.
              Experience seamless efficiency as mundane tasks are automated,
              freeing up time for strategic initiatives.
            </p>
            <div className={styles.AiCentricImage}>
              <Image src={AiCentricImage2} alt="AiCentricImage2" />
            </div>
          </div>
          <div className={styles.AiCentricFutureSliderSub3}>
            <h3>Chatbots Based on User Ideas</h3>
            <p>
              Experience the future of app creation with our no-code platform.
              No technical expertise required. Build, iterate, and launch
              applications effortlessly. Empower your ideas and transform them
              into reality with the simplicity of no-code app development.
            </p>
            <div className={styles.AiCentricImage}>
              <Image src={AiCentricImage3} alt="AiCentricImage3" />
            </div>
          </div>
          <div className={styles.AiCentricFutureSliderSub4}>
            <h3>Monetization Opportunities</h3>
            <p>
              Experience the future of app creation with our no-code platform.
              No technical expertise required. Build, iterate, and launch
              applications effortlessly. Empower your ideas and transform them
              into reality with the simplicity of no-code app development.
            </p>
            <div className={styles.AiCentricImage}>
              <Image src={AiCentricImage4} alt="AiCentricImage4" />
            </div>
          </div>
          <div className={styles.AiCentricFutureSliderSub5}>
            <h3>Personalized Assistant</h3>
            <p>
              Experience the future of app creation with our no-code platform.
              No technical expertise required. Build, iterate, and launch
              applications effortlessly. Empower your ideas and transform them
              into reality with the simplicity of no-code app development.
            </p>
            <div className={styles.AiCentricImage}>
              <Image src={AiCentricImage5} alt="AiCentricImage5" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiCentricFuture;
