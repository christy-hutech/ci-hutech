import "antd/dist/antd.css";
import { Layout, Divider, Table } from "antd";
import React from "react";
import "./accesslog.css";
import Sidebar from "../../components/sidebar/Sidebar";
const { Content } = Layout;

const columns = [
  {
    title: "Browser",
    dataIndex: "browser",
  },
  {
    title: "IP",
    dataIndex: "ip",
  },
  {
    title: "Time",
    dataIndex: "time",
  },
];

const data = [];
for (let i = 0; i < 20; i++) {
    data.push({
        key: i,
        browser: `Chrome on Window ${i}`,
        ip: `86.188.154.225 ${i}`,
        time: `June 20, 2022  10:34 PM  ${i}`,
    });
}

const Accesslog = () => {
  return (
    <div>
      <Divider />
      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default Accesslog;
