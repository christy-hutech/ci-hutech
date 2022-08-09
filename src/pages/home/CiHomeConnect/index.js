import React from "react";
import "./index.css";
import { Row, Col, Input, Button } from "antd";
import TextArea from "antd/lib/input/TextArea";
import ArrowRight from "../../../assets/images/homeImgs/arrow-right-red.png";
import CameraIcon from "../../../assets/images/homeImgs/camera.png";
import EditIcon from "../../../assets/images/homeImgs/edit.png";
import SubmitPhotoBg from "../../../assets/images/homeImgs/submit-photo-bg.png";
import SubmitWriteBg from "../../../assets/images/homeImgs/submit-writeup-bg.png";

function CiHomeConnect() {
  return (
    <div className="ci_home_connect_container">
      <div className="ci_home_connect_heading_container">
        <div className="ci_home_connect_heading">Conservation India</div>
        <div className="ci_home_connect_heading_bottom_border"></div>
      </div>
      <Row>
        <Col
          xs={24}
          sm={24}
          md={20}
          lg={12}
          xl={12}
          className="ci_home_connect_subheading"
        >
          CI is an entirely{" "}
          <span style={{ color: "red" }}>
            volunteer-driven, non-profit, non-sponsored{" "}
          </span>
          portal that aims to facilitate{" "}
          <span style={{ color: "red" }}>nature conservation</span> by providing
          reliable information as well as the practical knowledge needed to act
          effectively.
        </Col>
      </Row>
      <Row>
        <Col
          xs={24}
          sm={24}
          md={4}
          lg={4}
          xl={4}
          className="ci_home_connect_numbers"
        >
          <div>
            1,00,000<span className="ci_home_connect_plus"> +</span>
          </div>
          <div className="ci_home_connect_number_details">Petitions Signed</div>
        </Col>
        <Col
          xs={24}
          sm={24}
          md={4}
          lg={4}
          xl={4}
          className="ci_home_connect_numbers number_col_two"
        >
          <div>
            1,00,000<span className="ci_home_connect_plus"> +</span>
          </div>
          <div className="ci_home_connect_number_details">Petitions Signed</div>
        </Col>
        <Col
          xs={24}
          sm={24}
          md={4}
          lg={4}
          xl={4}
          className="ci_home_connect_numbers"
        >
          <div>
            1,00,000<span className="ci_home_connect_plus"> +</span>
          </div>
          <div className="ci_home_connect_number_details">Petitions Signed</div>
        </Col>
      </Row>
      <Row
        justify="space-between"
        className="ci_home_connect_photo_writeup_container"
      >
        <Col
          xs={24}
          sm={24}
          md={11}
          lg={11}
          xl={11}
          style={{
            backgroundImage: `url(${SubmitPhotoBg})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          className="ci_home_connect_photo_writeup_left_card"
        >
          <div className="ci_home_connect_photo_writeup_left_card_camera">
            <img src={CameraIcon} className="icon-wrapeer" />
          </div>
          <div className="ci_home_connect_photo_writeup_left_card_heading">
            Submit a Photo
          </div>
          <div className="ci_home_connect_photo_writeup_left_card_subheading">
            CI is an entirely volunteer-driven, non-profit, non-sponsored portal
            that aim..
          </div>
        </Col>
        <Col
          xs={24}
          sm={24}
          md={11}
          lg={11}
          xl={11}
          style={{
            backgroundImage: `url(${SubmitWriteBg})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          className="ci_home_connect_photo_writeup_right_card"
        >
          <div className="ci_home_connect_photo_writeup_right_card_camera">
            <img src={EditIcon} className="icon-wrapeer" />
          </div>
          <div className="ci_home_connect_photo_writeup_right_card_heading">
            Submit a Writeup
          </div>
          <div className="ci_home_connect_photo_writeup_right_card_subheading">
            CI is an entirely volunteer-driven, non-profit, non-sponsored portal
            that aim..
          </div>
        </Col>
      </Row>
      <Row className="ci_home_connect_ask_querry_container">
        <Col
          xs={24}
          sm={24}
          md={12}
          lg={12}
          xl={12}
          className="ci_home_connect_ask_querry_left_card"
        >
          <div className="ci_home_connect_ask_querry_heading_container">
            <div className="ci_home_connect_ask_querry_heading">
              Ask Conservation India
            </div>
            <div className="ci_home_connect_ask_querry_heading_bottom_border"></div>
          </div>
          <div className="ci_home_connect_ask_querry_subheading">
            Ask us any question related to wildlife conservation in India and we
            will answer it after consulting with our panel of experts.
          </div>
        </Col>
        <Col
          xs={24}
          sm={24}
          md={12}
          lg={12}
          xl={12}
          className="ci_home_connect_ask_querry_right_card"
        >
          <Input
            style={{ backgroundColor: "lightgray", color: "white" }}
            size="large"
            placeholder="Name"
          />
          <Input
            size="large"
            placeholder="Email Address (will not be published)"
            style={{
              backgroundColor: "lightgray",
              color: "white",
              marginTop: "10px",
              marginBottom: "10px",
            }}
          />
          <TextArea
            style={{ backgroundColor: "lightgray", color: "white" }}
            rows={4}
            placeholder="Question"
          />
          <div className="ci_home_connect_ask_us_btn_wrapper">
            <button className="ci_home_connect_ask_us_btn">
              Ask Us <img src={ArrowRight} />
            </button>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default CiHomeConnect;
