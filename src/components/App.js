import faker from "faker";
import moment from "moment";
import React from "react";
import "./App.css";
import SocialCard from "./SocialCard";

class App extends React.Component {
	render() {
		return (
			<div className="ui-container" style={{ paddingBottom: "600px" }}>
				{/* <SocialCard
					avatarImage={faker.internet.avatar()}
					username={faker.internet.userName()}
					datetime={moment().format("YYYY-M-DD HH:mm")}
					source={faker.internet.domainName()}
					text="#参考视频# 【@驻韩美军 不戴口罩大闹釜山：向市民扔鞭炮，捉弄女警察】7月4日晚上，数十名外国人聚集在韩国釜山海云台一带，他们不仅不戴口罩，还违反禁令燃放烟花爆竹，甚至有人将鞭炮扔向普通韩国市民。一名女警试图劝阻，反遭捉弄。韩媒指出，经调查，这些惹事的外国人大部分是驻韩美军士兵，当天外出庆祝独立日。该事件已引发韩国舆论强烈谴责。 #驻韩美军大闹釜山# "
					media={
						({ type: "image" }, { count: 1 }, { src: faker.image.image() })
					}
				/> */}
				<SocialCard
					avatarImage={faker.internet.avatar()}
					username={faker.internet.userName()}
					datetime={moment().format("YYYY-M-DD HH:mm")}
					source={faker.internet.domainName()}
					text="#参考视频#@ddd 大是大非@大多数#dddd# 【@驻韩美军 dshjds #但是肯定是大家看圣诞节 @的话 @dsds 到底是可好看 #@#"
					media={
						({ type: "image" }, { count: 1 }, { src: faker.image.image() })
					}
				/>
			</div>
		);
	}
}

export default App;
