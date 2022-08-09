import React, { Fragment, useState } from "react";
import { Badge } from "antd";
import { NavLink } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/images/logo.svg";
import search from "../../assets/images/search.svg";
import notification from "../../assets/images/notification.svg";
import user from "../../assets/images/user.svg";
import menu from "../../assets/images/menu.svg";
import { CloseOutlined } from "@ant-design/icons";
import Signin from "../../pages/login/signin";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import { Table, Modal } from "antd";
const nav_data = [
  {
    id: "1",
    name: "Home",
    link: "/",
    className: "home",
  },
  {
    id: "2",
    name: "Topics",
    link: "/topics",
    className: "topic",
  },
  {
    id: "3",
    name: "Articles",
    link: "/articles",
    className: "article",
  },
  {
    id: "4",
    name: "Campaign",
    link: "/campaign",
    className: "campaign",
  },
  {
    id: "5",
    name: "Gallery",
    link: "/gallery",
    className: "gallery",
  },
  {
    id: "6",
    name: "Essentials and Tips",
    link: "/essentials",
    className: "essentials",
  },
];
const header_icon = [
  {
    id: "1",
    image: search,
    alt: "search",
    count: 5,
    link: "/search",
    className: "search",
  },
  {
    id: "2",
    image: notification,
    alt: "notification",
    count: 5,
    link: "/notification",
    className: "notification",
  },

  {
    id: "3",
    image: user,
    alt: "user",
    count: 5,
    link: "/profile",
    className: "user",
  },
  {
    id: "4",
    image: menu,
    alt: "menu",
    count: 5,
    link: "/menu",
    className: "menu",
  },
];
const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [visible, setVisible] = useState(false);
  return (
    <Fragment>
      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="CI Logo" />
        </div>
        <ul
          className={isMobile ? "nav-links-mobile" : "nav-links"}
          onClick={() => setIsMobile(false)}
        >
          {nav_data.map((elem) => (
            <NavLink to={elem.link} className={elem.className}>
              <li>{elem.name}</li>
            </NavLink>
          ))}
        </ul>
        <div
          className={isMobile ? "nav-icons-mobile" : "nav-link"}
          onClick={() => setIsMobile(false)}
        >
          {header_icon.map((ele, index) => (
            <NavLink
              to={index === 3 ? () => "#" : ele.link}
              className={ele.className}
            >
              <Badge>
                <img
                  onClick={index === 3 ? () => setVisible(true) : ""}
                  className={`logo-${index}`}
                  src={ele.image}
                  alt={ele.alt}
                  width="50"
                  height="38"
                />
              </Badge>
            </NavLink>
          ))}
        </div>
        <div
          className="mobile-menu-icon"
          onClick={() => setIsMobile(!isMobile)}
        >
          {isMobile ? (
            <CloseOutlined />
          ) : (
            <img src={menu} alt="menu" width="50" height="38" />
          )}
        </div>
      </nav>
      <Modal
        centered
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        width={490}
        height={857}
        className="signin-wrapper"
        footer={null}
      >
        <Signin />
      </Modal>
    </Fragment>
  );
};

export default Header;
