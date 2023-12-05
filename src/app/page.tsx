import Image from 'next/image'
import styles from './page.module.css'
import Innovation from '@/Components/Innovation'
import TozeTokens from '@/Components/TozeTokens'
import Milestones from '@/Components/Milestones'
import TokenEconomics from '@/Components/TokenEconomics'
import AiCentricFuture from '@/Components/AiCentricFuture '
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
  return (
    <main className={styles.main}>
     <Innovation />
     <AiCentricFuture />
     <TozeTokens />
     <TokenEconomics />
     <Milestones />
    </main>
  )
}
