import { Avatar, Card, List } from "antd";
import React, { Component } from "react";
import { lightSpeedIn } from "react-animations";
import styled, { keyframes } from "styled-components";

const { Meta } = Card;

const bounceAnimation = keyframes`${lightSpeedIn}`;
const AnimationWrapper = styled.div`
  animation: 1s ${bounceAnimation};
`;

export interface PostProps {
  id: string;
  author: string;
  title: string;
  content: string;
}

export default class Post extends Component<PostProps> {
  render() {
    return (
      <AnimationWrapper>
        <Meta title={this.props.title} description={this.props.content} />
      </AnimationWrapper>
    );
  }
}
