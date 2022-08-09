import React from "react";
import "./index.css";
import LeftImg from "../../../assets/images/homeImgs/cihomefeatured-left.png";
import { Typography, Row, Col } from "antd";

function CiHomeFeatured() {
  return (
    <div className="ci_home_featured_container">
      <div className="ci_home_featured_heading">
        Conservation India Featured
      </div>
      <div className="ci_home_featured_heading_bottom_border"></div>
      <Row justify="space-between" className="ci_home_featured_content">
        <Col
          xs={24}
          sm={24}
          md={24}
          lg={24}
          xl={12}
          className="ci_home_featured_left"
        >
          <div className="ci_home_featured_left_img_wrapper">
            <img src={LeftImg} className="ci_home_featured_left_img" />
          </div>
          <div className="ci_home_featured_left_text_wrapper">
            <div className="ci_home_featured_left_text_heading">
              Featured Picture
            </div>
            <div className="ci_home_featured_left_text_sub_heading">
              Horrific Killings of Fishing Cats in Howrah, West Bengal
            </div>
            <div className="ci_home_featured_left_text_end_line">
              Listed in Schedule I of the Wildlife Protection Act, 1972, the
              Fishing Cat is accorded the highest level of protection as the
              tiger, lion..
            </div>
          </div>
        </Col>
        <Col
          xs={24}
          sm={24}
          md={24}
          lg={24}
          xl={11}
          className="ci_home_featured_right"
        >
          <Row
            justify="space-between"
            className="ci_home_featured_right_card_wrapper"
          >
            {[1, 2].map((item, index) => {
              return (
                <Col
                  xs={24}
                  sm={24}
                  md={12}
                  lg={11}
                  xl={11}
                  className="ci_home_featured_right_card"
                >
                  <img
                    src={LeftImg}
                    alt="Avatar"
                    style={{ width: "100%", height: "186px" }}
                  />
                  <div className="ci_home_featured_right_card_container">
                    <div>Featured Article</div>
                    <p className="ci-home-featured-right-card-text">
                      Are Himalayan Black Bears in the North Bengal Foothills a
                      Product of a Bigger Ecological Disaster?
                    </p>
                  </div>
                </Col>
              );
            })}
          </Row>
          <Row className="ci_home_featured_right_text_wrapper">
            <Col xs={24} sm={24} md={12} lg={24} xl={24}>
              <div className="ci_home_featured_right_text_first">
                Trending News
              </div>
              <div className="ci_home_featured_right_text_second">
                Leopard found dead in Madhya Pradesh, claws; whiskers removed –{" "}
                <span style={{ color: "red" }}>Times of India</span>
              </div>
              <div className="ci_home_featured_right_text_third">
                A leopard was found dead in Manpur forest range near Mhow,
                raising suspicion that a gang of poachers is active in the
                area...
              </div>
              <div className="ci_home_featured_right_text_fourth">
                February 28, 2022
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default CiHomeFeatured;
