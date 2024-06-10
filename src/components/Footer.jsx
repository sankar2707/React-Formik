import React from "react";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-3">
      <div className="container">
        <p className="mb-0">
          © {new Date().getFullYear()}{" "}
          <a
            href="https://www.linkedin.com/in/sankar-r-14b753244/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light"
          >
          Sankar R<FaLinkedin size={25} />
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;