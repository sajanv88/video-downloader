import React, { useState, useEffect } from "react";
import Nav from "../components/nav";
import UserInput from "../components/userInput";
import Footer from "../components/footer";
import Table from "../components/table";
import Loading from "../components/loader";
import Header from "../components/header";

const Home = () => {
  const [status, setStatus] = useState({
    isLoading: false,
    response: null, //{ name: "", status: "", download_url: "", size: "" },
    error: false
  });

  const onInputHandler = async e => {
    status.isLoading = true;
    status.error = false;
    status.response = null;
    setStatus({ ...status });

    try {
      const { value } = e;
      const res = await fetch("/api/download", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ url: value })
      }).then(r => r.json());
      if (res.message) {
        throw new Error(res);
      }
      status.response = res;
      status.isLoading = false;
      setStatus({ ...status });
    } catch (e) {
      status.isLoading = false;
      status.error = true;
      setStatus({ ...status });
      console.log("error ", e);
    }
  };
  return (
    <div>
      <Header />
      <Nav />
      <div className="h-auto">
        <div className="container mx-auto">
          <div className="flex flex-col pt-10">
            <h1 className="self-center pb-10 text-2xl w-9/12 md:text-4xl md:text-center">
              Download videos from YouTube.
            </h1>
            <UserInput
              onHandler={onInputHandler}
              isLoading={status.isLoading}
            />
            <div className="mt-5">{status.isLoading && <Loading />}</div>
            <div className="mt-5 self-center">
              {status.error && (
                <span className="text-red-500 text-xl lg:text-2xl block text-center">
                  Sorry, unable to download!!! <br /> Please check that you
                  pasted the correct link.
                </span>
              )}
            </div>
            <div className="mt-5 w-10/12 self-center">
              {status.response && <Table {...status} />}
            </div>
            <hr className="mb-5 mt-5 self-center w-10/12" />

            <div className="mt-3 px-5 lg:px-32">
              <div className="flex justify-center md:justify-around">
                <div className="max-w-2xl">
                  <img src="/youtube-example.png" className="w-10/12" />
                </div>
                <div className="mx-w-2xl">
                  <div className="text-left md:w-10/12">
                    <h1 className="text-3xl font-bold pb-3">Instructions</h1>
                    <ul className="list-disc ml-5">
                      <li className="pb-3">
                        Copy the link from your browser address bar and paste
                        the link. This will download video from YouTube.
                      </li>
                      <li className="pb-3">
                        After the download is complete you will see a table "
                        <strong>ABOVE</strong>" with a download button.
                      </li>
                      <li className="pb-3">
                        Just click the button to download your video!!
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <hr className="mb-5 mt-5 self-center w-10/12" />

            <div className="flex justify-center mt-5 mb-5">
              <p className="text-center w-6/12">
                u2dost.com - YouTube Video Downloader. U2dost allows you to
                download video from YouTube to Mp4 in HD quality. Using u2dost,
                You can easily download for free thousands of videos from
                YouTube.
              </p>
            </div>
            <div className="flex flex-col mt-5 px-5 lg:px-32">
              <h1 className="text-3xl">Features:</h1>
              <ul>
                <li>Download YouTube videos</li>
                <li>HD videos in Mp4 format</li>
                <li>Download facebook videos (coming soon)</li>
                <li>Download Dailymotion videos (coming soon)</li>
              </ul>
            </div>
            <hr className="mb-5 mt-5 self-center w-10/12" />
            <div className="flex justify-center mb-5">
              <a
                href="https://paypal.me/u2dost?locale.x=en_US"
                className="px-5 py-3 bg-orange-500 hover:bg-orange-400 rounded text-white font-bold"
              >
                Donate
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
