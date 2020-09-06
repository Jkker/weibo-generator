const splitMatch = (content, operation, onHashtagClick, exp) => {
  return content.split(exp).map((char) => {
    return char.match(exp) ? operation(char, onHashtagClick) : char;
  });
};


const TextStyler = (props) => {
  // console.log(props);
  const exp = props.exp;
  const content =
    "object" == typeof props.children && props.children.length
      ? isNaN(props.children.length)
        ? props.children
        : props.children[0]
      : props.children;
  const operation = props.renderHashtag;
  // console.log(content);
  return splitMatch(content, operation, props.onHashtagClick, exp);
};

export default TextStyler;
