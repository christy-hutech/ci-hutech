import React, { useState } from "react";
import './campaign.css';
import { Col, Row } from 'antd';
import { Menu} from 'antd';
import img1 from "./Images/camp-img1.jpg";
import img2 from "./Images/camp-img2.jpg";
import img3 from "./Images/camp-img3.jpg";
import img4 from "./Images/camp-img4.jpg";
import img5 from "./Images/camp-img6.jpg";
import img6 from "./Images/camp-img7.jpg";
import img7 from "./Images/camp-img8.jpg";
import img8 from "./Images/camp-img10.jpg";
import img9 from "./Images/camp-img11.jpg";
import img10 from "./Images/camp-img12.jpg";
import img11 from "./Images/camp-img13.jpg";
import img12 from "./Images/camp-img14.jpg";


const Campaign = () => {
  const [campaignListingData, setCampaignListingData ]= useState([
    {
      heading:'Oil Palm Cultivation Can Be Expanded While Sparing Biodiversity in India',
      sub_heading:'sub heading goes hre',
      img:img1,
      },
      {
        heading:'Proposed Development Tsunami will Engulf Great Nicobar Islands',
        sub_heading:'sub heading goes hre',
        img:img2,
        },
        {
          heading:'Proposed Amendments to the Forest (Conservation) Act, 1980. Act Now!',
          sub_heading:'sub heading goes hre',
          img:img3,
          },
          {
            heading:'Oil Palm Cultivation Can Be Expanded While Sparing Biodiversity in India',
            sub_heading:'sub heading goes hre',
            img:img4,
            },
            {
              heading:'Proposed Development Tsunami will Engulf Great Nicobar Islands',
              sub_heading:'sub heading goes hre',
              img:img5,
              },
              {
                heading:'Proposed Amendments to the Forest (Conservation) Act, 1980. Act Now!',
                sub_heading:'sub heading goes hre',
                img:img6,
                },
                {
                  heading:'Oil Palm Cultivation Can Be Expanded While Sparing Biodiversity in India',
                  sub_heading:'sub heading goes hre',
                  img:img7,
                  },
                  {
                    heading:'Proposed Development Tsunami will Engulf Great Nicobar Islands',
                    sub_heading:'sub heading goes hre',
                    img:img8,
                    },
                    {
                      heading:'Proposed Amendments to the Forest (Conservation) Act, 1980. Act Now!',
                      sub_heading:'sub heading goes hre',
                      img:img9,
                      },
                      {
                        heading:'Oil Palm Cultivation Can Be Expanded While Sparing Biodiversity in India',
                        sub_heading:'sub heading goes hre',
                        img:img10,
                        },
                        {
                          heading:'Proposed Development Tsunami will Engulf Great Nicobar Islands',
                          sub_heading:'sub heading goes hre',
                          img:img11,
                          },
                          {
                            heading:'Proposed Amendments to the Forest (Conservation) Act, 1980. Act Now!',
                            sub_heading:'sub heading goes hre',
                            img:img12,
                            }

  ])
  
  return (
    <div className="body-campaign">
     <div className="campaign-head">Campaigns</div>
     <div className="line"></div>
        <div className="section-main">
            <p className="para-campaign">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
            <div className="sort-campaign">
              <h2 className="head-sort">Sort By</h2>
             <div className="bar">
             <select name="sort" id="originalnew" class="postform">
			          <option value="-1">Sort by</option>
			          <option class="level-0" value="29">Last 7 days</option>
			          <option class="level-0" value="26">Last 30 days</option>
                <option class="level-0" value="26">Last year</option>
             </select>
            </div>
            </div>
        </div>
        {/* <div className="grid-campaign"> */}
        <Row  justify="space-between" >
      {campaignListingData.map((item,index)=>{
        return(<Col className="gutter-row" xs={24}
        sm={24}
        md={24}
        lg={7}
        xl={7}>

     <img className="camp-img" 
        src={item.img} />
        <h3 className="first-head">{item.heading}</h3>
        <h5 className="second-head">{item.sub_heading}</h5>
        <div className="row-main">
          <div className="section-row">Oil Palms
          </div>
          <div className="section-row-one">Northeast India NE
          </div>
          <div className="section-row">+ 2 more
          </div>
        </div>
    </Col>
    )
      })}
          
      </Row>
<hr/>
    </div>
  );
};

export default Campaign;

