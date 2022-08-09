import { Button, Col, Row, Typography } from "antd";
import React from "react";
import "./index.css";
import Img from "../../../assets/images/homeImgs/cihomefeatured-left.png";

const { Paragraph } = Typography;
function CiHomeTopics() {
  return (
    <div className="ci_home_topics_container">
      <Typography className="ci_home_topics_heading">Conservation India Topics</Typography>
      <div className="ci_home_elinks_heading_bottom_border"></div>
      <div className="ci_home_topics_subheading">
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form, by injected humour.
      </div>
      <Row justify="space-between" className="ci_home_topics_card_container">
        {[1, 1, 1].map((item, index) => {
          return (
            <Col
              xs={24}
              sm={24}
              md={12}
              lg={7}
              xl={7}
              className="ci_home_topics_antd_col"
            >
              <div>
                <img src={Img} className="ci_home_topics_card_img" />
              </div>
              <div className="ci_home_topics_card_img_details">
                <div className="ci_home_topics_card_img_details_heading">
                  Feral Dogs - Wildlife Conflicts
                </div>
                <div className="ci_home_topics_card_img_count">
                  {13} Articles • {2} Images
                </div>
                <div className="ci_home_topics_card_line"></div>
              </div>
              <div className="ci_home_topics_card_sub_cards_container">
              {[1, 2, 3].map((item, index) => {
                return (
                  <div className="ci_home_topics_card_sub_cards">
                    <div className="ci_home_topics_card_sub_cards_content">
                      <div className="ci_home_topics_card_sub_cards_content_heading">
                        A Leopard’s Meal – the Ubiquitous Feral Dog
                      </div>
                      <div className="ci_home_topics_card_sub_cards_content_sub_heading">
                        Man’s so-called best friend is indeed the most numerous
                        ....
                      </div>
                    </div>
                    <div className="ci_home_topics_card_sub_cards_img">
                        <img src={Img} className="ci_home_topics_card_sub_cards_img_tag"/>
                    </div>
                  </div>
                );
              })}
              <div className="ci_home_topics_card_sub_cards_view_more">Veiw More</div>
              </div>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}

export default CiHomeTopics;
