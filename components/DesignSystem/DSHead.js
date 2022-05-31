import Head from 'next/head';

export default function DSHead(props) {  
  return (
    <Head>
      <title>{props.title} — G-Loot Framework</title>
      <meta name='description' content='Quickly design high quality product features and pages with the G-Loot CSS Framework. It is a centralized front-end design system built with the utility-first framework Tailwind.' />
      <link rel='icon' href='https://res.cloudinary.com/gloot/image/upload/v1653321618/Marketing/2022_prototype/favicon.png' />
    </Head>
  );
}
