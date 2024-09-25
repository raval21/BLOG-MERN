import React from "react";

const Footer = () => {
  return (
    <footer
      className="footer bg-light text-center py-4"
      style={{
        position: "relative",
        bottom: 0,
        width: "100%",
        boxShadow: "0 -2px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <p className="mb-1">&copy; 2024 S8UL Esports. All rights reserved.</p>
      <p>
        <a href="#" className="text-dark">Privacy</a> |{" "}
        <a href="#" className="text-dark">Terms</a>
      </p>
    </footer>
  );
};

export default Footer;
