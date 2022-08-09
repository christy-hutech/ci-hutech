import { Switch } from "antd";
import React from "react";
import "./index.css";
function Notifications() {
  return (
    <div >
      <div className="ci-notification-container">
        <div className="ci-notification-heaading">Notification Settings</div>
        <div className="ci-notification-sub-heading">
          You will get only notification what have enabled.
        </div>
        <div className="ci-notification-line"></div>

        {/* email-setting */}
        <div className="ci-notification-alerts-heading">Security Alerts</div>
        <div className="ci-notification-sub-heading">
          You will get only those email notification what you want.
        </div>
        <div className="setting-wrapper-one">
          <Switch defaultChecked={false} onChange={() => {}} />
          <div className="setting-wrapper-text">
            Email me whenever encounter unusual activity
          </div>
        </div>
        <div className="setting-wrapper-two">
          <Switch defaultChecked onChange={() => {}} />
          <div className="setting-wrapper-text">
            Email me whenever encounter unusual activity
          </div>
        </div>
        <div className="ci-notification-line"></div>
        {/* news-setting */}
        <div className="ci-notification-alerts-heading">News</div>
        <div className="ci-notification-sub-heading">
          You will get only those email notification what you want.
        </div>
        <div className="setting-wrapper-one">
          <Switch defaultChecked onChange={() => {}} />
          <div className="setting-wrapper-text">
            Email me whenever encounter unusual activity.
          </div>
        </div>
        <div className="setting-wrapper-two">
          <Switch defaultChecked={false} onChange={() => {}} />
          <div className="setting-wrapper-text">
            Email me whenever encounter unusual activity
          </div>
        </div>
      </div>
    </div>
  );
}

export default Notifications;
