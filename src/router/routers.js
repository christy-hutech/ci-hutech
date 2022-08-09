import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import constants from "../constants/constants";
import Accesslog from "../pages/accesslog/accesslog";
import Home from "../pages/home/home";
import Campaign from "../pages/campaign/campaignlisting";
import SearchResult from "../pages/SearchResult/SearchResult";
import TopicDetailsPage from "../pages/TopicDetailsPage/TopicDetailsPage";
import Articlelisting from "../pages/ArticleListing/ArticleListing";
import Notifications from "../pages/Notifications";
import AddCampaigns from "../pages/Campaigns/AddCampaigns";
import AllCampaigns from "../pages/Campaigns/AllCampaigns";
import AllPosts from "../pages/Posts/AllPost";
import CreatePost from "../pages/Posts/CreatePost";
import Profile from "../pages/profile/profile";
import Member from "../pages/adminMembers/Member";
// import Profile from "../pages/profile/profile";
// import SearchResult from "../pages/SearchResult/SearchResult";
// import TopicDetailsPage from "../pages/TopicDetailsPage/TopicDetailsPage";
import ConservationTopics from "../pages/ConservationTopics/ConservationTopics";
import AccessLayout from "../pages/accesslog/AccessLayout";
import AccountLayout from "../pages/account/AccountLayout";
import NotificationLayout from "../pages/Notifications/NotificationLayout";
import CampaignDetails from "../pages/campaignDetails/CampaignDetails";
import GalleryList from "../pages/gallery/galleryList";
import Landscape from "../pages/landscape/landscapeListing";
import Event from "../pages/event/eventListing";
const {
  ROUTE: {
    HOME_PAGE,
    TOPIC_PAGE,
    ARTICLES_PAGE,
    CAMPAIGN_PAGE,
    GALLERY_PAGE,
    ESSENTIAL,
    PROFILE,
    ALL_POSTS,
    ADD_POSTS,
    ADD_CAMPAIGNS,
    ALL_CAMPAIGNS,
    NOTIFICATIONS,
    ACCESSLOG,
    LANDSCAPE_PAGE,
    EVENT_PAGE,
    MEMBER,
    ACCOUNT,
  },
} = constants;
const Allrouters = () => {
  return (
    <Router>
      <Header />
      <div style={{ marginTop: "9rem", marginBottom: "10px" }}>
        <Routes>
          <Route path={HOME_PAGE} exact element={<Home />} />
          <Route path={TOPIC_PAGE} exact element={<ConservationTopics />} />
          <Route path="/topic_details" exact element={<TopicDetailsPage />} />
          <Route path="/search_result" exact element={<SearchResult />} />
          <Route path={ARTICLES_PAGE} exact element={<Articlelisting />} />
          <Route path={CAMPAIGN_PAGE} exact element={<Campaign />} />
          <Route path={GALLERY_PAGE} exact element={<GalleryList />} />
          <Route path={GALLERY_PAGE} exact element={<CampaignDetails />} />
          <Route path={ESSENTIAL} exact element={<Home />} />
          <Route path={PROFILE} exact element={<Profile />} />
          <Route path={ALL_POSTS} exact element={<AllPosts />} />
          <Route path={ADD_POSTS} exact element={<CreatePost />} />
          <Route path={ADD_CAMPAIGNS} exact element={<AddCampaigns />} />
          <Route path={ALL_CAMPAIGNS} exact element={<AllCampaigns />} />
          <Route path={NOTIFICATIONS} exact element={<NotificationLayout />} />
          <Route path={ACCESSLOG} exact element={<AccessLayout />} />
          <Route path={MEMBER} exact element={<Member />} />
          <Route path={ACCOUNT} exact element={<AccountLayout />} />
          <Route path={LANDSCAPE_PAGE} exact element={<Landscape />} />
          <Route path={EVENT_PAGE} exact element={<Event />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default Allrouters;