import Link from "next/link";
import { FooterNav } from "./nav";

const Footer = () => {
  return (
    <div className="bg-gray-100 py-5">
      <div className="flex flex-col">
        <div className="flex justify-center">
          <h1 className="text-2xl">©2020 u2dost.com</h1>
        </div>
        <div className="self-center pt-3 pb-3">
          <span>All rights reserved | u2dost.com </span>
        </div>
        <FooterNav />
      </div>
    </div>
  );
};

export default Footer;
