import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="robots" content="index, follow" />
          <meta charSet="UTF-8" />
          <meta
            name="keywords"
            content="download, videos, youtube videos, facebook videos, mp4, HD, mobile u2dost"
          />

          <meta name="propeller" content="b789806b4d977f8fa0e1c035c7a72307" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, maximum-scale=1"
          />

          <meta
            name="description"
            content="Online download videos from YouTube and Facebook for FREE to PC, mobile. Supports downloading format: MP4 in HD videos"
          />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta itemProp="name" content="Download Videos from YouTube" />
          <meta
            itemProp="description"
            content="Online download videos from YouTube, Facebook for FREE to PC, mobile. Supports downloading format: MP4 in HD videos"
          />
          <meta itemProp="image" content="/logo.png" />
          <meta property="og:type" content="website" />
          <meta
            property="og:title"
            content="Download Videos from YouTube and Facebook for free"
          />
          <meta
            property="og:description"
            content="Online download videos from YouTube, Facebook for FREE to PC, mobile. Supports downloading format: MP4 in HD videos"
          />
          <meta property="og:image" content="/logo.png" />

          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />

          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-NWRDKCHFFP"
          ></script>
          <script
            src="//onvictinitor.com/apu.php?zoneid=3026298"
            async
            data-cfasync="false"
          ></script>
          <script
            src="https://pushsar.com/pfe/current/tag.min.js?z=3026301"
            data-cfasync="false"
            async
          ></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
