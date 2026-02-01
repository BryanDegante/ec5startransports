import React from "react";
import { FaInstagram, FaTiktok, FaSnapchat, FaFacebook } from "react-icons/fa";

const Nav = () => {
  return (
    <nav>
      <ul className="nav__list">
        <li className="nav__links">
          <a href="" className="nav__link">
            <FaInstagram />
          </a>
        </li>
        <li className="nav__links">
          <a href="" className="nav__link">
            <FaTiktok />
          </a>
        </li>
        <li className="nav__links">
          <a href="" className="nav__link">
            <FaSnapchat />
          </a>
        </li>
        <li className="nav__links">
          <a href="" className="nav__link">
            <FaFacebook />
          </a>
        </li>
      </ul>

      {/* number: (469) 550 - 1176 */}
      {/* email: ericcontreras88@gmail.com */}

      {/* Insta
        Tiktok
        Snap
        Facebook
         */}
    </nav>
  );
};

export default Nav;
