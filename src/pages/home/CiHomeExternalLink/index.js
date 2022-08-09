import React from "react";
import { Col, Row, Typography } from "antd";
import "./index.css";

function CiHomeExternalLinks() {
  return (
    <div className="ci_home_elinks_container">
      <div className="ci_home_elinks_heading">External Links</div>
      <div className="ci_home_elinks_heading_bottom_border"></div>
      <Row justify="space-between" className="ci_home_featured_card_container">
        {[1, 1, 3, 4, 5, 6, 7, 8, 9].map((item, index) => {
          return (
            <Col
              xs={24}
              sm={24}
              md={12}
              lg={7}
              xl={7}
              className="ci_home_featured_cards"
            >
              <div className="ci_home_featured_cards_sideline"></div>
              <div className="ci_home_featured_card_text">
                Mumbai’s leopard population up due to prey availability | Deccan
                Herald
              </div>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}

export default CiHomeExternalLinks;
