import Layout from "../components/layout";

const About = () => (
  <Layout>
    <div className="container mx-auto h-screen">
      <h1 className="font-bold text-3xl">About</h1>
      <div className="mt-5 mb-5">
        <p className="text-xl">
          u2dost.com - YouTube Video Downloader. U2dost allows you to download
          video from YouTube to Mp4 in HD quality. Using u2dost, You can easily
          download for free thousands of videos from YouTube.
        </p>
      </div>
      <div className="mt-5 mb-5">
        <h1 className="font-bold text-3xl">Features:</h1>
        <ul className="text-xl">
          <li>Download YouTube videos</li>
          <li>HD videos in Mp4 format</li>
          <li>Download facebook videos (coming soon)</li>
          <li>Download Dailymotion videos (coming soon)</li>
        </ul>
      </div>
    </div>
  </Layout>
);
export default About;
