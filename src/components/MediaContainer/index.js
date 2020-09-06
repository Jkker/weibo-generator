import React from "react";
import "./index.css";

class MediaContainer extends React.Component {
  imageDisplay = (count, src) => {
    if (count === 1) {
      return (
        <img
          className="single-image"
          src={src}
          alt="media container placeholder"
        />
      );
    }
  };
  videoDisplay = (count, src) => {
    if (count === 1) {
      return <div>{src}</div>;
    }
  };
  render() {
    const { type, count, src } = this.props;
    return (
      <div className="media-wrapper">
        {type === "image"
          ? this.imageDisplay(count, src)
          : type === "video"
          ? this.videoDisplay(count, src)
          : null}
      </div>
    );
  }
}

export default MediaContainer;
