import clsx from 'clsx';
import Heading from '@theme/Heading';
import Translate from '@docusaurus/Translate';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

type FeatureItem = {
  title: JSX.Element;
  emoji: string;
  description: JSX.Element;
  badge: JSX.Element;
  link: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: <Translate id="feature.dialogmenus.title">DialogMenus</Translate>,
    emoji: '🖼️',
    description: (
      <Translate id="feature.dialogmenus.desc">Мощный плагин для создания меню с использованием нативного Paper Dialogs API. Обеспечивает плавные анимации и идеальное отображение.</Translate>
    ),
    badge: <Translate id="feature.dialogmenus.badge">Paper Dialogs API</Translate>,
    link: '/docs/DialogMenus/intro',
  },
  {
    title: <Translate id="feature.easyscript.title">EasyScript</Translate>,
    emoji: '📜',
    description: (
      <Translate id="feature.easyscript.desc">Легковесный движок скриптов с поддержкой JavaScript (GraalVM). Позволяет расширять логику сервера без компиляции JAR.</Translate>
    ),
    badge: <Translate id="feature.easyscript.badge">GraalVM JS</Translate>,
    link: '/docs/EasyScript/intro',
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
  {
    title: <Translate id="feature.artifacts.title">Artifacts</Translate>,
    emoji: '✨',
    description: (
      <Translate id="feature.artifacts.desc">Уникальные пассивные артефакты для игроков. Работают прямо из инвентаря, имеют множество визуальных эффектов и гибкую настройку.</Translate>
    ),
    badge: <Translate id="feature.artifacts.badge">Passive Items</Translate>,
    link: '/docs/Artifacts/intro',
  },
];

function Feature({ title, emoji, description, badge, link }: FeatureItem) {
  return (
    <div className="col col--4">
      <Link className={styles.featureCard} to={link}>
        <div className={styles.featureIcon}>{emoji}</div>
        <div className={clsx("text--center padding-horiz--md", styles.featureContent)}>
          <Heading as="h3" className={styles.featureTitle}>{title}</Heading>
          <p className={styles.featureDescription}>{description}</p>
          <span className={styles.featureBadge}>{badge}</span>
        </div>
      </Link>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <Heading as="h2" className={styles.sectionTitle}>
            <Translate id="homepage.features.title">Наши Плагины</Translate>
          </Heading>
          <p className={styles.sectionSubtitle}>
            <Translate id="homepage.features.subtitle">Инструменты нового поколения для администраторов и разработчиков Minecraft серверов.</Translate>
          </p>
        </div>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
