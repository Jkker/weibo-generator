import React, { useState } from "react";
import FeedHandle from "./FeedHandle";
import MediaContainer from "./MediaContainer";
import "./SocialCard.css";
// import ReactHashtag from "react-hashtag";
// import TextStyler from "./TextStyler";
import TextContainer from "./TextContainer";

// function TextContainer({ children, maxCharCount = 140 }) {
// 	const text = children;
// 	const [isTruncated, setIsTruncated] = useState(true);
// 	if (text.length <= maxCharCount) {
// 		return (
// 			<TextStyler
// 				exp={/([@][^\s]+|[#|＃][^\s]+[#|＃])/g} //Regex for Hashtags and @tags
// 				renderHashtag={(hashtagValue) => <a className="tag">{hashtagValue}</a>}
// 			>
// 				{text}
// 			</TextStyler>
// 		);
// 	} else {
// 		var resultString = isTruncated
// 			? text.slice(0, maxCharCount).concat(" ...")
// 			: text;

// 		function toggleTruncated() {
// 			setIsTruncated(!isTruncated);
// 		}

// 		return (
// 			<div>
// 				<TextStyler
// 					renderHashtag={(hashtagValue) => (
// 						<span className="tag">{hashtagValue}</span>
// 					)}
// 				>
// 					{resultString}
// 				</TextStyler>
// 				<span onClick={toggleTruncated} className="tag">
// 					{" "}
// 					{isTruncated ? "展开全文" : "收起全文"}
// 					<i className={isTruncated ? "angle down icon" : "angle up icon"}></i>
// 				</span>
// 			</div>
// 		);
// 	}
// }

class SocialCard extends React.Component {
	render() {
		return (
			<div className="social-card">
				<div className="feed-content">
					<div className="feed-avatar">
						<img
							className="avatar-image"
							src={this.props.avatarImage}
							alt="avatar"
						/>
					</div>

					<div className="feed-detail">
						<div className="header">
							{/* TODO: dropdown menu & items */}
							<a href="" className="dropdown">
								<i className="angle down icon"></i>
							</a>
							<a href="" className="username">
								{this.props.username}
							</a>
						</div>
						<div className="feed-info">
							<span className="datetime">{this.props.datetime}</span>
							<span className="source"> 来自 {this.props.source}</span>
						</div>

						<TextContainer>{this.props.text}</TextContainer>

						<MediaContainer
							type={this.props.media.type}
							count={this.props.media.count}
							src={this.props.media.src}
						/>
					</div>
				</div>
				<FeedHandle />
			</div>
		);
	}
}

export default SocialCard;
