import React from "react";
import "./index.css";
import { Input } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import ArrowRight from "../../../assets/images/homeImgs/arrow-right-white.png";

function CiHomeSubscribe() {
  return (
    <div className="ci_home_subscribe_container">
      <div className="ci_home_subscribe_heading">
        Subscribe to our Newsletter
      </div>
      <div className="ci_home_subscribe_heading_bottom_border"></div>
      <div className="ci_home_subscribe_subheading">
        Want to stay in touch with our latest articles and posts? Subscribe to
        get Conservation India posts right in your inbox.
      </div>
      <div className="ci_home_subscribe_input">
        <Input
          placeholder="Enter Email Address*"
          style={{ borderRadius: "30px" }}
          suffix={<img className="ci_home_subscribe_email_send_btn" src={ArrowRight} />}
        />
      </div>
    </div>
  );
}

export default CiHomeSubscribe;
