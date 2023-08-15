import Head from 'next/head';

export default function PrototypeHead(props) {
  const title = `${props.title} — Stryda Prototype`;
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content="Stryda Prototype" />
      <link rel="icon" href="https://res.cloudinary.com/gloot/image/upload/v1671441061/Stryda/favicons/stryda-favicon.png" />
    </Head>
  );
}
