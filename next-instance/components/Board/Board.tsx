import "./Board.css";

import Link from "next/link";
import React, { Component } from "react";
import Anime from "react-anime";

export interface BoardProps {
  id: string;
  name: string;
  description: string;
}

class Board extends Component<BoardProps> {
  render() {
    return (
      <Link
        href={{ pathname: "/board", query: { id: this.props.id } }}
        passHref={true}
      >
        <>
          <Anime
            loop={true}
            direction="alternate"
            easing="easeInBounce"
            duration={2000}
            delay={(el, idx) => idx * 1000}
            translateX="15rem"
          >
            <p>It works</p>
          </Anime>
        </>
      </Link>
    );
  }
}

export default Board;
