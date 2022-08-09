import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import "./index.css";
import { Button, Col, Row } from "antd";
import Img from "../../../assets/images/homeImgs/cihomefeatured-left.png";
function CiHomeCampaigns() {
  const [width, setWidth] = useState(0);
  const carousel = useRef();
  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);
  return (
    <div className="ci_home_campaigns_container">
      <div className="ci_home_essentials_heading">Campaigns</div>
      <div className="ci_home_essentials_heading_bottom_border"></div>
      <Row>
        <Col
          xs={24}
          sm={24}
          md={16}
          lg={12}
          xl={12}
          className="ci_home_campaign_subheading"
        >
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour.
        </Col>
      </Row>
      <motion.div
        ref={carousel}
        className="carousel"
        whileTap={{ cursor: "grabbing" }}
      >
        <Row>
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            className="inner-carousel"
          >
            {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((item, index) => {
              return (
                <Col xs={22} sm={22} md={16} lg={10} xl={10}>
                  <motion.div className="ci_home_campaigns_card">
                    <div>
                      <img src={Img} className="ci_home_campaigns_card_img" />
                    </div>
                    <div className="ci_home_campaigns_card_heading">
                      Oil Palm Cultivation Can Be Expanded While Sparing
                      Biodiversity in India
                    </div>
                    <div className="ci_home_campaigns_card_subheading">
                      A leopard was found dead in Manpur forest range near Mhow,
                      raising suspicion that a gang of..
                    </div>
                    <div className="ci_home_campaigns_card_btn_wrapper">
                      <Button>Oil Palms</Button>
                      <Button className="ci_home_btn_mrgn_left">Northeast India NE</Button>
                      <Button className="ci_home_btn_mrgn_left third-btn-ci-home-campaigns">+ 2 More</Button>
                    </div>
                  </motion.div>
                </Col>
              );
            })}
          </motion.div>
        </Row>
      </motion.div>
    </div>
  );
}

export default CiHomeCampaigns;
