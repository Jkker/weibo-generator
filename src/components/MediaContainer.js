import faker from "faker";
import React from "react";
import "./MediaContainer.css";

class MediaContainer extends React.Component {
	imageDisplay = () => {
		// const numberOfImages = faker.random.number(9);
		const numberOfImages = 1;
		if (numberOfImages === 1) {
			return <img class="single-image" src={faker.image.image()} />;
		}
	};

	render() {
		return <div className="media-wrapper">{this.imageDisplay()}</div>;
	}
}

export default MediaContainer;
