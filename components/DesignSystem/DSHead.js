import Head from 'next/head';

export default function DSHead(props) {
  return (
    <Head>
      <title>{props.title} — G-Loot Framework</title>
      <meta name="description" content="A G-Loot framework component" />
      <link rel="icon" href="https://res.cloudinary.com/gloot/image/upload/v1653321618/Marketing/2022_prototype/favicon.png" />
    </Head>
  );
}
