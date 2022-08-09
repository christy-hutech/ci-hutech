import { Button, Col, DatePicker, Input, Row, Select } from "antd";
import TextArea from "antd/lib/input/TextArea";
import React, { useState } from "react";
import "./index.css";
import moment from "moment";
import CkEditorComp from "../../../components/CkEditor";

const { Option } = Select;

function CreatePost() {
  const [tags, setTags] = useState(["Wild Life", "Animal", "Birds", "Cow"]);
  const dateFormatList = ["DD/MM/YYYY", "DD/MM/YY"];
  const [selectedAction, setSelectedAction] = useState("");

  return (
    <div style={{ backgroundColor: "#f0f2f5", padding: "1% 0" }}>
      {/* <div className="creat-post-container">
        <div className="creat-post-top-row">
          <div className="creat-post-top-row-heading">Create Article</div>
          <div className="creat-post-top-row-actions">
            <Button
              type="primary"
              shape="round"
              onClick={() => setSelectedAction("preview")}
              className={
                selectedAction == "preview"
                  ? "selected-button"
                  : "create-post-buttons"
              }
            >
              Preview
            </Button>
            <Button
              type="primary"
              shape="round"
              onClick={() => setSelectedAction("savedraft")}
              className={
                selectedAction == "savedraft"
                  ? "selected-button"
                  : "create-post-buttons"
              }
            >
              Save Draft
            </Button>
            <Button
              type="primary"
              shape="round"
              onClick={() => setSelectedAction("submit")}
              className={
                selectedAction == "submit"
                  ? "selected-button"
                  : "create-post-buttons"
              }
            >
              Submit
            </Button>
          </div>
        </div>
        <Row justify="space-between" className="create-post-details">
          <Col
            xs={24}
            sm={24}
            md={24}
            lg={16}
            xl={16}
            className="create-post-left-side"
          >
            <div className="create-post-left-side-lebel">Topic</div>
            <Input placeholder="Feral Dogs - Wildlife Conflicts" />
            <div className="create-post-left-side-lebel">Post Title</div>
            <Input placeholder="Enter tiltle" />
            <div className="create-post-left-side-lebel">Description</div>
            <CkEditorComp />
          </Col>
          <Col
            xs={24}
            sm={24}
            md={24}
            lg={7}
            xl={7}
            className="create-post-right-side"
          >
            <div className="create-post-right-side-lebel">Author</div>
            <Select defaultValue="Author Name" style={{ width: "100%" }}>
              <Option value="jack">Jack</Option>
              <Option value="jack">Jack</Option>
              <Option value="jack">Jack</Option>
            </Select>
            <div className="create-post-right-side-lebel">Add Tags</div>
            <Select
              mode="multiple"
              allowClear
              style={{ width: "100%" }}
              placeholder="Please select"
              defaultValue={["Wild Life"]}
              // onChange={handleChange}
            >
              {tags.map((item, i) => {
                return <Option key={i.toString(36) + i}>{item}</Option>;
              })}
            </Select>
            <div className="create-post-right-side-lebel">Post Date</div>
            <DatePicker
              style={{ width: "100%" }}
              defaultValue={moment("01/01/2015", dateFormatList[0])}
              format={dateFormatList}
            />
            <div className="create-post-right-side-lebel">Article Source</div>
            <Input placeholder="Enter Source url" />
          </Col>
        </Row>
      </div> */}
    </div>
  );
}

export default CreatePost;
