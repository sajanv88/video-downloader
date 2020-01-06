import React from "react";
import App from "next/app";
import "../styles/index.scss";
export default class Main extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Component {...pageProps} />
      </>
    );
  }
}
