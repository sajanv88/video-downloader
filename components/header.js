import Head from "next/head";
import { useRouter } from "next/router";

const Header = () => {
  const { route } = useRouter();
  let titleString = "";
  switch (route) {
    case "/":
      titleString =
        "Downloades videos from Facebook, YouTube in Mp4 HD format | u2dost.com";
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
        "Downloades videos from Facebook, YouTube in Mp4 HD format | u2dost.com";
  }
  return (
    <>
      <Head>
        <title>{titleString}</title>
      </Head>
    </>
  );
};

export default Header;
