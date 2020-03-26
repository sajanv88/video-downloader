import React from "react";
import Link from "next/link";

export const FooterNav = () => {
  return (
    <>
      <div className="flex justify-center">
        <nav className="pt-3">
          <ul className="flex flex-col md:flex-row">
            <li className="mr-5">
              <Link href="/">
                <a className="text-blue-400 hover:text-blue-800">Home</a>
              </Link>
            </li>
            <li className="mr-5">
              <Link href="/about">
                <a className="text-blue-400 hover:text-blue-800">About</a>
              </Link>
            </li>
            <li className="mr-5">
              <Link href="/contact">
                <a className="text-blue-400 hover:text-blue-800">Contact</a>
              </Link>
            </li>
            <li className="mr-5">
              <Link href="/terms">
                <a className="text-blue-400 hover:text-blue-800">
                  Terms of Service
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};
