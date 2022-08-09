import {
  Button,
  Col,
  DatePicker,
  Input,
  Row,
  Select,
  message,
  Upload,
} from "antd";
import TextArea from "antd/lib/input/TextArea";
import React, { useState } from "react";
import "./index.css";
import moment from "moment";
import { FilePdfOutlined, InboxOutlined } from "@ant-design/icons";
import CkEditorComp from "../../../components/CkEditor";

const { Option } = Select;
const { Dragger } = Upload;

function AddCampaigns() {
  const [tags, setTags] = useState(["Wild Life", "Animal", "Birds", "Cow"]);
  const dateFormatList = ["DD/MM/YYYY", "DD/MM/YY"];
  const [selectedAction, setSelectedAction] = useState("");

  const settings = {
    name: "file",
    multiple: true,
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    onChange(info) {
      const { status } = info.file;
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
    },
  };

  return (
    <div className="creat-campaign-container">
      <div className="creat-campaign-top-row">
        <div className="creat-campaign-top-row-heading">Add Campaign</div>
        <div className="creat-campaign-top-row-actions">
          <button
            onClick={() => setSelectedAction("submit")}
            className={
              selectedAction == "submit"
                ? "selected-button"
                : "create-campaign-buttons"
            }
          >
            Submit
          </button>
          <button
            onClick={() => setSelectedAction("savedraft")}
            className={
              selectedAction == "savedraft"
                ? "selected-button"
                : "create-campaign-buttons"
            }
          >
            Save Draft
          </button>
          <button
            onClick={() => setSelectedAction("preview")}
            className={
              selectedAction == "preview"
                ? "selected-button"
                : "create-campaign-buttons"
            }
          >
            Preview
          </button>
        </div>
      </div>
      <Row justify="space-between" className="create-campaign-details">
        <Col
          xs={24}
          sm={24}
          md={24}
          lg={16}
          xl={16}
          className="create-campaign-left-side"
        >
          <div className="create-campaign-left-side-lebel">Campaign Title</div>
          <Input placeholder="Enter Title" />
          <div className="create-campaign-left-side-lebel">Description</div>
          <CkEditorComp />
          <div className="create-campaign-left-side-lebel">Campaign</div>
          <div className="create-campaign-left-side-lebel">Upload Document</div>
          <Dragger {...settings}>
            <div className="create-campaigns-drag-file">
              <FilePdfOutlined />
              <div className="create-campaigns-drg-file-instruction">
                Drag & Drop PDF file here
              </div>
            </div>
            <div className="create-campaigns-drg-file-size">
              Max file size : 10MB
            </div>
          </Dragger>
          <div className="create-campaign-left-side-lebel">Media Updates</div>
          <TextArea rows={6} placeholder="Message" />
        </Col>
        <Col
          xs={24}
          sm={24}
          md={24}
          lg={7}
          xl={7}
          className="create-campaign-right-side"
        >
          <div className="create-campaign-right-side-lebel">Add Tags</div>
          <Select
            mode="multiple"
            allowClear
            style={{ width: "100%" }}
            placeholder="Please select"
            defaultValue={["Wild Life"]}
          >
            {tags.map((item, i) => {
              return <Option key={i.toString(36) + i}>{item}</Option>;
            })} 
          </Select>
          <div className="create-campaign-right-side-lebel">Date</div>
          <DatePicker
            style={{ width: "100%" }}
            defaultValue={moment("01/01/2015", dateFormatList[0])}
            format={dateFormatList}
          />
        </Col>
      </Row>
    </div>
  );
}

export default AddCampaigns;
