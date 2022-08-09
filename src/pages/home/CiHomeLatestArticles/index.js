import { Button, Col, Row, Typography } from "antd";
import React, { useState } from "react";
import "./index.css";
import Img from "../../../assets/images/homeImgs/cihomefeatured-left.png";
import BackgroundImg from "../../../assets/images/homeImgs/article-bg.png";
import ArrowRight from "../../../assets/images/homeImgs/arrow-right-red.png";

function CiHomeLatestArticles() {
  const [trendingTags, setTrensdingTags] = useState([
    "NBWL Matters",
    "Endangered Species",
    "Feral Dogs - Wildlife Conflicts",
    "Invasive Species",
    "Wildlife Tourism",
    "Law & Governance",
    "Human Resettlement",
    "Habitat Destruction",
    "Wildlife Crime & Trade",
    "Conservation Campaign",
    "Forest Rights Act",
    "Human-Wildlife Conflicts",
  ]);

  return (
    <div className="ci_home_articles_container">
      <Typography className="ci_home_articles_heading">
        Latest Articles
      </Typography>
      <div className="ci_home_articles_heading_bottom_border"></div>
      <Row className="ci_home_articles_content">
        <Col
          xs={24}
          sm={24}
          md={24}
          lg={17}
          xl={17}
          justify="space-between"
          className="ci_home_articles_left_content"
        >
          {[1, 2, 3, 4].map((item, index) => {
            return (
              <div className="ci_home_articles_left_content_cards">
                <div className="ci_home_articles_left_content_card_details">
                  <div className="ci_home_articles_left_content_card_fline">
                    Forging Linkages Across Regions for the Wide-ranging Asian
                    Elephant
                  </div>
                  <div className="ci_home_articles_left_content_card_sline">
                    FBy Shekar Dattatri
                  </div>
                  <div className="ci_home_articles_left_content_card_tline">
                    Connectivity across habitats and animal populations is
                    critical to conservation. Connectivity is forged by animal
                    movements..
                  </div>
                  <Button className="ci_home_articles_left_content_card_btn">
                    Invasive Species
                  </Button>
                  <Button className="ci_home_articles_left_content_card_btn ci-home-second_button">
                    Wildlife Tourism
                  </Button>
                </div>
                <div className="ci_home_articles_left_content_card_img_wrapper">
                  <img
                    src={Img}
                    className="ci_home_articles_left_content_card_img"
                  />
                </div>
              </div>
            );
          })}
        </Col>
        <Col
          xs={24}
          sm={24}
          md={24}
          lg={7}
          xl={7}
          className="ci_home_articles_right_content"
        >
          <div className="ci_home_articles_right_content_heading">
            TRENDING TAGS
          </div>
          <div className="ci_home_articles_right_content_tag_container">
            {trendingTags.map((item, index) => {
              return (
                <Button className="ci_home_articles_right_content_tags">
                  {item}
                </Button>
              );
            })}
          </div>
          <div
            className="ci_home_articles_right_content_ask_us"
            style={{
              backgroundImage: `url(${BackgroundImg})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              backgroundColor:'#1F1A17'
            }}
          >
            <div className="ci_home_articles_right_content_ask_us_heading">
              Ask Conservation India
            </div>
            <div className="ci_home_articles_right_content_ask_us_heading_bottom_line"></div>
            <div className="ci_home_articles_right_content_ask_us_content">
              Ask us any question related to wildlife conservation in India and
              we will answer it after consulting with our panel of experts.
            </div>
            <button className="ci_home_articles_right_content_ask_us_btn">
              Ask us <img src={ArrowRight} />
            </button>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default CiHomeLatestArticles;