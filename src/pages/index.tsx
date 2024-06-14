import Head from 'next/head';
import CheckboxGroup from '../components/checkBoxGroup';
import styles from '../styles/Home.module.css';

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mutual Fund Analytics</title>
        <meta name="description" content="AlphaBetaWorks Mutual Fund Analytics" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <header className={styles.header}>
        <nav className={styles.nav}>
          <a href="#">AlphaBetaWorks Mutual Fund Analytics</a>
          <a href="#">Fund Screener</a>
          <a href="#">Fund Skill</a>
          <a href="#">Portfolio Risk</a>
          <a href="#">Settings</a>
          <a href="#">Help</a>
        </nav>
      </header>

      <main className={styles.main}>
        <CheckboxGroup />
      </main>
    </div>
  );
}

export default Home;
