import Image from 'next/image'
import styles from './page.module.css'
import Innovation from '@/Components/Innovation'
import TozeTokens from '@/Components/TozeTokens'
import Milestones from '@/Components/Milestones'

export default function Home() {
  return (
    <main className={styles.main}>
     <Innovation />
     <TozeTokens />
     <Milestones />
    </main>
  )
}
