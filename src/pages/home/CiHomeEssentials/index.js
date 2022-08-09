import { Row, Col, Button } from "antd";
import React, { useState } from "react";
import "./index.css";
import Img from "../../../assets/images/homeImgs/cihomefeatured-left.png";
import ArrowRight from "../../../assets/images/homeImgs/arrow-right-red.png";
import { ArrowRightOutlined } from "@ant-design/icons";

function CiHomeEssentials() {
  const [tipsAndMore, setTipsAndMore] = useState([
    "File Inspection under RTI",
    "Documenting Violations",
    "Hunting / smuggling cases",
    "Meeting with Officials",
    "RTI to seek management plans",
    "Get an Official copy of PA Notifica..",
    "Use satellite imagery to check enc..",
  ]);
  return (
    <div className="ci_home_essentials_container">
      <div className="ci_home_essentials_heading">
        Conservation India Essentials
      </div>
      <div className="ci_home_essentials_heading_bottom_border"></div>
      <div className="ci_home_essentials_subheading">
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form, by injected humour.
      </div>
      <Row justify="space-between" className="ci_home_essentials_container2">
        <Col
          xs={24}
          sm={24}
          md={16}
          lg={16}
          xl={16}
          className="ci_home_essentials_card_container"
        >
          {[1, 2, 3].map((item, index) => {
            return (
              <div className="ci_home_essentials_left_content_cards">
                <div className="ci_home_essentials_left_content_card_details">
                  <div className="ci_home_essentials_left_content_card_fline">
                    Forging Linkages Across Regions for
                  </div>
                  <div className="ci_home_essentials_left_content_card_sline">
                    FBy Shekar Dattatri
                  </div>
                  <div className="ci_home_essentials_left_content_card_tline">
                    Connectivity across habitats and animal populations is
                    critical to conservation. Connectivity is forged by animal
                    movements..
                  </div>
                  <div className="ci-home-essential-left-btn-wrapper">
                  <Button className="ci_home_essentials_left_content_card_btn">
                    Invasive Species
                  </Button>
                  <Button className="ci_home_essentials_left_content_card_btn second_button_essentials">
                    Wildlife Tourism
                  </Button>
                  </div>
                </div>
                <div className="ci_home_essentials_left_content_card_img_wrapper">
                  <img
                    src={Img}
                    className="ci_home_essentials_left_content_card_img"
                  />
                </div>
              </div>
            );
          })}
        </Col>
        <Col
          xs={24}
          sm={24}
          md={8}
          lg={8}
          xl={8}
          className="ci_home_essentials_card_tips_container"
        >
          <div className="ci_home_essentials_right_heading">Tips and More</div>
          <p className="ci_home_essentials_right_sub_heading">
            New to Conservation India? Here is a curated list of tips and
            educational reading material.
          </p>
          <div>
            {tipsAndMore.map((item, index) => {
              return (
                <div className="ci_home_essentials_right_section_tips_more_container">
                  <div className="ci_home_essentials_right_section_tips_more">
                    {item}
                  </div>
                  <div className="ci_home_essentials_right_section_arrow_icon">
                    <ArrowRightOutlined />
                  </div>
                </div>
              );
            })}
          </div>
          <Button
            shape="round"
            className="ci_home_essentials_right_section_view_more_btn"
          >
            <span style={{color:'#DA251C'}}>View More</span>
            <img src={ArrowRight} />
          </Button>
        </Col>
      </Row>
    </div>
  );
}

export default CiHomeEssentials;
