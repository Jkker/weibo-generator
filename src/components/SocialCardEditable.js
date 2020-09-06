import { EditOutlined } from '@ant-design/icons';
import { Button, DatePicker, Input, Typography } from 'antd';
import React from 'react';
import FeedHandle from './FeedHandle';
import MediaContainer from './MediaContainer';
import './SocialCard.scss';
import TextContainer from './TextContainer';
const { Text, Paragraph } = Typography;

class SocialCardEditable extends React.Component {
  state = { editingText: false };
  toggleTextEdit = () => {
    this.setState((prevState) => {
      return { editingText: !prevState.editingText };
    });
  };
  render() {
    const { avatarImage, dateTime, text, media } = this.props.data;
    const { handleEdit, index } = this.props;
    const dateTimeFormat = 'YYYY-M-DD HH:mm';
    console.log('l: ' + dateTime.format(dateTimeFormat).length);
    const getEditableText = (field) => {
      return (
        <Text
          className={field + ' button-o'}
          editable={{
            onChange: (text) => {
              const data = { ...this.props.data };
              data[field] = text;
              handleEdit(index, data);
            },
            autoSize: true,
            maxLength: 30,
          }}
        >
          {this.props.data[field]}
        </Text>
      );
    };
    return (
      <div className='social-card'>
        <div className='feed-content'>
          <div className='feed-avatar'>
            {/* //TODO: Image Upload Functionality */}
            <img className='avatar-image' src={avatarImage} alt='avatar' />
          </div>
          <div className='feed-detail'>
            <div className='header'>
              {/* //TODO: dropdown menu & items */}
              <button className='dropdown button-o'>
                <i className='angle down icon'></i>
              </button>
              {getEditableText('username')}
            </div>
            <div className='feed-info'>
              <DatePicker
                bordered={false}
                value={dateTime}
                format={dateTimeFormat}
                showTime
                style={{
                  padding: 0,
                  maxWidth: dateTime.format(dateTimeFormat).toString().length * 7 + 7 + 'px',
                  color: '#696e78 !important',
                }}
                suffixIcon={null}
                allowClear={false}
                onChange={(newDateTime) => {
                  const data = { ...this.props.data };
                  data.dateTime = newDateTime;
                  handleEdit(index, data);
                }}
              />
              来自 {getEditableText('source')}
            </div>
            <div className='feed-text-meta-container'>
              {this.state.editingText ? (
                <div className='feed-text-editor'>
                  <Input.TextArea
                    autoSize
                    value={text}
                    onChange={(e) => {
                      const newText = e.target.value;
                      const data = { ...this.props.data };
                      data.text = newText;
                      handleEdit(index, data);
                    }}
                    onPressEnter={this.toggleTextEdit}
                    allowClear
                    placeholder='请输入微博正文'
                  />
                  <div>
                    <Button
                      className='complete-feed-text-edit-button'
                      type='primary'
                      onClick={this.toggleTextEdit}
                    >
                      完成
                    </Button>
                  </div>
                </div>
              ) : (
                <div className='feed-text-outer-container'>
                  <TextContainer
                    text={text}
                    EditButton={
                      <Button
                        icon={<EditOutlined />}
                        type='link'
                        size='small'
                        className='start-feed-text-edit-button'
                        style={{
                          
                          // float: 'right'
                          // display: this.state.editingText ? 'none' : 'inline',
                        }}
                        onClick={this.toggleTextEdit}
                      />
                    }
                  />
                </div>
              )}
            </div>
            <MediaContainer type={media.type} count={media.count} src={media.src} />
          </div>
        </div>
        <FeedHandle />
      </div>
    );
  }
}

export default SocialCardEditable;
