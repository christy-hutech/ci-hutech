import React, { useState } from "react";
import "./landscapeListing.css";
import { Col, Row } from "antd";
import img1 from "../../assets/images/landscapeListingImgs/landscape-img1.svg";
import img2 from "../../assets/images/landscapeListingImgs/landscape-img2.svg";
import img3 from "../../assets/images/landscapeListingImgs/landscape-img3.svg";
import img4 from "../../assets/images/landscapeListingImgs/landscape-img4.svg";
import img5 from "../../assets/images/landscapeListingImgs/landscape-img5.svg";
import img6 from "../../assets/images/landscapeListingImgs/landscape-img6.svg";
import img7 from "../../assets/images/landscapeListingImgs/landscape-img7.svg";
import img8 from "../../assets/images/landscapeListingImgs/landscape-img8.svg";
import img9 from "../../assets/images/landscapeListingImgs/landscape-img9.svg";
import img10 from "../../assets/images/landscapeListingImgs/landscape-img10.svg";
import img11 from "../../assets/images/landscapeListingImgs/landscape-img11.svg";
import img12 from "../../assets/images/landscapeListingImgs/landscape-img12.svg";

const Landscape = () => {
  const [landscapeListingData, setLandscapeListingData] = useState([
    {
      heading: "What is forest landscape restoration?",
      img: img1,
    },
    {
      heading:
        "Foundation Training Program on the Practice of Ecological Restoration ",
      img: img2,
    },
    {
      heading:
        "Bangalore Lake Census Workshop — Venkatappa Art Gallery, Bengaluru",
      img: img3,
    },
    {
      heading: "Goa Bird Festival — Valpoi, Goa",
      img: img4,
    },
    {
      heading: "Chemical Ecology and the Anthropocene — CWS, Bengaluru",
      img: img5,
    },
    {
      heading:
        "Talk by Dr. Ajit Kumar, India’s Leading Primatologist, CWS, Bangalore",
      img: img6,
    },
    {
      heading:
        "Use this Space to Publicise Wildlife and Conservation Events in your City!",
      img: img7,
    },
    {
      heading:
        "Foundation Training Program on the Practice of Ecological Restoration ",
      img: img8,
    },
    {
      heading:
        "Bangalore Lake Census Workshop — Venkatappa Art Gallery, Bengaluru",
      img: img9,
    },
    {
      heading: "Goa Bird Festival — Valpoi, Goa",
      img: img10,
    },
    {
      heading: "Chemical Ecology and the Anthropocene — CWS, Bengaluru",
      img: img11,
    },
    {
      heading:
        "Talk by Dr. Ajit Kumar, India’s Leading Primatologist, CWS, Bangalore",
      img: img12,
    },
  ]);

  return (
    <div className="body-landscape">
      <div className="landscape-head">Landscape</div>
      <div className="line"></div>
      <Row justify="space-between">
        {landscapeListingData.map((item, index) => {
          return (
            <Col className="gutter-row" xs={24} sm={24} md={24} lg={7} xl={7}>
              <img className="land-img" alt="landscapeImg" src={item.img} />
              <h3 className="land-head">{item.heading}</h3>
            </Col>
          );
        })}
      </Row>
      <hr />
    </div>
  );
};

export default Landscape;
