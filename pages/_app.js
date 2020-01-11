import React from "react";
import App from "next/app";
import "../styles/index.scss";
import Header from "../components/header";
import Nav from "../components/nav";
import Footer from "../components/footer";
export default class Main extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Header />
        <Nav />
        <Component {...pageProps} />
        <Footer />
      </>
    );
  }
}
