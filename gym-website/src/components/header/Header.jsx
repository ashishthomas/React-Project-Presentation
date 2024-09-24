import React, { useState } from "react";
import Logo from "../../assets/logo.png";
import Bars from "../../assets/bars.png";
import { Link } from "react-scroll";
import "./Header.css";

const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpened, setMenuOpened] = useState(false);
  const [currentPath, setCurrentPath] = useState("");

  const handleLinkClick = (path) => {
    setCurrentPath(path);
    setMenuOpened(false);
  };

  return (
    <div className="header">
      <img src={Logo} alt="" className="logo" />
      {menuOpened === false && mobile === true ? (
        <div
          style={{
            backgroundColor: "var(--appColor)",
            padding: "0.5rem",
            borderRadius: "5px",
          }}
          onClick={() => setMenuOpened(true)}
        >
          <img
            src={Bars}
            alt=""
            style={{
              width: "1.5rem",
              height: "1.5rem",
            }}
          />
        </div>
      ) : (
        <div className="breadcrumbs">
          {currentPath && (
            <span>
              <i className="fas fa-chevron-right"></i>
              {currentPath}
            </span>
          )}
          <ul className="header-menu">
            <li>
              <Link
                onClick={() => handleLinkClick(false)}
                activeClass="active"
                to="home"
                span={true}
                smooth={true}
              >
                Home
              </Link>
            </li>
            <li onClick={() => handleLinkClick(false)}>
              <Link
                onClick={() => handleLinkClick(false)}
                to="programs"
                span={true}
                smooth={true}
              >
                Programs
              </Link>
            </li>
            <li>
              <Link
                onClick={() => handleLinkClick(false)}
                to="reasons"
                span={true}
                smooth={true}
              >
                Why us
              </Link>
            </li>
            <li>
              <Link
                onClick={() => handleLinkClick(false)}
                to="plans"
                span={true}
                smooth={true}
              >
                Plans
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setMenuOpened(false)}
                to="testimonials"
                span={true}
                smooth={true}
              >
                Testimonials
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
