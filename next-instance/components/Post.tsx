import { Avatar, List } from "antd";
import React, { Component } from "react";
import { lightSpeedIn } from "react-animations";
import styled, { keyframes } from "styled-components";

const bounceAnimation = keyframes`${lightSpeedIn}`;
const AnimationWrapper = styled.div`
  animation: 1s ${bounceAnimation};
`;

export interface PostProps {
  id: string;
  // author: string;
  title: string;
  content: string;
  // board: string;
  // createdAt: string;
  // updatedAt: string;
}

export default class Post extends Component<PostProps> {
  render() {
    const { id, title, content } = this.props;

    return (
      <AnimationWrapper>
        <List.Item
          extra={
            <img
              alt="user avatar"
              src={`https://robohash.org/${id}`}
              width={100}
            />
          }
        >
          <List.Item.Meta
            avatar={<Avatar src={`https://robohash.org/${id}`} />}
            title={title}
            description={content}
          />
        </List.Item>
      </AnimationWrapper>
    );
  }
}
