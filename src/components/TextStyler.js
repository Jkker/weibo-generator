import React from "react";
var requirement = require("react").createElement;

var exp = /([#|＃][^\s]+[#|＃])/g;
var exp = /(\@[^\s]+)/g;

var split_match = function (r, n, t, exp) {
	return r.split(exp).map(function (r) {
		return r.match(exp) ? n(r, t) : r;
	});
};

// var t = !0;

var create_element = function (r) {
	return function (e, n) {
		// console.log("e: " + e);
		return React.createElement(
			"span",
			{
				key: e,
				onClick: n
					? function (r) {
							return n(e, r);
					  }
					: null,
			},
			e
		);
	};
};

function TextStyler(props) {
	// console.log(props);
	var exp = props.exp;
	var content =
		"object" == typeof props.children && props.children.length
			? isNaN(props.children.length)
				? props.children
				: props.children[0]
			: props.children;
	var operation = props.renderHashtag || create_element(requirement);
	// console.log(content);
	return split_match(content, operation, props.onHashtagClick, exp);
}

export default TextStyler;
