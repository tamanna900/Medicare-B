import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
export default function Footer() {
    return(
    <footer className="bg-blue-700 text-white py-8 text-center">
      <div className="flex justify-center gap-6 mb-4">
        <a href="#"><FaFacebook /></a>
        <a href="#"><FaTwitter /></a>
        <a href="#"><FaLinkedin /></a>
      </div>
      <p>&copy; {new Date().getFullYear()} MediCare Hospital. All Rights Reserved.</p>
    </footer>
    );
}
  