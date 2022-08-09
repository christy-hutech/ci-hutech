import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";
import messages from "../../constants/messages";
import facebook from "../../assets/images/facebook.svg";
import linkdin from "../../assets/images/linkdin.svg";
import twitter from "../../assets/images/twitter.svg";
import logo from "../../assets/images/logo.svg";
import { Typography } from "antd";
const { Paragraph } = Typography;
const { RESEVE_RIGHTS } = messages;
const footer_icon = [
  {
    id: "1",
    image: facebook,
    alt: "facebook",
    clickPath: "https://www.facebook.com/",
  },
  {
    id: "2",
    image: linkdin,
    alt: "linkdin",
    clickPath: "https://www.linkedin.com/",
  },

  {
    id: "3",
    image: twitter,
    alt: "twitter",
    clickPath: "https://twitter.com",
  },
];
const footer_data = [
  {
    id: "1",
    name: "About CI",
    link: "/home",
    className: "about",
  },
  {
    id: "2",
    name: "Note to Contributors",
    link: "/topics",
    className: "note",
  },
  {
    id: "3",
    name: "Authors",
    link: "/articles",
    className: "author",
  },
  {
    id: "4",
    name: "Posting Guidelines",
    link: "/campaign",
    className: "guideline",
  },
  {
    id: "5",
    name: "Terms of Use ",
    link: "/gallery",
    className: "terms",
  },
  {
    id: "6",
    name: "Disclaimer",
    link: "/essentials",
    className: "disclaimer",
  },
  {
    id: "7",
    name: " Contact",
    link: "/essentials",
    className: "contact",
  },
];
const Footer = () => {
  let year = new Date().getFullYear();

  return (
    <footer className="footer-wrapper-parent">
      <div className="footer-wrapper-child1">
        <div className="footer-logo">
          <img src={logo} alt="CI_Logo" width="166" height="46" />
        </div>

        <ul className="footer-links">
          {footer_data.map((elem) => (
            <NavLink to={elem.link} className={elem.className}>
              <li>{elem.name}</li>
            </NavLink>
          ))}
        </ul>
      </div>
      <div className="footer-wrapper-child2">
        <Paragraph className="footer-text">
          &copy; {`${year} ${RESEVE_RIGHTS}`}
        </Paragraph>
        <div className="footer-img">
          {footer_icon.map((ele) => (
            <a key={ele.id} href={ele.clickPath}>
              <img src={ele.image} alt={ele.name} width="75" height="50" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
