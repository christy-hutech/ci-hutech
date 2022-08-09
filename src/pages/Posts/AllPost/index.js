import {
  DeleteOutlined,
  EditOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { Button, Input, Space, Table, Tag } from "antd";
import React, { useState } from "react";
import "./index.css";
import RejectIcon from "../../../assets/images/reject-icon.png";
import EditIcon from "../../../assets/images/edit-icon.png";
const columns = [
  {
    title: "Title",
    dataIndex: "Title",
    key: "Title",
    // render: (text) => <a>{text}</a>,
  },
  {
    title: "Author",
    dataIndex: "Author",
    key: "Author",
  },
  {
    title: "Date",
    dataIndex: "Date",
    key: "Date",
  },
  {
    title: "Status",
    key: "Status",
    dataIndex: "Status",
    render: (_, { Status }) => (
      <>
        {Status.map((tag) => {
          let color =
            tag == "Aproved" ? "green" : tag == "rejected" ? "red" : "yellow";

          if (tag === "loser") {
            color = "volcano";
          }

          return (
            <Tag
              style={{
                backgroundColor: "#31BC79",
                color: "white",
                paddingInline: "10px",
                borderRadius: "10px",
              }}
              key={tag}
            >
              {tag}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle" >
        <img src={EditIcon} style={{ height: "15px", width: "15px" }} />
        <img src={RejectIcon} style={{ height: "15px", width: "15px" }} />
      </Space>
    ),
  },
];

const AllPosts = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [tableData, setTableData] = useState([
    {
      key: "1",
      Title: "John Brown",
      Author: 32,
      Date: "New York No. 1 Lake Park",
      Status: ["Aproved"],
    },
    {
      key: "2",
      Title: "Jim Green",
      Author: 42,
      Date: "London No. 1 Lake Park",
      Status: ["Aproved"],
    },
    {
      key: "3",
      Title: "Joe Black",
      Author: 32,
      Date: "Sidney No. 1 Lake Park",
      Status: ["Aproved"],
    },
    {
      key: "4",
      Title: "Joe Black",
      Author: 32,
      Date: "Sidney No. 1 Lake Park",
      Status: ["Aproved"],
    },
    {
      key: "5",
      Title: "Joe Black",
      Author: 32,
      Date: "Sidney No. 1 Lake Park",
      Status: ["Aproved"],
    },
  ]);

  const onSelectChange = (newSelectedRowKeys) => {
    console.log("selectedRowKeys changed: ", selectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
    selections: [
      Table.SELECTION_ALL,
      Table.SELECTION_INVERT,
      Table.SELECTION_NONE,
      {
        key: "odd",
        text: "Select Odd Row",
        onSelect: (changableRowKeys) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changableRowKeys.filter((_, index) => {
            if (index % 2 !== 0) {
              return false;
            }

            return true;
          });
          setSelectedRowKeys(newSelectedRowKeys);
        },
      },
      {
        key: "even",
        text: "Select Even Row",
        onSelect: (changableRowKeys) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changableRowKeys.filter((_, index) => {
            if (index % 2 !== 0) {
              return true;
            }

            return false;
          });
          setSelectedRowKeys(newSelectedRowKeys);
        },
      },
    ],
  };
  return (
    <div  className="all-post-main-container" >
      <div className="all-post-container">
        <div className="all-post-top-row">
          <div className="all-post-top-row-heading">All Posts</div>
          <div className="all-post-top-row-actions">
            <Button
              type="primary"
              shape="round"
              htmlType="submit"
              className="all-post-submit-buttons"
            >
              Submit
            </Button>
            <Button
              type="primary"
              shape="round"
              className="all-post-search-buttons"
            >
              Search Post
            </Button>
            <Input
              // size="large"
              className="all-post-input"
              prefix={<SearchOutlined />}
            />
          </div>
        </div>
        <div className="all-post-table">
          <Table
            rowClassName={(record, index) =>
              index % 2 === 0 ? "table-row-light" : "table-row-dark"
            }
            rowSelection={rowSelection}
            columns={columns}
            dataSource={tableData}
          />
        </div>
      </div>
    </div>
  );
};

export default AllPosts;
