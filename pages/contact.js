import Layout from "../components/layout";
import { useState } from "react";

const Contact = () => {
  const [formFeilds, setFormFeilds] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: ""
  });
  const [success, setSuccess] = useState({ message: "" });
  const [error, setError] = useState({ message: "" });
  const onFormSubmit = async e => {
    success.message = "";
    setSuccess({ ...success });

    e.preventDefault();
    const isValid = Object.values(formFeilds).every(v => v);
    if (isValid) {
      try {
        const res = await fetch("/api/submit", {
          headers: { "content-type": "application/json" },
          method: "POST",
          body: JSON.stringify(formFeilds)
        }).then(r => r.json());
        if (res.message) {
          error.message =
            "Sorry, unable to send your message at the moment try again";
          setError({ ...error });
        } else {
          success.message = res.data;
          setSuccess({ ...success });
          window.dataLayer.push({
            event: "contact",
            user: formFeilds.lastName
          });
          setTimeout(() => {
            success.message = "";
            setSuccess({ ...success });
          }, 2000);
        }
      } catch (e) {
        console.log(e);
      }
    } else {
      error.message = "All feilds are mandatory!";
      setError({ ...error });
    }
  };
  const onChangeHandler = e => {
    const { value, name } = e.target;
    formFeilds[name] = value;
    setFormFeilds({ ...formFeilds });
  };

  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-10">Contact</h1>
      <form className="w-full" onSubmit={onFormSubmit}>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-6/12 px-3 mb-6 md:mb-0 lg:w-12/12">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              First Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder="Jane"
              name="firstName"
              value={formFeilds.firstName}
              onChange={onChangeHandler}
            />
          </div>
          <div className="w-full md:w-6/12 px-3 lg:w-12/12">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-last-name"
            >
              Last Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="Doe"
              name="lastName"
              value={formFeilds.lastName}
              onChange={onChangeHandler}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-password"
            >
              E-mail
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="email"
              type="email"
              name="email"
              placeholder="enter your email address"
              value={formFeilds.email}
              onChange={onChangeHandler}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-password"
            >
              Message
            </label>
            <textarea
              className="no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
              id="message"
              name="message"
              placeholder="Please tell us, could be anything feedback, complaints etc.."
              value={formFeilds.message}
              onChange={onChangeHandler}
            ></textarea>
          </div>
        </div>
        <div className="md:flex md:items-center mb-5 md:justify-center">
          <div className="md:w-6/12">
            <button
              className="w-full shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
              Send
            </button>
          </div>
        </div>
        {success.message && (
          <p className="text-2xl text-green-600 mb-5 text-center">{`${formFeilds.lastName} - ${success.message}`}</p>
        )}
        {error.message && (
          <p className="text-2xl text-red-600 mb-5 text-center">
            {error.message}
          </p>
        )}
      </form>
    </Layout>
  );
};
export default Contact;
