"use client"
import React from 'react'
import styles from './css/AiCentricFuture.module.scss'
import Slider from "react-slick";

const AiCentricFuture = () => {

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        slidesToShow: 3,
        centerMode: true,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2
                }
            }
        ]
    };

    return (
        <section className={styles.AiCentricFutureSec}>
            <div className={styles.AiCentricFutureWrapper}>
                <div className={styles.AiCentricFutureOuter}>
                    <div className={styles.AiCentricFutureText}>Toze.AI</div>
                    <div className={styles.AiCentricFutureSubTextMain}><p className={styles.AiCentricFutureSubText}>TOZE.AI anticipates an AI-centric future. We equip individuals with the essential
                        skills and knowlege needed to thrive in an increasingly AI-driven world.
                    </p></div>
                </div>
                <div className={styles.AiCentricFutureInner}>
                    <Slider {...settings}>
                        <div className={styles.SliderWrapper}>
                           <div className={styles.SliderWrapperCard}>
                           <div className={styles.SliderWrapperCardText}>
                                <div className={styles.SliderWrapperText}>Chatbots Based on User Ideas</div>
                                <p className={styles.SliderWrapperSubText}>Experience the future of app creation with our no-code platform. No technical expertise required. Build, iterate, and launch applications effortlessly. Empower your ideas and transform them into reality with the simplicity of no-code app development.</p>
                            </div>
                           </div>
                        </div>
                        <div><h1>2</h1></div>
                        <div><h1>3</h1></div>
                    </Slider>
                </div>
            </div>
        </section >
    )
}

export default AiCentricFuture 
