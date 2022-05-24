import Head from 'next/head';

export default function PrototypeHead(props) {
  return (
    <Head>
      <title>{props.title} — G-Loot Prototype</title>
      <meta name="description" content="G-Loot Prototype" />
      <link rel="icon" href="https://res.cloudinary.com/gloot/image/upload/v1653321618/Marketing/2022_prototype/favicon.png" />
    </Head>
  );
}
