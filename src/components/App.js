import { CloseOutlined, PlusOutlined } from "@ant-design/icons";
import { BackTop, Button } from "antd";
import faker from "faker";
import moment from "moment";
import React from "react";
import "./App.scss";
import SocialCardEditable from './SocialCardEditable';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardList: [
        {
          avatarImage: faker.internet.avatar(),
          username: faker.internet.userName(),
          dateTime: moment().format("YYYY-M-DD HH:mm"),
          source: faker.internet.domainName(),
          text:
            "#参考视频#@ddd 大是大非@大多数#dddd# 【@驻韩美军 dshjds #但是肯定是大家看圣诞节 @的话 @dsds 到底是可好看 #@#",
          media: {
            type: "image",
            count: 1,
            src: faker.image.image(),
          },
        },
      ],
    };
  }
  handleAdd = () => {
    this.setState((prevState) => {
      const cardList = [...prevState.cardList];
      cardList.push({
        avatarImage: faker.internet.avatar(),
        username: faker.internet.userName(),
        dateTime: moment().format("YYYY-M-DD HH:mm"),
        source: faker.internet.domainName(),
        text: faker.lorem.paragraphs(),
        media: {
          type: "image",
          count: 1,
          src: faker.image.image(),
        },
      });
      console.log(cardList);
      return { cardList: cardList };
    });
  };
  render() {
    return (
      <div className="ui-container" style={{ paddingBottom: "600px" }}>
        <BackTop />
        {this.state.cardList.map((card, index) => (
          <div
            className="social-card-container"
            key={`social-card-container-${index}`}
          >
            <SocialCardEditable data={card} key={`social-card-${index}`} />
            <div className="operations">
              <Button
                className="close-button"
                type="primary"
                shape="circle"
                size="large"
                icon={<CloseOutlined />}
                onClick={() =>
                  this.setState((prevState) => {
                    let list = prevState.cardList;
                    list.splice(index, 1);
                    console.log(list);
                    return { cardList: list };
                  })
                }
                key={`close-button-${index}`}
              />
              <Button
                type="primary"
                icon={<PlusOutlined />}
                size="large"
                shape="circle"
                onClick={() =>
                  this.setState((prevState) => {
                    let list = prevState.cardList;
                    const newCard = {
                      avatarImage: faker.internet.avatar(),
                      username: faker.internet.userName(),
                      dateTime: moment().format("YYYY-M-DD HH:mm"),
                      source: faker.internet.domainName(),
                      text: faker.lorem.paragraphs(),
                      media: {
                        type: "image",
                        count: 1,
                        src: faker.image.image(),
                      },
                    };
                    list.splice(index + 1, 0, newCard);
                    console.log(list);
                    return { cardList: list };
                  })
                }
              />
            </div>
          </div>
        ))}
        {/* <div className="operations-bar"></div> */}
      </div>
    );
  }
}

export default App;
