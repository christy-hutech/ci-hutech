import React, { useState } from "react";
import "./eventListing.css";
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

const Event = () => {
  const [eventListingData, setEventListingData] = useState([
    {
      heading:
        "Use this Space to Publicise Wildlife and Conservation Events in your City!",
      img: img1,
      date: "July 15 2022",
      timeLine: "7:00 PM - 9:00 PM",
      price: "FREE",
    },
    {
      heading:
        "Foundation Training Program on the Practice of Ecological Restoration ",
      img: img2,
      date: "July 15 2022",
      timeLine: "7:00 PM - 9:00 PM",
      price: "₹5000 onwards (including GST)",
    },
    {
      heading:
        "Bangalore Lake Census Workshop — Venkatappa Art Gallery, Bengaluru",
      img: img3,
      date: "July 15 2022",
      timeLine: "7:00 PM - 9:00 PM",
      price: "FREE",
    },
    {
      heading: "Goa Bird Festival — Valpoi, Goa",
      img: img4,
      date: "July 15 2022",
      timeLine: "7:00 PM - 9:00 PM",
      price: "₹5000 onwards (including GST)",
    },
    {
      heading: "Chemical Ecology and the Anthropocene — CWS, Bengaluru",
      img: img5,
      date: "July 15 2022",
      timeLine: "7:00 PM - 9:00 PM",
      price: "₹5000 onwards (including GST)",
    },
    {
      heading:
        "Talk by Dr. Ajit Kumar, India’s Leading Primatologist, CWS, Bangalore",
      img: img6,
      date: "July 15 2022",
      timeLine: "7:00 PM - 9:00 PM",
      price: "₹5000 onwards (including GST)",
    },
    {
      heading:
        "Release of the book “Bird Business” authored by Rohan Chakravarty",
      img: img7,
      date: "July 15 2022",
      timeLine: "7:00 PM - 9:00 PM",
      price: "₹5000 onwards (including GST)",
    },
    {
      heading: "Inviting Applications For RBS Earth Heroes Awards 2019",
      img: img8,
      date: "July 15 2022",
      timeLine: "7:00 PM - 9:00 PM",
      price: "₹5000 onwards (including GST)",
    },
    {
      heading: "Student Conference on Conservation Science — IISc, Bengaluru",
      img: img9,
      date: "July 15 2022",
      timeLine: "7:00 PM - 9:00 PM",
      price: "₹5000 onwards (including GST)",
    },
    {
      heading:
        "Last Day! The Hills of Murugan – Photo Exhibition by Ian Lockwood",
      img: img10,
      date: "July 15 2022",
      timeLine: "7:00 PM - 9:00 PM",
      price: "₹5000 onwards (including GST)",
    },
    {
      heading:
        "Job posting for Asst. Elephant Campaign Manager for Wildlife SOS ",
      img: img11,
      date: "July 15 2022",
      timeLine: "7:00 PM - 9:00 PM",
      price: "₹5000 onwards (including GST)",
    },
    {
      heading: "Wikipedia Workshop for Bird enthusiasts – Ornithology ",
      img: img12,
      date: "July 15 2022",
      timeLine: "7:00 PM - 9:00 PM",
      price: "₹5000 onwards (including GST)",
    },
  ]);

  return (
    <div className="body-event">
      <div className="event-head">Events</div>
      <div className="line"></div>
      <Row justify="space-between">
        {eventListingData.map((item, index) => {
          return (
            <Col className="gutter-row" xs={24} sm={24} md={24} lg={7} xl={7}>
              <img className="event-img" alt="eventImg" src={item.img} />
              <h3 className="event-head">{item.heading}</h3>
              <h4 className="event-time">
                {item.date} | {item.timeLine}{" "}
              </h4>
              <h2 className="event-price">{item.price}</h2>
            </Col>
          );
        })}
      </Row>
      <hr />
    </div>
  );
};

export default Event;
