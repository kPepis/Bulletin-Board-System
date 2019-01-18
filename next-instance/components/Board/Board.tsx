import { Card } from "antd";
import Link from "next/link";
import React, { Component } from "react";
import { lightSpeedIn } from "react-animations";
import styled, { keyframes } from "styled-components";

const { Meta } = Card;

const bounceAnimation = keyframes`${lightSpeedIn}`;
const AnimationWrapper = styled.div`
  animation: 1s ${bounceAnimation};
`;

export interface BoardProps {
  id: string;
  name: string;
  description: string;
}

class Board extends Component<BoardProps> {
  render() {
    return (
      <AnimationWrapper>
        <Link
          href={{ pathname: "/board", query: { id: this.props.id } }}
          passHref={true}
        >
          <Meta title={this.props.name} description={this.props.description} />
        </Link>
      </AnimationWrapper>
    );
  }
}

export default Board;
