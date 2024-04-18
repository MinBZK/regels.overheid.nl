import React from 'react';
import Layout from '@theme/Layout';
import styles from './home.module.css';
import CheckDesign from './check-design.svg';
import UserTests from './user-tests.svg';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout>
      <div className={styles.hero}>
        <h1 className={styles.header}>Regel Je Toekomst</h1>
        <p className={styles.intro}>
          Op deze pagina bieden we je de mogelijkheid om onze nieuwe functionaliteiten te verkennen. We willen graag
          jouw feedback ontvangen om onze diensten te verbeteren en aan te passen aan jouw behoeften.
        </p>
      </div>
      <div className={styles.cards}>
        <div className={styles.blueBall} />
        <div className={styles.orangeBall} />
        <div className={styles.blueBallTwo} />
        <a
          className={styles.card}
          href="https://www.figma.com/proto/miuXp5zu2JNhG2t3c29KBS/Design?page-id=74%3A712&type=design&node-id=2169-12846&viewport=-10733%2C-2367%2C0.34&t=SV4aiY37RcXrCxjE-1&scaling=min-zoom&starting-point-node-id=2169%3A12846&mode=design"
        >
          <h2 className={styles.cardTitle}>Bekijk het ontwerp</h2>
          <p className={styles.cardText}>
            Laat ons weten wat je ervan vindt en welke verbeteringen je graag zou zien via de gebruikerstest.
          </p>
          <CheckDesign className={styles.cardImage} />
        </a>
        <a className={styles.card} href={`${siteConfig.baseUrl}intro`}>
          <h2 className={styles.cardTitle}>Ga naar de gebruikerstest</h2>
          <p className={styles.cardText}>
            Jouw input is van onschatbare waarde voor ons om onze producten te optimaliseren en te laten aansluiten bij
            jouw wensen.
          </p>
          <UserTests className={styles.cardImage} />
        </a>
      </div>
    </Layout>
  );
}
