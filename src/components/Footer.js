import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 text-center mt-8">
      <p>© {new Date().getFullYear()} @devARcoder. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
