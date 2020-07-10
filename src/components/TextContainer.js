import React, { useState } from "react";
import TextStyler from "./TextStyler";
function TextContainer({ children, maxCharCount = 140 }) {
	const text = children;
	const [isTruncated, setIsTruncated] = useState(true);
	if (text.length <= maxCharCount) {
		return (
			<TextStyler
				exp={/(\@[^\s]+|[#|＃][^\s]+[#|＃])/g} //Regex for Hashtags and @tags
				renderHashtag={(hashtagValue) => <a className="tag">{hashtagValue}</a>}
			>
				{text}
			</TextStyler>
		);
	} else {
		var resultString = isTruncated
			? text.slice(0, maxCharCount).concat(" ...")
			: text;

		function toggleTruncated() {
			setIsTruncated(!isTruncated);
		}

		return (
			<div>
				<TextStyler
					renderHashtag={(hashtagValue) => (
						<span className="tag">{hashtagValue}</span>
					)}
				>
					{resultString}
				</TextStyler>
				<span onClick={toggleTruncated} className="tag">
					{" "}
					{isTruncated ? "展开全文" : "收起全文"}
					<i className={isTruncated ? "angle down icon" : "angle up icon"}></i>
				</span>
			</div>
		);
	}
}

export default TextContainer;
