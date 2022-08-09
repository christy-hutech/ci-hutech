import "antd/dist/antd.css";
import { Layout, Button } from "antd";
import React from "react";
import "./profile.css";
import ProfileForm from "../../components/profileForm/Profileform";
import Sidebar from "../../components/sidebar/Sidebar";
const { Header, Sider, Content } = Layout;
const Profile = () => {
  const handleMenuClick = (menu) => {
    console.log("Profile");
  };
  return (
    <Layout className="Container">
      <Sidebar handleClick={handleMenuClick} />
      <Layout className="site-layout">
        <Content
          className="site-layout-background"
          style={{
            margin: "0 8.4rem 3rem 2.8rem",
            minHeight: 280,
          }}
        >
          <ProfileForm />
        </Content>
      </Layout>
    </Layout>
  );
};

export default Profile;
