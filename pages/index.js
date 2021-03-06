import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Welcome from '../components/welcome'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>ε°ηͺ</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://xiaozhu.dev">ε°ηͺ</a>
        </h1>
        <p className={styles.description}></p>
        <Welcome className={styles.title} />
        <div className={styles.grid}>
          <a href="https://xiaozhu.dev" className={styles.card}>
            <h3>click π &rarr;</h3>
            <p>δΈ</p>
          </a>

          <a href="https://xiaozhu.dev" className={styles.card}>
            <h3>click π &rarr;</h3>
            <p>ε</p>
          </a>

          <a href="https://xiaozhu.dev" className={styles.card}>
            <h3>click π &rarr;</h3>
            <p>θ₯Ώ</p>
          </a>

          <a href="https://xiaozhu.dev" className={styles.card}>
            <h3>click π &rarr;</h3>
            <p>ε</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a href="https://xiaozhu.dev" target="_blank" rel="noopener noreferrer">
          Β© {new Date().getFullYear()}, Built with Nextjs
        </a>
      </footer>
    </div>
  )
}
