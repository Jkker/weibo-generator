import React, { useState } from "react";
import TextStyler from "./TextStyler";
function TextContainer(props) {
  const exp = /(@[^\s]+|[#|＃][^\s]+[#|＃])/g; //Regex for Hashtags and @tags
  const { text, EditButton } = props,
    maxCharCount = props.maxCharCount || 140;
  const [isTruncated, setIsTruncated] = useState(true);
  if (text.length <= maxCharCount) {
    return (
      <div className="feed-text">
        <TextStyler
          exp={exp} //Regex for Hashtags and @tags
          renderHashtag={(hashtagValue) => (
            <span className="tag" key={hashtagValue}>
              {hashtagValue}
            </span>
          )}
        >
          {text}
        </TextStyler>
        {EditButton}
      </div>
    );
  } else {
    const resultString = isTruncated
      ? text.slice(0, maxCharCount).concat(" ...")
      : text;
    const toggleTruncated = () => {
      setIsTruncated(!isTruncated);
    };

    return (
      <div className='feed-text'>
        <TextStyler
          exp={exp} //Regex for Hashtags and @tags
          renderHashtag={(hashtagValue) => (
            <span className='tag' key={hashtagValue}>
              {hashtagValue}
            </span>
          )}
        >
          {resultString}
        </TextStyler>
        <button onClick={toggleTruncated} className='tag button-o' style={{ marginLeft: '5px' }}>
          {isTruncated ? '展开全文' : '收起全文'}
          <i className={isTruncated ? 'angle down icon' : 'angle up icon'}></i>
        </button>
        {EditButton}
      </div>
    );
  }
}

export default TextContainer;
