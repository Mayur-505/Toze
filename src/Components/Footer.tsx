import React from "react";
import styles from "./css/footer.module.scss";
import LogImage from "../../public/assets/Icons/logo.svg";
import instagramImage from "../../public/assets/Icons/Instagram.svg";
import tweterImage from "../../public/assets/Icons/twitter.svg";
import Image from "next/image";

function Footer() {
  return (
    <footer>
      <div className={styles.footer_main_div}>
        <div className={styles.footer_sub_div}>
          <div className={styles.logo_Image}>
            <Image src={LogImage} alt="LogImage" />
          </div>
          <div className={styles.quick_link_div}>
            <div>
              <h2>QUICK LINKS</h2>
              <div>
                <p>About us</p>
                <p>Service</p>
                <p>Plan</p>
                <p>Token</p>
                <p>Roadmap</p>
              </div>
            </div>
            <div className={styles.contact_us_div}>
              <h2>CONTACT US</h2>
              <div>
                <p>Help@toze.ai</p>
              </div>
            </div>
          </div>
          <div className={styles.connect_with_us_div}>
            <h2>CONNECT WITH US</h2>
            <div>
              <p className={styles.ImageLogos}>
                <Image src={instagramImage} alt="instagramImage" />
                <Image src={tweterImage} alt="tweterImage" />
              </p>
            </div>
          </div>
          <div className={styles.rightsreserved}>
            <p>© toze.ai kor, all rights reserved.</p>
          </div>
        </div>
      </div>
      <div className={styles.footer_responsive_div}>
        <div className={styles.logo_Image}>
          <Image src={LogImage} alt="LogImage" />
        </div>

        <div className={styles.quick_links_flex}>
          <div>
            <h2>QUICK LINKS</h2>
            <div>
              <p>About us</p>
              <p>Service</p>
              <p>Plan</p>
              <p>Token</p>
              <p>Roadmap</p>
            </div>
          </div>
          <div className={styles.contact_us_flex}>
            <div className={styles.contact_us_div}>
              <h2>CONTACT US</h2>
              <div>
                <p>Help@toze.ai</p>
              </div>
            </div>
            <div className={styles.connect_with_us_div}>
              <h2>CONNECT WITH US</h2>
              <div>
                <p className={styles.ImageLogos}>
                  <Image src={instagramImage} alt="instagramImage" />
                  <Image src={tweterImage} alt="tweterImage" />
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.rightsreserved}>
          <p>© toze.ai kor, all rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
