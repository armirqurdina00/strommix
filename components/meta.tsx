import Head from 'next/head';


export default function Meta() {
  return (
    <Head>
      <title>B2C Origin</title>
      <meta charSet='utf-8' />
      <meta name='mobile-web-app-capable' content='yes' />
      <meta name='apple-mobile-web-app-capable' content='yes' />
      <meta
        name='apple-mobile-web-app-status-bar-style'
        content='black-translucent'
      />
      <meta name='apple-mobile-web-app-title' content='B2C Origin' />
      <meta name='application-name' content='B2C Origin' />
      <meta
        name='description'
        content='Herkunftsnachweis für Grünen Strom - Ihre Energie-Transparenz in der Tasche!'
      />
      <meta
        name='theme-color'
        content='#f4f4f5'
        media='(prefers-color-scheme: light)'
      />
      <meta
        name='theme-color'
        content='#18181b'
        media='(prefers-color-scheme: dark)'
      />
      <meta
        name='viewport'
        content='width=device-width, initial-scale=1, user-scalable=0, viewport-fit=cover'
      />
      <link rel='apple-touch-icon' href='/images/icon-maskable-256.png' />
      <link rel='icon' type='image/png' href='/images/favicon.png' />
      <link rel='manifest' href='/manifest.json' />
    </Head>
  );
}
