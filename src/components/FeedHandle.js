import React from "react";
import "./FeedHandle.css";

const FeedHandle = (props) => {
	return (
		<div className="feed-handle">
			<ul className="handle-items">
				<li key="fav">
					<a href="#" className="fav">
						<i className="star outline icon"></i> 收藏
					</a>
				</li>
				<li key="repo">
					<a href="#" className="repo">
						<i className="share square outline icon"></i> 转发
					</a>
				</li>
				<li key="comment">
					<a href="#" className="comment">
						<i className="comment outline icon"></i> 评论
					</a>
				</li>
				<li key="like">
					<a href="#" className="like">
						<i className="thumbs up outline icon"></i> 赞
					</a>
				</li>
			</ul>
		</div>
	);
};

export default FeedHandle;
