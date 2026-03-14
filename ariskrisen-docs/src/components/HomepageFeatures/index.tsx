import type { ReactNode } from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import Translate from '@docusaurus/Translate';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

type FeatureItem = {
  title: ReactNode;
  emoji: string;
  description: ReactNode;
  badge: ReactNode;
  link: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: <Translate id="feature.dialogmenus.title">DialogMenus</Translate>,
    emoji: '🖼️',
    description: (
      <Translate id="feature.dialogmenus.desc">Мощный плагин для создания меню с использованием нативного Paper Dialogs API. Обеспечивает плавные анимации, отсутствие лагающих слотов инвентаря и идеальное отображение на любых экранах.</Translate>
    ),
    badge: <Translate id="feature.dialogmenus.badge">Paper Dialogs API</Translate>,
    link: '/docs/DialogMenus/intro',
  },
  {
    title: <Translate id="feature.easyscript.title">EasyScript</Translate>,
    emoji: '🚀',
    description: (
      <Translate id="feature.easyscript.desc">Высокопроизводительный скриптовый движок. Пишите логику на современном JavaScript (GraalVM) с полным доступом к Paper API и мгновенной перезагрузкой файлов без рестарта сервера.</Translate>
    ),
    badge: <Translate id="feature.easyscript.badge">GraalVM JS</Translate>,
    link: '/docs/EasyScript/intro',
  },
  {
    title: <Translate id="feature.knowledge.title">Единая База Знаний</Translate>,
    emoji: '📚',
    description: (
      <Translate id="feature.knowledge.desc">Вся необходимая информация в одном месте. Практические примеры настроек, руководства разработчика и подробный разбор конфигураций.</Translate>
    ),
    badge: <Translate id="feature.knowledge.badge">Документация</Translate>,
    link: '/docs/DialogMenus/intro',
  },
  {
    title: <Translate id="feature.worldsystem.title">WorldSystem</Translate>,
    emoji: '🌍',
    description: (
      <Translate id="feature.worldsystem.desc">Личные миры для каждого игрока. Форк популярного плагина с улучшенным GUI, шаблонами биомов и полной поддержкой Paper 1.21.</Translate>
    ),
    badge: <Translate id="feature.worldsystem.badge">World Management</Translate>,
    link: '/docs/WorldSystem/intro',
  },
];

function Feature({ title, emoji, description, badge, link }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <Link to={link} style={{ textDecoration: 'none', color: 'inherit' }}>
        <div className={clsx('glass-panel', styles.featureCard)}>
          <div className={styles.featureIcon}>{emoji}</div>
          <Heading as="h3" className={styles.featureTitle}>{title}</Heading>
          <p className={styles.featureDescription}>{description}</p>
          <span className={styles.featureBadge}>{badge}</span>
        </div>
      </Link>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>
          <Translate id="feature.section.title">Наши Плагины</Translate>
        </Heading>
        <p className={styles.sectionSubtitle}>
          <Translate id="feature.section.subtitle">Инструменты для создания уникального серверного опыта</Translate>
        </p>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
