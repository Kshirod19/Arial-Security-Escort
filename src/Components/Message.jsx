import React from 'react';

const Message = () => {
  return (
    <div id='contact' className="bg-background1 max-h-max flex justify-evenly items-center flex-wrap p-8 font-sans font-light">
      <div className="bg-background3 p-4 rounded-md w-full max-w-md mx-auto mt-12">
        <form className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="name" className="block text-white">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full p-2 border border-gray-300 rounded-md bg-white text-black outline-none"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="block text-white">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full p-2 border border-gray-300 rounded-md bg-white text-black outline-none"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="message" className="block text-white">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              placeholder="Type Message"
              className="w-full p-2 border border-gray-300 rounded-md bg-white text-black resize-y outline-none"
            />
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-white text-xs text-center sm:text-left">
              This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
            </p>
            <button
              type="submit"
              className="mt-4 sm:mt-0 w-full sm:w-auto bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Message;
