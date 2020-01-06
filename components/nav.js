import React from "react";
import Link from "next/link";

const Nav = () => (
  <nav className="container mx-auto">
    <div className="flex justify-between items-center">
      <div>
        <a href="/" className="logo-font text-3xl">
          u2dost.com
        </a>
      </div>
      <div>
        <div>
          {/* <ul className="flex">
            <li className="mr-6">
              <Link href="/login">
                <a className="text-blue-500 hover:text-blue-800">Login</a>
              </Link>
            </li>
            <li className="mr-6">
              <Link href="/register">
                <a className="text-blue-500 hover:text-blue-800">Sign up</a>
              </Link>
            </li>
          </ul> */}
        </div>
      </div>
    </div>
  </nav>
);

export const FooterNav = () => {
  return (
    <>
      <div className="flex justify-center">
        <nav className="pt-3">
          <ul className="flex flex-col md:flex-row">
            <li className="mr-5">
              <Link href="/contact">
                <a className="text-blue-400 hover:text-blue-800">Contact</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Nav;
