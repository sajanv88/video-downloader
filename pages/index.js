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
    response: null,
    error: false,
    reset: false
  });

  const onInputHandler = async e => {
    status.isLoading = true;
    status.error = false;
    status.response = null;
    status.reset = false;
    setStatus({ ...status });

    try {
      const { value } = e;
      const res = await fetch("/api/download", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ url: value })
      }).then(r => r.json());
      window.dataLayer.push({ event: "Button Click", value });
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

  const clear = () => {
    status.response = null;
    status.reset = true;
    setStatus({ ...status });
  };
  return (
    <div>
      <div className="h-auto">
        <div className="container mx-auto">
          <div className="flex flex-col pt-10">
            <h1 className="self-center text-center pb-10 text-2xl w-full md:w-9/12 md:text-4xl">
              Download videos <br className="md:hidden" /> from YouTube,
              Facebook.
            </h1>
            <UserInput
              onHandler={onInputHandler}
              isLoading={status.isLoading}
              reset={status.reset}
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
              {status.response && <Table {...status} clear={clear} />}
            </div>
            <hr className="mb-5 mt-5 self-center w-10/12" />

            <div className="mt-3 px-5 lg:px-32">
              <h1 className="text-xl font-bold pb-2">
                How to download video from Youtube
              </h1>
              <div className="flex flex-col md:flex-row justify-center md:justify-around">
                <div className="max-w-2xl w-full">
                  <img
                    src="/youtube-example.png"
                    className="w-full md:w-10/12"
                    alt="youtube screenshot to show you how and where to copy the link from the youtube"
                  />
                </div>
                <div className="mx-w-2xl">
                  <div className="text-left md:w-10/12">
                    <h1 className="text-3xl font-bold pb-3">Instructions</h1>
                    <ul className="list-disc ml-5">
                      <li className="pb-3">
                        Copy the link from the address bar then paste it in the
                        input box.
                      </li>
                      <li className="pb-3">
                        Copy the link from the window then paste it in the input
                        box.
                      </li>
                      <li className="pb-3">
                        Press the <strong>"ENTER"</strong> key or click on the
                        <strong>"START"</strong> button to begin the process.
                      </li>
                      <li className="pb-3">
                        After the process is complete you will see a table
                        appearing on the screen showing the details of the video
                        and a <strong>DOWNLOAD</strong> button, click on it
                        download the video.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <hr className="mb-5 mt-5 self-center w-10/12" />

            <div className="mt-3 px-5 lg:px-32">
              <h1 className="text-xl font-bold pb-2">
                How to download video from Facebook
              </h1>
              <div className="flex flex-col md:flex-row justify-center md:justify-around">
                <div className="max-w-2xl w-full">
                  <img
                    src="/facebook-example.png"
                    className="w-full md:w-10/12"
                    alt="facebook screenshot to show you how and where to copy the link from facebook video"
                  />
                </div>
                <div className="mx-w-2xl">
                  <div className="text-left md:w-10/12">
                    <h1 className="text-3xl font-bold pt-1 pb-3">
                      Instructions
                    </h1>
                    <ul className="list-disc ml-5">
                      <li className="pb-3">
                        Right click on the video and click{" "}
                        <strong>"Show video url"</strong>.
                      </li>
                      <li className="pb-3">
                        Copy the link from the window then paste it in the input
                        box.
                      </li>
                      <li className="pb-3">
                        Press the <strong>"ENTER"</strong> key or click on the
                        <strong>"START"</strong> button to begin the process.
                      </li>
                      <li className="pb-3">
                        After the process is complete you will see a table
                        appearing on the screen showing the details of the video
                        and a <strong>DOWNLOAD</strong> button, click on it
                        download the video.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <hr className="mb-5 mt-5 self-center w-10/12" />

            <h1 className="font-bold text-center text-4xl">
              u2dost.com - Youtube and Facebook <br /> Video Downloader
            </h1>

            <div className="flex justify-center mt-5 mb-5">
              <p className="text-center w-full px-2 md:w-6/12">
                u2dost.com - YouTube, Facebook Video Downloader. U2dost allows
                you to download video from YouTube, Facebook to Mp4 in HD
                quality. Using u2dost, You can easily download for free
                thousands of videos from YouTube and Facebook.
              </p>
            </div>
            <div className="flex flex-col mt-5 px-5 lg:px-32">
              <h1 className="text-3xl font-bold">Features</h1>
              <ul>
                <li>Download YouTube videos in HD Mp4 format</li>
                <li>Download facebook videos in HD Mp4 format</li>
                <li>Download Dailymotion videos (coming soon)</li>
              </ul>
            </div>
            <hr className="mb-5 mt-5 self-center w-10/12" />
            <div className="flex justify-center mb-5">
              <a
                href="https://paypal.me/u2dost?locale.x=en_US"
                className="px-5 py-3 bg-orange-500 hover:bg-orange-400 rounded text-white font-bold"
                onClick={() =>
                  window.dataLayer.push({
                    event: "Donate button clicked",
                    redirectedTo: "paypal"
                  })
                }
              >
                Donate
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
