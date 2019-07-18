import Head from 'next/head';
import 'bulma';
import './Head.scss';

import { gaTrackingId } from '../../config';

function MyHead({ title, description }) {
  return (
    <Head>
      {/*
        ref: https://github.com/zeit/next.js/blob/canary/examples/with-google-analytics/pages/_document.js#L12
        Global Site Tag (gtag.js) - Google Analytics
      */}
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${gaTrackingId}`}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gaTrackingId}');
          `,
        }}
      />
      <title>{title}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1,
        shrink-to-fit=no"
      />
      <meta name="theme-color" content="#fff" />
      <meta name="description" content={description} />
      <link rel="icon" href="https://t9t.io/favicon.ico" />
      <link rel="apple-touch-icon" href="https://t9t.io/favicon.ico" />
      <link rel="bookmark" href="https://t9t.io/favicon.ico" />
      <link rel="shortcut icon" href="https://t9t.io/favicon.ico" />
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.6.0/css/all.css"
      />
      {/* <link
        href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        rel="stylesheet"
        integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
        crossOrigin="anonymous"
      /> */}
      <script src="https://embed.small.chat/TKSPMPXU1GLJ4NEWQ5.js" async />
    </Head>
  );
}

export default MyHead;
