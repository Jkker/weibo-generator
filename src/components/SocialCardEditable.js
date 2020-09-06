import React from "react";
import FeedHandle from "./FeedHandle";
import MediaContainer from "./MediaContainer";
import "./SocialCard.scss";
import TextContainer from "./TextContainer";

class SocialCardEditable extends React.Component {
  render() {
    const { avatarImage, username, dateTime, source, text, media } = this.props.data;
    return (
      <div className="social-card">
        <div className="feed-content">
          <div className="feed-avatar">
            <img className="avatar-image" src={avatarImage} alt="avatar" />
          </div>

          <div className="feed-detail">
            <div className="header">
              {/* TODO: dropdown menu & items */}
              <button className="dropdown button-o">
                <i className="angle down icon"></i>
              </button>
              <button className="username button-o">{username}</button>
            </div>
            <div className="feed-info">
              <button className="dateTime button-o">{dateTime}</button> 来自{" "}
              <button className="source button-o">{source}</button>
            </div>

            <TextContainer>{text}</TextContainer>

            <MediaContainer
              type={media.type}
              count={media.count}
              src={media.src}
            />
          </div>
        </div>
        <FeedHandle />
      </div>
    );
  }
}

export default SocialCardEditable;
