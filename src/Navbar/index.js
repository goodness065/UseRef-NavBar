import React, { useState, useRef, useEffect } from "react";
import {
  FaBars,
  FaBehance,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

const NavBar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const socialsContainerRef = useRef(null);
  const linksRef = useRef(null);
  const socialsRef = useRef(null);
  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };
  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    const socialsHeight = socialsRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.display = "block";
      linksContainerRef.current.style.height = "100%";

      // socialsContainerRef.current.style.display = "block";
      // socialsContainerRef.current.style.height = "100%";
      socialsContainerRef.current.style.height = `${socialsHeight}px`;
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      // linksContainerRef.current.style.display = "none";
      // socialsContainerRef.current.style.display = "none";
      linksContainerRef.current.style.height = "0px";
      socialsContainerRef.current.style.height = "0px";
    }
  }, [showLinks]);
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <p className="logo">
            <span className="span1">Living</span>
            <span className="span2">stone</span>
          </p>
          <button className="nav-toggle" onClick={toggleLinks}>
            <FaBars />
          </button>
        </div>

        <div className="link-container" ref={linksContainerRef}>
          <ul className="links" ref={linksRef}>
            <li>
              <a href="/">Home</a>
            </li>

            <li>
              <a href="/">About</a>
            </li>

            <li>
              <a href="/">Projects</a>
            </li>

            <li>
              <a href="/">Profile</a>
            </li>
          </ul>
        </div>
        <div className="social-icons " ref={socialsContainerRef}>
          <ul className="links" ref={socialsRef}>
            <li>
              <a href="https://www.facebook.com">
                <FaFacebook />
              </a>
            </li>

            <li>
              <a href="https://www.twitter.com">
                <FaTwitter />
              </a>
            </li>

            <li>
              <a href="https://www.linkedin.com">
                <FaLinkedin />
              </a>
            </li>

            <li>
              <a href="https://www.behance.net">
                <FaBehance />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
