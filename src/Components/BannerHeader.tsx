"use client";
import * as React from "react";
import styles from "./css/bannerHeader.module.scss";
import logoIcon from "../../public/assets/Icons/logo.svg";
import sidebarIcon from "../../public/assets/Icons/sidebarIcon.svg";
import Image from "next/image";

const BannerHeader = () => {
  const [isMenuOpen, setMenuOpen] = React.useState(false);
  const menuRef = React.useRef<any>(null);

  const handleMenuToggle = () => {
    setMenuOpen((prevMenuState) => !prevMenuState);
  };

  const handleOutsideClick = (e: any) => {
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      setMenuOpen(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div className={styles.awaken_main_section}>
      <div className={styles.awaken_header}>
        <nav className={styles.nav}>
          <div className={styles.logo}>
            <Image src={logoIcon} alt="logoIcon" />
          </div>
          <div
            ref={menuRef}
            className={`${styles.menu} ${isMenuOpen ? styles.open : ""}`}
          >
            <ul>
              <li onClick={handleMenuToggle}>
                <a href="#about-us">About Us</a>
              </li>
              <li onClick={handleMenuToggle}>
                <a href="#service">Service</a>
              </li>
              <li onClick={handleMenuToggle}>
                <a href="#plan">Plan</a>
              </li>
              <li onClick={handleMenuToggle}>
                <a href="#token">Token</a>
              </li>
              <li onClick={handleMenuToggle}>
                <a href="#roadmap">Roadmap</a>
              </li>
            </ul>
          </div>
          <div className={styles.burgerMenu} onClick={handleMenuToggle}>
            <Image src={sidebarIcon} alt="sidebarIcon" />
          </div>
        </nav>
      </div>
    </div>
  );
};

export default BannerHeader;
