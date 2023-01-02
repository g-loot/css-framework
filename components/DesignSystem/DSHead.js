import Head from 'next/head';

export default function DSHead(props) {  
  return (
    <Head>
      <title>{props.title} — Stryda Brand Guidelines</title>
      <meta name='description' content='Stryda CSS Framework' />
      <link rel='icon' href='https://res.cloudinary.com/gloot/image/upload/v1671441061/Stryda/favicons/stryda-favicon.png' />
      <meta property="og:title" content={`${props.title} — Stryda CSS Framework`} key="title" />
      
      <meta property="og:url" content="https://gloot-framework.netlify.app/" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Stryda Brand Guidelines" />
      <meta property="og:description" content="Documentation and resources for the Stryda CSS Framework." />
      <meta property="og:image" content="https://res.cloudinary.com/gloot/image/upload/v1672669464/Stryda/framework/Stryda_framework_ogpreview.jpg" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="netlify.io" />
      <meta property="twitter:url" content="https://gloot-framework.netlify.app" />
      <meta name="twitter:title" content="Stryda Brand Guidelines" />
      <meta name="twitter:description" content="Documentation and resources for the Stryda CSS Framework." />
      <meta name="twitter:image" content="https://res.cloudinary.com/gloot/image/upload/v1672669464/Stryda/framework/Stryda_framework_ogpreview.jpg" />
    </Head>
  );
}
