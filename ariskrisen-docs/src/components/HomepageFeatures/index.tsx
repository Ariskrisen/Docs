import type { ReactNode } from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import Translate from '@docusaurus/Translate';
import styles from './styles.module.css';

type FeatureItem = {
  title: ReactNode;
  emoji: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: <Translate id="feature.dialogmenus.title">DialogMenus</Translate>,
    emoji: '🖼️',
    description: (
      <Translate id="feature.dialogmenus.desc">Мощный плагин для создания меню с использованием нативного Paper Dialogs API. Обеспечивает плавные анимации, отсутствие лагающих слотов инвентаря и идеальное отображение на любых экранах.</Translate>
    ),
  },
  {
    title: <Translate id="feature.easyscript.title">EasyScript</Translate>,
    emoji: '🚀',
    description: (
      <Translate id="feature.easyscript.desc">Высокопроизводительный скриптовый движок. Пишите логику на современном JavaScript (GraalVM) с полным доступом к Paper API и мгновенной перезагрузкой файлов без рестарта сервера.</Translate>
    ),
  },
  {
    title: <Translate id="feature.knowledge.title">Единая База Знаний</Translate>,
    emoji: '📚',
    description: (
      <Translate id="feature.knowledge.desc">Вся необходимая информация в одном месте. Практические примеры настроек, руководства разработчика и подробный разбор конфигураций.</Translate>
    ),
  },
];

function Feature({ title, emoji, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className={clsx('text--center glass-panel', styles.featureCard)}>
        <div className={styles.featureEmoji}>{emoji}</div>
        <Heading as="h3" className={styles.featureTitle}>{title}</Heading>
        <p className={styles.featureDescription}>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
