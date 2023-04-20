import Head from 'next/head';

import CircleLogo from '@/components/CircleLogo/CircleLogo';

import styles from './index.module.scss';

export default function Home() {
  return (
    <div className={styles.center}>
      <Head>
        <title>MURAWSKA.STUDIO</title>
      </Head>
      <CircleLogo text="murawska.studio" className={styles['brand-logo']} />
    </div>
  );
}
