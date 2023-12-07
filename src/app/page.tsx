import styles from "./page.module.css";
import Innovation from "@/Components/Innovation";
import TozeTokens from "@/Components/TozeTokens";
import Milestones from "@/Components/Milestones";
import TokenEconomics from "@/Components/TokenEconomics";
import AiCentricFuture from "@/Components/AiCentricFuture ";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import UnleashSection from "@/Components/UnleashSection";
import Footer from "@/Components/Footer";
import BannerHeader from "@/Components/BannerHeader";
import AwakenSection from "@/Components/AwakenSection";
import TokenDistribution from "@/Components/TokenDistribution";
import DownloadWallet from "@/Components/DownloadWallet";

export default function Home() {
  return (
    <main className={styles.main}>
      <BannerHeader />
      <AwakenSection />
      <Innovation />
      <AiCentricFuture />
      <TozeTokens />
      <TokenDistribution />
      <TokenEconomics />
      <Milestones />
      <DownloadWallet />
      <UnleashSection />
      <Footer />
    </main>
  );
}
