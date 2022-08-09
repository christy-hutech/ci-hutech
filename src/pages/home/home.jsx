import React from "react";
import "./home.css";
import CiHomeFeatured from "./CiHomeFeatured";
import CiHomeTopics from "./CiHomeTopics";
import CiHomeExternalLinks from "./CiHomeExternalLink";
// import CiHomeLatestArticles from "./CiHomeLatestArticles";
import CiHomeCampaigns from "./CiHomeCampaigns";
import CiHomeSpotLight from "./CiHomeSpotLight";
import CiHomeEssentials from "./CiHomeEssentials";
import CiHomeConnect from "./CiHomeConnect";
import CiHomeSubscribe from "./CiHomeSubscribe";
import CiHomeLatestArticles from "./CiHomeLatestArticles";
const Home = () => {
  return (
    <div className="Home_wrapper">
      <CiHomeFeatured />
      <CiHomeTopics />
      <CiHomeExternalLinks />
      <CiHomeLatestArticles />
      <CiHomeCampaigns />
      <CiHomeSpotLight />
      <CiHomeEssentials />
      <CiHomeConnect />
      <CiHomeSubscribe />
    </div>
  );
};

export default Home;
