import React from "react";

const Contact = () => {
  return (
    <div className="p-8 text-center">
      <h2 className="text-4xl font-bold">Contact Us</h2>
      <p className="text-gray-700 mt-4">We'd love to hear from you!</p>
      <form className="mt-6 space-y-4">
        <input type="text" placeholder="Your Name" className="border p-2 w-full" required />
        <input type="email" placeholder="Your Email" className="border p-2 w-full" required />
        <textarea placeholder="Your Message" className="border p-2 w-full h-32" required />
        <button className="bg-blue-600 text-white px-4 py-2 mt-4">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
