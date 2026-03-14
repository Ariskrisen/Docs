import type { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import Translate, { translate } from '@docusaurus/Translate';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={styles.heroBanner}>
      {/* Animated gradient orbs */}
      <div className={styles.heroBackground}></div>

      {/* Floating particles */}
      <div className={styles.particles}>
        <span className={styles.particle}></span>
        <span className={styles.particle}></span>
        <span className={styles.particle}></span>
        <span className={styles.particle}></span>
        <span className={styles.particle}></span>
        <span className={styles.particle}></span>
      </div>

      <div className="container">
        <p className={styles.heroTagline}>
          <Translate id="homepage.tagline">⚡ Open-Source Minecraft Plugins</Translate>
        </p>
        <Heading as="h1" className={styles.heroTitle}>
          <Translate id="homepage.title">Ariskrisen Plugins</Translate>
        </Heading>
        <p className={styles.heroSubtitle}>
          <Translate id="homepage.subtitle">Современная и мощная экосистема плагинов для вашего Minecraft сервера.</Translate>
        </p>
        <div className={styles.buttons}>
          <Link
            className={clsx('button button--primary button--lg', styles.pluginCard)}
            to="/docs/DialogMenus/intro">
            <Translate id="homepage.btn.dialogmenus">Документация DialogMenus ⚙️</Translate>
          </Link>
          <Link
            className={clsx('button button--secondary button--lg', styles.pluginCard)}
            to="/docs/EasyScript/intro">
            <Translate id="homepage.btn.easyscript">Документация EasyScript 📜</Translate>
          </Link>
        </div>

        {/* Stats */}
        <div className={styles.statsRow}>
          <div className={styles.stat}>
            <div className={styles.statValue}>2</div>
            <div className={styles.statLabel}>
              <Translate id="homepage.stats.plugins">Плагина</Translate>
            </div>
          </div>
          <div className={styles.stat}>
            <div className={styles.statValue}>1.21+</div>
            <div className={styles.statLabel}>
              <Translate id="homepage.stats.version">Paper MC</Translate>
            </div>
          </div>
          <div className={styles.stat}>
            <div className={styles.statValue}>MIT</div>
            <div className={styles.statLabel}>
              <Translate id="homepage.stats.license">Лицензия</Translate>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title={translate({ id: 'homepage.meta.title', message: 'Главная | Ariskrisen Docs' })}
      description={translate({ id: 'homepage.meta.description', message: 'Единый портал документации для плагинов Ariskrisen (DialogMenus, EasyScript)' })}>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
