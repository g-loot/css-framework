import Head from 'next/head';

export default function PrototypeHead(props) {
  return (
    <Head>
      <title>{props.title} — Stryda Prototype</title>
      <meta name="description" content="Stryda Prototype" />
      <link rel="icon" href="https://res.cloudinary.com/gloot/image/upload/f_auto/v1671441061/Stryda/favicons/stryda-favicon.png" />
    </Head>
  );
}
