"use client"; // Add this directive at the top

import React, { useState } from 'react';

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, subject, message } = e.target.elements;

    const data = {
      email: email.value,
      subject: subject.value,
      message: message.value,
    };

    const JSONdata = JSON.stringify(data);
    const endpoint = '/api/send';

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSONdata,
    };

    try {
      const response = await fetch(endpoint, options);
      const resData = await response.json();

      if (response.status === 200) {
        setEmailSubmitted(true);
        setError(null);
      } else {
        setEmailSubmitted(false);
        setError(resData.message);
      }
    } catch (err) {
      setEmailSubmitted(false);
      setError('Error sending email');
    }
  };

  return (
    <section id="contact" className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative">
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">Let's Connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I'm currently looking for new opportunities! My inbox is always open, whether you're looking to learn more about me or just want to say hi, I'll try my best to get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
          <a href="https://github.com/champhadh" target="_blank" rel="noopener noreferrer">
            <img src="/github-icon.svg" alt="Github Icon" />
          </a>
          <a href="https://www.linkedin.com/in/hady-wehbe-bab11b197/" target="_blank" rel="noopener noreferrer">
            <img src="/linkedin-icon.svg" alt="Linkedin Icon" />
          </a>
        </div>
      </div>
      <div>
        {emailSubmitted ? (
          <p className="text-green-500 text-sm mt-2">Email sent successfully!</p>
        ) : (
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="email" className="text-white block mb-2 text-sm font-medium">
                Your email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="example@gmail.com"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="subject" className="text-white block text-sm mb-2 font-medium">
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Just saying hi"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="text-white block text-sm mb-2 font-medium">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Let's talk about..."
              />
            </div>
            <button
              type="submit"
              className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
            >
              Send Message
            </button>
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          </form>
        )}
      </div>
    </section>
  );
};

export default EmailSection;
