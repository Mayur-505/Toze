import React from 'react'
import styles from './css/innovation.module.scss'
import Image from 'next/image'
import InnovationImg from '../../public/assets/Images/innovation.svg'
import mobileInnovationImg from '../../public/assets/Images/innovation-mobile.svg'

const Innovation = () => {
    return (
        <section className={styles.InnovationSec}>
            <div className={styles.mainInnovation}>
                <div className={styles.InnovationInner}>
                    <div className={styles.InnovationImgSec}>
                        <Image src={InnovationImg} alt="InnovationImg" width={544} height={409} className={styles.InnovationImg} />
                    </div>
                    <div className={styles.InnovationTextsec}>
                        <div className={styles.InnovationSubButton}><span className={styles.Innovationspan}>NO-CODE</span> AI SOLUTION FOR ALL</div>
                        <h1 className={styles.Innovationtext}>
                            Embrace the future of innovation with TOZE.AI
                        </h1>
                        <p className={styles.InnovationSubtext}>Dive into AI development effortlessly with TOZE.ai. No-code simplicity democratizes AI, empowering everyone to create powerful applications without the need for expertise. Innovate with ease, breaking down barriers to unleash the potential of artificial intelligence for all.</p>
                    </div>
                    {/* <div className={styles.InnovationMobileImgSec}>
                        <Image src={mobileInnovationImg} alt="mobileInnovationImg" className={styles.InnovationMobileImgSec} />
                    </div> */}
                </div>
            </div>
        </section>
    )
}

export default Innovation
