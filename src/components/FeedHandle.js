import React from "react";
import "./FeedHandle.scss";

const FeedHandle = (props) => {
  return (
    <div className="feed-handle">
      <ul className="handleList">
        <li key="fav">
          <button className="button-o">
            <i className="star outline icon"></i> 收藏
          </button>
        </li>
        <li key="repo">
          <button className="button-o">
            <i className="share square outline icon"></i> 转发
          </button>
        </li>
        <li key="comment">
          <button className="button-o">
            <i className="comment outline icon"></i> 评论
          </button>
        </li>
        <li key="like">
          <button className="button-o">
            <i className="thumbs up outline icon"></i> 赞
          </button>
        </li>
      </ul>
    </div>
  );
};

export default FeedHandle;
