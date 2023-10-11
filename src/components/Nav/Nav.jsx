import React from "react";
import "./nav.css";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageSquareDots } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";

import { useState } from "react";

const Nav = () => {
  const [activeNav, setAvtiveNav] = useState("#");
  return (
    <>
      <nav>
        <a
          href="#"
          onClick={() => setAvtiveNav("#")}
          className={activeNav === "#" ? "active" : ""}
        >
          <AiOutlineHome />
        </a>
        <a
          href="#about"
          onClick={() => setAvtiveNav("#about")}
          className={activeNav === "#about" ? "active" : ""}
        >
          <AiOutlineUser />
        </a>
        <a
          href="#experience"
          onClick={() => setAvtiveNav("#experience")}
          className={activeNav === "#experience" ? "active" : ""}
        >
          <BiBook />
        </a>
        <a
          href="#services"
          onClick={() => setAvtiveNav("#services")}
          className={activeNav === "#services" ? "active" : ""}
        >
          <RiServiceLine />
        </a>
        <a
          href="#contact"
          onClick={() => setAvtiveNav("#contact")}
          className={activeNav === "#contact" ? "active" : ""}
        >
          <BiMessageSquareDots />
        </a>
      </nav>
    </>
  );
};

export default Nav;
