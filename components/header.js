import Head from "next/head";

const loadGa = () => {
  if (typeof window === "object") {
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag("js", new Date());
    gtag("config", "G-NWRDKCHFFP");
  }
};

const Header = () => {
  return (
    <>
      <Head>
        <meta name="propeller" content="b789806b4d977f8fa0e1c035c7a72307" />
        <meta httpEquiv="content-type" content="text/html; charset=UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <title>
          Downloades videos from Facebook, YouTube - Download Video from
          Facebook, YouTube | u2dost.com
        </title>
        <meta
          name="description"
          content="Online download videos from YouTube and Facebook for FREE to PC, mobile. Supports downloading format: MP4 in HD videos"
        />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="robots" content="index, follow"></meta>
        <meta itemProp="name" content="Download Videos from YouTube" />
        <meta
          itemProp="description"
          content="Online download videos from YouTube, Facebook for FREE to PC, mobile. Supports downloading format: MP4 in HD videos"
        />
        <meta itemProp="image" content="https://u2dost.com/logo.png" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Download Videos from YouTube and Facebook for free"
        />
        <meta
          property="og:description"
          content="Online download videos from YouTube, Facebook for FREE to PC, mobile. Supports downloading format: MP4 in HD videos"
        />
        <meta property="og:image" content="https://u2dost.com/logo.png" />

        <link rel="icon" href="/favicon.ico" />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-NWRDKCHFFP"
        ></script>
        {loadGa()}
      </Head>
    </>
  );
};

export default Header;
