import Head from 'next/head';

export default function DSHead(props) {  
  return (
    <Head>
      <title>{props.title} — G-Loot Brand Guidelines</title>
      <meta name='description' content='G-Loot CSS Framework' />
      <link rel='icon' href='https://res.cloudinary.com/gloot/image/upload/v1653321618/Marketing/2022_prototype/favicon.png' />
      <meta property="og:title" content={`${props.title} — G-Loot CSS Framework`} key="title" />
      
      <meta property="og:url" content="https://gloot-framework.netlify.app/" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="G-Loot Brand Guidelines" />
      <meta property="og:description" content="Documentation and resources for the G-Loot CSS Framework." />
      <meta property="og:image" content="https://res.cloudinary.com/gloot/image/upload/v1655133846/Marketing/2022_prototype/G-Loot_framework_ogpreview.jpg" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="netlify.io" />
      <meta property="twitter:url" content="https://gloot-framework.netlify.app" />
      <meta name="twitter:title" content="G-Loot Brand Guidelines" />
      <meta name="twitter:description" content="Documentation and resources for the G-Loot CSS Framework." />
      <meta name="twitter:image" content="https://res.cloudinary.com/gloot/image/upload/v1655133846/Marketing/2022_prototype/G-Loot_framework_ogpreview.jpg" />
    </Head>
  );
}
