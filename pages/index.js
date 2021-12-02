import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layoutComponent';
import loadingAnimation from '../components/loadingComponent';
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="A plublic Resume/CV Creator" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        Home content
      </Layout>
    </div>
  );
}
