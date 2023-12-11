"use client";
import React, { useEffect, useRef } from "react";
import styles from "./css/AiCentricFuture.module.scss";
import Slider from "react-slick";
import AiCentricImage1 from "../../public/assets/Icons/png/AiCentricImage1.png";
import AiCentricImage2 from "../../public/assets/Icons/png/AiCentricImage2.png";
import AiCentricImage3 from "../../public/assets/Icons/png/AiCentricImage3.png";
import AiCentricImage4 from "../../public/assets/Icons/png/AiCentricImage4.png";
import AiCentricImage5 from "../../public/assets/Icons/png/AiCentricImage5.png";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

const AiCentricFuture = () => {
  // useInView returns a boolean value 'inView' indicating whether the target is in the viewport
  const [ref, inView] = useInView({
    rootMargin: "0px 0px -200px 0px", // adjust root margin as needed
  });

  const sliderRef = useRef<any>(null);

  const moveToSlide = (slideIndex: number) => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(slideIndex);
    }
  };

  useEffect(() => {
    if (!inView) {
      moveToSlide(0);
    }

  }, [inView]);

  const settings = {
    dots: true,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: inView,
    speed: 3000,
    autoplaySpeed: 2000,
    style: { borderRadius: "100px" },
  };

  return (
    <section
      className={`AiCentricFutureSlider ${styles.AiCentricFutureSec} ${styles.container}`}
      id="service"
      ref={ref}
    >
      <div className={styles.AiCentricFutureWrapper}>
        <div className={styles.AiCentricFutureOuter}>
          <div className={styles.AiCentricFutureText}>
            Toze.<span>ai</span>
          </div>
          <div className={styles.AiCentricFutureSubTextMain}>
            <p className={styles.AiCentricFutureSubText}>
              TOZE.AI anticipates an AI-centric future. We equip individuals
              with the essential skills and knowlege needed to thrive in an
              increasingly AI-driven world.
            </p>
          </div>
        </div>
        <div className={styles.AiCentricFutureSlider}>
          <Slider key={inView ? 1 : 0} ref={sliderRef} {...settings}>
            <div className={`${styles.AiCentricFutureSliderSub1} ${styles.AiCentricFutureSlide1}`}>
              <div className={styles.CentricCardTitle}>
                <h3>No-Code App Development</h3>
                <p>
                  Experience the future of app creation with our no-code platform.
                  No technical expertise required. Build, iterate, and launch
                  applications effortlessly. Empower your ideas and transform them
                  into reality with the simplicity of no-code app development.
                </p>
              </div>
              <div className={styles.AiCentricImage}>
                <Image src={AiCentricImage1} alt="AiCentricImage1" className={styles.CentricImage} />
              </div>
            </div>
            <div className={styles.AiCentricFutureSliderSub2}>
              <div className={styles.CentricCardTitle}>
              <h3>Task Automation</h3>
              <p>
                Revolutionize your workflow with TOZE.AI. Simplify repetitive
                processes, boost productivity, and focus on what matters.
                Experience seamless efficiency as mundane tasks are automated,
                freeing up time for strategic initiatives.
              </p>
              </div>
              <div className={styles.AiCentricImage}>
                <Image src={AiCentricImage2} alt="AiCentricImage2" className={styles.CentricImage} />
              </div>
            </div>
            <div className={styles.AiCentricFutureSliderSub3}>
              <div className={styles.CentricCardTitle}>
              <h3>Chatbots Based on User Ideas</h3>
              <p>
                Experience the future of app creation with our no-code platform.
                No technical expertise required. Build, iterate, and launch
                applications effortlessly. Empower your ideas and transform them
                into reality with the simplicity of no-code app development.
              </p>
              </div>
              <div className={styles.AiCentricImage}>
                <Image src={AiCentricImage3} alt="AiCentricImage3" className={styles.CentricImage} />
              </div>
            </div>
            <div className={styles.AiCentricFutureSliderSub4}>
              <div className={styles.CentricCardTitle}>
              <h3>Monetization Opportunities</h3>
              <p>
                Experience the future of app creation with our no-code platform.
                No technical expertise required. Build, iterate, and launch
                applications effortlessly. Empower your ideas and transform them
                into reality with the simplicity of no-code app development.
              </p>
              </div>
              <div className={styles.AiCentricImage}>
                <Image src={AiCentricImage4} alt="AiCentricImage4" className={styles.CentricImage} />
              </div>
            </div>
            <div className={`${styles.AiCentricFutureSliderSub1} ${styles.AiCentricFutureSlider2}`}>
            <div className={styles.CentricCardTitle}>
              <h3>Personalized Assistant</h3>
              <p>
                The personalized AI assistant generates app ideas and templates,
                providing inspiration and practical assistance to users. This
                support ensures that a broader range of people can harness the
                power of AI and contribute to the digital landscpe.
              </p>
              </div>
              <div className={styles.AiCentricImage}>
                <Image src={AiCentricImage5} alt="AiCentricImage5" className={styles.CentricImage} />
              </div>
            </div>
          </Slider>
        </div>
        <div className={styles.responsiveAiCentricFutureSlider}>
          <div className={styles.AiCentricFutureSliderSub1}>
            <div className={styles.CentricCardTitle}>
            <h3>No-Code App Development</h3>
            <p>
              Experience the future of app creation with our no-code platform.
              No technical expertise required. Build, iterate, and launch
              applications effortlessly. Empower your ideas and transform them
              into reality with the simplicity of no-code app development.
            </p>
            </div>
            <div className={styles.AiCentricImage}>
              <Image src={AiCentricImage1} alt="AiCentricImage1" className={styles.CentricImage} />
            </div>
          </div>
          <div className={styles.AiCentricFutureSliderSub2}>
            <div className={styles.CentricCardTitle}>
            <h3>Task Automation</h3>
            <p>
              Revolutionize your workflow with TOZE.AI. Simplify repetitive
              processes, boost productivity, and focus on what matters.
              Experience seamless efficiency as mundane tasks are automated,
              freeing up time for strategic initiatives.
            </p>
            </div>
            <div className={styles.AiCentricImage}>
              <Image src={AiCentricImage2} alt="AiCentricImage2" className={styles.CentricImage} />
            </div>
          </div>
          <div className={styles.AiCentricFutureSliderSub3}>
            <div className={styles.CentricCardTitle}>
            <h3>Chatbots Based on User Ideas</h3>
            <p>
              Experience the future of app creation with our no-code platform.
              No technical expertise required. Build, iterate, and launch
              applications effortlessly. Empower your ideas and transform them
              into reality with the simplicity of no-code app development.
            </p>
            </div>
            <div className={styles.AiCentricImage}>
              <Image src={AiCentricImage3} alt="AiCentricImage3" className={styles.CentricImage} />
            </div>
          </div>
          <div className={styles.AiCentricFutureSliderSub4}>
            <div className={styles.CentricCardTitle}>
            <h3>Monetization Opportunities</h3>
            <p>
              Experience the future of app creation with our no-code platform.
              No technical expertise required. Build, iterate, and launch
              applications effortlessly. Empower your ideas and transform them
              into reality with the simplicity of no-code app development.
            </p>
            </div>
            <div className={styles.AiCentricImage}>
              <Image src={AiCentricImage4} alt="AiCentricImage4" className={styles.CentricImage} />
            </div>
          </div>
          <div className={styles.AiCentricFutureSliderSub5}>
            <div className={styles.CentricCardTitle}>
            <h3>Personalized Assistant</h3>
            <p>
              The personalized AI assistant generates app ideas and templates,
              providing inspiration and practical assistance to users. This
              support ensures that a broader range of people can harness the
              power of AI and contribute to the digital landscpe.
            </p>
            </div>
            <div className={styles.AiCentricImage}>
              <Image src={AiCentricImage5} alt="AiCentricImage5" className={styles.CentricImage} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiCentricFuture;
