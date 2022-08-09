import "antd/dist/antd.css";
import "./accesslog.css";
import { Layout, Button } from "antd";
import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import AccessLog from "./accesslog";
const { Header, Sider, Content } = Layout;


const AccessLayout = () => {
    return (
        <Layout className="Container">
        <Sidebar />
        <Layout className="accesslog-container">
            <div className="accesslog-header">
                <h3>Login Activity</h3>
                <p>Here is your last 20 login activities log.</p>
            </div>
            <Content
                className="access-layout-bg"
                style={{
                margin: "0 8.4rem 3rem 2.8rem",
                minHeight: 280,
                }}
            >
                <AccessLog/>
            </Content>
        </Layout>
    </Layout>
    );
};

export default AccessLayout;
