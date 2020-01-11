import Layout from "../components/layout";
import Link from "next/link";

const Terms = () => (
  <Layout>
    <div className="h-screen">
      <h1 className="font-bold text-3xl">Terms Of Service</h1>
      <div className="mt-5">
        <p className="uppercase text-gray-700">
          please read this statement of privacy practices carefully before using
          our service
        </p>
      </div>
      <div className="mt-5">
        <p className="text-gray-700">
          u2dost.com (I) is comprised of web pages containing information
          provided by us. Your access to the Site is offered to you conditioned
          on your acceptance of these Terms of Service together with our
          statement of privacy practices, which is incorporated herein by this
          reference and found at ("Terms"). If the terms of this agreement are
          considered an offer, acceptance is expressly limited to such terms. If
          you do not unconditionally agree to all the terms and conditions of
          this agreement, you have no right to use the u2dost.com and any other
          linked services.
        </p>
      </div>
      <div className="mt-5">
        <h1 className="uppercase pb-3">1. Access to the services</h1>
        <p className="text-gray-700">
          Attention required! u2dost.com reserves the right, in its sole
          discretion, to change these Terms at any time upon notice. You can
          review the most current version of Terms at any time. The updated
          Terms are binding on you on the version date indicated in the updated
          Terms. If you do not agree to the updated Terms, you must stop using
          the u2dost.com service. Your continued use of the service after the
          effective date will constitute your acceptance of the updated Terms.
        </p>
      </div>
      <div className="mt-5">
        <h1 className="uppercase pb-3">2. Changes to the site</h1>
        <p className="text-gray-700">
          You may use the u2dost.com if and when it is available. I do not
          guarantee availability of the u2dost.com or any particular feature. A
          particular feature may be a pre-release version and may not work
          correctly or in the way a final version might work. We may
          significantly change the final version or decide not to release it. We
          reserve the right to change, remove, delete, restrict or block access
          to, charge for, or stop providing all or stop any features at any time
          without notice.
        </p>
      </div>
      <div className="mt-5">
        <h1 className="uppercase pb-3">3. Donate</h1>
        <p className="text-gray-700">
          You may donate if you like the service of u2dost.com. It will improve
          the service event better. Also, I do not guarantee anything in return
          for your donations.
        </p>
      </div>
      <div className="mt-5 mb-5">
        <h1 className="uppercase pb-3">4. Contact</h1>
        <p className="text-gray-700">
          If you have any questions, complaints, or claims with respect to the
          Services, please{" "}
          <Link href="/contact">
            <a className="text-blue-400 hover:text-blue-800">Contact</a>
          </Link>{" "}
          u2dost.com
        </p>
      </div>
    </div>
  </Layout>
);
export default Terms;
