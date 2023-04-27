import Head from 'next/head';

import WelcomeScreen from '../components/WelcomeScreen/WelcomeScreen';
import styles from './index.module.scss';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Murawska Studio</title>
      </Head>
      <WelcomeScreen className={styles.welcome} />
      AHA
    </div>
  );
}
