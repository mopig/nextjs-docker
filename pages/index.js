import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>小猪</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://xiaozhu.dev">小猪</a>
        </h1>

        <p className={styles.description}>👋</p>

        <div className={styles.grid}>
          <a href="https://xiaozhu.dev" className={styles.card}>
            <h3>click 👆 &rarr;</h3>
            <p>东</p>
          </a>

          <a href="https://xiaozhu.dev" className={styles.card}>
            <h3>click 👆 &rarr;</h3>
            <p>南</p>
          </a>

          <a href="https://xiaozhu.dev" className={styles.card}>
            <h3>click 👆 &rarr;</h3>
            <p>西</p>
          </a>

          <a href="https://xiaozhu.dev" className={styles.card}>
            <h3>click 👆 &rarr;</h3>
            <p>北</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a href="https://xiaozhu.dev" target="_blank" rel="noopener noreferrer">
          © {new Date().getFullYear()}, Built with Nextjs
        </a>
      </footer>
    </div>
  )
}
