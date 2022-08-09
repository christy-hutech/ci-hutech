import React, { useState } from "react";
import { Col, Row } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import { Button, Radio } from 'antd';
import img1 from "../../assets/images/galleryList/Images/camp-img1.jpg";



const GalleryList = () => {
  const [campaignListingData, setCampaignListingData ]= useState([
    {
      heading:'Oil Palm Cultivation Can Be Expanded While Sparing Biodiversity in India',
      sub_heading:'sub heading goes hre',
      img:img1,
      },
      {
        heading:'Proposed Development Tsunami will Engulf Great Nicobar Islands',
        sub_heading:'sub heading goes hre',
        img:img1,
        },
        {
          heading:'Proposed Amendments to the Forest (Conservation) Act, 1980. Act Now!',
          sub_heading:'sub heading goes hre',
          img:img1,
          },
          {
            heading:'Oil Palm Cultivation Can Be Expanded While Sparing Biodiversity in India',
            sub_heading:'sub heading goes hre',
            img:img1,
            }

  ])
  
  return (
    <div className="body-campaign">
     <div className="campaign-head">Gallery</div>
     <div className="line"></div>
        <div className="section-main">
          <Button type="primary" shape="circle"  size={"small"}>Gallery</Button>
          <Button type="primary" shape="circle" icon={<DownloadOutlined />} size={"small"} >Featured</Button>
          <Button type="primary" shape="circle" icon={<DownloadOutlined />} size={"small"} >Video</Button>
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

export default GalleryList;

