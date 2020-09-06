import { CloseOutlined, PlusOutlined } from '@ant-design/icons';
import { BackTop, Button, notification, Tooltip } from 'antd';
import 'antd/dist/antd.less';
import faker from 'faker';
import moment from 'moment';
import React from 'react';
import './App.less';
import SocialCardEditable from './SocialCardEditable';
import SocialCard from './SocialCard'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardList: [
        {
          avatarImage: faker.internet.avatar(),
          username: faker.internet.userName(),
          dateTime: moment(),
          source: faker.internet.domainName(),
          text:
            '#参考视频#@ddd 大是大非@大多数#dddd# 【@驻韩美军 dshjds #但是肯定是大家看圣诞节 @的话 @dsds 到底是可好看 #@#',
          media: {
            type: 'image',
            count: 1,
            src: faker.image.image(),
          },
        },
        {
          avatarImage: faker.internet.avatar(),
          username: faker.internet.userName(),
          dateTime: moment(),
          source: faker.internet.domainName(),
          text:
            '#参考视频#@ddd  ',
          media: {
            type: 'image',
            count: 1,
            src: faker.image.image(),
          },
        },
      ],
    };
  }
  handleAdd = (index, card = null) => {
    this.setState((prevState) => {
      let list = [...prevState.cardList];
      // let newCard = card;
      if (!card) {
        card = {
          avatarImage: faker.internet.avatar(),
          username: faker.internet.userName(),
          dateTime: moment(),
          source: faker.internet.domainName(),
          text: faker.lorem.paragraphs(),
          media: {
            type: 'image',
            count: 1,
            src: faker.image.image(),
          },
        };
      }
      console.log(card);
      list.splice(index + 1, 0, card);
      return { cardList: list };
    });
  };
  handleDelete = (index) => {
    this.setState((prevState) => {
      let deleted;
      let list = prevState.cardList;
      deleted = list.splice(index, 1)[0];
      const key = `open${Date.now()}`;
      const btn = (
        <Button
          type='primary'
          size='small'
          onClick={() => {
            this.handleAdd(index - 1, deleted);
            notification.close(key);
          }}
        >
          撤销
        </Button>
      );
      console.log('deleted post: ', deleted);
      notification.open({
        message: '已删除' + deleted.username + '的微博',
        btn,
        key,
        duration: 7,
      });
      return { cardList: list };
    });
  };
  handleEdit = (index, card) => {
    this.setState((prevState)=>{
      let list = prevState.cardList;
      list[index] = card;
      return { cardList: list };
    })
  }
  openDeleteNotification = (index, card) => {};
  render() {
    return (
      <div className='side-by-side-viewer'>
        <div className='ui-container' style={{ paddingBottom: '600px' }}>
          <BackTop />
          {this.state.cardList.map((card, index) => (
            <div className='social-card-container' key={`social-card-container-${index}`}>
              <SocialCardEditable
                data={card}
                key={index}
                index={index}
                handleEdit={this.handleEdit}
              />
              <div className='operations'>
                <Tooltip title='在下方插入新微博'>
                  <Button
                    className='add-button'
                    icon={<PlusOutlined />}
                    shape='circle'
                    onClick={() => this.handleAdd(index)}
                  />
                </Tooltip>
                <Tooltip title='删除这条微博'>
                  <Button
                    className='close-button'
                    shape='circle'
                    icon={<CloseOutlined />}
                    onClick={() => this.handleDelete(index)}
                    key={`close-button-${index}`}
                  />
                </Tooltip>
              </div>
            </div>
          ))}
          {/* <div className="operations-bar"></div> */}
        </div>
        <div className='feed-viewer-container'>
          {this.state.cardList.map((card, index) => (
            <div className='social-card-container' key={`social-card-container-${index}`}>
              <SocialCard
                data={card}
                key={index}
                index={index}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
