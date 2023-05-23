import Head from 'next/head';

export default function BrandHead(props) {  
  return (
    <Head>
      <title>{props.title} — Stryda Framework</title>
      <meta name='description' content='Quickly build high quality product features and pages with the centralized front-end design system Stryda CSS Framework.' />
      <link rel='icon' href='https://res.cloudinary.com/gloot/image/upload/v1671441061/Stryda/favicons/stryda-favicon.png' />
      <meta property="og:title" content={`${props.title} — Stryda Framework`} key="title" />
      
      <meta property="og:url" content="https://stryda.netlify.app/" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Stryda CSS Framework" />
      <meta property="og:description" content="Documentation for the Stryda CSS framework." />
      <meta property="og:image" content="https://res.cloudinary.com/gloot/image/upload/v1672669464/Stryda/framework/Stryda_framework_ogpreview.jpg" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="netlify.io" />
      <meta property="twitter:url" content="https://stryda.netlify.app" />
      <meta name="twitter:title" content="Stryda CSS Framework" />
      <meta name="twitter:description" content="Documentation for the Stryda CSS framework." />
      <meta name="twitter:image" content="https://res.cloudinary.com/gloot/image/upload/v1672669464/Stryda/framework/Stryda_framework_ogpreview.jpg" />
    </Head>
  );
}
