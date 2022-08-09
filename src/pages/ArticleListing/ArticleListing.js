import React, { useState } from "react";
import './article.css';
import { Col, Row } from 'antd';
import img1 from "../../assets/images/articleList/article-img1.svg";
import img2 from "../../assets/images/articleList/article-img2.svg";
import img3 from "../../assets/images/articleList/article-img3.svg";
import img4 from "../../assets/images/articleList/article-img4.svg";
import img5 from "../../assets/images/articleList/article-img5.svg";
import img6 from "../../assets/images/articleList/article-img6.svg";
import img7 from "../../assets/images/articleList/article-img7.svg";
import img8 from "../../assets/images/articleList/article-img8.svg";

const Articlelisting = () => {
  
  const [articleListingnewData, setArticleListingNewData ]= useState([
    {
        heading:'Forging Linkages Across Regions for the Wide-ranging Asian Elephant',
        sub_subheading:'By Shekar Dattatri',
        sub_heading:'Connectivity across habitats and animal populations is critical to conservation. Connectivity is forged by animal movements..',
        img:img1,
      },
        {
            heading:'Against the Elephant: MoEFCC’s Guidelines for Human-Elephant Conflict Management',
            sub_subheading:'By Divya Khosla',
            sub_heading:'We urge the government to take a visionary decision to protect the natural grassland habitat of Hessarghatta for posterity by..',
            img:img2,
          },
          {
            heading:'Ecologists urge MoEFCC to revoke the EIA draft notification, 2020',
            sub_subheading:'By Shekar Dattatri',
            sub_heading:'On 11th August, 2020, a group of 20 wildlife biologists/ ecologists submitted their comments and objections against the draft..',
            img:img3,
          },
          {
            heading:'Forging Linkages Across Regions for the Wide-ranging Asian Elephant',
            sub_subheading:'By Shekar Dattatri',
            sub_heading:'Connectivity across habitats and animal populations is critical to conservation. Connectivity is forged by animal movements..',
            img:img4,
          },
          {
            heading:'Hessarghatta Grasslands Must Be Saved!',
            sub_subheading:'By Divya Khosla',
            sub_heading:'We urge the government to take a visionary decision to protect the natural grassland habitat of Hessarghatta for posterity by..',
            img:img5,
          },
          {
            heading:'Hessarghatta Grasslands Must Be Saved!',
            sub_subheading:'By Divya Khosla',
            sub_heading:'We urge the government to take a visionary decision to protect the natural grassland habitat of Hessarghatta for posterity by..',
            img:img6,
          },
          {
            heading:'Hessarghatta Grasslands Must Be Saved!',
            sub_subheading:'By Divya Khosla',
            sub_heading:'We urge the government to take a visionary decision to protect the natural grassland habitat of Hessarghatta for posterity by..',
            img:img7,
          },
          {
            heading:'Hessarghatta Grasslands Must Be Saved!',
            sub_subheading:'By Divya Khosla',
            sub_heading:'We urge the government to take a visionary decision to protect the natural grassland habitat of Hessarghatta for posterity by..',
            img:img8,
          }
  ])

  const [authorData, setAuthorData ]= useState([
          {
            img:img1,
            authheading:'Divya Khosla',
            subauthor:'24 Articles • 2 Case Studies',
          },
          {
            img:img1,
            authheading:'Divya Khosla',
            subauthor:'24 Articles • 2 Case Studies',
          },
          {
            img:img1,
            authheading:'Divya Khosla',
            subauthor:'24 Articles • 2 Case Studies',
          },
         
          {
            img:img1,
            authheading:'Divya Khosla',
            subauthor:'24 Articles • 2 Case Studies',
          }
  ])
  
  return (
    <div className="body-campaign">
     <div className="article-head">Articles</div>
     <div className="line"></div>
     <div className="article_container">
      
  <div className="article-main">
   <Row className="gutter-row" xs={24}
        sm={24}
        md={24}
        lg={7}
        xl={7}>
  
      {articleListingnewData.map((item,index)=>{
        return(
        
      <div className="row-one">
       
         <div className="article-rowhead">
         <div className="hrtag">
        <h3 className="first-head">{item.heading}</h3>
        <h4 className="secondsub-head">{item.sub_subheading}</h4>
        <h5 className="second-head">{item.sub_heading}</h5>
        <div className="row-main">
          <div className="section-row">Wildlife Tourism
          </div>
          <div className="section-row-one">Wildlife Science
          </div>
        </div>
        </div>
        <hr className="newhr"/>
        </div>
        <img className="article-img" 
        src={item.img} />
       
        </div>
       )
      })}
    </Row>
   </div>
   <hr className="verhr"/>
   <div className="sort-article">
              <h2 className="head-sort">Sort By</h2>
             <div className="bar">
             <select name="sort" id="original" class="postform">
			<option value="-1">Sort by</option>
			<option class="level-0" value="29">Last 7 days</option>
			<option class="level-0" value="26">Last 30 days</option>
      <option class="level-0" value="26">Last year</option>
      </select>
      </div>
      <div className="block-author">
      <div className="sec-block">Wildlife Tourism
          </div>
          <div className="sec-block">Wildlife Crime & Trade
          </div>
      </div>
      <div className="block-authornew">
      <div className="sec-block">Invasive Species
          </div>
          <div className="sec-block">Habitat Destruction
          </div>
      </div>
      <div className="block-authornew">
      <div className="sec-block">Law & Governance
          </div>
          <div className="sec-block">Forest Rights Act
          </div>
      </div>
      <div className="block-authornew">
      <div className="sec-block">Human-Wildlife Conflicts
          </div>
          <div className="sec-block">Forest Rights Act
          </div>
      </div>
      <div className="block-authorone">
          <div className="sec-blocknew">
      Feral Dogs - Wildlife Conflicts</div>
      </div>
      
      <div className="main-head">
      <h2 className="author-head">Popular Authors</h2>
        <h4 className="subhead-article">New to Conservation India? Here is a curated list of tips and educational reading material.</h4>
      { authorData.map((item,index)=>{
        return(
            <>
            <div className="author-main">
            <img className="image-wrapper" src={ "" } />
            <div className="flex-author">
            <h4 className="case-author">{ item.authheading }</h4><br/>
            <h5 className="case-two">{ item.subauthor }</h5>
            </div>
            </div>
            </>
             )
            })}
      </div>
        </div>
   </div>
   <hr/>
 </div>
 );
};

export default Articlelisting;

