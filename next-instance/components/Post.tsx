import { Avatar, List } from "antd";
import React, { Component } from "react";
import { lightSpeedIn } from "react-animations";
import CanvasDraw from "react-canvas-draw";
import styled, { keyframes } from "styled-components";

const bounceAnimation = keyframes`${lightSpeedIn}`;
const AnimationWrapper = styled.div`
  animation: 1s ${bounceAnimation};
`;

export interface PostProps {
  id: string;
  author: string;
  title: string;
  content: string;
  image: string;
  // board: string;
  createdAt: string;
  updatedAt: string;
}

export default class Post extends Component<PostProps> {
  render() {
    const { author, title, content, image } = this.props;
    return (
      <AnimationWrapper>
        <List.Item
          extra={
            <>
              <CanvasDraw
                loadTimeOffset={20}
                hideGrid
                canvasWidth={150}
                canvasHeight={150}
                disabled
                saveData={image}
              />
            </>
          }
        >
          <List.Item.Meta
            avatar={
              <Avatar size={100} src={`https://robohash.org/${author}`} />
            }
            title={title}
            description={content}
          />
        </List.Item>
      </AnimationWrapper>
    );
  }
}
