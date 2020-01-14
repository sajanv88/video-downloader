import Head from "next/head";
import { useRouter } from "next/dist/client/router";

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
  const { route } = useRouter();
  let titleString = "";
  switch (route) {
    case "/":
      titleString =
        "Downloades videos from Facebook, YouTube - Download Video from Facebook, YouTube | u2dost.com";
      break;
    case "/about":
      titleString =
        "About u2dost.com - Download Video from Facebook, YouTube | u2dost.com";
      break;
    case "/contact":
      titleString =
        "Contact u2dost.com - Download Video from Facebook, YouTube | u2dost.com";
      break;
    case "/terms":
      titleString =
        "Terms of Service in u2dost.com - Download Video from Facebook, YouTube | u2dost.com";
      break;
    default:
      titleString =
        "Downloades videos from Facebook, YouTube - Download Video from Facebook, YouTube | u2dost.com";
  }
  return (
    <>
      <Head>
        <title>{titleString}</title>
        {loadGa()}
      </Head>
    </>
  );
};

export default Header;
